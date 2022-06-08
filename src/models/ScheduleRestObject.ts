/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ScheduleRestObject = {
    copyright?: string,
    totalItems?: number,
    totalEvents?: number,
    totalGames?: number,
    totalGamesInProgress?: number,
    dates?: Array<{
      date?: string,
      totalItems?: number,
      totalEvents?: number,
      totalGames?: number,
      totalGamesInProgress?: number,
      games?: Array<{
        gamePk?: number,
        link?: string,
        gameType?: string,
        season?: string,
        gameDate?: string,
        officialDate?: string,
        status?: {
          abstractGameState?: string,
          codedGameState?: string,
          detailedState?: string,
          statusCode?: string,
          startTimeTBD?: false,
          abstractGameCode?: string,
        },
        teams?: {
          away?: ScheduleRestTeamObject,
          home?: ScheduleRestTeamObject,
        },
        venue?: {
          id?: number,
          name?: string,
          link?: string,
        },
        content?: {
          link?: string,
        },
        gameNumber?: number,
        publicFacing?: true,
        doubleHeader?: string,
        gamedayType?: string,
        tiebreaker?: string,
        calendarEventID?: string,
        seasonDisplay?: string,
        dayNight?: string,
        scheduledInnings?: number,
        reverseHomeAwayStatus?: false,
        inningBreakLength?: number,
        gamesInSeries?: number,
        seriesGameNumber?: number,
        seriesDescription?: string,
        recordSource?: string,
        ifNecessary?: string,
        ifNecessaryDescription?: string,
      }>,
      events?: Array<any>,
    }>,
  };
  
  export type ScheduleRestTeamObject = {
    leagueRecord?: {
      wins?: number,
      losses?: number,
      pct?: string,
    },
    score?: number,
    team?: {
      id?: number,
      name?: string,
      link?: string,
    },
    splitSquad?: false,
    seriesNumber?: number,
  }