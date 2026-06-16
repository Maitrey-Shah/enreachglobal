import { Resend } from "resend";

export const runtime = "nodejs";

const ADMIN_EMAIL =
  process.env.CONTACT_ADMIN_EMAIL ||
  process.env.ADMIN_EMAIL ||
  "info@enreachglobal.com";
const FROM_EMAIL =
  process.env.RESEND_FROM_EMAIL || "Enreach Global <info@enreachglobal.com>";

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function titleCase(value) {
  return value
    .split("-")
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

function sanitizeDetails(details) {
  if (!details || typeof details !== "object" || Array.isArray(details)) {
    return {};
  }

  return Object.fromEntries(
    Object.entries(details)
      .map(([key, value]) => [String(key).trim(), String(value ?? "").trim()])
      .filter(([key, value]) => key && value)
  );
}

function buildAdminSubject({ formType, inquiryType, name }) {
  if (formType === "quote") {
    return `${titleCase(inquiryType)} Inquiry from ${name}`;
  }

  return `Quick Enquiry from ${name}`;
}

function buildAdminHtml({ formType, inquiryType, name, email, message, details }) {
  const detailRows = Object.entries(details)
    .map(
      ([label, value]) => `
        <tr>
          <td style="padding:10px 12px;border:1px solid #dbe3ea;font-weight:600;background:#f8fafc;">${escapeHtml(label)}</td>
          <td style="padding:10px 12px;border:1px solid #dbe3ea;">${escapeHtml(value)}</td>
        </tr>
      `
    )
    .join("");

  const inquirySection =
    formType === "quote"
      ? `
        <p style="margin:0 0 16px;font-size:15px;line-height:1.7;color:#334155;">
          <strong>Inquiry Type:</strong> ${escapeHtml(titleCase(inquiryType))}
        </p>
      `
      : "";

  const detailsSection = detailRows
    ? `
      <h2 style="margin:24px 0 12px;font-size:18px;color:#0f172a;">Additional Details</h2>
      <table style="width:100%;border-collapse:collapse;border:1px solid #dbe3ea;border-radius:12px;overflow:hidden;">
        <tbody>${detailRows}</tbody>
      </table>
    `
    : "";

  return `
    <div style="margin:0;padding:24px;background:#f8fafc;font-family:Arial,sans-serif;">
      <div style="max-width:640px;margin:0 auto;background:#ffffff;border:1px solid #e2e8f0;border-radius:18px;padding:32px;">
        <p style="margin:0 0 8px;font-size:12px;font-weight:700;letter-spacing:0.18em;text-transform:uppercase;color:#64748b;">
          Enreach Global Website Enquiry
        </p>
        <h1 style="margin:0 0 24px;font-size:28px;line-height:1.2;color:#0f172a;">New enquiry received</h1>
        ${inquirySection}
        <table style="width:100%;border-collapse:collapse;">
          <tbody>
            <tr>
              <td style="padding:10px 0;font-weight:600;color:#0f172a;">Name</td>
              <td style="padding:10px 0;color:#334155;">${escapeHtml(name)}</td>
            </tr>
            <tr>
              <td style="padding:10px 0;font-weight:600;color:#0f172a;">Email</td>
              <td style="padding:10px 0;color:#334155;">${escapeHtml(email)}</td>
            </tr>
            <tr>
              <td style="padding:10px 0;font-weight:600;color:#0f172a;vertical-align:top;">Message</td>
              <td style="padding:10px 0;color:#334155;white-space:pre-wrap;">${escapeHtml(message)}</td>
            </tr>
          </tbody>
        </table>
        ${detailsSection}
      </div>
    </div>
  `;
}

function buildAdminText({ formType, inquiryType, name, email, message, details }) {
  const detailLines = Object.entries(details).map(
    ([label, value]) => `${label}: ${value}`
  );

  return [
    "New enquiry received from the Enreach Global website.",
    formType === "quote" ? `Inquiry Type: ${titleCase(inquiryType)}` : null,
    `Name: ${name}`,
    `Email: ${email}`,
    "",
    "Message:",
    message,
    detailLines.length ? "" : null,
    detailLines.length ? "Additional Details:" : null,
    ...detailLines,
  ]
    .filter(Boolean)
    .join("\n");
}

function buildAutoReplyHtml(name) {
  return `
    <div style="margin:0;padding:24px;background:#f8fafc;font-family:Arial,sans-serif;">
      <div style="max-width:640px;margin:0 auto;background:#ffffff;border:1px solid #e2e8f0;border-radius:18px;padding:32px;">
        <p style="margin:0 0 8px;font-size:12px;font-weight:700;letter-spacing:0.18em;text-transform:uppercase;color:#64748b;">
          Enreach Global
        </p>
        <h1 style="margin:0 0 16px;font-size:28px;line-height:1.2;color:#0f172a;">Thank you for contacting us</h1>
        <p style="margin:0 0 16px;font-size:15px;line-height:1.7;color:#334155;">
          Hello ${escapeHtml(name)},
        </p>
        <p style="margin:0;font-size:15px;line-height:1.7;color:#334155;">
          Thank you for contacting us. We will get back to you shortly.
        </p>
      </div>
    </div>
  `;
}

export async function POST(request) {
  if (!process.env.RESEND_API_KEY) {
    return Response.json(
      { error: "RESEND_API_KEY is not configured." },
      { status: 500 }
    );
  }

  let payload;

  try {
    payload = await request.json();
  } catch {
    return Response.json({ error: "Invalid request body." }, { status: 400 });
  }

  const formType = payload?.formType === "quote" ? "quote" : "quick-enquiry";
  const inquiryType =
    typeof payload?.inquiryType === "string" && payload.inquiryType.trim()
      ? payload.inquiryType.trim().toLowerCase()
      : "buyer";
  const name =
    typeof payload?.name === "string" ? payload.name.trim() : "";
  const email =
    typeof payload?.email === "string" ? payload.email.trim() : "";
  const message =
    typeof payload?.message === "string" ? payload.message.trim() : "";
  const details = sanitizeDetails(payload?.details);

  if (!name || !email || !message) {
    return Response.json(
      { error: "Name, email, and message are required." },
      { status: 400 }
    );
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailPattern.test(email)) {
    return Response.json(
      { error: "Please enter a valid email address." },
      { status: 400 }
    );
  }

  const resend = new Resend(process.env.RESEND_API_KEY);
  const adminEmail = {
    from: FROM_EMAIL,
    to: [ADMIN_EMAIL],
    subject: buildAdminSubject({ formType, inquiryType, name }),
    html: buildAdminHtml({
      formType,
      inquiryType,
      name,
      email,
      message,
      details,
    }),
    text: buildAdminText({
      formType,
      inquiryType,
      name,
      email,
      message,
      details,
    }),
    replyTo: email,
  };

  try {
    const { error: adminError } = await resend.emails.send(adminEmail);

    if (adminError) {
      throw new Error(adminError.message || "Failed to send admin email.");
    }

    const { error: autoReplyError } = await resend.emails.send({
      from: FROM_EMAIL,
      to: [email],
      subject: "Thank you for contacting Enreach Global",
      html: buildAutoReplyHtml(name),
      text: `Hello ${name},\n\nThank you for contacting us. We will get back to you shortly.`,
    });

    return Response.json({
      ok: true,
      autoReplySent: !autoReplyError,
    });
  } catch (error) {
    return Response.json(
      {
        error:
          error instanceof Error
            ? error.message
            : "Unable to send the enquiry email.",
      },
      { status: 500 }
    );
  }
}
