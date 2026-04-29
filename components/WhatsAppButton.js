"use client";

function WhatsAppIcon({ className = "" }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M19.05 4.91A9.82 9.82 0 0 0 12.07 2C6.65 2 2.23 6.41 2.23 11.84c0 1.74.45 3.44 1.32 4.94L2 22l5.39-1.5a9.8 9.8 0 0 0 4.68 1.19h.01c5.42 0 9.84-4.42 9.84-9.85a9.77 9.77 0 0 0-2.87-6.93ZM12.08 20a8.1 8.1 0 0 1-4.12-1.13l-.3-.18-3.2.89.85-3.11-.2-.32a8.15 8.15 0 0 1-1.24-4.3c0-4.5 3.66-8.17 8.17-8.17a8.1 8.1 0 0 1 5.78 2.41 8.11 8.11 0 0 1 2.38 5.77c0 4.5-3.67 8.16-8.17 8.16Zm4.48-6.12c-.25-.12-1.47-.72-1.7-.8-.23-.08-.39-.12-.55.12-.17.25-.63.8-.77.97-.14.16-.29.18-.54.06-.25-.12-1.05-.39-2-1.25-.74-.66-1.24-1.47-1.39-1.72-.14-.25-.01-.38.11-.5.11-.11.25-.29.37-.43.12-.14.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.55-1.33-.75-1.83-.2-.48-.4-.41-.55-.42h-.47c-.17 0-.43.06-.65.31-.22.25-.85.83-.85 2.03 0 1.2.88 2.35 1 2.51.12.17 1.71 2.61 4.14 3.66.58.25 1.03.4 1.38.51.58.18 1.11.15 1.53.09.47-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.15-1.18-.06-.1-.22-.16-.47-.28Z" />
    </svg>
  );
}

export default function WhatsAppButton({
  href = "https://wa.me/14034087454",
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with Enreach Global on WhatsApp"
      className="contact-whatsapp-button fixed bottom-6 left-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_20px_45px_-18px_rgba(37,211,102,0.82)] transition-transform duration-300 hover:scale-105 hover:bg-[#1fbe5d] sm:left-6"
    >
      <WhatsAppIcon className="h-7 w-7" />
    </a>
  );
}
