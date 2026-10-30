"use client";

import { useState } from "react";

export default function BusinessHealthCheckup() {
const [form, setForm] = useState({
name: "",
email: "",
company: "",
website: "",
challenge: "",
goal: "",
});

const [message, setMessage] = useState("");
const [loading, setLoading] = useState(false);

function handleChange(
event: React.ChangeEvent<
HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
>
) {
setForm({ ...form, [event.target.name]: event.target.value });
}

async function handleSubmit(
event: React.FormEvent<HTMLFormElement>
) {
event.preventDefault();
setLoading(true);
setMessage("");

try {  
  const controller = new AbortController();

const timeout = setTimeout(() => controller.abort(), 10000);

const response = await fetch(
"https://riyadvi-website-1.onrender.com/api/contact",
{
method: "POST",
headers: { "Content-Type": "application/json" },
body: JSON.stringify(form),
signal: controller.signal,
}
);

clearTimeout(timeout);

const data = await response.json();  

  if (!response.ok) {  
    throw new Error(data.message || "Submission failed.");  
  }  

  setMessage("Thank you! Your business health checkup request was submitted.");  
  setForm({  
    name: "",  
    email: "",  
    company: "",  
    website: "",  
    challenge: "",  
    goal: "",  
  });  
} catch {  
  setMessage(  
    "Unable to submit right now. Please check that the backend is running."  
  );  
} finally {  
  setLoading(false);  
}

}

return (
<main style={{ maxWidth: 850, margin: "60px auto", padding: 24 }}>
<p style={{ color: "#16836b", fontWeight: 700 }}>
RIYADVI BUSINESS CONSULTING
</p>

<h1 style={{ fontSize: 42, marginBottom: 16 }}>  
    Business Health Checkup  
  </h1>  

  <p style={{ lineHeight: 1.7, color: "#555" }}>  
    Tell us about your business, your current challenges, and your goals.  
    Our team can use this information to understand your needs.  
  </p>  

  <form  
    onSubmit={handleSubmit}  
    style={{ display: "grid", gap: 18, marginTop: 32 }}  
  >  
    <label>  
      Your Name *  
      <input  
        name="name"  
        value={form.name}  
        onChange={handleChange}  
        required  
        style={inputStyle}  
        placeholder="Enter your name"  
      />  
    </label>  

    <label>  
      Email Address *  
      <input  
        type="email"  
        name="email"  
        value={form.email}  
        onChange={handleChange}  
        required  
        style={inputStyle}  
        placeholder="you@example.com"  
      />  
    </label>  

    <label>  
      Company Name *  
      <input  
        name="company"  
        value={form.company}  
        onChange={handleChange}  
        required  
        style={inputStyle}  
        placeholder="Enter company name"  
      />  
    </label>  

    <label>  
      Website (optional)  
      <input  
        type="url"  
        name="website"  
        value={form.website}  
        onChange={handleChange}  
        style={inputStyle}  
        placeholder="https://example.com"  
      />  
    </label>  

    <label>  
      What is your biggest business challenge? *  
      <textarea  
        name="challenge"  
        value={form.challenge}  
        onChange={handleChange}  
        required  
        rows={4}  
        style={inputStyle}  
        placeholder="Describe your challenge"  
      />  
    </label>  

    <label>  
      What is your main business goal? *  
      <select  
        name="goal"  
        value={form.goal}  
        onChange={handleChange}  
        required  
        style={inputStyle}  
      >  
        <option value="">Select your goal</option>  
        <option value="More customers">Get more customers</option>  
        <option value="Improve website">Improve my website</option>  
        <option value="Increase sales">Increase sales</option>  
        <option value="Digital marketing">Improve digital marketing</option>  
        <option value="Other">Other</option>  
      </select>  
    </label>  

    <button  
      type="submit"  
      disabled={loading}  
      style={{  
        padding: 16,  
        background: "#044436",  
        color: "white",  
        border: 0,  
        borderRadius: 8,  
        cursor: "pointer",  
        fontWeight: 700,  
      }}  
    >  
      {loading ? "Submitting..." : "Submit My Checkup"}  
    </button>  

    {message && <p role="status">{message}</p>}  
  </form>  
</main>

);
}

const inputStyle: React.CSSProperties = {
display: "block",
width: "100%",
boxSizing: "border-box",
marginTop: 8,
padding: 12,
border: "1px solid #ccc",
borderRadius: 6,
font: "inherit",
};