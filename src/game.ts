import type { Game } from './types';
import { generateId } from './utils';

export const createGame = (homeTeamName: string, awayTeamName: string): Game => ({
  id: generateId(),
  homeTeamName,
  awayTeamName,
  homeScore: 0,
  awayScore: 0,
});

export const updateGameScore = (game: Game, homeScore: number, awayScore: number): Game => ({
  ...game,
  homeScore,
  awayScore,
});
