/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ScheduleRestObject = {
        copyright?: string,
        totalItems?: number,
        totalEvents?: number,
        totalGames?: number,
        totalGamesInProgress?: number,
        dates?: [
          {
            date?: string,
            totalItems?: number,
            totalEvents?: number,
            totalGames?: number,
            totalGamesInProgress?: number,
            games?: [
              {
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
                  away?: {
                    leagueRecord?: {
                      wins?: number,
                      losses?: number,
                      pct?: string,
                    },
                    team?: {
                      id?: number,
                      name?: string,
                      link?: string,
                    },
                    splitSquad?: false,
                    seriesNumber?: number,
                  },
                  home?: {
                    leagueRecord?: {
                      wins?: number,
                      losses?: number,
                      pct?: string,
                    },
                    team?: {
                      id?: number,
                      name?: string,
                      link?: string,
                    },
                    splitSquad?: false,
                    seriesNumber?: number,
                  },
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
              },
            ],
            events?: [any],
          },
        ],
};
