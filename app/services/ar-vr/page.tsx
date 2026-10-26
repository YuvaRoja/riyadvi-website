
export default function ARVR() {
  return (
    <main className="service-detail-page">
      <header className="header">
        <h2>RIYADVI<span>.</span></h2>
        <nav>
          <a href="/">Home</a>
          <a href="/services">Services</a>
          <a href="/#portfolio">Portfolio</a>
          <a href="/#contact">Contact</a>
        </nav>
        <a className="button" href="/#contact">
          Book a Consultation ↗
        </a>
      </header>

      <section className="service-detail-hero">
        <p className="tag">AR / VR SOLUTIONS</p>
        <h1>Experience the <span>Future.</span></h1>
        <p>
          We create immersive augmented and virtual reality experiences
          that help businesses engage customers in new ways.
        </p>
        <a className="button" href="/#contact">
          Explore AR / VR ↗
        </a>
      </section>

      <section className="service-detail-content">
        <p className="tag">WHAT WE OFFER</p>
        <h2>Immersive Digital Experiences.</h2>

        <div className="service-offer-grid">
          <article className="service-offer-card">
            <h3>Augmented Reality</h3>
            <p>Interactive digital experiences that blend with the real world.</p>
          </article>

          <article className="service-offer-card">
            <h3>Virtual Reality</h3>
            <p>Immersive virtual environments for products and services.</p>
          </article>

          <article className="service-offer-card">
            <h3>3D Experiences</h3>
            <p>Engaging three-dimensional content for digital platforms.</p>
          </article>

          <article className="service-offer-card">
            <h3>Interactive Demos</h3>
            <p>Help customers explore products through interactive demonstrations.</p>
          </article>
        </div>
      </section>

      <section className="service-detail-cta">
        <p className="tag">BUILD SOMETHING NEW</p>
        <h2>Ready to Create an Immersive Experience?</h2>
        <p>Let's explore how AR and VR can support your business.</p>
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
