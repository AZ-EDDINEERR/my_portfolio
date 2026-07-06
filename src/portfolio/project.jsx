import React from "react";

const projects = [
  {
    index: "_01",
    title: "Plateforme de Gestion de Projet de Génie Civil",
    tags: ["Laravel", "ReactJS", "MySQL", "API REST", "Git"],
    image:'genieCivil.png',
    features: [
      "Gestion complète des projets et suivi de leur avancement",
      "Gestion des devis clients, de leur création à leur suivi",
      "Gestion des tâches avec affectation, priorités et suivi de l'état d'avancement",
      "Gestion des candidats et de leurs informations pour le recrutement",
      "Développement d'une API REST avec Laravel et d'une interface utilisateur dynamique avec ReactJS",
    ],
    live: "#",
    source: "#",
  },
  {
    index: "_02",
    title: "Site de Gestion d'un Magasin de Décoration",
    image: "SITEDECORATION.png",
    tags: ["Laravel", "ReactJS", "MySQL", "API REST", "Git"],
    features: [
      "Gestion des produits, des catégories et des stocks",
      "Gestion des clients, des fournisseurs et des commandes",
      "Suivi des mouvements de stock et mise à jour des quantités disponibles",
      "Mise en œuvre d'opérations CRUD, de l'authentification et de la gestion des rôles",
      "Conception de la base de données et développement d'API REST",
    ],
    live: "#",
    source: "https://github.com/AZ-EDDINEERR/PROJET-DECORATION.git",
  },
  {
    index: "_03",
    title: "ReactCours — Plateforme de Cours en Ligne",
    image: "coursReact.png",
    tags: ["ReactJS", "React Router", "Redux", "Bootstrap", "CSS"],
    features: [
      "Développement d'une plateforme moderne de cours en ligne avec ReactJS",
      "Navigation fluide entre les pages grâce à React Router",
      "Gestion de l'état global de l'application avec Context API",
      "Interface utilisateur responsive développée avec Bootstrap et CSS",
      "Présentation des formations avec une expérience utilisateur optimisée",
      "Déploiement de l'application sur une plateforme d'hébergement cloud",
    ],
    live: "#",
    source: "https://github.com/AZ-EDDINEERR/ReactCours-Pro-by-Az-eddine.git",
  },
  {
    index: "_04",
    title: "Application de Gestion des Rendez-vous Médicaux",
    tags: ["PHP natif", "MySQL"],
    features: [
      "Prise de rendez-vous en ligne pour les patients",
      "Gestion des disponibilités des médecins",
      "Suivi de l'historique des consultations",
    ],
    live: "#",
    source: "https://github.com/AZ-EDDINEERR/PROJET-MEDICAL.git",
  },
];

export default function ProjectsSection() {
  return (
    <div className="bg-[#070b12] text-white font-mono min-h-screen">
      {/* CONTENT */}
      <section className="px-8 md:px-16 py-20">
        <p className="text-cyan-400 text-xs tracking-[0.2em] mb-3">
          {" // 03 — PROJETS"}
        </p>
        <h2 className="font-bold text-3xl md:text-4xl mb-12">Réalisations récentes</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((p) => (
            <div
              key={p.index}
              className="rounded-md overflow-hidden border border-white/10 bg-[#0b111c] hover:border-cyan-400/40 transition-colors flex flex-col"
            >
              {/* Image placeholder */}
              <div className="relative h-90 bg-gradient-to-br from-slate-700 to-slate-900 flex items-center justify-center">
                <span className="absolute top-3 left-3 text-cyan-400 text-xs tracking-widest">
                  {p.index}
                </span>
                {p.image ?
                  <img
                    src={`${p.image}`}
                    alt={p.title}
                    className="w-full h-full object-cover"
                  />
                : <div className=" h-60 flex items-center justify-center text-slate-500 text-sm">Aperçu du projet</div>}
              </div>

              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-cyan-400 font-semibold text-lg leading-snug">
                  {p.title}
                </h3>

                <ul className="mt-4 space-y-2">
                  {p.features.map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-slate-400 text-sm leading-relaxed"
                    >
                      <span className="text-cyan-400 mt-1 shrink-0">▸</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] tracking-wide text-cyan-400 border border-cyan-400/30 rounded px-2 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-6 pt-4 border-t border-white/10 flex items-center gap-6 text-xs text-slate-400">
                  <a
                    href={p.live}
                    className="flex items-center gap-1 hover:text-cyan-400 transition-colors"
                  >
                    <span>↗</span> Live
                  </a>
                  <a
                    href={p.source}
                    className="flex items-center gap-1 hover:text-cyan-400 transition-colors"
                  >
                    <span>&lt;/&gt;</span> Source
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}