/**
 * Digital Dost — Greeting Utilities
 */

export type GreetingPeriod = 'morning' | 'afternoon' | 'evening' | 'night';

export const DEFAULT_USERNAME = 'Dost';

/**
 * Returns a greeting based on the local time.
 *
 * Morning:   5 AM – 11:59 AM
 * Afternoon: 12 PM – 4:59 PM
 * Evening:   5 PM – 8:59 PM
 * Night:     9 PM – 4:59 AM
 */
export function getGreetingPeriod(date: Date = new Date()): GreetingPeriod {
  const hour = date.getHours();

  if (hour >= 5 && hour < 12) return 'morning';
  if (hour >= 12 && hour < 17) return 'afternoon';
  if (hour >= 17 && hour < 21) return 'evening';

  return 'night';
}

/**
 * Returns the greeting text for the current time.
 */
export function getGreeting(date: Date = new Date()): string {
  const period = getGreetingPeriod(date);

  const greetings: Record<GreetingPeriod, string> = {
    morning: 'Good morning',
    afternoon: 'Good afternoon',
    evening: 'Good evening',
    night: 'Good night',
  };

  return greetings[period];
}

/**
 * Returns a personalized username or the default "Dost".
 */
export function getGreetingName(username?: string | null): string {
  const name = username?.trim();

  return name || DEFAULT_USERNAME;
}

/**
 * Catchy hooks displayed on the Home screen.
 * Keep these short, friendly, and relevant to learning.
 */
export const GREETING_HOOKS: readonly string[] = [
  'What would you like to learn today?',
  'Small steps. Big skills. Your journey starts here.',
  'Turn your curiosity into a new skill.',
  'Learn something useful every day.',
  'Your next big idea starts with learning.',
  'Explore something new. Build something amazing.',
  'A little learning can take you a long way.',
  'Ready to learn something new?',
];

/**
 * Returns the next hook index, wrapping around to the beginning.
 */
export function getNextHookIndex(
  currentIndex: number,
  totalHooks: number = GREETING_HOOKS.length,
): number {
  if (totalHooks <= 0) return 0;

  return (currentIndex + 1) % totalHooks;
}
