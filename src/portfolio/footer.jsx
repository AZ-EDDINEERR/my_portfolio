import React from "react";
import { Link } from "react-router-dom";

const links = [
  { label: "ABOUT", href: "about" },
  { label: "SKILLS", href: "skills" },
  { label: "PROJECTS", href: "projects" },
  { label: "FORMATION", href: "formation" },
  { label: "CONTACT", href: "contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#070b12] text-white font-mono border-t border-white/5 px-8 md:px-16 py-12">
      <div className="flex flex-wrap items-start justify-between gap-10">
        {/* Logo + description */}
        <div className="max-w-xs">
          <span className="text-sm tracking-widest text-cyan-400 font-semibold">
            &lt;DEV /&gt;
          </span>
          <p className="mt-4 text-slate-400 text-sm leading-relaxed">
            Développeur full-stack passionné, spécialisé en Laravel, React et
            PHP. Je construis des solutions web robustes et performantes.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <p className="text-xs tracking-widest text-slate-500 mb-4">NAVIGATION</p>
          <ul className="space-y-2">
            {links.map((link) => (
              <li key={link.label}>
                <Link
                  to={link.href}
                  className="text-sm text-slate-400 hover:text-cyan-400 transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <p className="text-xs tracking-widest text-slate-500 mb-4">CONTACT</p>
          <ul className="space-y-2 text-sm text-slate-400">
            <li>azeddineerrahmaoui2@gmail.com</li>
            <li>Rabat, Maroc</li>
          </ul>
        </div>

        {/* Réseaux sociaux */}
        <div>
          <p className="text-xs tracking-widest text-slate-500 mb-4">SUIVEZ-MOI</p>
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
        </div>
      </div>

      <div className="mt-12 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-500 tracking-widest">
        <span>&copy; {year} AZ-EDDINE ERRAHMAOUI. Tous droits réservés.</span>
        <span>AZ-EDDINE ERRAHMAOUI</span>
      </div>
    </footer>
  );
}