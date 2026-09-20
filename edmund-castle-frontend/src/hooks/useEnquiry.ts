import { useMutation } from "@tanstack/react-query";
import { submitEnquiry } from "@/services/enquiryService";

export function useEnquiry() {
  return useMutation({ mutationFn: submitEnquiry });
}