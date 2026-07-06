import React from "react";
const CV_PATH = "/cv/MonCV.pdf";

export default function CvButton({ className = "" }) {
  return (
    <a
      href={CV_PATH}
      download
      className={`flex items-center gap-2 border border-white/15 rounded-md px-6 py-3 text-sm tracking-wide hover:border-cyan-400 hover:text-cyan-400 transition-colors ${className}`}
    >
      <span>⬇</span>
      Télécharger mon CV
    </a>
  );
}