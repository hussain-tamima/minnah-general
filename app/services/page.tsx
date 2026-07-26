import type { Metadata } from "next";
import Link from "next/link";
import { ServiceGrid } from "@/components/ServiceGrid";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Repair services from Minna Stove Repair — pressure cooker, mixi, gas stove, pipe installation, and more for home and commercial kitchens.",
};

export default function ServicesPage() {
  return (
    <main>
      <header className="page-header">
        <div className="container">
          <h1>Our Repair Services</h1>
          <p>Professional home and on-site repairs for household stoves, hotel kitchens, and commercial gas equipment.</p>
        </div>
      </header>

      <section className="section">
        <div className="container">
          <p className="section-subtitle" style={{ marginBottom: "3rem", maxWidth: "800px" }}>
            We repair all kinds of gas stoves — household units, hotel restaurant kitchens, and heavy-duty commercial
            equipment. Tap any service to view photos and details.
          </p>

          <div className="service-group">
            <div className="service-group__label">
              <h2>Appliance Repair</h2>
              <span>Pressure cookers, mixers &amp; cookware</span>
            </div>
            <ServiceGrid filter="appliance" gridClass="grid grid--2" />
          </div>

          <div className="service-group">
            <div className="service-group__label">
              <h2>Gas &amp; Installation</h2>
              <span>Stoves, pipes &amp; commercial units</span>
            </div>
            <ServiceGrid filter="gas" gridClass="grid grid--2" />
          </div>

          <div className="cta-band" style={{ marginTop: "4rem" }}>
            <h2>Ready to Book a Service?</h2>
            <p>Contact us for a home visit or commercial kitchen repair — we respond quickly.</p>
            <Link href="/contact" className="btn btn--primary">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
