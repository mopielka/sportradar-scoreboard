import type { Game } from '../types';

export const getTimeNow = (): Date => new Date();

export const generateId = (): string => Math.random().toString(16).slice(2, 12);

export const compareGamesByCreatedAt = (game1: Game, game2: Game): number =>
  game1.createdAt.getTime() - game2.createdAt.getTime();
