/**
 * Formats a date as a 12-hour time.
 * Example: 03:45 PM
 */
export function formatTime(date: Date = new Date()): string {
  return date.toLocaleTimeString('en-IN', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  });
}

/**
 * Formats a date for display.
 * Example: 28 Oct 2026
 */
export function formatDate(date: Date = new Date()): string {
  return date.toLocaleDateString('en-IN', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  });
}
