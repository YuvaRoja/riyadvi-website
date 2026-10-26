
const projects = [
  {
    number: "01",
    title: "Business Website",
    category: "Web Development",
    description:
      "A modern and responsive website designed to build a strong online presence for businesses.",
    tech: "Next.js · React · CSS",
    color: "gold",
  },
  {
    number: "02",
    title: "Mobile Application",
    category: "App Development",
    description:
      "A user-friendly mobile application experience focused on simple navigation and useful features.",
    tech: "React · API Integration",
    color: "purple",
  },
  {
    number: "03",
    title: "Digital Growth Campaign",
    category: "Digital Marketing",
    description:
      "A digital marketing concept created to improve brand awareness and customer engagement.",
    tech: "SEO · Content · Analytics",
    color: "blue",
  },
  {
    number: "04",
    title: "Immersive AR Experience",
    category: "AR / VR",
    description:
      "An interactive concept that helps users explore products through immersive digital experiences.",
    tech: "3D · AR · Interactive Design",
    color: "pink",
  },
  {
    number: "05",
    title: "3D Product Showcase",
    category: "3D Modeling",
    description:
      "A creative 3D product presentation designed to make digital products more engaging.",
    tech: "3D Modeling · Visualization",
    color: "green",
  },
  {
    number: "06",
    title: "Creative Dashboard",
    category: "UI / UX Design",
    description:
      "A clean dashboard concept with clear layouts and a smooth user experience.",
    tech: "UI Design · UX Research",
    color: "orange",
  },
];

export default function PortfolioPage() {
  return (
    <main className="portfolio-page">
      <section className="portfolio-hero">
        <p className="portfolio-label">OUR WORK / OUR IMPACT</p>
        <h1>
          Ideas into <span>experiences.</span>
        </h1>
        <p className="portfolio-intro">
          Explore our creative concepts across web development, digital
          experiences, marketing, and design.
        </p>
        <a href="#projects" className="portfolio-button">
          Explore Projects ↓
        </a>
      </section>

      <section className="portfolio-projects" id="projects">
        <div className="portfolio-section-heading">
          <div>
            <p className="portfolio-label">SELECTED WORK</p>
            <h2>Projects that inspire.</h2>
          </div>
          <p>
            Creative thinking. Thoughtful design. Digital solutions.
          </p>
        </div>

        <div className="portfolio-project-grid">
          {projects.map((project) => (
            <article
              className={`portfolio-project-card ${project.color}`}
              key={project.number}
            >
              <div className="project-visual">
                <span className="project-number">{project.number}</span>
                <span className="project-symbol">✳</span>
                <span className="project-visual-text">
                  RIYADVI <span>DIGITAL STUDIO</span>
                </span>
              </div>

              <div className="project-information">
                <p className="project-category">{project.category}</p>
                <h3>{project.title}</h3>
                <p className="project-description">
                  {project.description}
                </p>
                <p className="project-tech">{project.tech}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="portfolio-contact">
        <p className="portfolio-label">HAVE A PROJECT IN MIND?</p>
        <h2>Let's create something remarkable.</h2>
        <p>Have an idea? Let's discuss how we can bring it to life.</p>
        <a href="/contact" className="portfolio-button">
          Get In Touch →
        </a>
      </section>
    </main>
  );
}
