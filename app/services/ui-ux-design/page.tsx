
export default function UIUXDesign() {
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
        <p className="tag">UI / UX DESIGN</p>
        <h1>Design That <span>Feels Right.</span></h1>
        <p>
          We design simple, attractive, and user-friendly digital
          experiences that help people connect with your brand.
        </p>
        <a className="button" href="/#contact">
          Start Your Design ↗
        </a>
      </section>

      <section className="service-detail-content">
        <p className="tag">WHAT WE OFFER</p>
        <h2>Better Design. Better Experiences.</h2>

        <div className="service-offer-grid">
          <article className="service-offer-card">
            <h3>Website Design</h3>
            <p>Modern website layouts that present your brand clearly.</p>
          </article>

          <article className="service-offer-card">
            <h3>Mobile App Design</h3>
            <p>Intuitive mobile interfaces that are easy to navigate.</p>
          </article>

          <article className="service-offer-card">
            <h3>Wireframes & Prototypes</h3>
            <p>Plan and test digital experiences before development.</p>
          </article>

          <article className="service-offer-card">
            <h3>User Experience</h3>
            <p>Improve usability and help users complete tasks easily.</p>
          </article>
        </div>
      </section>

      <section className="service-detail-cta">
        <p className="tag">LET'S DESIGN TOGETHER</p>
        <h2>Ready to Improve Your Digital Experience?</h2>
        <p>Let's create a design that works for your users and your business.</p>
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
