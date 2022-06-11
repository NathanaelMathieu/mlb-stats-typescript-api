export type ScheduleRestObject = {
  copyright?: string;
  totalItems?: number;
  totalEvents?: number;
  totalGames?: number;
  totalGamesInProgress?: number;
  dates?: Array<{
    date?: string;
    totalItems?: number;
    totalEvents?: number;
    totalGames?: number;
    totalGamesInProgress?: number;
    games?: Array<{
      gamePk?: number;
      link?: string;
      gameType?: string;
      season?: string;
      gameDate?: string;
      officialDate?: string;
      status?: {
        abstractGameState?: "Preview" | "Live" | "Final";
        codedGameState?: "S" | "P" | "I" | "F";
        detailedState?: "Scheduled" | "Pre-Game" | "In Progress" | "Finished";
        statusCode?: "S" | "P" | "I" | "F";
        startTimeTBD?: boolean;
        abstractGameCode?: "P" | "L" | "F";
      };
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
    }>;
    events?: Array<any>;
  }>;
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
