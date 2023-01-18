const mocks = {
  game: {
    createGame: jest.fn(),
    updateGameScore: jest.fn(),
  },
};

jest.mock('../game', () => ({ ...mocks.game }));

import { Mock } from 'ts-mockery';
import { createScoreboard, finishGame, startGame, updateScore } from '../scoreboard';
import type { Game, Scoreboard } from '../types';

describe('module scoreboard', () => {
  describe('function createScoreboard', () => {
    it('creates a Scoreboard instance', () => {
      expect(createScoreboard()).toEqual([]);
    });
  });

  describe('function startGame', () => {
    it('adds a game to the given scoreboard using given home and away team names and returns a new scoreboard', () => {
      const scoreboard: Scoreboard = [];
      const gameMock = Mock.of<Game>();
      mocks.game.createGame.mockReturnValueOnce(gameMock);

      const updatedScoreboard = startGame(scoreboard, 'Foo', 'Bar');

      expect(mocks.game.createGame).toHaveBeenCalledWith('Foo', 'Bar');
      expect(updatedScoreboard).not.toBe(scoreboard);
      expect(updatedScoreboard).toEqual([gameMock]);
    });

    it('successfully adds to the scoreboard two games for the same teams', () => {
      const scoreboard: Scoreboard = [];
      const gameMock = Mock.of<Game>();
      const gameMock2 = Mock.of<Game>();
      mocks.game.createGame.mockReturnValueOnce(gameMock);
      mocks.game.createGame.mockReturnValueOnce(gameMock2);

      const updatedScoreboard = startGame(startGame(scoreboard, 'Foo', 'Bar'), 'Foo', 'Bar');

      expect(mocks.game.createGame).toHaveBeenCalledWith('Foo', 'Bar');
      expect(updatedScoreboard).toEqual([gameMock, gameMock2]);
    });
  });

  describe('function finishGame', () => {
    it('removes a game from scoreboard by id and returns a new scoreboard', () => {
      const scoreboard: Scoreboard = [
        { id: 'abc', homeTeamName: 'bar', awayTeamName: 'foo', homeScore: 0, awayScore: 0 },
      ];

      const newScoreboard = finishGame(scoreboard, 'abc');

      expect(newScoreboard).not.toBe(scoreboard);
      expect(newScoreboard).toEqual([]);
    });

    it('returns a new unchanged scoreboard if game is not found', () => {
      const scoreboard: Scoreboard = [
        { id: 'abc', homeTeamName: 'bar', awayTeamName: 'foo', homeScore: 0, awayScore: 0 },
      ];

      const newScoreboard = finishGame(scoreboard, 'def');

      expect(newScoreboard).not.toBe(scoreboard);
      expect(newScoreboard).toEqual(scoreboard);
    });
  });

  describe('function updateScore', () => {
    afterEach(() => jest.resetAllMocks());

    it('for a given scoreboard, game ID and score it updates the score for matching game and returns a new scoreboard', () => {
      const scoreboard: Scoreboard = [
        { id: 'abc', homeTeamName: 'bar', awayTeamName: 'foo', homeScore: 2, awayScore: 1 },
        { id: 'def', homeTeamName: 'b', awayTeamName: 'a', homeScore: 4, awayScore: 3 },
      ];
      mocks.game.updateGameScore.mockReturnValueOnce({
        id: 'abc',
        homeTeamName: 'bar',
        awayTeamName: 'foo',
        homeScore: 3,
        awayScore: 1,
      });

      const newScoreboard = updateScore(scoreboard, 'abc', 3, 1);

      expect(mocks.game.updateGameScore).toHaveBeenCalledTimes(1);
      expect(mocks.game.updateGameScore).toHaveBeenCalledWith(
        { id: 'abc', homeTeamName: 'bar', awayTeamName: 'foo', homeScore: 2, awayScore: 1 },
        3,
        1
      );
      expect(newScoreboard).not.toBe(scoreboard);
      expect(newScoreboard).toEqual([
        { id: 'abc', homeTeamName: 'bar', awayTeamName: 'foo', homeScore: 3, awayScore: 1 },
        { id: 'def', homeTeamName: 'b', awayTeamName: 'a', homeScore: 4, awayScore: 3 },
      ]);
    });

    it('for a non-existing game ID it returns a new unchanged scoreboard', () => {
      const scoreboard: Scoreboard = [
        { id: 'abc', homeTeamName: 'bar', awayTeamName: 'foo', homeScore: 2, awayScore: 1 },
        { id: 'def', homeTeamName: 'b', awayTeamName: 'a', homeScore: 4, awayScore: 3 },
      ];
      const newScoreboard = updateScore(scoreboard, 'xxx', 9, 9);

      expect(mocks.game.updateGameScore).not.toHaveBeenCalled();
      expect(newScoreboard).not.toBe(scoreboard);
      expect(newScoreboard).toEqual(scoreboard);
    });
  });
});
