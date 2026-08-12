import { CleanReveal } from "@/components/CleanReveal";
import { QuoteBuilder } from "@/components/QuoteBuilder";
import { siteConfig } from "@/config/site";

const doubledThemes = [...siteConfig.reviewThemes, ...siteConfig.reviewThemes];

export default function Home() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "HouseCleaning",
    name: siteConfig.businessName,
    telephone: siteConfig.phoneDisplay,
    email: siteConfig.email,
    areaServed: { "@type": "City", name: siteConfig.city },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: siteConfig.rating,
      reviewCount: siteConfig.reviewCount,
    },
  };

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <header className="site-header">
        <a className="brand" href="#top" aria-label="Everything Clean home">
          <span className="brand-dot" aria-hidden="true"><i /></span>
          <span>EVERYTHING <b>CLEAN</b></span>
        </a>
        <nav aria-label="Main navigation">
          <a href="#services">Services</a>
          <a href="#standard">The standard</a>
          <a href="#reviews">Reviews</a>
          <a href="#quote">Quote</a>
        </nav>
        <a className="header-cta" href={siteConfig.smsHref}>TEXT FOR A QUOTE ↗</a>
      </header>

      <section className="hero" id="top">
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-bubbles" aria-hidden="true">
          <i className="bubble b1" /><i className="bubble b2" /><i className="bubble b3" /><i className="bubble b4" />
        </div>

        <div className="hero-copy">
          <div className="hero-kicker">
            <span>WEBSTER, TEXAS</span>
            <span>{siteConfig.rating} ★ / {siteConfig.reviewCount} GOOGLE REVIEWS</span>
          </div>
          <h1>
            EVERYTHING.
            <span>CLEAN.</span>
          </h1>
          <p className="hero-lede">A professional reset for homes, moves, rentals, offices, and the spaces that have simply gotten away from you.</p>
          <div className="hero-actions">
            <a className="button button-ink" href="#quote">BUILD MY QUOTE</a>
            <a className="phone-link" href={siteConfig.phoneHref}>{siteConfig.phoneDisplay} <span>↗</span></a>
          </div>
        </div>

        <div className="hero-scene" aria-label="Abstract clean-room composition">
          <div className="scene-label">THE RESET / 01</div>
          <div className="window"><div className="sky" /><div className="sun" /></div>
          <div className="cabinet cabinet-a" />
          <div className="cabinet cabinet-b" />
          <div className="counter"><div className="sink" /><div className="faucet" /></div>
          <div className="floor-lines" />
          <div className="wipe-sweep"><span>RESETTING</span></div>
          <div className="scene-note note-a">SURFACES</div>
          <div className="scene-note note-b">DETAILS</div>
          <div className="scene-note note-c">FRESH START</div>
        </div>

        <div className="hero-footer">
          <span>HOME · DEEP CLEAN · MOVE · RENTAL · OFFICE</span>
          <span className="live-dot">7AM–7PM DAILY</span>
          <span>SCROLL FOR THE RESET ↓</span>
        </div>
      </section>

      <section className="manifesto" id="standard">
        <div className="section-index">01 / THE FEELING</div>
        <div className="manifesto-copy">
          <p className="eyebrow">CLEAN ISN&apos;T JUST WHAT YOU SEE.</p>
          <h2>It&apos;s the moment the room feels <em>lighter.</em></h2>
          <p>Everything Clean&apos;s public feedback keeps returning to the same things: detail, speed, professionalism, and spaces that feel genuinely reset when the team is done.</p>
        </div>
        <div className="spark-orbit" aria-hidden="true"><i /><i /><i /><b>EC</b></div>
      </section>

      <section className="before-after-section">
        <div className="ba-copy">
          <span className="eyebrow">02 / SEE THE DIFFERENCE</span>
          <h2>From lived-in<br />to <em>locked-in.</em></h2>
          <p>Cleaning is one of the few services where the value can be understood in a single glance. This section is built to eventually showcase Everything Clean&apos;s real before-and-after work.</p>
        </div>
        <CleanReveal />
      </section>

      <section className="services" id="services">
        <div className="services-head">
          <span className="eyebrow">03 / WHAT WE RESET</span>
          <h2>Whatever the space needs.</h2>
          <p>Verified public listings show a wide mix of residential, rental, move, office, and specialty cleaning work.</p>
        </div>
        <div className="service-stack">
          {siteConfig.services.map((service, index) => (
            <article className="service-row" key={service.title}>
              <span className="service-num">0{index + 1}</span>
              <h3>{service.title}</h3>
              <p>{service.copy}</p>
              <a href="#quote" aria-label={`Get a quote for ${service.title}`}>QUOTE ↘</a>
            </article>
          ))}
        </div>
      </section>

      <section className="clean-meter">
        <div className="meter-visual" aria-hidden="true">
          <div className="meter-ring ring-1" />
          <div className="meter-ring ring-2" />
          <div className="meter-ring ring-3" />
          <div className="meter-center"><b>100</b><span>REVIEWS</span></div>
          <div className="meter-spark ms1">✦</div><div className="meter-spark ms2">✦</div><div className="meter-spark ms3">✦</div>
        </div>
        <div className="meter-copy">
          <span className="eyebrow">04 / THE PROOF</span>
          <h2>One hundred people left a public Google review.</h2>
          <p>At the time this preview was built, Everything Clean carries a {siteConfig.rating}-star Google rating across {siteConfig.reviewCount} reviews. Rather than invent testimonials, this concept surfaces the recurring themes customers already mention.</p>
          <div className="proof-pills"><span>DETAIL</span><span>EFFICIENCY</span><span>PROFESSIONALISM</span><span>FRESH RESULTS</span></div>
        </div>
      </section>

      <section className="review-marquee" id="reviews" aria-label="Public review themes">
        <div className="marquee-track">
          {doubledThemes.map((theme, index) => <span key={`${theme}-${index}`}>✦ {theme}</span>)}
        </div>
      </section>

      <section className="owner-section">
        <div className="owner-card">
          <span className="owner-monogram">MG</span>
          <div className="owner-wave" aria-hidden="true" />
          <span className="eyebrow">05 / LOCAL + PERSONAL</span>
          <h2>Michael &amp; team.</h2>
          <p>Michael Gonzalez is publicly identified as the owner of Everything Clean. Recent customer feedback also calls out Michael and his team by name for detailed, efficient work.</p>
          <div className="owner-actions">
            <a href={siteConfig.phoneHref}>CALL MICHAEL ↗</a>
            <a href={`mailto:${siteConfig.email}`}>EMAIL ↗</a>
          </div>
        </div>
        <div className="owner-quote">
          <p>“The brand shouldn&apos;t feel like a generic maid-service template. It should feel like opening the door after the clean is finished.”</p>
          <span>DESIGN CONCEPT / PRIVATE PREVIEW</span>
        </div>
      </section>

      <section className="process-section">
        <div className="process-title">
          <span className="eyebrow">06 / KEEP IT SIMPLE</span>
          <h2>Mess in.<br /><em>Reset out.</em></h2>
        </div>
        <div className="process-flow">
          <article><b>01</b><h3>Tell us the space.</h3><p>Home, move, rental, office, or specialty cleaning.</p></article>
          <article><b>02</b><h3>Tell us the timing.</h3><p>Use the quote builder to share when you&apos;d like help.</p></article>
          <article><b>03</b><h3>Text the details.</h3><p>The preview opens a pre-filled message directly to Everything Clean.</p></article>
          <article><b>04</b><h3>Get your reset.</h3><p>Michael&apos;s team can confirm scope, timing, and next steps directly.</p></article>
        </div>
      </section>

      <section className="quote-section" id="quote">
        <div className="quote-intro">
          <span className="eyebrow">07 / START HERE</span>
          <h2>What needs<br />to feel <em>clean again?</em></h2>
          <p>Build a quick request and text it directly. No account. No fake form submission. No information stored on this preview.</p>
          <div className="quote-contact">
            <span>TEXT / CALL</span>
            <a href={siteConfig.phoneHref}>{siteConfig.phoneDisplay}</a>
          </div>
        </div>
        <QuoteBuilder />
      </section>

      <section className="final-cta">
        <div className="final-bubbles" aria-hidden="true"><i /><i /><i /><i /></div>
        <span className="eyebrow">EVERYTHING CLEAN · WEBSTER TX</span>
        <h2>Walk back into<br />a <em>reset space.</em></h2>
        <div className="final-actions">
          <a className="button button-white" href={siteConfig.smsHref}>TEXT FOR A QUOTE</a>
          <a className="button button-clear" href={siteConfig.phoneHref}>CALL {siteConfig.phoneDisplay}</a>
        </div>
      </section>

      <footer>
        <a className="brand footer-brand" href="#top"><span className="brand-dot"><i /></span><span>EVERYTHING <b>CLEAN</b></span></a>
        <p>{siteConfig.city}, {siteConfig.state} · {siteConfig.hours}</p>
        <p>Private prospect preview · noindex</p>
      </footer>

      <div className="mobile-dock">
        <a href={siteConfig.phoneHref}>CALL</a>
        <a href="#quote">GET A QUOTE</a>
      </div>
    </main>
  );
}
