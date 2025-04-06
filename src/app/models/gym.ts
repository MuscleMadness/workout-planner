export interface Gym {
  gymId: string;
  name: string;
  address: string;
  contactNumber: string;
  owner: string;
  email: string;
}

export interface User {
  userId: number;
  name: string;
  phoneNumber: string;
  email: string;
  dateOfBirth: string; // ISO date format (e.g., "1995-06-14T18:30:00.000Z")
  gender: string;
  address: string;
  emergencyContact: string;
  expiryDate: string; // ISO date format (e.g., "2025-05-01T15:41:47.097Z")
  createdDate: string; // Can be empty or in ISO format
}

export interface RegisterUserRequest {
  action: string;
  gymId: string;
  payload: User;
}

export interface Payment {
  userId: string;
  amount: number;
  days: number;
  paymentMode: string;
  transactionId?: string;
  notes?: string; 
}
