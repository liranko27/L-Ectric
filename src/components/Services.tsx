"use client";

import { useLocale } from "@/context/LocaleContext";
import { useInView } from "@/hooks/useInView";

const icons = [
  <svg key="home" className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
  </svg>,
  <svg key="panel" className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
  </svg>,
  <svg key="search" className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
  </svg>,
];

export default function Services() {
  const { t } = useLocale();
  const { ref, isInView } = useInView();

  return (
    <section
      id="services"
      ref={ref}
      className={`reveal ${isInView ? "visible" : ""} py-20 md:py-28 bg-dark-800/50`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
          <span className="text-electric-400">{t.services.title}</span>
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.services.items.map((item, i) => (
            <div
              key={i}
              className="group p-6 rounded-2xl bg-dark-900/80 border border-white/5 hover:border-electric-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-electric-500/10"
            >
              <div className="text-electric-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                {icons[i]}
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">{item.title}</h3>
              <p className="text-slate-400">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
