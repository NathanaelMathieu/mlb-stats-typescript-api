export type ScheduleRestObject = {
  copyright?: string;
  totalItems?: number;
  totalEvents?: number;
  totalGames?: number;
  totalGamesInProgress?: number;
  dates?: Array<ScheduleRestDateObject>;
};

export type ScheduleRestDateObject = {
  date?: string;
  totalItems?: number;
  totalEvents?: number;
  totalGames?: number;
  totalGamesInProgress?: number;
  games?: Array<ScheduleRestGameObject>;
  events?: Array<any>;
};

export type GameStatusCode = "S" | "P" | "I" | "F";
export type GameDetailedState = "Scheduled" | "Pre-Game" | "In Progress" | "Finished";
export type AbstractGameCode = "P" | "L" | "F";
export type AbstractGameState = "Preview" | "Live" | "Final";

export type GameStatus = {
  abstractGameState?: AbstractGameState;
  codedGameState?: GameStatusCode;
  detailedState?: GameDetailedState;
  statusCode?: GameStatusCode;
  startTimeTBD?: boolean;
  abstractGameCode?: AbstractGameCode;
};

export type ScheduleRestGameObject = {
  gamePk?: number;
  link?: string;
  gameType?: string;
  season?: string;
  gameDate?: string;
  officialDate?: string;
  status?: GameStatus;
  teams?: {
    away?: ScheduleRestTeamObject;
    home?: ScheduleRestTeamObject;
  };
  venue?: {
    id?: number;
    name?: string;
    link?: string;
  };
  content?: {
    link?: string;
  };
  gameNumber?: number;
  publicFacing?: boolean;
  doubleHeader?: string;
  gamedayType?: string;
  tiebreaker?: string;
  calendarEventID?: string;
  seasonDisplay?: string;
  dayNight?: string;
  scheduledInnings?: number;
  reverseHomeAwayStatus?: boolean;
  inningBreakLength?: number;
  gamesInSeries?: number;
  seriesGameNumber?: number;
  seriesDescription?: string;
  recordSource?: string;
  ifNecessary?: string;
  ifNecessaryDescription?: string;
};

export type ScheduleRestTeamObject = {
  leagueRecord?: {
    wins?: number;
    losses?: number;
    pct?: string;
  };
  score?: number;
  team?: {
    id?: number;
    name?: string;
    link?: string;
  };
  splitSquad?: boolean;
  seriesNumber?: number;
};
