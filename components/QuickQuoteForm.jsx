"use client";

import { useState } from "react";
import { useSourcebuster } from "@/hooks/useSourcebuster";

const WEBHOOK_URL = process.env.NEXT_PUBLIC_LEAD_WEBHOOK_URL || "";

export default function QuickQuoteForm({ compact = false, anchorId }) {
  const trackingData = useSourcebuster();
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    suburb: "",
    scope: "Full design & build",
    timing: "Within 3 months",
    notes: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("idle"); // idle | success | error
  const set = (k, v) => setForm((f) => ({ ...f, [k]: v }));

  const submitStep1 = (e) => {
    e.preventDefault();
    const er = {};
    if (!form.name.trim()) er.name = "Enter your name";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) er.email = "Valid email please";
    if (!/^[0-9\s+()\-]{7,}$/.test(form.phone)) er.phone = "Valid phone number please";
    if (!form.suburb.trim()) er.suburb = "Which suburb?";
    setErrors(er);
    if (Object.keys(er).length === 0) setStep(2);
  };

  const submitStep2 = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    const submissionData = {
      ...form,
      date_time: new Date().toISOString(),
      ...(trackingData && {
        channel: trackingData.channel,
        source: trackingData.source,
        medium: trackingData.medium,
        campaign: trackingData.campaign,
        content: trackingData.content,
        term: trackingData.term,
        gclid: trackingData.gclid,
        firstSource: trackingData.firstSource,
        firstMedium: trackingData.firstMedium,
        firstCampaign: trackingData.firstCampaign,
        visits: trackingData.visits,
        pagesSeen: trackingData.pagesSeen,
        landingPage: trackingData.landingPage,
        leadPage: trackingData.leadPage,
        referer: trackingData.referer,
      }),
    };

    if (!WEBHOOK_URL) {
      console.warn(
        "NEXT_PUBLIC_LEAD_WEBHOOK_URL is not set. Form submission skipped.",
        submissionData
      );
      setSubmitStatus("success");
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(submissionData),
      });
      if (response.ok) {
        setSubmitStatus("success");
      } else {
        setSubmitStatus("error");
      }
    } catch (err) {
      console.error("Form submission error:", err);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitStatus === "success") {
    return (
      <div
        id={anchorId}
        className={"qform qform--sent " + (compact ? "qform--compact" : "")}
      >
        <div className="sent-mark" aria-hidden>
          <svg width="44" height="44" viewBox="0 0 44 44">
            <circle cx="22" cy="22" r="21" fill="none" stroke="currentColor" strokeWidth="1" />
            <path d="M13 22l6 6 12-14" fill="none" stroke="currentColor" strokeWidth="2" />
          </svg>
        </div>
        <h3>Thanks, {form.name.split(" ")[0]} — request received.</h3>
        <p>
          Thibeau will personally call you from <strong>0401 046 618</strong> within 24
          hours (business days) to book your free on-site consult in{" "}
          <strong>{form.suburb}</strong>. Save the number so you don&apos;t miss the call.
        </p>
        <div className="sent-meta">
          <span>✓ No obligation</span>
          <span>✓ Fixed-price quote</span>
          <span>✓ 110% satisfaction guarantee</span>
        </div>
      </div>
    );
  }

  return (
    <form
      id={anchorId}
      className={"qform " + (compact ? "qform--compact" : "")}
      onSubmit={step === 1 ? submitStep1 : submitStep2}
      noValidate
    >
      <div className="qform-head">
        <div>
          <h3>Get your free on-site quote</h3>
          <p>Thibeau calls you personally within 24 hours.</p>
        </div>
        <div className="qform-steps">
          <span className={step >= 1 ? "on" : ""}>1</span>
          <span className={step >= 2 ? "on" : ""}>2</span>
        </div>
      </div>

      {step === 1 && (
        <>
          <label className={"field " + (errors.name ? "has-error" : "")}>
            <span>Your name</span>
            <input
              type="text"
              name="name"
              id={(anchorId || "qform") + "-name"}
              value={form.name}
              onChange={(e) => set("name", e.target.value)}
              placeholder="Full name"
              autoComplete="name"
            />
            {errors.name && <em>{errors.name}</em>}
          </label>
          <label className={"field " + (errors.email ? "has-error" : "")}>
            <span>Email</span>
            <input
              type="email"
              name="email"
              id={(anchorId || "qform") + "-email"}
              inputMode="email"
              value={form.email}
              onChange={(e) => set("email", e.target.value)}
              placeholder="you@example.com"
              autoComplete="email"
            />
            {errors.email && <em>{errors.email}</em>}
          </label>
          <div className="field-row">
            <label className={"field " + (errors.phone ? "has-error" : "")}>
              <span>Phone</span>
              <input
                type="tel"
                name="phone"
                id={(anchorId || "qform") + "-phone"}
                inputMode="tel"
                value={form.phone}
                onChange={(e) => set("phone", e.target.value)}
                placeholder="04XX XXX XXX"
                autoComplete="tel"
              />
              {errors.phone && <em>{errors.phone}</em>}
            </label>
            <label className={"field " + (errors.suburb ? "has-error" : "")}>
              <span>Suburb</span>
              <input
                type="text"
                name="suburb"
                id={(anchorId || "qform") + "-suburb"}
                value={form.suburb}
                onChange={(e) => set("suburb", e.target.value)}
                placeholder="Cottesloe"
                autoComplete="address-level2"
              />
              {errors.suburb && <em>{errors.suburb}</em>}
            </label>
          </div>
          <button type="submit" className="btn btn--primary btn--full btn--lg">
            Get my free quote
            <svg width="16" height="16" viewBox="0 0 16 16">
              <path d="M3 8h10M9 4l4 4-4 4" fill="none" stroke="currentColor" strokeWidth="1.8" />
            </svg>
          </button>
          <div className="qform-trust">
            <span>
              <svg width="12" height="12" viewBox="0 0 12 12">
                <path
                  d="M6 1l5 2v3a5 5 0 0 1-5 5 5 5 0 0 1-5-5V3l5-2z"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.2"
                />
              </svg>{" "}
              100% free · No obligation
            </span>
            <span>
              <svg width="12" height="12" viewBox="0 0 12 12">
                <circle cx="6" cy="6" r="5" fill="none" stroke="currentColor" strokeWidth="1.2" />
                <path d="M4 6l1.5 1.5L8 5" fill="none" stroke="currentColor" strokeWidth="1.2" />
              </svg>{" "}
              24hr response
            </span>
          </div>
        </>
      )}

      {step === 2 && (
        <>
          <p className="qform-progress">Last step — a few details so Thibeau comes prepared.</p>
          <label className="field">
            <span>Project</span>
            <select value={form.scope} onChange={(e) => set("scope", e.target.value)}>
              <option>Full design &amp; build</option>
              <option>Design only</option>
              <option>Pool surrounds</option>
              <option>Front yard / entry</option>
              <option>Backyard renovation</option>
              <option>Turf installation</option>
              <option>Artificial grass</option>
              <option>Garden refresh</option>
              <option>Maintenance</option>
            </select>
          </label>
          <label className="field">
            <span>When would you like to start?</span>
            <select value={form.timing} onChange={(e) => set("timing", e.target.value)}>
              <option>ASAP</option>
              <option>Within 3 months</option>
              <option>3–6 months</option>
              <option>Just exploring</option>
            </select>
          </label>
          <label className="field">
            <span>Anything else? (optional)</span>
            <textarea
              rows="2"
              value={form.notes}
              onChange={(e) => set("notes", e.target.value)}
              placeholder="Access notes, inspiration, must-haves..."
            />
          </label>
          {submitStatus === "error" && (
            <div className="qform-error" role="alert">
              Something went wrong. Please try again or call (08) 9000 0000.
            </div>
          )}
          <button
            type="submit"
            className="btn btn--primary btn--full btn--lg"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending…" : "Book my free consult"}
            {!isSubmitting && (
              <svg width="16" height="16" viewBox="0 0 16 16">
                <path
                  d="M3 8h10M9 4l4 4-4 4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                />
              </svg>
            )}
          </button>
          <button
            type="button"
            className="qform-back"
            onClick={() => setStep(1)}
            disabled={isSubmitting}
          >
            ← Back
          </button>
        </>
      )}
    </form>
  );
}
