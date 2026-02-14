"use client";

import Image from "next/image";
import { useLocale } from "@/context/LocaleContext";
import { CONTACT } from "@/lib/constants";
import WhatsAppIcon from "./WhatsAppIcon";

export default function Hero() {
  const { t } = useLocale();
  const whatsappUrl = `https://wa.me/${CONTACT.whatsapp.replace(/\D/g, "")}`;

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 md:pt-24">
      {/* Electric glow background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-electric-500/20 rounded-full blur-[120px] electric-glow" />
        <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-electric-600/15 rounded-full blur-[80px] electric-glow" style={{ animationDelay: "1s" }} />
        <div className="absolute bottom-1/4 left-1/3 w-[300px] h-[300px] bg-electric-400/10 rounded-full blur-[60px] electric-glow" style={{ animationDelay: "2s" }} />
      </div>

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.5) 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-4 md:mb-6 animate-fade-up">
          <Image
            src="/logo.png"
            alt="L-Ectric"
            width={1100}
            height={374}
            className="h-64 sm:h-[22rem] md:h-[28rem] lg:h-[32rem] xl:h-[36rem] w-auto max-w-[96vw] object-contain mx-auto drop-shadow-[0_0_40px_rgba(59,130,246,0.4)]"
            priority
          />
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-4 animate-fade-up" style={{ animationDelay: "0.05s" }}>
          <span className="bg-gradient-to-l from-white to-slate-300 bg-clip-text text-transparent">
            {t.hero.headline}
          </span>
        </h1>

        <p className="text-xl sm:text-2xl text-slate-400 mb-6 max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: "0.1s" }}>
          {t.hero.subheadline}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-up" style={{ animationDelay: "0.2s" }}>
          <a
            href={`tel:${CONTACT.phone}`}
            className="group relative px-8 py-4 bg-electric-500 hover:bg-electric-400 text-white font-bold rounded-xl transition-all duration-300 shadow-lg shadow-electric-500/25 hover:shadow-electric-400/40 hover:scale-105"
          >
            <span className="relative z-10">{t.hero.ctaPrimary}</span>
            <span className="absolute inset-0 rounded-xl bg-electric-400 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300" />
          </a>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-8 py-4 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold rounded-xl transition-all duration-300 shadow-lg shadow-[#25D366]/30 hover:shadow-[#25D366]/50 hover:scale-105"
          >
            <WhatsAppIcon className="w-6 h-6" />
            {t.hero.ctaSecondary}
          </a>
        </div>
      </div>
    </section>
  );
}
