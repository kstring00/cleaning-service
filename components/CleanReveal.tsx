"use client";

import { useState } from "react";

export function CleanReveal() {
  const [reveal, setReveal] = useState(58);

  return (
    <div className="reveal-shell">
      <div className="reveal-meta">
        <span>INTERACTIVE RESET</span>
        <b>{reveal}% CLEAN</b>
      </div>
      <div className="reveal-stage" style={{ "--reveal": `${reveal}%` } as React.CSSProperties}>
        <div className="mess-layer">
          <div className="dust d1" />
          <div className="dust d2" />
          <div className="dust d3" />
          <div className="smudge s1" />
          <div className="smudge s2" />
          <span>BEFORE</span>
        </div>
        <div className="clean-layer">
          <div className="clean-shine" />
          <div className="counter-line" />
          <span>AFTER</span>
        </div>
        <div className="wipe-line"><i /></div>
      </div>
      <input
        aria-label="Reveal clean surface"
        className="reveal-range"
        type="range"
        min="8"
        max="92"
        value={reveal}
        onChange={(event) => setReveal(Number(event.target.value))}
      />
      <p className="tiny-note">Concept visualization — replace with Everything Clean&apos;s real project photos with permission.</p>
    </div>
  );
}
