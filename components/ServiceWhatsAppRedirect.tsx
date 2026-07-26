"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { getServiceById } from "@/lib/services";
import { whatsAppUrl } from "@/lib/site";

export function ServiceWhatsAppRedirect() {
  const searchParams = useSearchParams();
  const serviceId = searchParams.get("service");

  useEffect(() => {
    if (!serviceId) return;
    const service = getServiceById(serviceId);
    if (service) {
      window.location.replace(whatsAppUrl(service.whatsappMessage));
    }
  }, [serviceId]);

  return null;
}
