import React from "react";

const formations = [
  {
    diploma: "Diplôme de Technicien Spécialisé en Développement Informatique (DTS)",
    school: "OFPPT — Institut Spécialisé de Technologie Appliquée Hay Riyad",
    period: "2024 - 2026",
    location: "Rabat, Maroc",
  },
  {
    diploma: "Baccalauréat Science Physique et Chimie",
    school: "Lycée Mers El Kheir",
    period: "2021 - 2024",
    location: "Rabat, Maroc",
  },
];

export default function EducationSection() {
  return (
    <section className="bg-[#070b12] text-white font-mono px-8 md:px-16 py-24">
      <p className="text-cyan-400 text-xs tracking-[0.2em] mb-3">
        // 04 — FORMATION
      </p>
      <h2 className="font-bold text-3xl md:text-4xl mb-14">Parcours académique</h2>

      <div className="relative max-w-3xl">
        {/* ligne verticale de la timeline */}
        <div className="absolute left-[7px] top-2 bottom-2 w-px bg-white/10" />

        <div className="space-y-12">
          {formations.map((f, i) => (
            <div key={i} className="relative pl-10">
              {/* point de la timeline */}
              <span className="absolute left-0 top-1.5 w-3.5 h-3.5 rounded-full bg-[#070b12] border-2 border-cyan-400" />

              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-slate-500 tracking-widest mb-2">
                <span className="text-cyan-400">{f.period}</span>
                <span className="text-slate-600">•</span>
                <span>{f.location}</span>
              </div>

              <h3 className="text-slate-100 font-semibold text-base md:text-lg leading-snug">
                {f.diploma}
              </h3>
              <p className="mt-1 text-slate-400 text-sm">{f.school}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}