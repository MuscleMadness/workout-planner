export interface Gym {
  gymId: string;
  name: string;
  address: string;
  contactNumber: string;
  owner: string;
  email: string;
}

export interface User {
  UserId: number;
  Name: string;
  PhoneNumber: string;
  Email: string;
  DateOfBirth: string; // ISO date format (e.g., "1995-06-14T18:30:00.000Z")
  Gender: string;
  Address: string;
  EmergencyContact: string;
  ExpiryDate: string; // ISO date format (e.g., "2025-05-01T15:41:47.097Z")
  CreatedDate: string; // Can be empty or in ISO format
}

export interface RegisterUserRequest {
  action: string;
  gymId: string;
  payload: User;
}
