"use client";

import Image from "next/image";
import { useLocale } from "@/context/LocaleContext";
import { useInView } from "@/hooks/useInView";

export default function About() {
  const { t } = useLocale();
  const { ref, isInView } = useInView();

  return (
    <section
      id="about"
      ref={ref}
      className={`reveal ${isInView ? "visible" : ""} py-20 md:py-28`}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-12">
          <div className="flex-shrink-0">
            <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-2xl overflow-hidden border-2 border-electric-500/30 shadow-lg shadow-electric-500/10">
              <Image
                src="/Liranprofile.png"
                alt="Liran - L-Ectric"
                fill
                className="object-cover object-[50%_28%]"
                sizes="(max-width: 768px) 192px, 224px"
              />
            </div>
          </div>
          <div className="flex-1 text-center md:text-start">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="text-electric-400">{t.about.title}</span>
            </h2>
            <div className="space-y-4 text-lg md:text-xl text-slate-400 leading-relaxed">
              {t.about.paragraphs.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
