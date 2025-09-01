// lib/rec.ts
import { PLACES, Place } from '../data/places';

export function getRecommended(interests: string[] = [], max = 20): Place[] {
  if (!interests || interests.length === 0) return PLACES.slice(0, max);
  const score = (p: Place) => {
    const interestMatches = p.tags.reduce((acc, t) => acc + (interests.includes(t) ? 1 : 0), 0);
    const interestScore = interestMatches / Math.max(1, p.tags.length);
    return interestScore * 4 + (p.rating || 3) - (p.crowd_score || 0);
  };
  return [...PLACES].sort((a, b) => score(b) - score(a)).slice(0, max);
}
