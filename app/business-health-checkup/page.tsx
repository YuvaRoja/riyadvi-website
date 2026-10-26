
"use client";

import { useState } from "react";

type FormData = {
  name: string;
  email: string;
  company: string;
  website: string;
  challenge: string;
  goal: string;
};

const emptyForm: FormData = {
  name: "",
  email: "",
  company: "",
  website: "",
  challenge: "",
  goal: "",
};

export default function BusinessHealthCheckupPage() {
  const [form, setForm] = useState<FormData>(emptyForm);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);

  function handleChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));
  }

  async function handleSubmit(
    event: React.FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    if (loading) return;

    setLoading(true);
    setMessage("");

    const controller = new AbortController();
    const timeoutId = window.setTimeout(() => controller.abort(), 10000);

    try {
      const response = await fetch(
        "http://localhost:5000/api/business-health-checkup",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(form),
          signal: controller.signal,
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Form submission failed.");
      }

      setSuccess(true);
      setMessage(
        data.message || "Your Business Health Checkup was submitted successfully."
      );
      setForm({ ...emptyForm });
    } catch (error) {
      setSuccess(false);

      if (error instanceof Error && error.name === "AbortError") {
        setMessage("Request timed out. Please check that the backend is running.");
      } else {
        setMessage(
          error instanceof Error
            ? error.message
            : "Unable to submit the form. Please try again."
        );
      }
    } finally {
      window.clearTimeout(timeoutId);
      setLoading(false);
    }
  }

  const inputClass =
    "mt-2 w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 outline-none transition focus:border-emerald-700 focus:ring-2 focus:ring-emerald-100";

  return (
    <main className="min-h-screen bg-gray-50 px-4 py-12 sm:px-6">
      <section className="mx-auto max-w-3xl rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-10">
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-emerald-800">
          Riyadvi Software Technologies
        </p>

        <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
          Business Health Checkup
        </h1>

        <p className="mt-3 leading-7 text-gray-600">
          Tell us about your business, your current challenges, and your goals
          so we can better understand your needs.
        </p>

        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <div>
            <label htmlFor="name" className="font-medium text-gray-800">
              Full Name *
            </label>
            <input
              id="name"
              name="name"
              type="text"
              value={form.name}
              onChange={handleChange}
              placeholder="Enter your full name"
              autoComplete="name"
              required
              className={inputClass}
            />
          </div>

          <div>
            <label htmlFor="email" className="font-medium text-gray-800">
              Email Address *
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Enter your email address"
              autoComplete="email"
              required
              className={inputClass}
            />
          </div>

          <div>
            <label htmlFor="company" className="font-medium text-gray-800">
              Company Name *
            </label>
            <input
              id="company"
              name="company"
              type="text"
              value={form.company}
              onChange={handleChange}
              placeholder="Enter your company name"
              autoComplete="organization"
              required
              className={inputClass}
            />
          </div>

          <div>
            <label htmlFor="website" className="font-medium text-gray-800">
              Website URL (optional)
            </label>
            <input
              id="website"
              name="website"
              type="text"
              value={form.website}
              onChange={handleChange}
              placeholder="https://example.com"
              className={inputClass}
            />
          </div>

          <div>
            <label htmlFor="challenge" className="font-medium text-gray-800">
              What is your main business challenge? *
            </label>
            <textarea
              id="challenge"
              name="challenge"
              value={form.challenge}
              onChange={handleChange}
              placeholder="Describe the main challenge in your business"
              rows={4}
              required
              className={inputClass}
            />
          </div>

          <div>
            <label htmlFor="goal" className="font-medium text-gray-800">
              What is your main business goal? *
            </label>
            <textarea
              id="goal"
              name="goal"
              value={form.goal}
              onChange={handleChange}
              placeholder="Describe what you want to achieve"
              rows={4}
              required
              className={inputClass}
            />
          </div>

          {message && (
            <div
              role="status"
              aria-live="polite"
              className={`rounded-lg p-4 ${
                success
                  ? "bg-green-50 text-green-800"
                  : "bg-red-50 text-red-800"
              }`}
            >
              {message}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-lg bg-emerald-800 px-6 py-4 font-semibold text-white transition hover:bg-emerald-900 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? "Submitting..." : "Submit Business Health Checkup"}
          </button>

          <p className="text-sm text-gray-500">
            * Required fields
          </p>
        </form>
      </section>
    </main>
  );
}
