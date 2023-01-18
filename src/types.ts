export type Game = Readonly<{
  id: string;
  homeTeamName: string;
  awayTeamName: string;
  homeScore: number;
  awayScore: number;
}>;

export type Scoreboard = readonly Game[];
