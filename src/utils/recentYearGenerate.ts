const currentYear = new Date().getFullYear();
export const lastFiveYears = Array.from({ length: 5 }, (_, i) => {
  const year = currentYear + i;
  return { label: year.toString(), value: year.toString() };
});
