
export default function DigitalMarketing() {
  return (
    <main className="service-detail-page">
      <header className="header">
        <h2>RIYADVI<span>.</span></h2>
        <nav>
          <a href="/">Home</a>
          <a href="/services">Services</a>
          <a href="/#portfolio">Portfolio</a>
          <a href="/#about">About</a>
          <a href="/#contact">Contact</a>
        </nav>
        <a className="button" href="/#contact">
          Book a Consultation ↗
        </a>
      </header>

      <section className="service-detail-hero">
        <p className="tag">DIGITAL MARKETING</p>
        <h1>Grow Your Brand. <span>Reach More.</span></h1>
        <p>
          We help businesses reach the right audience through smart digital
          strategies, creative content, and measurable marketing campaigns.
        </p>
        <a className="button" href="/#contact">
          Start Your Campaign ↗
        </a>
      </section>

      <section className="service-detail-content">
        <p className="tag">WHAT WE OFFER</p>
        <h2>Marketing That Moves You Forward.</h2>

        <div className="service-offer-grid">
          <article className="service-offer-card">
            <h3>SEO Optimization</h3>
            <p>Improve your website visibility and help customers find you.</p>
          </article>

          <article className="service-offer-card">
            <h3>Social Media Marketing</h3>
            <p>Build your brand and connect with your audience online.</p>
          </article>

          <article className="service-offer-card">
            <h3>Content Marketing</h3>
            <p>Create useful content that attracts and engages customers.</p>
          </article>

          <article className="service-offer-card">
            <h3>Paid Advertising</h3>
            <p>Reach potential customers through targeted ad campaigns.</p>
          </article>
        </div>
      </section>

      <section className="service-detail-cta">
        <p className="tag">LET'S GROW TOGETHER</p>
        <h2>Ready to Grow Your Business?</h2>
        <p>Let's create a digital marketing strategy for your goals.</p>
        <a className="button" href="/#contact">
          Contact Us ↗
        </a>
      </section>

      <footer className="services-page-footer">
        © 2026 Riyadvi Software Technologies.
      </footer>
    </main>
  );
}
