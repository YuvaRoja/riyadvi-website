
export default function AppDevelopment() {
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
        <p className="tag">APP DEVELOPMENT</p>
        <h1>Apps Built for <span>Your Business.</span></h1>
        <p>
          We create user-friendly mobile applications that help businesses
          connect with customers and grow their digital presence.
        </p>
        <a className="button" href="/#contact">
          Start Your Project ↗
        </a>
      </section>

      <section className="service-detail-content">
        <p className="tag">WHAT WE OFFER</p>
        <h2>Smart Apps. Better Experiences.</h2>

        <div className="service-offer-grid">
          <article className="service-offer-card">
            <h3>Android Apps</h3>
            <p>Reliable Android applications designed for your customers.</p>
          </article>

          <article className="service-offer-card">
            <h3>iOS Apps</h3>
            <p>Simple and engaging app experiences for Apple devices.</p>
          </article>

          <article className="service-offer-card">
            <h3>UI/UX Design</h3>
            <p>Clean interfaces that make applications easy to use.</p>
          </article>

          <article className="service-offer-card">
            <h3>App Maintenance</h3>
            <p>Updates and improvements to keep your application running well.</p>
          </article>
        </div>
      </section>

      <section className="service-detail-cta">
        <p className="tag">LET'S BUILD SOMETHING GREAT</p>
        <h2>Ready to Build Your App?</h2>
        <p>Let's turn your idea into a useful digital product.</p>
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
