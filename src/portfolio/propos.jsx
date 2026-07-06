import React from "react";

export default function Propos() {
  return (
    <section className="bg-[#070b12] text-white font-mono px-8 md:px-16 py-24">
      <div className="max-w-6xl mx-auto">
        <p className="text-cyan-400 text-xs tracking-[0.2em] mb-12 text-center md:text-left">
          {" // 01 — À PROPOS"}
        </p>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* PHOTO */}
          <div className="relative mx-auto md:mx-0">
            <div className="w-full aspect-[4/5] max-w-sm bg-gradient-to-br from-slate-700 to-slate-900 rounded-md overflow-hidden">
              {/* Remplace par ta propre image : <img src="..." className="w-full h-full object-cover grayscale" /> */}
              <div className="w-full h-full flex items-center justify-center text-slate-500 text-sm">
               <img src="imagePro.jpg" alt="" />
              </div>
            </div>

            <span className="absolute bottom-1 left-4 bg-[#0b111c]/90 border border-cyan-400/30 text-cyan-400 text-xs px-3 py-1.5 rounded-md">
              Disponible immédiatement
            </span>
          </div>

          {/* CONTENU */}
          <div className="text-center md:text-left">
            <h2 className="font-bold text-3xl md:text-4xl leading-tight">
              <span className="block text-white">
                Construire des applications web modernes,
              </span>
              <span className="block text-cyan-400">
                performantes et évolutives.
              </span>
            </h2>

            <p className="mt-6 text-slate-400 text-sm md:text-base leading-relaxed">
              Jeune diplômé en Développement Informatique, je suis passionné
              par la conception d'applications web modernes. J'aime
              transformer des idées en solutions concrètes en utilisant des
              technologies telles que Laravel, ReactJS, PHP, JavaScript et
              MySQL.
            </p>

            <p className="mt-4 text-slate-400 text-sm md:text-base leading-relaxed">
              Au cours de ma formation, j'ai réalisé plusieurs projets
              complets, allant de plateformes de gestion à des applications
              métier. Je m'intéresse particulièrement à l'architecture des
              applications, au développement d'API REST et à la création
              d'interfaces utilisateur intuitives.
            </p>

            <p className="mt-4 text-slate-400 text-sm md:text-base leading-relaxed">
              Aujourd'hui, je suis à la recherche d'une première opportunité
              professionnelle où je pourrai mettre mes compétences en
              pratique, apprendre auprès d'une équipe expérimentée et
              contribuer à des projets à forte valeur ajoutée.
            </p>

            <div className="mt-10 pt-8 border-t border-white/10 grid grid-cols-3 gap-6 text-center md:text-left">
              <div>
                <p className="text-cyan-400 text-2xl md:text-3xl font-bold">
                  5+
                </p>
                <p className="text-slate-400 text-xs md:text-sm mt-1">
                  Projets réalisés
                </p>
              </div>
              <div>
                <p className="text-cyan-400 text-2xl md:text-3xl font-bold">
                  10+
                </p>
                <p className="text-slate-400 text-xs md:text-sm mt-1">
                  Technologies maîtrisées
                </p>
              </div>
              <div>
                <p className="text-cyan-400 text-2xl md:text-3xl font-bold">
                  100%
                </p>
                <p className="text-slate-400 text-xs md:text-sm mt-1">
                  Motivation
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}