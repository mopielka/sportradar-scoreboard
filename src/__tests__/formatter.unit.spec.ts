import type { Scoreboard } from '../types';
import { formatScoreboard } from '../formatter';

describe('module formatter', () => {
  describe('function formatScoreboard', () => {
    it('formats a scoreboard as an ordered list with a title', () => {
      const scoreboard: Scoreboard = {
        title: 'World Cup',
        games: [
          { id: 'a', homeTeamName: 'Foo', homeScore: 1, awayTeamName: 'Bar', awayScore: 2 },
          { id: 'b', homeTeamName: 'Boo', homeScore: 5.5, awayTeamName: 'Xyz', awayScore: -1 },
          { id: 'c', homeTeamName: 'Xxx', homeScore: 1 / 3, awayTeamName: 'Yyy', awayScore: 2 / 3 },
        ],
      };

      const formatted = formatScoreboard(scoreboard);

      expect(formatted).toBe(
        'World Cup live results\n---\n' +
          '1. Foo 1 - Bar 2\n' +
          '2. Boo 5.5 - Xyz -1\n' +
          '3. Xxx 0.3333333333333333 - Yyy 0.6666666666666666'
      );
    });
  });
});
