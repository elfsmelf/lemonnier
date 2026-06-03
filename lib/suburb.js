// Reads the `suburb` URL parameter that the Google Ads ad-group custom
// parameter appends (e.g. ?suburb=Eastern-Perth) and turns it into a clean
// display label ("Eastern Perth"). Custom-parameter values can't contain
// spaces, so the Ads side hyphenates them — we reverse that here.

export function prettifySuburb(raw) {
  if (!raw) return "";
  return String(raw)
    .replace(/[-+]/g, " ")
    .trim()
    .replace(/\s+/g, " ")
    .replace(/\b\w/g, (m) => m.toUpperCase());
}

export function getSuburbFromUrl() {
  return getParam("suburb");
}

// Service phrase passed by the Services campaign ad groups, e.g.
// ?service=Pool-Landscaping -> "Pool Landscaping".
export function getServiceFromUrl() {
  return getParam("service");
}

function getParam(key) {
  if (typeof window === "undefined") return "";
  try {
    return prettifySuburb(new URLSearchParams(window.location.search).get(key));
  } catch {
    return "";
  }
}
