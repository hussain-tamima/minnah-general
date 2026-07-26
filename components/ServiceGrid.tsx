"use client";

import { useCallback, useState } from "react";
import type { Service, ServiceGroup } from "@/lib/services";
import { SERVICES } from "@/lib/services";
import { ServiceCard } from "@/components/ServiceCard";
import { ServiceModal } from "@/components/ServiceModal";

type Props = {
  filter?: ServiceGroup;
  gridClass?: string;
};

export function ServiceGrid({ filter, gridClass = "grid grid--3" }: Props) {
  const [selected, setSelected] = useState<Service | null>(null);
  const items = filter ? SERVICES.filter((s) => s.group === filter) : SERVICES;
  const close = useCallback(() => setSelected(null), []);

  return (
    <>
      <div className={gridClass}>
        {items.map((service) => (
          <ServiceCard key={service.id} service={service} onView={setSelected} />
        ))}
      </div>
      <ServiceModal service={selected} onClose={close} />
    </>
  );
}
