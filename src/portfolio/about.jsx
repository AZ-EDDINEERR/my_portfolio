import React from "react";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="min-h-screen bg-[#070b12] text-white font-mono relative overflow-hidden flex flex-col">
      {/* grille de fond */}
      <div
        className="absolute inset-0 opacity-[0.07] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#22d3ee 1px, transparent 1px), linear-gradient(90deg, #22d3ee 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      {/* halo cyan */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none" />

      {/* HERO CONTENT */}
      <main className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-8 md:px-16 max-w-4xl mx-auto">
        <p className="text-cyan-400 text-xs tracking-[0.2em] mb-6">
         {" // FULL-STACK DEVELOPER"}
        </p>

        <h1 className="font-bold leading-[0.95] tracking-tight">
          <span className="block text-5xl md:text-7xl text-white">Bonjour,</span>
          <span className="block text-5xl md:text-7xl text-white">je suis</span>
          <span
            className="block text-5xl md:text-7xl mt-1"
            style={{
              WebkitTextStroke: "1.5px #22d3ee",
              color: "transparent",
            }}
          >
            Développeur
          </span>
        </h1>

        <p className="mt-8 text-slate-400 text-base md:text-lg leading-relaxed max-w-xl">
          Je conçois et développe des applications web performantes — de la
          base de données à l'interface utilisateur, avec{" "}
          <span className="text-white font-semibold">Laravel</span>,{" "}
          <span className="text-white font-semibold">React</span>,{" "}
          <span className="text-white font-semibold">PHP</span> &amp;{" "}
          <span className="text-white font-semibold">JavaScript</span>.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link to={'/projects'} className="flex items-center gap-2 bg-cyan-400 text-[#070b12] font-semibold text-sm px-6 py-3 rounded-md hover:bg-cyan-300 transition-colors">
            Voir mes projets
            <span>→</span>
          </Link>
          <Link to='/contact' className="border border-white/15 text-sm px-6 py-3 rounded-md hover:border-cyan-400 hover:text-cyan-400 transition-colors">
            Me contacter
          </Link>
        </div>
      </main>

      {/* FOOTER ROW */}
      <div className="relative z-10 flex items-center justify-between px-8 md:px-16 py-8 max-w-4xl mx-auto w-full">
          <div className="flex items-center gap-4 text-slate-400">
            <a href="https://github.com/AZ-EDDINEERR" aria-label="GitHub" className="hover:text-cyan-400 transition-colors">
              <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.55 2.87 8.41 6.84 9.77.5.1.68-.22.68-.49 0-.24-.01-.87-.01-1.71-2.78.62-3.37-1.37-3.37-1.37-.46-1.19-1.11-1.51-1.11-1.51-.91-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.31.1-2.72 0 0 .84-.28 2.75 1.05a9.3 9.3 0 0 1 2.5-.35c.85 0 1.71.12 2.5.35 1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.46.1 2.72.64.72 1.03 1.63 1.03 2.75 0 3.93-2.34 4.79-4.57 5.05.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.6.69.49A10.02 10.02 0 0 0 22 12.26C22 6.58 17.52 2 12 2z" />
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/az-eddine-errahmaoui-672759376" aria-label="LinkedIn" className="hover:text-cyan-400 transition-colors">
              <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.03-1.85-3.03-1.85 0-2.14 1.45-2.14 2.94v5.66H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z" />
              </svg>
            </a>
            <a href="mailto:azeddineerrahmaoui2@gmail.com" aria-label="Email" className="hover:text-cyan-400 transition-colors">
              <svg
                className="w-[18px] h-[18px]"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 8l7.89 5.26a2 2 0 0 0 2.22 0L21 8M5 19h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2z"
                />
              </svg>
            </a>
          </div>
        <span className="text-xs text-slate-500 tracking-widest">v2026.06</span>
      </div>
    </div>
  );
}