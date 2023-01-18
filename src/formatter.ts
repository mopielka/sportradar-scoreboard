import type { Game, Scoreboard } from './types';

const lineFormatter = ({ homeTeamName, homeScore, awayTeamName, awayScore }: Game, index: number) =>
  `${index + 1}. ${homeTeamName} ${homeScore} - ${awayTeamName} ${awayScore}`;

export const formatScoreboard = ({ title, games }: Scoreboard): string =>
  `${title} live results\n` + '---\n' + games.map(lineFormatter).join('\n');
