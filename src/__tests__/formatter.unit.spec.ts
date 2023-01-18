import type { Scoreboard } from '../types';
import { formatScoreboard } from '../formatter';

describe('module formatter', () => {
  describe('function formatScoreboard', () => {
    it('reorders the scoreboard by total score descending and formats it as an ordered list', () => {
      const scoreboard: Scoreboard = [
        { id: 'a', homeTeamName: 'Aaa', homeScore: 1, awayTeamName: 'Bbb', awayScore: 1 },
        { id: 'b', homeTeamName: 'Ccc', homeScore: 2, awayTeamName: 'Ddd', awayScore: 2 },
        { id: 'c', homeTeamName: 'Eee', homeScore: 5, awayTeamName: 'Fff', awayScore: 0 },
        { id: 'd', homeTeamName: 'Ggg', homeScore: 1, awayTeamName: 'Hhh', awayScore: 3 },
      ];

      const formatted = formatScoreboard(scoreboard);

      expect(formatted).toBe(
        '1. Eee 5 - Fff 0\n' + '2. Ggg 1 - Hhh 3\n' + '3. Ccc 2 - Ddd 2\n' + '4. Aaa 1 - Bbb 1'
      );
    });

    it('formats a list with float and negative scores', () => {
      const scoreboard: Scoreboard = [
        { id: 'a', homeTeamName: 'Foo', homeScore: 100, awayTeamName: 'Bar', awayScore: 200 },
        { id: 'b', homeTeamName: 'Boo', homeScore: 5.5, awayTeamName: 'Xyz', awayScore: -1 },
        { id: 'c', homeTeamName: 'Xxx', homeScore: 1 / 3, awayTeamName: 'Yyy', awayScore: 2 / 3 },
      ];

      const formatted = formatScoreboard(scoreboard);

      expect(formatted).toBe(
        '1. Foo 100 - Bar 200\n' +
          '2. Boo 5.5 - Xyz -1\n' +
          '3. Xxx 0.3333333333333333 - Yyy 0.6666666666666666'
      );
    });
  });
});
