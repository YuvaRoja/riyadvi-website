
export default function WebDevelopmentPage() {
  return (
    <main className="service-detail-page">
      <header className="services-header">
        <a href="/" className="services-logo">
          RIYADVI<span>.</span>
        </a>
        <a href="/services" className="service-back-link">
          All Services ↗
        </a>
      </header>

      <section className="service-detail-hero">
        <p className="tag">OUR SERVICES / WEB DEVELOPMENT</p>
        <h1>
          Websites Built for
          <br />
          <span>Business Growth.</span>
        </h1>
        <p>
          We create modern, responsive, and user-friendly websites
          that help businesses build trust, reach customers, and grow
          their digital presence.
        </p>
        <a href="/#contact" className="button">
          Discuss Your Project ↗
        </a>
      </section>

      <section className="service-detail-content">
        <p className="tag">WHAT WE OFFER</p>
        <h2>Complete Web Development Solutions</h2>

        <div className="service-offer-grid">
          <article>
            <span>01</span>
            <h3>Business Websites</h3>
            <p>
              Professional websites that explain your services and
              help customers connect with your business.
            </p>
          </article>

          <article>
            <span>02</span>
            <h3>E-commerce Websites</h3>
            <p>
              Online stores that help businesses showcase products
              and serve customers online.
            </p>
          </article>

          <article>
            <span>03</span>
            <h3>Responsive Design</h3>
            <p>
              Website layouts that adapt to desktop, tablet, and
              mobile screens.
            </p>
          </article>

          <article>
            <span>04</span>
            <h3>Website Optimization</h3>
            <p>
              Improvements to usability, performance, accessibility,
              and overall website experience.
            </p>
          </article>
        </div>
      </section>

      <section className="service-process">
        <p className="tag">OUR APPROACH</p>
        <h2>From First Idea to Launch</h2>

        <div className="service-process-grid">
          <div><span>01</span><h3>Discover</h3></div>
          <div><span>02</span><h3>Plan</h3></div>
          <div><span>03</span><h3>Develop</h3></div>
          <div><span>04</span><h3>Launch</h3></div>
        </div>
      </section>

      <section className="service-detail-cta">
        <p className="tag">READY TO GET STARTED?</p>
        <h2>Let's build your next website.</h2>
        <a href="/#contact" className="button">
          Contact Our Team ↗
        </a>
        <p><a href="/services">← Back to All Services</a></p>
      </section>

      <footer className="services-page-footer">
        © 2026 Riyadvi Software Technologies.
      </footer>
    </main>
  );
}
