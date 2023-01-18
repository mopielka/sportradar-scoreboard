const lineFormatter = ({ homeTeamName, homeScore, awayTeamName, awayScore }, index) => `${index + 1}. ${homeTeamName} ${homeScore} - ${awayTeamName} ${awayScore}`;
const reorderGamesByTotalDescending = (scoreboard) => [...scoreboard].sort((a, b) => a.homeScore + a.awayScore - (b.homeScore + b.awayScore)).reverse();
export const formatScoreboard = (scoreboard) => reorderGamesByTotalDescending(scoreboard).map(lineFormatter).join('\n');
//# sourceMappingURL=formatter.js.map