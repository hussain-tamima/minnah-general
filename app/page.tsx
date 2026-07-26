import Link from "next/link";
import { ServiceGrid } from "@/components/ServiceGrid";
import { SITE } from "@/lib/site";

export default function HomePage() {
  return (
    <main>
      <section className="hero">
        <div className="container hero__grid">
          <div className="hero__content">
            <div className="hero__badge">
              <span className="hero__badge-dot" aria-hidden />
              Home repair services available
            </div>
            <h1>Gas Stove Spare Parts &amp; Expert Repair — At Your Doorstep</h1>
            <p className="hero__lead">
              Quality spare parts and professional repair for household stoves, hotel kitchens, and commercial gas
              equipment. We come to you.
            </p>
            <div className="hero__actions">
              <Link href="/contact" className="btn btn--primary">
                Book a Repair
              </Link>
              <Link href="/services" className="btn btn--outline">
                View Services
              </Link>
            </div>
            <div className="hero__stats">
              <div className="hero__stat">
                <strong>All Types</strong>
                <span>Household &amp; commercial</span>
              </div>
              <div className="hero__stat">
                <strong>Hotels</strong>
                <span>Restaurant kitchens</span>
              </div>
              <div className="hero__stat">
                <strong>Home Visit</strong>
                <span>Repair at your location</span>
              </div>
            </div>
          </div>
          <div className="hero__visual">
            <div className="hero-card">
              <p className="hero-card__title">We repair &amp; service</p>
              <ul className="hero-card__list">
                {[
                  "Household gas stoves",
                  "Hotel & restaurant kitchen stoves",
                  "Commercial kitchen gas equipment",
                  "Genuine spare parts supply",
                ].map((item) => (
                  <li key={item}>
                    <span className="hero-card__check" aria-hidden>
                      <svg viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M2 6l3 3 5-5" />
                      </svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--alt" aria-labelledby="trust-heading">
        <div className="container">
          <header className="section-header">
            <h2 id="trust-heading" className="section-title">
              Trusted by Homes &amp; Businesses
            </h2>
            <p className="section-subtitle">
              Licensed-quality parts and reliable service for every type of gas stove — from your kitchen to large
              commercial setups.
            </p>
          </header>
          <div className="trust-grid">
            <article className="trust-item">
              <div className="trust-item__icon" aria-hidden>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 12l9-9 9 9M5 10v10h14V10" />
                </svg>
              </div>
              <h3>Home Stoves</h3>
              <p>Fast, careful repairs for household gas cookers and burners at your home.</p>
            </article>
            <article className="trust-item">
              <div className="trust-item__icon" aria-hidden>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 21h18M5 21V7l7-4 7 4v14M9 21v-6h6v6" />
                </svg>
              </div>
              <h3>Hotels &amp; Restaurants</h3>
              <p>Expert service for hotel and restaurant kitchen gas stoves — minimal downtime.</p>
            </article>
            <article className="trust-item">
              <div className="trust-item__icon" aria-hidden>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="7" width="20" height="14" rx="2" />
                  <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" />
                </svg>
              </div>
              <h3>Commercial Kitchens</h3>
              <p>Heavy-duty commercial gas stove repair for busy professional kitchens.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="services-heading">
        <div className="container">
          <header className="section-header">
            <span className="badge">Our Services</span>
            <h2 id="services-heading" className="section-title">
              Repair &amp; Installation Services
            </h2>
            <p className="section-subtitle">
              Tap a service to view details and photos. From gas stove pipe installation to mixer and pressure cooker repairs — we handle it
              all.
            </p>
          </header>
          <ServiceGrid />
          <p className="text-center" style={{ marginTop: "2.5rem" }}>
            <Link href="/services" className="btn btn--dark-outline">
              View All Services
            </Link>
          </p>
        </div>
      </section>

      <section className="section section--alt" aria-labelledby="why-heading">
        <div className="container">
          <div className="why-grid">
            <div>
              <span className="badge">Why Choose Us</span>
              <h2 id="why-heading" className="section-title">
                Built on Trust &amp; Expertise
              </h2>
              <p className="section-subtitle" style={{ marginBottom: "2rem" }}>
                Your safety and satisfaction come first. We bring years of hands-on experience to every job.
              </p>
              <ul className="why-list">
                {[
                  ["All Brands & Types", "We repair household, hotel, and commercial gas stoves of every make and model."],
                  ["Fast Home Service", "Convenient on-site repairs — no need to transport heavy equipment."],
                  ["Genuine Spare Parts", "Quality replacement parts for lasting performance and safety."],
                  ["Commercial-Grade Expertise", "Skilled technicians for high-demand hotel and kitchen environments."],
                ].map(([title, text], i) => (
                  <li key={title}>
                    <span className="why-list__num" aria-hidden>
                      {i + 1}
                    </span>
                    <div>
                      <h3>{title}</h3>
                      <p>{text}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="why-visual">
              <h3>Spare Parts &amp; Repair Under One Roof</h3>
              <p>
                Whether you need a burner, regulator, gas hose, or a full stove overhaul — {SITE.name} has you covered.
              </p>
              <div className="why-visual__tags">
                {["Gas burners", "Regulators", "Hoses & pipes", "Ignition parts", "Commercial units"].map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="cta-band">
            <h2>Need a Repair Today?</h2>
            <p>Call us or message on WhatsApp — we&apos;ll schedule a home visit and get your stove working safely again.</p>
            <Link href="/contact" className="btn btn--primary">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
