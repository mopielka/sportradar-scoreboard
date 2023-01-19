# Sportradar's scoreboard
_by Michal Opielka_

This is an NPM module providing a simple scoreboard functionality, according to the description of the Sportradar's recruitment task.


The data objects in this module are immutable so that the code is easier testable, predictable and maintainable.

## Installation
Add this line to your `package.json`'s `dependencies` section:
```
"@mopielka/sportradar-scoreboard": "git+ssh://git@github.com:mopielka/sportradar-scoreboard.git"
```
and run `yarn install` / `npm install` / install package for any other package manager.

## Available functions
It operates on plain objects created and transformed using the functions exported from the module:
- `createScoreboard: (title: string) => Scoreboard` – creates a new empty scoreboard with given title
- `startGame: (scoreboard: Scoreboard, homeTeamName: string, awayTeamName: string) => { newScoreboard: Scoreboard, gameId: string }` – creates a copy of given scoreboard with a game of given teams added
- `finishGame: (scoreboard: Scoreboard, gameId: string) => Scoreboard` – creates a copy of scoreboard without the given game
- `updateScore: (scoreboard: Scoreboard, gameId: string, homeScore: number, awayScore: number) => Scoreboard` – creates a copy of scoreboard with a given game's copy with its score updated
- `formatScoreboard: (scoreboard: Scoreboard) => string` – formats the given scoreboard as an ordered list of results, ordered descending by total score

## Example usage
```javascript
import { createScoreboard, startGame, finishGame, updateScore, formatScoreboard } from '@mopielka/sportradar-scoreboard';

let scoreboard = createScoreboard();
let { newScoreboard, gameId } = startGame(scoreboard, 'Eagles', 'Bears');
scoreboard = updateScore(newScoreboard, gameId, 2, 1);
scoreboard = startGame(scoreboard, 'Foos', 'Bars').newScoreboard;

console.log(formatScoreboard(scoreboard));
/**
 * 1. Eagles 2 - Bears 1
 * 2. Foos 0 - Bars 0
 */

scoreboard = finishGame(scoreboard, gameId);

console.log(formatScoreboard(scoreboard));
/**
 * 1. Foos 0 - Bars 0
 */
```
The scoreboard is actually an array of games so you can also query the games in it manually:
```javascript
for (const game of scoreboard) {
  console.log(game);
  /**
   * { 
   *   id: "123456abcd",
   *   homeTeamName: "Foo",
   *   awayTeamName: "Bar",
   *   homeScore: 1,
   *   awayScore: 2
   * }
   */
}
```
