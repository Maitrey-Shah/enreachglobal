"use client";

export default function MapCard() {
  return (
    <div className="relative overflow-hidden rounded-[32px] border border-white/80 bg-white shadow-[0_30px_75px_-40px_rgba(15,23,42,0.4)]">
      <div className="p-4 sm:p-5">
        <div className="overflow-hidden rounded-[24px] border border-slate-200/80 bg-[#f7f4ef] shadow-[0_24px_55px_-34px_rgba(15,23,42,0.28)]">
          <iframe
            src="https://www.google.com/maps?q=Canada&output=embed"
            title="Google Map showing Canada"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            className="block w-full"
          />
        </div>
      </div>

      <div className="px-4 pb-4 sm:px-5 sm:pb-5">
        <div className="rounded-[24px] border border-slate-200/80 bg-white/88 p-5 backdrop-blur">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-500">
            Global Presence
          </p>
          <p className="mt-3 text-lg leading-7 text-slate-700">
            Warehousing, shipment planning, and supply coordination aligned
            with fast-moving industrial scrap demand.
          </p>
        </div>
      </div>
    </div>
  );
}
