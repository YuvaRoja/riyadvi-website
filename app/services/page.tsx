
const services = [
  {
    number: "01",
    title: "Web Development",
    description:
      "Build responsive, modern websites designed to support your business goals.",
    tags: "Next.js · React · WordPress",
  },
  {
    number: "02",
    title: "App Development",
    description:
      "Create useful digital applications with smooth experiences across devices.",
    tags: "Mobile Apps · Web Apps",
  },
  {
    number: "03",
    title: "Digital Marketing",
    description:
      "Reach the right audience through search, content, and digital campaigns.",
    tags: "SEO · Content · Advertising",
  },
  {
    number: "04",
    title: "AR / VR Solutions",
    description:
      "Explore immersive digital experiences for engaging products and services.",
    tags: "AR · VR · Immersive Media",
  },
  {
    number: "05",
    title: "3D Modeling",
    description:
      "Present ideas through detailed three-dimensional visuals and interactive scenes.",
    tags: "3D Design · Visualization",
  },
  {
    number: "06",
    title: "UI / UX Design",
    description:
      "Design clear, accessible interfaces that make digital products easier to use.",
    tags: "Research · Interface · Prototyping",
  },
];

export default function ServicesPage() {
  return (
    <main className="services-page">
      <header className="services-header">
        <a href="/" className="services-logo">
          RIYADVI<span>.</span>
        </a>
        <a href="/#contact" className="button">
          Let's Talk ↗
        </a>
      </header>

      <section className="services-hero">
        <p className="tag">WHAT WE DO</p>
        <h1>
          Solutions Built for
          <br />
          <span>What's Next.</span>
        </h1>
        <p>
          We combine strategy, design, and technology to help
          businesses solve challenges and create new opportunities.
        </p>
      </section>

      <section className="services-list">
        <div className="services-list-heading">
          <h2>Our Services</h2>
          <p>Six capabilities. One technology partner.</p>
        </div>

        <div className="services-page-grid">
          {services.map((service) => (
            <article className="service-detail-card" key={service.number}>
              <span className="service-number">{service.number}</span>
              <h2>{service.title}</h2>
              <p>{service.description}</p>
              <span className="service-tags">{service.tags}</span>
              <a
              
href={
  service.title.toLowerCase().includes("ar") &&
  service.title.toLowerCase().includes("vr")
    ? "/services/ar-vr"
    : service.title.toLowerCase().includes("ui")
      ? "/services/ui-ux-design"
      : `/services/${service.title
          .toLowerCase()
          .replaceAll(" ", "-")
          .replaceAll("/", "-")}`
}

                className="service-link"
              >
                Explore Service ↗
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="services-bottom-cta">
        <p className="tag">HAVE A PROJECT IN MIND?</p>
        <h2>Let's turn your idea into reality.</h2>
        <a href="/#contact" className="button">
          Start a Conversation ↗
        </a>
      </section>

      <footer className="services-page-footer">
        © 2026 Riyadvi Software Technologies.
      </footer>
    </main>
  );
}
