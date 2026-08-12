"use client";

import { useMemo, useState } from "react";
import { siteConfig } from "@/config/site";

const serviceOptions = [
  "Home cleaning",
  "Deep cleaning",
  "Move-in / move-out",
  "Airbnb / short-term rental",
  "Office cleaning",
  "Specialty space",
  "Not sure yet",
];

const timingOptions = ["As soon as possible", "This week", "Next week", "Flexible"];

export function QuoteBuilder() {
  const [service, setService] = useState(serviceOptions[0]);
  const [timing, setTiming] = useState(timingOptions[1]);
  const [zip, setZip] = useState("");
  const [notes, setNotes] = useState("");

  const sms = useMemo(() => {
    const message = [
      `Hi Michael — I'd like a cleaning quote from Everything Clean.`,
      `Service: ${service}`,
      `Timing: ${timing}`,
      zip ? `ZIP: ${zip}` : null,
      notes ? `Notes: ${notes}` : null,
    ]
      .filter(Boolean)
      .join("\n");

    return `${siteConfig.smsHref}?&body=${encodeURIComponent(message)}`;
  }, [service, timing, zip, notes]);

  return (
    <div className="quote-console">
      <div className="console-bar">
        <span><i /> QUOTE BUILDER</span>
        <span>TEXT-READY</span>
      </div>

      <div className="quote-block">
        <p className="field-kicker">01 / WHAT NEEDS CLEANING?</p>
        <div className="choice-cloud">
          {serviceOptions.map((option) => (
            <button
              key={option}
              type="button"
              onClick={() => setService(option)}
              className={service === option ? "quote-chip active" : "quote-chip"}
            >
              {option}
            </button>
          ))}
        </div>
      </div>

      <div className="quote-grid">
        <div className="quote-block">
          <p className="field-kicker">02 / WHEN?</p>
          <select value={timing} onChange={(event) => setTiming(event.target.value)}>
            {timingOptions.map((option) => <option key={option}>{option}</option>)}
          </select>
        </div>
        <label className="quote-block">
          <span className="field-kicker">03 / ZIP CODE</span>
          <input value={zip} onChange={(event) => setZip(event.target.value)} inputMode="numeric" placeholder="77598" />
        </label>
      </div>

      <label className="quote-block">
        <span className="field-kicker">04 / ANYTHING WE SHOULD KNOW?</span>
        <textarea value={notes} onChange={(event) => setNotes(event.target.value)} rows={4} placeholder="Bedrooms, bathrooms, move-out date, special areas, office size..." />
      </label>

      <a className="quote-submit" href={sms}>
        TEXT EVERYTHING CLEAN <span>↗</span>
      </a>
      <p className="console-foot">Opens a pre-filled text to {siteConfig.phoneDisplay}. Nothing is submitted or stored on this preview.</p>
    </div>
  );
}
