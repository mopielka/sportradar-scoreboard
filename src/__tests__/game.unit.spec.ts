import type { Game } from '../types';

const mocks = {
  utils: {
    generateId: jest.fn(),
  },
};

jest.mock('../utils', () => ({ ...mocks.utils }));

import { createGame, updateGameScore } from '../game';

describe('module game', () => {
  describe('function createGame', () => {
    mocks.utils.generateId.mockReturnValue('123abc');

    it('creates an instance of Game', () => {
      expect(createGame('Foo', 'Bar')).toEqual({
        id: '123abc',
        homeTeamName: 'Foo',
        awayTeamName: 'Bar',
        homeScore: 0,
        awayScore: 0,
      });
    });
  });

  describe('function updateGameScore', () => {
    it('updates a game with the given score and returns a new game', () => {
      const game: Game = {
        id: 'test',
        homeTeamName: 'a',
        awayTeamName: 'b',
        homeScore: 0,
        awayScore: 0,
      };

      const updatedGame = updateGameScore(game, 1, 2);

      expect(updatedGame).not.toBe(game);
      expect(updatedGame).toEqual({
        id: 'test',
        homeTeamName: 'a',
        awayTeamName: 'b',
        homeScore: 1,
        awayScore: 2,
      });
    });
  });
});
