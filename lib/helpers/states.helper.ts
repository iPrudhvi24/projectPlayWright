import { randomValueFromArray } from './arrays';

export function randomState(country: string): string {
  const states: { [name: string]: string[] } = {
    usa: ['alabama', 'alaska', 'arizona', 'texas', 'california'],
  };

  return randomValueFromArray(states[country.toLowerCase()]);
}
