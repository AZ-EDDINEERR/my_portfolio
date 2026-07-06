import React, { useState } from "react";

export default function ContactSection() {
  const [form, setForm] = useState({
    nom: "",
    email: "",
    sujet: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    {"// Remplace par ton propre appel API / service d'envoi d'email"}
    console.log("Message envoyé :", form);
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <section className="bg-[#070b12] text-white font-mono px-8 md:px-16 py-24">
      <p className="text-cyan-400 text-xs tracking-[0.2em] mb-3">
       {" // 05 — CONTACT"}
      </p>
      <h2 className="font-bold text-3xl md:text-4xl">Travaillons ensemble</h2>
      <p className="mt-4 text-slate-400 text-sm md:text-base max-w-xl">
        Disponible pour des projets freelance, des missions longues durées ou
        des opportunités en CDI. N'hésitez pas à me contacter.
      </p>

      <div className="mt-14 grid md:grid-cols-2 gap-16">
        {/* INFOS CONTACT */}
        <div className="space-y-8">
          <div className="flex items-start gap-4">
            <span className="w-9 h-9 flex items-center justify-center rounded-md border border-white/15 text-cyan-400">
              ✉
            </span>
            <div>
              <p className="text-xs tracking-widest text-slate-500">EMAIL</p>
              <p className="text-sm text-slate-200 mt-1">azeddineerrahmaoui2@gmail.com</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <span className="w-9 h-9 flex items-center justify-center rounded-md border border-white/15 text-cyan-400">
              ⌥
            </span>
            <div>
              <p className="text-xs tracking-widest text-slate-500">GITHUB</p>
              <p className="text-sm text-slate-200 mt-1">github.com/AZ-EDDINEERR</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <span className="w-9 h-9 flex items-center justify-center rounded-md border border-white/15 text-cyan-400">
              in
            </span>
            <div>
              <p className="text-xs tracking-widest text-slate-500">LINKEDIN</p>
              <p className="text-sm text-slate-200 mt-1">
                linkedin.com/in/az-eddine-errahmaoui-672759376
              </p>
            </div>
          </div>
        </div>

        {/* FORMULAIRE */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <label className="text-xs tracking-widest text-slate-500">NOM</label>
              <input
                type="text"
                name="nom"
                value={form.nom}
                onChange={handleChange}
                placeholder="Votre nom"
                className="mt-2 w-full bg-[#0b111c] border border-white/10 rounded-md px-4 py-3 text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors"
              />
            </div>
            <div>
              <label className="text-xs tracking-widest text-slate-500">EMAIL</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="votre@gmail.com"
                className="mt-2 w-full bg-[#0b111c] border border-white/10 rounded-md px-4 py-3 text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors"
              />
            </div>
          </div>

          <div>
            <label className="text-xs tracking-widest text-slate-500">SUJET</label>
            <input
              type="text"
              name="sujet"
              value={form.sujet}
              onChange={handleChange}
              placeholder="Votre projet..."
              className="mt-2 w-full bg-[#0b111c] border border-white/10 rounded-md px-4 py-3 text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors"
            />
          </div>

          <div>
            <label className="text-xs tracking-widest text-slate-500">MESSAGE</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Décrivez votre projet..."
              rows={5}
              className="mt-2 w-full bg-[#0b111c] border border-white/10 rounded-md px-4 py-3 text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors resize-none"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-cyan-400 text-[#070b12] font-semibold text-sm py-3 rounded-md hover:bg-cyan-300 transition-colors flex items-center justify-center gap-2"
          >
            <span>➤</span>
            {sent ? "Message envoyé !" : "Envoyer le message"}
          </button>
        </form>
      </div>
    </section>
  );
}