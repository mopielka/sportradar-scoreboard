import type { Game } from './types';
import { compareGamesByCreatedAt, generateId, getTimeNow } from './scoreboard/utils';

class Scoreboard {
  private games: readonly Game[] = [];

  public startGame(homeTeamName: string, awayTeamName: string): string {
    const game: Game = Object.freeze({
      id: generateId(),
      createdAt: getTimeNow(),
      homeTeamName,
      awayTeamName,
      homeScore: 0,
      awayScore: 0,
    });

    this.games = Object.freeze([...this.games, game]);

    return game.id;
  }

  public finishGame(id: string): void {
    if (!this.games.some((game) => game.id === id)) {
      throw new Error(`Game ${id} not found.`);
    }

    this.games = Object.freeze(this.games.filter((game) => game.id !== id));
  }

  public updateScore(gameId: string, homeScore: number, awayScore: number): void {
    const game = this.games.find((game) => game.id === gameId);

    if (!game) {
      throw new Error(`Game ${gameId} not found.`);
    }

    this.games = [
      ...this.games.filter((game) => game.id !== gameId),
      Object.freeze({
        ...game,
        homeScore,
        awayScore,
      }),
    ];
  }

  public getGames(): Game[] {
    const result = [...this.games];

    result.sort(compareGamesByCreatedAt);

    return result;
  }
}
