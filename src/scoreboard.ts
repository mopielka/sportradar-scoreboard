import type { Game, Scoreboard } from './types';
import { createGame, updateGameScore } from './game';

export const createScoreboard = (title: string): Scoreboard => ({
  title,
  games: [],
});

export const startGame = (
  scoreboard: Scoreboard,
  homeTeamName: string,
  awayTeamName: string
): Scoreboard => ({
  ...scoreboard,
  games: [...scoreboard.games, createGame(homeTeamName, awayTeamName)],
});

export const finishGame = (scoreboard: Scoreboard, gameId: string): Scoreboard => ({
  ...scoreboard,
  games: scoreboard.games.filter((game) => game.id !== gameId),
});

export const updateScore = (
  scoreboard: Scoreboard,
  gameId: string,
  homeScore: number,
  awayScore: number
): Scoreboard => ({
  ...scoreboard,
  games: scoreboard.games.map((game) =>
    game.id === gameId ? updateGameScore(game, homeScore, awayScore) : game
  ),
});

export const getGamesSummary = (scoreboard: Scoreboard): Game[] =>
  [...scoreboard.games]
    .sort((a, b) => a.homeScore + a.awayScore - (b.homeScore + b.awayScore))
    .reverse();
