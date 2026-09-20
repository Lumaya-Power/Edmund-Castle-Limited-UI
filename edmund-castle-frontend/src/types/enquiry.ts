export interface EnquiryPayload {
  fullName: string;
  company?: string;
  email: string;
  phone?: string;
  location?: string;
  projectType?: string;
  budget?: string;
  services?: string;
  message: string;
  consent: boolean;
}

export interface EnquiryResponse {
  id?: string;
  message?: string;
}

export interface EnquiryOptions {
  location: string[];
  projectType: string[];
  budget: string[];
  services: string[];
}