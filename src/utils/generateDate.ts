/* eslint-disable @typescript-eslint/no-explicit-any */
export const getFullDateString = (date: Date): string => {
  const { $y: year, $M: month, $D: day } = date as any;

  const formattedMonth = (month + 1).toString().padStart(2, "0");
  const formattedDay = day.toString().padStart(2, "0");

  return `${year}-${formattedMonth}-${formattedDay}`;
};
