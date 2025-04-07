// src/app/shared/utils/date-utils.ts

export class DateUtils {
  static calculateExpiryInDays(expiryDate: string): number {
    const today = new Date();
    const expiry = new Date(expiryDate);
    const diffInMs = expiry.getTime() - today.getTime();
    return Math.ceil(diffInMs / (1000 * 60 * 60 * 24));
  }

  static getExpiryStatus(expiresInDays: number): string {
    if (expiresInDays > 3) {
      return `Expires in ${expiresInDays} days`;
    } else if (expiresInDays > 0) {
      return `Expires soon (${expiresInDays} day${
        expiresInDays > 1 ? 's' : ''
      } left)`;
    } else if (expiresInDays === 0) {
      return 'Expires today';
    } else {
      return `Expired (${Math.abs(expiresInDays)} days ago)`;
    }
  }

  static getExpiryStyle(expiresInDays: number): any {
    if (expiresInDays < 0) {
      return { color: 'red', fontWeight: 'bold' }; // Expired
    } else if (expiresInDays <= 3) {
      return { color: 'orange', fontWeight: 'bold' }; // Warning period: 3 days or less
    } else {
      return { color: 'green', fontWeight: 'bold' }; // Valid
    }
  }
}
