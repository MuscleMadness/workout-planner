import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ModalController, IonRouterOutlet } from '@ionic/angular';
import { WorkoutData } from 'src/app/providers/workout-data';
import Exercise from 'src/app/models/Excercise';
import { WorkoutPlannerEditorComponent } from '../workout-planner-editor/workout-planner-editor.component';
import {
  Equipment,
  FitnessLevel,
  FocusArea,
  Goal,
  Preference,
  WorkoutPlan,
  WorkoutPlanConfig,
} from 'src/app/models/workout-plan';
import { WorkoutPlanner } from 'src/app/providers/workout-planner';
import { UserData } from 'src/app/providers/user-data';
import { AlertController } from '@ionic/angular';
import { PlannerInfoComponent } from 'src/app/components/planner-info/planner-info.component';
import { jsPDF, RGBAData } from 'jspdf';
import QRCode from 'qrcode';

@Component({
  selector: 'app-workout-planner',
  templateUrl: './workout-planner.page.html',
  styleUrls: ['./workout-planner.page.scss'],
})
export class WorkoutPlannerPage implements OnInit {
  workoutPlan?: WorkoutPlan;
  workoutConfig?: WorkoutPlanConfig;
  ios: boolean = false;
  selectedSegment: string = 'from-coach';

  constructor(
    public workoutPlanner: WorkoutPlanner,
    public alertController: AlertController,
    public workoutData: WorkoutData,
    public modalCtrl: ModalController,
    public routerOutlet: IonRouterOutlet,
    private userData: UserData,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.workoutData.loadWorkOuts().subscribe((data: Exercise[]) => {
      this.workoutPlanner.getWorkoutConfig().then((config) => {
        this.workoutConfig = config;
        this.reloadWorkoutPlan();
      });
    });
  }

  reloadWorkoutPlan() {
    // If the url path has a query parameter with a google drive file id, then load the workout plan from the google drive file
    const urlParams = new URLSearchParams(window.location.search);
    const googleDriveFileId = urlParams.get('googleDriveFileId');
    if (this.selectedSegment === 'custom') {
      this.loadCustomPlan();
    } else {
      this.fetchWorkoutPlanFromCoach(googleDriveFileId);
    }
  }

  loadCustomPlan() {
    this.workoutPlanner
      .generateWorkoutPlan(this.workoutConfig!)
      .then((workoutPlan: WorkoutPlan) => {
        this.workoutPlan = workoutPlan;
      });
  }

  fetchWorkoutPlanFromCoach(googleDriveFileId: string | null) {
    this.workoutPlanner
      .fetchWorkoutPlanFromCoach(googleDriveFileId)
      .then((data) => {
        console.log(data);
        this.workoutPlan = data;
        this.cdr.detectChanges();
      });
  }

  // Method to show the info popup
  async showCoachInfo() {
    const alert = await this.modalCtrl.create({
      component: PlannerInfoComponent,
      componentProps: { workoutPlan: this.workoutPlan },
    });

    await alert.present();
  }

  async presentFilter() {
    const modal = await this.modalCtrl.create({
      component: WorkoutPlannerEditorComponent,
      presentingElement: this.routerOutlet.nativeEl,
      componentProps: { workoutConfig: this.workoutConfig },
    });
    await modal.present();

    const { data } = await modal.onWillDismiss();
    if (data) {
      this.userData.clearWorkoutPlan();
      this.workoutConfig = data;

      this.workoutPlanner
        .generateWorkoutPlan(this.workoutConfig!)
        .then((workoutPlan: WorkoutPlan) => {
          this.workoutPlan = workoutPlan;
        });
    }
  }

  exportToPdf() {
    const doc = new jsPDF();

    // Gym details
    const gymLogoUrl =
      this.workoutPlan?.metaData?.gymLogoUrl || "https://raw.githubusercontent.com/MuscleMadness/workout-planner/refs/heads/main/src/assets/img/tutorial/gym-logo-no-bg.svg";
    const gymName = this.workoutPlan?.metaData?.gymName || 'MM Gym';
    const gymAddress = this.workoutPlan?.metaData?.gymAddress || '1234 Muscle Beach, Venice, CA';
    const coachName = this.workoutPlan?.metaData?.coachName || 'Arnold Schwarzenegger';

    // Fetch the gym logo and generate the PDF
    this.loadImageFromUrl(gymLogoUrl).then((gymLogo) => {
      const pageWidth = doc.internal.pageSize.width; // Get the page width
      const pageHeight = doc.internal.pageSize.height; // Get the page height

      // Add gym logo (left-aligned)
      const logoWidth = 30; // Fixed width
      const logoHeight = (gymLogo.height * logoWidth) / gymLogo.width; // Maintain aspect ratio
      const logoX = 10; // Left margin
      const logoY = 10; // Top margin
      doc.addImage(gymLogo.dataUrl, 'PNG', logoX, logoY, logoWidth, logoHeight); // Add the logo at the top-left corner

      //    Add gym name (centered below the logo)
      doc.setFontSize(16);
      doc.setFont('helvetica', 'bold');
      const textY = logoY + logoHeight / 2 + 5; // Align text vertically with the logo
      doc.text(gymName, pageWidth / 2, textY, { align: 'center' }); // Centered text

      // Add a line after the header
      doc.setLineWidth(0.5);
      doc.line(10, 35, pageWidth - 10, 35); // Horizontal line from x=10 to x=pageWidth-10 at y=60

      // Add title
      doc.setFontSize(16);
      doc.setFont('helvetica', 'bold');
      doc.text('Workout Plan', 10, 50); // Start below the header

      // Divide the days into two columns
      const leftColumnDays = this.workoutPlan?.days.slice(0, 3) || []; // First 3 days
      const rightColumnDays = this.workoutPlan?.days.slice(3) || []; // Remaining days

      // Add content for the left column
      let yLeft = 60; // Vertical position for the left column (start below the header)
      leftColumnDays.forEach((day: any) => {
        // Add day and muscle groups
        doc.setFontSize(14);
        doc.setFont('helvetica', 'bold');
        doc.text(`${day.day} (${day.muscleGroups.join(', ')})`, 10, yLeft);
        yLeft += 6;

        // Add exercises
        doc.setFontSize(12);
        doc.setFont('helvetica', 'normal');
        day.exercises.forEach((exercise: any) => {
          doc.text(`- ${exercise.name}`, 10, yLeft);
          yLeft += 6;
        });

        yLeft += 10; // Add some space between days
      });

      // Add content for the right column
      let yRight = 60; // Vertical position for the right column (start below the header)
      rightColumnDays.forEach((day: any) => {
        // Add day and muscle groups
        doc.setFontSize(14);
        doc.setFont('helvetica', 'bold');
        doc.text(
          `${day.day} (${day.muscleGroups.join(', ')})`,
          pageWidth / 2 + 10,
          yRight
        ); // Start at x = pageWidth/2 + 10 for the right column
        yRight += 6;

        // Add exercises
        doc.setFontSize(12);
        doc.setFont('helvetica', 'normal');
        day.exercises.forEach((exercise: any) => {
          doc.text(`- ${exercise.name}`, pageWidth / 2 + 10, yRight); // Start at x = pageWidth/2 + 10 for the right column
          yRight += 6;
        });

        yRight += 10; // Add some space between days
      });

      // Add a line before the footer
      doc.setLineWidth(0.5);
      doc.line(10, pageHeight - 30, pageWidth - 10, pageHeight - 30); // Horizontal line from x=10 to x=pageWidth-10 at y=pageHeight-30

      // Add footer (centered)
      doc.setFontSize(10);
      doc.setFont('helvetica', 'normal');
      doc.text(gymAddress, pageWidth / 2, pageHeight - 20, { align: 'center' }); // Centered address
      doc.text(`Prepared by: ${coachName}`, pageWidth / 2, pageHeight - 10, {
        align: 'center',
      }); // Centered coach name

      // Get the current URL
      const currentUrl = window.location.href;

      // Generate QR code for the current URL
      QRCode.toDataURL(
        currentUrl,
        { width: 100 },
        (
          err: any,
          qrCodeDataUrl:
            | string
            | HTMLImageElement
        ) => {
          if (!err) {
            // Add QR code to the bottom-right corner
            const qrCodeSize = 50; // Fixed size for the QR code
            const qrCodeX = pageWidth/2 - qrCodeSize/2; // Right margin
            const qrCodeY = yLeft + 20; // Bottom margin
            doc.addImage(
              qrCodeDataUrl,
              'PNG',
              qrCodeX,
              qrCodeY,
              qrCodeSize,
              qrCodeSize
            );
          }

          // Save the PDF
          doc.save('workout-plan.pdf');
        }
      );
    });
  }

  // Helper method to load an image from a URL and convert it to Base64
  loadImageFromUrl(
    url: string
  ): Promise<{ dataUrl: string; width: number; height: number }> {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.crossOrigin = 'Anonymous'; // Enable cross-origin for external images
      img.onload = () => {
        const canvas = document.createElement('canvas');
        canvas.width = img.width;
        canvas.height = img.height;
        const ctx = canvas.getContext('2d');
        ctx?.drawImage(img, 0, 0);
        const dataUrl = canvas.toDataURL('image/png'); // Convert the image to Base64
        resolve({ dataUrl, width: img.width, height: img.height }); // Return Base64 data and image dimensions
      };
      img.onerror = (error) => reject(error);
      img.src = url;
    });
  }
}
