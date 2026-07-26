"use client";

import Image from "next/image";
import type { Service } from "@/lib/services";
import { whatsAppUrl } from "@/lib/site";

type Props = {
  service: Service;
  onView: (service: Service) => void;
};

export function ServiceCard({ service, onView }: Props) {
  return (
    <article className="card service-card">
      <button type="button" className="service-card__media" onClick={() => onView(service)} aria-label={`View ${service.title}`}>
        <Image src={service.image} alt="" fill sizes="(max-width: 768px) 100vw, 33vw" />
        <span className="service-card__view-hint">Tap to view</span>
      </button>
      <h3>{service.title}</h3>
      <p>{service.shortDescription}</p>
      <div className="service-card__footer">
        <button type="button" className="service-card__link service-card__link--btn" onClick={() => onView(service)}>
          View details
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </button>
        <a
          href={whatsAppUrl(service.whatsappMessage)}
          className="service-card__link"
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
        >
          WhatsApp
        </a>
      </div>
    </article>
  );
}
