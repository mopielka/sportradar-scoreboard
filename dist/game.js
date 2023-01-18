import { generateId } from './utils';
export const createGame = (homeTeamName, awayTeamName) => ({
    id: generateId(),
    homeTeamName,
    awayTeamName,
    homeScore: 0,
    awayScore: 0,
});
export const updateGameScore = (game, homeScore, awayScore) => ({
    ...game,
    homeScore,
    awayScore,
});
//# sourceMappingURL=game.js.map