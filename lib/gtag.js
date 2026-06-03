// Google Ads conversion tracking — Enhanced Conversions for Leads.
//
// These identifiers are PUBLIC (they ship in the page source), so they live
// here as plain constants rather than secret env vars. You can still override
// them via NEXT_PUBLIC_* env if you ever need to point at a different account
// without touching code.
//
// Action: "Submit lead form" (website tag action). The page fires this on form
// submit with the user's email/phone so Google can match the conversion back to
// the ad click — and back to your later offline upload — by hashed email,
// instead of relying only on the fragile gclid.
export const GADS_CONVERSION_ID =
  process.env.NEXT_PUBLIC_GADS_CONVERSION_ID || "AW-16633269034";
export const GADS_CONVERSION_LABEL =
  process.env.NEXT_PUBLIC_GADS_CONVERSION_LABEL || "0ImQCPjohrgcEKqWrvs9";
export const GADS_SEND_TO = `${GADS_CONVERSION_ID}/${GADS_CONVERSION_LABEL}`;

// Normalise an Australian phone number to E.164 (+61…) for the best enhanced-
// conversions match rate. Google hashes the value for us; we only clean format.
export function toE164AU(raw) {
  if (!raw) return "";
  const p = String(raw).replace(/[^\d+]/g, "");
  if (!p) return "";
  if (p.startsWith("+")) return p;
  if (p.startsWith("61")) return "+" + p;
  if (p.startsWith("0")) return "+61" + p.slice(1);
  return "+61" + p;
}

// Fire the "Submit lead form" conversion with user-provided data attached.
// Google's tag normalises + hashes the email/phone client-side before sending,
// so no raw PII leaves the browser unhashed. Safe to call before gtag has
// loaded — it just no-ops.
export function reportLeadConversion({
  email,
  phone,
  value = 1.0,
  currency = "AUD",
} = {}) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;

  const userData = {};
  if (email) userData.email = String(email).trim().toLowerCase();
  const phoneE164 = toE164AU(phone);
  if (phoneE164) userData.phone_number = phoneE164;

  if (Object.keys(userData).length > 0) {
    window.gtag("set", "user_data", userData);
  }

  window.gtag("event", "conversion", {
    send_to: GADS_SEND_TO,
    value,
    currency,
  });
}
