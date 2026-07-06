import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const links = [
  { label: "ABOUT", to: "/about" },
  { label: "SKILLS", to: "/skills" },
  { label: "PROJECTS", to: "/projects" },
  { label: "FORMATION", to: "/formation" },
  { label: "CONTACT", to: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    `flex items-center gap-1 transition-colors ${
      isActive ? "text-cyan-400" : "hover:text-cyan-400"
    }`;

  return (
    <nav className="bg-[#070b12] text-white font-mono relative z-50 border-b border-white/5">
      <div className="flex items-center justify-between px-8 md:px-16 py-6">
        <NavLink to="/" className="text-sm tracking-widest text-cyan-400 font-semibold">
          &lt;DEV /&gt;
        </NavLink>

        {/* Liens desktop */}
        <ul className="hidden md:flex items-center gap-8 text-xs tracking-widest text-slate-300">
          {links.map((link) => (
            <li key={link.label}>
              <NavLink to={link.to} className={linkClass}>
                {({ isActive }) => (
                  <>
                    {isActive && <span>{'>'}</span>}
                    {link.label}
                  </>
                )}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <a
            href="mailto:azeddineerrahmaoui2@gmail.com"
            className="hidden md:flex items-center gap-2 border border-white/15 rounded-md px-4 py-2 text-xs tracking-widest hover:border-cyan-400 hover:text-cyan-400 transition-colors"
          >
            <span>&gt;_</span>
            Hire me
          </a>

          {/* Bouton menu mobile */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden w-9 h-9 flex items-center justify-center border border-white/15 rounded-md text-slate-300"
            aria-label="Menu"
          >
            {open ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Menu mobile */}
      {open && (
        <div className="md:hidden px-8 pb-6 border-t border-white/5">
          <ul className="flex flex-col gap-4 pt-6 text-xs tracking-widest text-slate-300">
            {links.map((link) => (
              <li key={link.label}>
                <NavLink to={link.to} className={linkClass} onClick={() => setOpen(false)}>
                  {({ isActive }) => (
                    <>
                      {isActive && <span>›</span>}
                      {link.label}
                    </>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>
          <a
            href="mailto:dev@portfolio.fr"
            className="mt-6 w-full flex items-center justify-center gap-2 border border-white/15 rounded-md px-4 py-2 text-xs tracking-widest hover:border-cyan-400 hover:text-cyan-400 transition-colors"
          >
            <span>&gt;_</span>
            Hire me
          </a>
        </div>
      )}
    </nav>
  );
}