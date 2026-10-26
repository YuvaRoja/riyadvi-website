"use client";
import { motion } from "motion/react";

export default function Home() {
  return (
    <main>
      <header className="header">
        <h2>RIYADVI<span>.</span></h2>

        <nav>
          <a href="/">Home</a>
          <a href="#services">Services</a>
          <a href="/portfolio">Portfolio</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
        </nav>

        <a className="button" href="#contact">
          Book a Consultation ↗
        </a>
      </header>

      
<motion.section
  className="hero"
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
>
  <p className="tag">
    DIGITAL INNOVATION • SMART SOLUTIONS
  </p>

  <h1>
    We Build Digital
    <br />
    <span>Experiences.</span>
  </h1>

  <p>
    We help businesses grow with creative design,
    powerful software, and smart digital solutions.
  </p>

  <a className="button" href="#services">
    Explore Our Services ↗
  </a>
</motion.section>

      <section className="transformation" id="about">
        <p className="tag">OUR APPROACH</p>

        <h2>
          From Business Challenges
          <br />
          to <span>Digital Growth.</span>
        </h2>

        <p className="transformation-intro">
          We combine strategy, creative design and modern
          technology to turn your ideas into meaningful
          digital solutions.
        </p>

        <div className="process-grid">
          <div className="process-card">
            <span>01</span>
            <h3>Business Challenge</h3>
            <p>Understand your goals and challenges.</p>
          </div>

          <div className="process-card">
            <span>02</span>
            <h3>Strategy</h3>
            <p>Plan the right digital solution.</p>
          </div>

          <div className="process-card">
            <span>03</span>
            <h3>Design</h3>
            <p>Create simple, user-friendly experiences.</p>
          </div>

          <div className="process-card">
            <span>04</span>
            <h3>Technology</h3>
            <p>Build reliable digital products.</p>
          </div>

          <div className="process-card">
            <span>05</span>
            <h3>Launch</h3>
            <p>Bring your solution to life.</p>
          </div>

          <div className="process-card">
            <span>06</span>
            <h3>Growth</h3>
            <p>Improve and grow your business.</p>
          </div>
        </div>
      </section>
      
      <section className="services" id="services">
        <p className="tag">WHAT WE DO</p>

        <h2>
          Our Digital <span>Services.</span>
        </h2>

        <p className="services-intro">
          We combine creativity and technology to build
          digital solutions that help businesses grow.
        </p>

        <div className="services-grid">
          <div className="service-card">
            <span>01</span>
            <h3>Web Development</h3>
            <p>Responsive and modern websites built for your business.</p>
            <a href="#contact">Explore Service ↗</a>
          </div>

          <div className="service-card">
            <span>02</span>
            <h3>App Development</h3>
            <p>User-friendly mobile applications for everyday needs.</p>
            <a href="#contact">Explore Service ↗</a>
          </div>

          <div className="service-card">
            <span>03</span>
            <h3>Digital Marketing</h3>
            <p>Smart digital strategies to improve your online reach.</p>
            <a href="#contact">Explore Service ↗</a>
          </div>

          <div className="service-card">
            <span>04</span>
            <h3>AR/VR Solutions</h3>
            <p>Immersive experiences powered by modern technology.</p>
            <a href="#contact">Explore Service ↗</a>
          </div>

          <div className="service-card">
            <span>05</span>
            <h3>3D Modeling</h3>
            <p>Creative and detailed 3D models for digital projects.</p>
            <a href="#contact">Explore Service ↗</a>
          </div>

          <div className="service-card">
            <span>06</span>
            <h3>UI/UX Design</h3>
            <p>Simple, attractive interfaces focused on user experience.</p>
            <a href="#contact">Explore Service ↗</a>
          </div>
        </div>
      </section>

      <section className="technology" id="technology">
        <p className="tag">POWERED BY INNOVATION</p>

        <h2>
          Our Technology <span>Ecosystem.</span>
        </h2>

        <p className="technology-intro">
          We use modern technologies to create reliable,
          scalable and high-performance digital solutions.
        </p>

        <div className="technology-grid">
          <div className="tech-card">
            <span>01</span>
            <h3>React</h3>
            <p>Interactive user interfaces</p>
          </div>

          <div className="tech-card">
            <span>02</span>
            <h3>Next.js</h3>
            <p>Modern web applications</p>
          </div>

          <div className="tech-card">
            <span>03</span>
            <h3>Node.js</h3>
            <p>Backend development</p>
          </div>

          <div className="tech-card">
            <span>04</span>
            <h3>MongoDB</h3>
            <p>Flexible data storage</p>
          </div>

          <div className="tech-card">
            <span>05</span>
            <h3>Three.js</h3>
            <p>Interactive 3D experiences</p>
          </div>

          <div className="tech-card">
            <span>06</span>
            <h3>WordPress</h3>
            <p>Website development</p>
          </div>
        </div>
      </section>

      <section className="why-riyadvi" id="why-riyadvi">
        <p className="tag">WHY RIYADVI</p>

        <h2>
          Your Partner in
          <br />
          Digital <span>Growth.</span>
        </h2>

        <div className="why-content">
          <div className="why-intro">
            <p className="since">SINCE 2021</p>
            <h3>More Than a Technology Provider</h3>
            <p>
              We bring business understanding, creative thinking
              and technology together to help businesses identify
              opportunities and move forward with confidence.
            </p>
            <a className="button" href="#contact">
              Let's Work Together ↗
            </a>
          </div>

          <div className="why-features">
            <div className="why-item">
              <span>01</span>
              <div>
                <h3>Business Health Checkup</h3>
                <p>
                  Identify opportunities to improve your digital
                  presence, technology and business processes.
                </p>
              </div>
            </div>

            <div className="why-item">
              <span>02</span>
              <div>
                <h3>End-to-End Solutions</h3>
                <p>
                  From planning and design to development,
                  marketing and continuous optimization.
                </p>
              </div>
            </div>

            <div className="why-item">
              <span>03</span>
              <div>
                <h3>Long-Term Partnership</h3>
                <p>
                  Focus on practical solutions that support
                  your business goals and future growth.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="journey">
          <h3>From Strategy to Growth</h3>
          <div className="journey-grid">
            <div>Strategy <span>→</span></div>
            <div>Design <span>→</span></div>
            <div>Development <span>→</span></div>
            <div>Marketing <span>→</span></div>
            <div>Optimization <span>→</span></div>
            <div>Growth</div>
          </div>
        </div>
      </section>

      {/* Section 6: Our Portfolio */}
      <section className="portfolio" id="portfolio">
        <div className="portfolio-heading">
          <p className="tag">OUR PORTFOLIO</p>
          <h2>Ideas Into <span>Impact.</span></h2>
          <p>
            Explore how we combine creativity and technology to build
            meaningful digital experiences for businesses.
          </p>
        </div>

        <div className="portfolio-grid">
          <article className="project-card">
            <div className="project-visual project-one">
              <span>01</span>
              <h3>Digital Experiences</h3>
            </div>
            <div className="project-info">
              <div>
                <h3>Modern Business Website</h3>
                <p>Web Development · UI/UX Design</p>
              </div>
              <a href="/portfolio">↗</a>
            </div>
          </article>

          <article className="project-card">
            <div className="project-visual project-two">
              <span>02</span>
              <h3>Grow Your Brand</h3>
            </div>
            <div className="project-info">
              <div>
                <h3>Digital Marketing Campaign</h3>
                <p>Digital Marketing · Strategy</p>
              </div>
              <a href="/portfolio">↗</a>
            </div>
          </article>

          <article className="project-card">
            <div className="project-visual project-three">
              <span>03</span>
              <h3>Beyond Reality</h3>
            </div>
            <div className="project-info">
              <div>
                <h3>Immersive 3D Experience</h3>
                <p>3D Design · Interactive Media</p>
              </div>
              <a href="/portfolio">↗</a>
            </div>
          </article>
        </div>

        <div className="portfolio-footer">
          <p>Every project starts with an idea.</p>
          <a className="button" href="#contact">Start Your Project ↗</a>
        </div>
      </section>

      {/* Section 7: Client Testimonials */}
      <section className="testimonials" id="testimonials">
        <div className="testimonials-heading">
          <p className="tag">CLIENT FEEDBACK</p>
          <h2>Built on Trust.<br /><span>Driven by Results.</span></h2>
          <p>
            Strong partnerships begin with understanding your goals
            and creating solutions that help your business move forward.
          </p>
        </div>

        <div className="testimonial-grid">
          <article className="testimonial-card">
            <span className="quote-mark">“</span>
            <p>
              The right digital strategy can make complex business
              goals clearer and easier to achieve.
            </p>
            <div className="testimonial-person">
              <div className="testimonial-avatar">01</div>
              <div>
                <h3>Business Partner</h3>
                <span>Digital Strategy</span>
              </div>
            </div>
          </article>

          <article className="testimonial-card featured-testimonial">
            <span className="quote-mark">“</span>
            <p>
              Great digital experiences bring design, technology,
              and business thinking together.
            </p>
            <div className="testimonial-person">
              <div className="testimonial-avatar">02</div>
              <div>
                <h3>Project Collaborator</h3>
                <span>Technology Solutions</span>
              </div>
            </div>
          </article>

          <article className="testimonial-card">
            <span className="quote-mark">“</span>
            <p>
              Clear communication and a thoughtful approach help
              turn an idea into a practical digital solution.
            </p>
            <div className="testimonial-person">
              <div className="testimonial-avatar">03</div>
              <div>
                <h3>Client Partner</h3>
                <span>Business Growth</span>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* Section 8: Latest Insights */}
      <section className="insights" id="blog">
        <div className="insights-heading">
          <div>
            <p className="tag">INSIGHTS & IDEAS</p>
            <h2>Knowledge That <span>Moves You Forward.</span></h2>
          </div>
          <p>
            Explore ideas, technology trends, and practical insights
            to help your business grow in a digital world.
          </p>
        </div>

        <div className="insights-grid">
          <article className="insight-card">
            <div className="insight-art insight-art-one">
              <span>01 / TECHNOLOGY</span>
              <div className="insight-symbol">{"</>"}</div>
            </div>
            <div className="insight-content">
              <p className="insight-meta">TECHNOLOGY · 5 MIN READ</p>
              <h3>How Modern Web Development Helps Businesses Grow</h3>
              <p>
                Discover how a fast, accessible, and user-friendly website
                can support your business goals.
              </p>
              <a href="/blog">Read Article ↗</a>
            </div>
          </article>

          <article className="insight-card">
            <div className="insight-art insight-art-two">
              <span>02 / DIGITAL GROWTH</span>
              <div className="insight-symbol">↗</div>
            </div>
            <div className="insight-content">
              <p className="insight-meta">MARKETING · 4 MIN READ</p>
              <h3>Building a Smarter Digital Marketing Strategy</h3>
              <p>
                Learn how clear goals, useful content, and data can
                improve your digital marketing efforts.
              </p>
              <a href="/blog">Read Article ↗</a>
            </div>
          </article>

          <article className="insight-card">
            <div className="insight-art insight-art-three">
              <span>03 / INNOVATION</span>
              <div className="insight-symbol">✳</div>
            </div>
            <div className="insight-content">
              <p className="insight-meta">INNOVATION · 6 MIN READ</p>
              <h3>Exploring the Future of Interactive Digital Experiences</h3>
              <p>
                See how thoughtful interactions and emerging technologies
                can make digital products more engaging.
              </p>
              <a href="/blog">Read Article ↗</a>
            </div>
          </article>
        </div>

        <div className="insights-footer">
          <p>Ideas today. Better solutions tomorrow.</p>
          <a className="button" href="/blog">Explore All Articles ↗</a>
        </div>
      </section>

      {/* Section 9: Contact Call to Action */}
      <section className="contact-cta" id="contact">
        <div className="contact-cta-content">
          <p className="tag">LET'S BUILD SOMETHING GREAT</p>
          <h2>Your Next Big Idea<br />Starts <span>Right Here.</span></h2>
          <p>
            Have a business challenge or a new idea? Let’s discuss
            how technology and creativity can help you move forward.
          </p>
          <div className="contact-cta-actions">
            <a className="button" href="mailto:info@riyadvisoftwaretechnologies.com">
              Talk to Our Team ↗
            </a>
            <a className="contact-secondary" href="#services">
              Explore Services
            </a>
          </div>
        </div>
        <div className="contact-cta-decoration" aria-hidden="true">
          <div className="cta-ring cta-ring-one"></div>
          <div className="cta-ring cta-ring-two"></div>
          <div className="cta-ring cta-ring-three"></div>
          <span>R.</span>
        </div>
      </section>

      
<section className="portfolio-section" id="portfolio">
  <p className="tag">OUR PORTFOLIO</p>
  <h2>Ideas Into <span>Impact.</span></h2>
  <p className="portfolio-description">
    Explore how we combine creativity and technology to build digital
    experiences for modern businesses.
  </p>

  <div className="portfolio-grid">
    <a href="/services/web-development" className="portfolio-card">
      <span className="portfolio-number">PROJECT 01</span>
      <h3>Business Website</h3>
      <p>Modern websites designed to build trust and grow businesses.</p>
      <span className="portfolio-link">Explore Project ↗</span>
    </a>

    <a href="/services/app-development" className="portfolio-card">
      <span className="portfolio-number">PROJECT 02</span>
      <h3>Mobile Application</h3>
      <p>Smart mobile experiences built around user needs.</p>
      <span className="portfolio-link">Explore Project ↗</span>
    </a>

    <a href="/services/digital-marketing" className="portfolio-card">
      <span className="portfolio-number">PROJECT 03</span>
      <h3>Digital Growth</h3>
      <p>Digital strategies that help brands reach more customers.</p>
      <span className="portfolio-link">Explore Project ↗</span>
    </a>
  </div>
</section>




      {/* Footer */}
      <footer className="site-footer">
        <div className="footer-main">
          <div className="footer-brand">
            <a className="footer-logo" href="/">RIYADVI<span>.</span></a>
            <p>
              A technology and digital solutions partner helping
              businesses turn ideas into meaningful digital experiences.
            </p>
            <a className="footer-cta" href="#contact">
              Let's Work Together ↗
            </a>
          </div>

          <div className="footer-column">
            <h3>Quick Links</h3>
            <a href="/">Home</a>
            <a href="#why-riyadvi">About Us</a>
            <a href="#portfolio">Portfolio</a>
            <a href="#blog">Insights</a>
            <a href="#contact">Contact</a>
          </div>

          <div className="footer-column">
            <h3>Our Services</h3>
            <a href="#services">Web Development</a>
            <a href="#services">App Development</a>
            <a href="#services">Digital Marketing</a>
            <a href="#services">AR / VR Solutions</a>
            <a href="#services">UI / UX Design</a>
          </div>

          <div className="footer-column">
            <h3>Get in Touch</h3>
            <p>Have a project in mind?</p>
            <a href="#contact">Start a Conversation ↗</a>
            <p>Let's create something meaningful together.</p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 Riyadvi Software Technologies.</p>
          <p>Designed with purpose. Built for growth.</p>
        </div>
      </footer>

    </main>
  );
}

