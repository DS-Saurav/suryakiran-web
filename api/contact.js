import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  // CORS
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { name, organization, email, project_type, message, lang } = req.body;

  if (!name || !organization || !email || !message) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  // Basic email format validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: "Invalid email address" });
  }

  const projectTypeLabels = {
    "solar-pv": "Solar PV",
    "micro-hydro": "Micro-Hydro",
    hybrid: "Hybrid Systems",
    "roads-bridges": "Roads & Bridges",
    "water-supply": "Water Supply Systems",
    "civil-works": "Structural & Civil Works",
    consultancy: "Consultancy / Feasibility Study",
    other: "Other",
  };

  const projectLabel = projectTypeLabels[project_type] || project_type || "Not specified";

  const emailContent = [
    `New enquiry received from the ${lang === "ne" ? "Nepali" : "English"} contact form.`,
    "",
    `Name: ${name}`,
    `Organization: ${organization}`,
    `Email: ${email}`,
    `Project Type: ${projectLabel}`,
    `Language: ${lang === "ne" ? "Nepali" : "English"}`,
    "",
    `Message:`,
    message,
  ].join("\n");

  try {
    const { data, error } = await resend.emails.send({
      from: "Surya Kiran Contact <onboarding@resend.dev>",
      to: "suryakiranenergy3@gmail.com",
      replyTo: email,
      subject: `New Enquiry from ${name} — ${organization}`,
      text: emailContent,
    });

    if (error) {
      console.error("Resend error:", error);
      return res.status(500).json({ error: "Failed to send email" });
    }

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error("Server error:", err);
    return res.status(500).json({ error: "Internal server error" });
  }
}
