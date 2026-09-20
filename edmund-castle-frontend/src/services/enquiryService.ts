import { apiClient } from "@/lib/apiClient";
import type { EnquiryPayload, EnquiryResponse } from "@/types/enquiry";

const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export async function submitEnquiry(payload: EnquiryPayload): Promise<EnquiryResponse> {
  // Set VITE_USE_MOCK_API=true in your .env to test the form before the backend exists.
  if (import.meta.env.VITE_USE_MOCK_API === "true") {
    await wait(800);
    return { message: "Mock enquiry received" };
  }

  const { data } = await apiClient.post<EnquiryResponse>("/enquiries", payload);
  return data;
}