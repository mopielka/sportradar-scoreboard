import type { Game, Scoreboard } from './types';

const lineFormatter = ({ homeTeamName, homeScore, awayTeamName, awayScore }: Game, index: number) =>
  `${index + 1}. ${homeTeamName} ${homeScore} - ${awayTeamName} ${awayScore}`;

const reorderGamesByTotalDescending = (scoreboard: Scoreboard): Scoreboard =>
  [...scoreboard].sort((a, b) => a.homeScore + a.awayScore - (b.homeScore + b.awayScore)).reverse();

export const formatScoreboard = (scoreboard: Scoreboard): string =>
  reorderGamesByTotalDescending(scoreboard).map(lineFormatter).join('\n');
