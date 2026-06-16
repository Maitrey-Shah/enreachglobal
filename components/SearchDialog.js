"use client";

import { useDeferredValue, useEffect, useId, useRef, useState } from "react";

function highlightText(text, query) {
  if (!query) {
    return text;
  }

  const escaped = query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const pattern = new RegExp(`(${escaped})`, "ig");
  const segments = text.split(pattern);

  return segments.map((segment, index) =>
    segment.toLowerCase() === query.toLowerCase() ? (
      <mark key={`${segment}-${index}`} className="rounded bg-[#f6d365]/40 px-0.5 text-inherit">
        {segment}
      </mark>
    ) : (
      <span key={`${segment}-${index}`}>{segment}</span>
    )
  );
}

export default function SearchDialog({
  isOpen,
  onClose,
  onSelect,
  items,
  suggestions = [],
}) {
  const [query, setQuery] = useState("");
  const deferredQuery = useDeferredValue(query.trim());
  const inputRef = useRef(null);
  const titleId = useId();

  useEffect(() => {
    if (!isOpen) {
      setQuery("");
      return undefined;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const timeout = window.setTimeout(() => {
      inputRef.current?.focus();
    }, 30);

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      window.clearTimeout(timeout);
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) {
    return null;
  }

  const normalizedQuery = deferredQuery.toLowerCase();
  const filteredItems = normalizedQuery
    ? items
        .map((item) => {
          const haystack = [item.title, item.description, ...(item.keywords || [])]
            .join(" ")
            .toLowerCase();

          if (!haystack.includes(normalizedQuery)) {
            return null;
          }

          const titleScore = item.title.toLowerCase().includes(normalizedQuery) ? 2 : 0;
          const keywordScore = (item.keywords || []).some((keyword) =>
            keyword.toLowerCase().includes(normalizedQuery)
          )
            ? 1
            : 0;

          return {
            ...item,
            score: titleScore + keywordScore,
          };
        })
        .filter(Boolean)
        .sort((left, right) => right.score - left.score)
        .slice(0, 10)
    : [];

  return (
    <div
      className="fixed inset-0 z-[90] flex items-start justify-center bg-slate-950/45 px-5 py-8 backdrop-blur-md"
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
      onClick={onClose}
    >
      <div
        className="w-full max-w-3xl overflow-hidden rounded-[32px] border border-white/50 bg-white/90 shadow-[0_40px_100px_-40px_rgba(15,23,42,0.55)]"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="border-b border-slate-200/80 px-6 py-5 sm:px-7">
          <p
            id={titleId}
            className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500"
          >
            Search
          </p>
          <input
            ref={inputRef}
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search products, blog posts, services, industries, and pages"
            aria-label="Search website content"
            className="mt-4 w-full rounded-[20px] border border-slate-200/80 bg-white px-5 py-4 text-base text-slate-950 outline-none transition duration-300 placeholder:text-slate-400 focus:border-slate-400 focus:ring-4 focus:ring-slate-200/70"
          />
        </div>

        <div className="max-h-[70vh] overflow-y-auto px-4 py-4 sm:px-5">
          {normalizedQuery ? (
            filteredItems.length ? (
              <div className="grid gap-3">
                {filteredItems.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => onSelect(item)}
                    className="rounded-[22px] border border-slate-200/80 bg-white px-5 py-4 text-left transition-all duration-300 hover:-translate-y-0.5 hover:border-slate-300 hover:bg-slate-50"
                  >
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="rounded-full bg-[#f7f4ef] px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-slate-600">
                        {item.type}
                      </span>
                      <span className="text-xs font-medium uppercase tracking-[0.18em] text-slate-400">
                        {item.href}
                      </span>
                    </div>
                    <h3 className="mt-3 text-xl font-semibold text-slate-950">
                      {highlightText(item.title, deferredQuery)}
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-slate-600">
                      {highlightText(item.description, deferredQuery)}
                    </p>
                  </button>
                ))}
              </div>
            ) : (
              <div className="rounded-[24px] border border-slate-200/80 bg-[#f7f4ef] px-5 py-8 text-center text-sm leading-7 text-slate-600">
                No matching results found. Try searching for a scrap grade, blog
                topic, service, or page name.
              </div>
            )
          ) : (
            <div className="grid gap-3">
              <p className="px-2 text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                Suggested Searches
              </p>
              {suggestions.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => onSelect(item)}
                  className="rounded-[22px] border border-slate-200/80 bg-white px-5 py-4 text-left transition-all duration-300 hover:-translate-y-0.5 hover:border-slate-300 hover:bg-slate-50"
                >
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="rounded-full bg-[#f7f4ef] px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-slate-600">
                      {item.type}
                    </span>
                  </div>
                  <h3 className="mt-3 text-xl font-semibold text-slate-950">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    {item.description}
                  </p>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
