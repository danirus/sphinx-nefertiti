export function formatNumber(num) {
  const def_locale = document.documentElement.lang || "en";
  return num.toLocaleString(def_locale, {
    maximumFractionDigits: 2,
    notation: 'compact',
    compactDisplay: 'short'
  });
}
