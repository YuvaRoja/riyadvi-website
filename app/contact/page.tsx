
"use client";

import { useState } from "react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(
    event: React.FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();
    setLoading(true);
    setError("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const contactData = {
      name: formData.get("name"),
      email: formData.get("email"),
      subject: formData.get("service"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch(
        "https://riyadvi-website-1.onrender.com/api/contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(contactData),
        }
      );

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(
          result.message || "Unable to submit your enquiry."
        );
      }

      setSubmitted(true);
      form.reset();
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="contact-page">
      <section className="contact-hero">
        <p className="contact-label">LET'S CONNECT</p>
        <h1>
          Let's build something <span>great.</span>
        </h1>
        <p>
          Have a project in mind? Tell us about your idea.
          Our team would love to hear from you.
        </p>
      </section>

      <section className="contact-layout">
        <div className="contact-details">
          <p className="contact-label">GET IN TOUCH</p>
          <h2>We are ready to help.</h2>
          <p>
            Whether you need a website, mobile application,
            digital marketing, or a creative digital solution,
            let's start a conversation.
          </p>

          <div className="contact-detail-item">
            <span>EMAIL</span>
            <p>info@riyadvi.com</p>
          </div>

          <div className="contact-detail-item">
            <span>OUR APPROACH</span>
            <p>Creative ideas. Smart solutions. Real results.</p>
          </div>
        </div>

        <div className="contact-form-card">
          <h2>Send us a message</h2>
          <p>Fill in the details below.</p>

          {submitted ? (
            <div className="contact-success">
              <h3>Thank you!</h3>
              <p>
                Your enquiry has been submitted successfully.
                Our team has received your message.
              </p>
              <button
                type="button"
                onClick={() => setSubmitted(false)}
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <label htmlFor="contact-name">Full Name</label>
              <input
                id="contact-name"
                name="name"
                type="text"
                placeholder="Enter your full name"
                required
              />

              <label htmlFor="contact-email">
                Email Address
              </label>
              <input
                id="contact-email"
                name="email"
                type="email"
                placeholder="Enter your email"
                required
              />

              <label htmlFor="contact-service">
                Service Interested In
              </label>
              <select
                id="contact-service"
                name="service"
                defaultValue=""
                required
              >
                <option value="" disabled>
                  Select a service
                </option>
                <option>Web Development</option>
                <option>App Development</option>
                <option>Digital Marketing</option>
                <option>AR / VR</option>
                <option>3D Modeling</option>
                <option>UI / UX Design</option>
                <option>Other</option>
              </select>

              <label htmlFor="contact-message">
                Your Message
              </label>
              <textarea
                id="contact-message"
                name="message"
                placeholder="Tell us about your project"
                rows={5}
                required
              />

              {error && (
                <p role="alert" style={{ color: "red" }}>
                  {error}
                </p>
              )}

              <button type="submit" disabled={loading}>
                {loading
                  ? "Submitting..."
                  : "Submit Enquiry →"}
              </button>
            </form>
          )}
        </div>
      </section>
    </main>
  );
}
