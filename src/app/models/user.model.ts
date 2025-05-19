export interface User {
  userId: number;
  name: string;
  phoneNumber: string;
  email?: string;
  dateOfBirth?: string;
  gender: string;
  address?: string;
  emergencyContact?: string;
  createdDate: string;
  expiryDate: string;
  updatedDate?: string;
  expiresInDays?: number; // Adding this property for tracking days until membership expires
}