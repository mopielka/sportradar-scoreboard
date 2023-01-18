import type { Scoreboard } from './types';
export declare const createScoreboard: () => Scoreboard;
export declare const startGame: (scoreboard: Scoreboard, homeTeamName: string, awayTeamName: string) => Scoreboard;
export declare const finishGame: (scoreboard: Scoreboard, gameId: string) => Scoreboard;
export declare const updateScore: (scoreboard: Scoreboard, gameId: string, homeScore: number, awayScore: number) => Scoreboard;
//# sourceMappingURL=scoreboard.d.ts.map