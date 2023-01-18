import { createGame, updateGameScore } from './game';
export const createScoreboard = () => [];
export const startGame = (scoreboard, homeTeamName, awayTeamName) => [...scoreboard, createGame(homeTeamName, awayTeamName)];
export const finishGame = (scoreboard, gameId) => scoreboard.filter((game) => game.id !== gameId);
export const updateScore = (scoreboard, gameId, homeScore, awayScore) => scoreboard.map((game) => game.id === gameId ? updateGameScore(game, homeScore, awayScore) : game);
//# sourceMappingURL=scoreboard.js.map