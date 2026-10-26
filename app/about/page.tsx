
const values = [
  {
    number: "01",
    title: "Innovation",
    description:
      "We explore new ideas and modern technologies to create smarter digital solutions.",
  },
  {
    number: "02",
    title: "Quality",
    description:
      "We focus on clean design, reliable development, and attention to detail.",
  },
  {
    number: "03",
    title: "Collaboration",
    description:
      "We listen to our clients and work together to turn their ideas into reality.",
  },
  {
    number: "04",
    title: "Growth",
    description:
      "We build digital experiences that help businesses reach their goals.",
  },
];

export default function AboutPage() {
  return (
    <main className="about-page">
      <section className="about-hero">
        <p className="about-label">WHO WE ARE</p>
        <h1>
          We turn bold ideas into{" "}
          <span>digital reality.</span>
        </h1>
        <p className="about-hero-text">
          Riyadvi creates thoughtful digital experiences through
          technology, creativity, and a focus on business goals.
        </p>
        <a href="/contact" className="about-button">
          Let's Work Together →
        </a>
      </section>

      <section className="about-story">
        <div className="about-story-visual">
          <div className="about-orbit orbit-one"></div>
          <div className="about-orbit orbit-two"></div>
          <div className="about-orbit orbit-three"></div>
          <div className="about-orbit-center">R.</div>
          <p className="about-visual-caption">IDEAS MEET TECHNOLOGY</p>
        </div>

        <div className="about-story-content">
          <p className="about-label">OUR STORY</p>
          <h2>Technology with a purpose.</h2>
          <p>
            We believe technology should do more than look impressive.
            It should solve problems, improve experiences, and create
            meaningful opportunities for businesses.
          </p>
          <p>
            From websites and applications to marketing and immersive
            experiences, our approach combines creative thinking with
            practical digital solutions.
          </p>
          <a href="/services" className="about-text-link">
            Explore Our Services →
          </a>
        </div>
      </section>

      <section className="about-mission">
        <article className="about-mission-card">
          <p className="about-label">OUR MISSION</p>
          <h2>Make digital progress possible.</h2>
          <p>
            Our mission is to help businesses solve challenges and
            improve their digital presence through useful, creative,
            and reliable technology solutions.
          </p>
        </article>

        <article className="about-mission-card">
          <p className="about-label">OUR VISION</p>
          <h2>Create a smarter digital future.</h2>
          <p>
            Our vision is to build digital experiences that connect
            people, inspire ideas, and support long-term business growth.
          </p>
        </article>
      </section>

      <section className="about-values">
        <div className="about-section-heading">
          <p className="about-label">WHAT GUIDES US</p>
          <h2>The values behind our work.</h2>
          <p>
            Every project starts with a clear purpose and a commitment
            to creating something useful.
          </p>
        </div>

        <div className="about-values-grid">
          {values.map((value) => (
            <article className="about-value-card" key={value.number}>
              <span>{value.number}</span>
              <h3>{value.title}</h3>
              <p>{value.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="about-cta">
        <p className="about-label">YOUR IDEA, OUR NEXT PROJECT</p>
        <h2>Ready to build something meaningful?</h2>
        <p>Let's discuss your goals and find the right digital solution.</p>
        <a href="/contact" className="about-button">
          Contact Our Team →
        </a>
      </section>
    </main>
  );
}
