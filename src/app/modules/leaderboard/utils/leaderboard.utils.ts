export function getRandomDateOfWeek(weekNumber?: number): Date {
  const weekN = weekNumber || 0;
  const currentWeekStartDate = getFirstDayOfWeek(weekN);
  const currentWeekEndDate = getLastDayOfWeek(weekN);
  return randomDate(currentWeekStartDate.getTime(), currentWeekEndDate.getTime());
}

export function getFirstDayOfWeek(weekNumber: number) {
  const weekDate = new Date(new Date().getTime() + weekNumber * 60 * 60 * 24 * 7 * 1000);
  const weekStart = weekDate.getDate() - weekDate.getDay() + 1;
  return new Date(weekDate.setDate(weekStart));
}

export function getLastDayOfWeek(weekNumber: number) {
  const weekDate = new Date(new Date().getTime() + weekNumber * 60 * 60 * 24 * 7 * 1000);
  const weekStart = weekDate.getDate() - weekDate.getDay() + 1;
  const weekLast = weekStart + 6;
  return new Date(weekDate.setDate(weekLast));
}

export function getLastDateOfWeekByFirstDate(startDate: Date) {
  const weekDate = new Date(startDate);
  const weekLast = weekDate.getDate() - weekDate.getDay() + 7;
  return new Date(weekDate.setDate(weekLast));
}

export function inRange(startDate: Date, endDate: Date, date: Date) {
  const clonedDate = new Date(endDate.getTime());
  clonedDate.setDate(clonedDate.getDate() + 1);
  return date >= startDate && date < clonedDate;
}

function randomDate(start: number, end: number) {
  return new Date(+start + Math.random() * (end - start));
}
