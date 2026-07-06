import React, { useState } from "react";

const skills = [
  { name: "JavaScript", level: 92, category: "frontend" },
  { name: "React.js", level: 95, category: "frontend" },
  { name: "Tailwind CSS", level: 90, category: "frontend" },
  { name: "Bootstrap", level: 90, category: "frontend" },
  { name: "PHP", level: 93, category: "backend" },
  { name: "Laravel", level: 95, category: "backend" },
  { name: "Express.js", level: 82, category: "backend" },
  { name: "Java", level: 65, category: "backend" },
  { name: "MySQL", level: 90, category: "backend" },
  { name: "MongoDB", level: 80, category: "backend" },
  { name: "REST API", level: 92, category: "backend" },
  { name: "Git", level: 90, category: "tools" },
  { name: "Docker", level: 72, category: "tools" },
  { name: "SonarQube", level: 78, category: "tools" },
  { name: "Postman", level: 85, category: "tools" },
];

const filters = [
  { key: "all", label: "all" },
  { key: "frontend", label: "frontend" },
  { key: "backend", label: "backend" },
  { key: "tools", label: "tools" },
];

const badges = [
  { label: "Front-End", icon: "◱" },
  { label: "Back-End", icon: "▤" },
  { label: "API REST", icon: "</>" },
  { label: "DevOps", icon: ">_" },
];

export default function SkillsSection() {
  const [active, setActive] = useState("all");

  const filtered =
    active === "all" ? skills : skills.filter((s) => s.category === active);

  return (
    <section className="bg-[#070b12] text-white font-mono px-8 md:px-16 py-24">
      <div className="flex flex-wrap items-center justify-between gap-6 mb-12">
        <div>
          <p className="text-cyan-400 text-xs tracking-[0.2em] mb-3">
           {" // 02 — COMPÉTENCES"}
          </p>
          <h2 className="font-bold text-3xl md:text-4xl">Stack technique</h2>
        </div>

        <div className="flex items-center gap-2">
          {filters.map((f) => (
            <button
              key={f.key}
              onClick={() => setActive(f.key)}
              className={`text-xs tracking-widest px-4 py-2 rounded-md border transition-colors ${
                active === f.key
                  ? "border-cyan-400 text-cyan-400"
                  : "border-white/15 text-slate-400 hover:border-white/30 hover:text-white"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-x-12 gap-y-8">
        {filtered.map((skill) => (
          <div key={skill.name}>
            <div className="flex items-center justify-between text-sm mb-2">
              <span className="text-slate-200">{skill.name}</span>
              <span className="text-cyan-400 text-xs">{skill.level}%</span>
            </div>
            <div className="h-px w-full bg-white/10 relative overflow-hidden">
              <div
                className="h-px bg-cyan-400 absolute left-0 top-0"
                style={{ width: `${skill.level}%` }}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 pt-8 border-t border-white/10 flex flex-wrap gap-4">
        {badges.map((b) => (
          <span
            key={b.label}
            className="flex items-center gap-2 text-xs tracking-widest text-slate-300 border border-white/15 rounded-md px-4 py-2"
          >
            <span className="text-cyan-400">{b.icon}</span>
            {b.label}
          </span>
        ))}
      </div>
    </section>
  );
}