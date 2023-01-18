import type {Game, Scoreboard} from './types';
import { createGame, updateGameScore } from './game';

export const createScoreboard = (): Scoreboard => [];

export const startGame = (
  scoreboard: Scoreboard,
  homeTeamName: string,
  awayTeamName: string
): { newScoreboard: Scoreboard, gameId: string } => {
  const game = createGame(homeTeamName, awayTeamName);

  return { newScoreboard: [...scoreboard, game], gameId: game.id };
}

export const finishGame = (scoreboard: Scoreboard, gameId: string): Scoreboard =>
  scoreboard.filter((game) => game.id !== gameId);

export const updateScore = (
  scoreboard: Scoreboard,
  gameId: string,
  homeScore: number,
  awayScore: number
): Scoreboard =>
  scoreboard.map((game) =>
    game.id === gameId ? updateGameScore(game, homeScore, awayScore) : game
  );
