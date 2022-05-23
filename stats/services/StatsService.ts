/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { LeagueLeaderContainerRestObject } from '../models/LeagueLeaderContainerRestObject';
import type { StatStreaksRestObject } from '../models/StatStreaksRestObject';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class StatsService {

    /**
     * View standard statistics.
     * **Description:**
     * This endpoint returns standard statistics.
     *
     * **Return Includes:** Team, league, player statistics.
     *
     * **Required Parameters:** stats and group are required to run this call.
     *
     * **Hydrations:** This endpoint can accept the hydrations query parameter.
     *
     * ---
     *
     * **Example of call with required parameters**
     *
     * https://statsapi.mlb.com/api/v1/stats?stats=season&group=hitting
     *
     *
     * @param stats Insert statType with the stats parameter to return statistics for a players for a given sportId.
     * 1. Insert statType:  https://statsapi.mlb.com/api/v1/stats?stats=season&group=hitting&sportId=1
     *
     * **Find available stat types at https://statsapi.mlb.com/api/v1/statTypes**
     *
     * **For a list of all sportIds https://statsapi.mlb.com/api/v1/sports**
     *
     * - Notes for playLog, the playLog statType has available hydrations
     * 1. hitData: launchSpeed,launchAngle,etc
     * 2. pitchData:  startSpeed, strikeZoneTop, strikeZoneBottom, etc
     *
     * 1. One Hydration: http://statsapi.mlb.com/api/v1/people/518516/stats?stats=playLog&group=hitting&season=2018&hydrate=hitData
     * 2. Multiple Hydration: http://statsapi.mlb.com/api/v1/people/518516/stats?stats=playLog&group=hitting&season=2018&hydrate=hitData,pitchData
     *
     * - Notes for populating different stat outputs for all players in both MLB & MiLB. The API defaults to a limit of 1000 returns in each call. The total for the entire return will appear via the "totalSplits" object. Use a large limit to match the totalSplits number or offset and limit to navigate through all of the data. Either workflow is efficient.
     *
     * 1. MLB Season Stats: http://statsapi.mlb.com/api/v1/stats?stats=season&sportId=1&season=2018&group=hitting&order=asc&playerPool=all&limit=5000
     * 2. MiLB Season Stats: http://statsapi.mlb.com/api/v1/stats?stats=season&sportId=12&season=2018&group=hitting&order=asc&playerPool=alloffset=100&limit=1000
     *
     * **List of statTypes can be found at https://statsapi.mlb.com/api/v1/statTypes**
     *
     * **List of statGroups can be found at https://statsapi.mlb.com/api/v1/statGroups**
     *
     * 3. One Stat Split: http://statsapi.mlb.com/api/v1/stats?stats=statSplits&sportId=1&season=2018&group=hitting&order=asc&playerPool=all&sitCodes=h&limit=5000
     * 4. Multiple Stat Splits: http://statsapi.mlb.com/api/v1/stats?stats=statSplits&sportId=1&season=2018&group=hitting&order=asc&playerPool=all&sitCodes=a,h&offset=1000&limit=1000
     *
     * **List of sitCodes can be found at https://statsapi.mlb.com/api/v1/situationCodes**
     *
     * 5. MLB stats by Date Range: http://statsapi.mlb.com/api/v1/stats?stats=season&sportId=1&season=2018&group=hitting&type=byDateRange&order=asc&playerPool=all&offset=100&limit=1000&startDate=05/17/2018&endDate=05/21/2018
     * 6. MiLB stats by Date Range: http://statsapi.mlb.com/api/v1/stats?stats=season&sportId=12&season=2018&group=hitting&type=byDateRange&order=asc&playerPool=all&offset=100&limit=1000&startDate=05/17/2018&endDate=05/21/2018
     *
     *
     * - Notes for individual events for playLog, playlog can be filtered by individual events
     *
     * 1. One event for a given player: http://statsapi.mlb.com/api/v1/people/514888/stats?stats=playLog&group=hitting&season=2018&eventType=single
     * 2. Multiple events for a given player: http://statsapi.mlb.com/api/v1/people/514888/stats?stats=playLog&group=hitting&season=2018&eventType=single,double
     *
     * **List of eventTypes can be found at https://statsapi.mlb.com/api/v1/eventTypes**
     *
     *
     *
     * @param group Insert statGroup with the group parameter to return statistics for a given sport or league based on group. Default to "Qualified" playerPool
     * 1. Insert statGroup:  https://statsapi.mlb.com/api/v1/stats?stats=season&group=hitting
     *
     * Find available stat types at https://statsapi.mlb.com/api/v1/statGroups
     *
     * @param playerPool
     * There are 4 different types of playerPools to return statistics for a particular playerPool across a sport.
     *
     * Use "ALL" for the APIequivalent of lookup cur_hitting/cur_pitching/cur_fielding
     * 1. Insert All:  http://statsapi.mlb.com/api/v1/stats?stats=season&sportIds=1&season=2018&group=hitting&playerPool=All
     * 2. Insert Qualified: http://statsapi.mlb.com/api/v1/stats?stats=season&sportIds=1&season=2018&group=hitting&playerPool=Qualified
     * 3. Insert Rookies: http://statsapi.mlb.com/api/v1/stats?stats=season&sportIds=1&season=2018&group=hitting&playerPool=Rookies
     * 4. Insert Qualified Rookies: http://statsapi.mlb.com/api/v1/stats?stats=season&sportIds=1&season=2018&group=hitting&playerPool=Qualified_rookies
     * 5. Insert Multiple sportIds and groups: http://statsapi.mlb.com/api/v1/stats?stats=season&sportIds=1,11,12,13,14,15,16&season=2018&group=hitting,pitching&playerPool=All
     *
     * @param position
     * Insert position to return statistics for a given position. Default to "Qualified" playerPool
     * 1. Insert position: https://statsapi.mlb.com/api/v1/stats?stats=season&group=hitting&position=3B
     * 2. Insert multiple positions: https://statsapi.mlb.com/api/v1/stats?stats=season&group=hitting&position=3B,2B
     *
     * **Find available positions at https://statsapi.mlb.com/api/v1/positions**
     *
     * @param teamId Insert teamId to return statistics for a given team. Default to "Qualified" playerPool
     * 1. Insert teamId: http://statsapi.mlb.com/api/v1/stats?stats=season&group=hitting&gameType=R&season=2018&teamId=140
     *
     * @param leagueId Insert leagueId to return statistics for a given team. Default to "Qualified" playerPool
     * 1. Insert leagueId: http://statsapi.mlb.com/api/v1/stats?stats=season&group=hitting&gameType=R&season=2018&leagueId=104
     *
     * @param limit Insert a limit to limit return.
     * 1. Insert limit:  https://statsapi.mlb.com/api/v1/stats?stats=season&group=hitting&position=3B&playerPool=Qualified&limit=2
     *
     * @param offset Insert an offset to returns i+1 as the first record in the set of players. The example below returns the top 2 & 3 batting average leaders among all qualified third basemen.
     * 1. Insert offset: https://statsapi.mlb.com/api/v1/stats?stats=season&group=hitting&position=3B&playerPool=Qualified&limit=2&offset=1&sortStat=battingAverage
     *
     * @param gameType Insert gameType to return statistics for a given sport or league based on gameType. Default to "Qualified" playerPool
     * 1. Insert gameType:  http://statsapi.mlb.com/api/v1/stats?stats=season&group=hitting&gameType=R&season=2018
     *
     * Find available gameType at https://statsapi.mlb.com/api/v1/gameTypes
     *
     * @param season
     * Insert year to return statistics for a particular season. Default to "Qualified" playerPool
     * 1. Insert year:  http://statsapi.mlb.com/api/v1/stats?stats=season&group=hitting&gameType=R&season=2018
     *
     * @param sportIds
     * Insert sportId to return statistics for a given sport.
     * 1. Insert sportId: http://statsapi.mlb.com/api/v1/stats?stats=season&group=hitting&gameType=R&season=2018&sportIds=11
     * 2. Insert multiple sportIds: http://statsapi.mlb.com/api/v1/stats?stats=season&group=hitting&gameType=R&season=2018&sportIds=1,11
     *
     * For a list of all sportIds: http://statsapi.mlb.com/api/v1/sports
     *
     * @param sortStat
     * Sort return based on stat.
     *
     * Default to "Qualified" playerPool
     * 1. Insert stat:  http://statsapi.mlb.com/api/v1/stats?stats=season&sportIds=1&season=2018&group=hitting&sortStat=battingAverage&playerPool=Qualified&hydrate=person
     *
     * For a list of all available stats: https://statsapi.mlb.com/api/v1/baseballStats
     *
     * @param order
     * order return based on either desc or asc.
     *
     * Default to "Qualified" playerPool
     * 1. Insert stat:  http://statsapi.mlb.com/api/v1/stats?stats=season&sportIds=1&season=2018&group=hitting&sortStat=battingAverage&order=asc&playerPool=Qualified&hydrate=person
     *
     * For a list of all available stats: https://statsapi.mlb.com/api/v1/baseballStats
     *
     * @param hydrate Insert Hydration(s) to return data for any available stats hydration. The hydrations for Stats contain "person" and "team" which have subhydrations Format "team(subHydration1, subHydrations2)" "
     * 1. One Hydration Using Team Sub Hydration: http://statsapi.mlb.com/api/v1/stats?stats=season&sportIds=1&season=2018&group=hitting&sortStat=battingAverage&order=asc&playerPool=Qualified&hydrate=team(league)
     * 2. Multiple Hydrations Using Team Sub Hydration: http://statsapi.mlb.com/api/v1/stats?stats=season&sportIds=1&season=2018&group=hitting&sortStat=battingAverage&order=asc&playerPool=Qualified&hydrate=team(league,social)
     * 3. Multiple Hydrations Using Team & Stat Sub Hydrations: http://statsapi.mlb.com/api/v1/stats?stats=season&sportIds=1&season=2018&group=hitting&sortStat=battingAverage&order=asc&playerPool=Qualified&hydrate=person(transactions),team(league)
     *
     * - Available Hydrations:
     *
     * 1. person
     * - Hydrations Available Through Person
     * 1. hydrations
     * 2. awards
     * 3. currentTeam
     * 4. team
     * 5. rosterEntries
     * 6. jobs
     * 7. relatives
     * 8. transactions
     * 9. social
     * 10. education
     * 11. stats
     * 12. draft
     * 13. mixedFeed
     * 14. articles
     * 15. videos
     * 16. xrefId
     *
     * 2. team
     * - Hydrations Available Through Team
     * 1. hydrations
     * 2. previousSchedule(inclusive=true)
     * 3. nextSchedule
     * 4. venue
     * 5. springVenue
     * 6. social
     * 7. deviceProperties
     * 8. game(promotions)
     * 9. game(promotions)
     * 10. game(atBatPromotions)
     * 11. game(tickets)
     * 12. game(atBatTickets)
     * 13. game(sponsorships)
     * 14. league
     * 15. videos
     * 16. person
     * 17. sport
     * 18. standings
     * 18. division
     * 19. xref
     *
     * - Notes on "currentTeam" hydration
     *
     * When hydrating for "currentTeam" users can use the 'appContext' parameter to specify most recent team by league
     * 1. Most Recent Major League Team: http://statsapi.mlb.com/api/v1/stats?stats=season&sportId=1&season=2018&group=hitting&sortStat=battingAverage&order=asc&playerPool=Qualified&hydrate=person(appContext=majorLeague,currentTeam)%3A%29
     * 2. Most Recent Minor League Team: http://statsapi.mlb.com/api/v1/stats?stats=season&sportId=1&season=2018&group=hitting&sortStat=battingAverage&order=asc&playerPool=Qualified&hydrate=person(appContext=minorLeague,currentTeam)%3A%29
     *
     *
     *
     *
     *
     *
     * @param fields Comma delimited list of specific fields to be returned. Format: topLevelNode, childNode, attribute
     *
     * Example: http://statsapi.mlb.com/api/v1/stats?stats=season&group=hitting&gameType=R&season=2018&fields=stats,type,splits,season,stat,homeruns,player,fullName
     *
     * @returns any OK
     * @throws ApiError
     */
    public static stats(
        stats: string,
        group: Array<string>,
        playerPool?: string,
        position?: 'P' | 'C' | '1B' | '2B' | '3B' | 'SS' | 'LF' | 'CF' | 'RF' | 'DH' | 'PH' | 'PR' | 'BR' | 'OF' | 'IF' | 'SP' | 'RP' | 'CP' | 'UT' | 'UI' | 'UO' | 'RHP' | 'LHP' | 'RHS' | 'LHS' | 'LHR' | 'RHR' | 'B' | 'X',
        teamId?: number,
        leagueId?: number,
        limit?: number,
        offset?: string,
        gameType?: string,
        season?: string,
        sportIds?: number,
        sortStat?: string,
        order?: string,
        hydrate?: Array<string>,
        fields?: Array<string>,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/stats',
            query: {
                'stats': stats,
                'playerPool': playerPool,
                'position': position,
                'teamId': teamId,
                'leagueId': leagueId,
                'limit': limit,
                'offset': offset,
                'group': group,
                'gameType': gameType,
                'season': season,
                'sportIds': sportIds,
                'sortStat': sortStat,
                'order': order,
                'hydrate': hydrate,
                'fields': fields,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * View Statcast stats.
     * **Description:**
     * This endpoint returns Statcast stats.
     *
     * **Return Includes:** Team, league, player statistics.
     *
     * **Hydrations:** This endpoint can accept the hydrations query parameter.
     *
     *
     * **Required Parameters:** stats, metrics, season, and group are required to run this call.
     *
     * ---
     *
     * **Example of call with required parameters**
     *
     * http://statsapi.mlb.com/api/v1/stats/metrics?stats=metricAverages&metrics=launchSpeed&group=hitting&season=2019
     *
     *
     * @param stats There are two statTypes for metrics: metricAverages (average of event level return for Statcast metrics) & metricLog (play by play return of all Statcast metric values).
     * 1. metricAverages:  http://statsapi.mlb.com/api/v1/stats/metrics?stats=metricAverages&metrics=launchSpeed&group=hitting&season=2019
     * 2. metricLog: http://statsapi.mlb.com/api/v1/stats/metrics?stats=metricLog&metrics=launchSpeed&group=hitting&season=2019
     *
     * **Find available metrics at https://statsapi.mlb.com/api/v1/metrics**
     *
     * @param group Insert statGroup with the group parameter to return statistics for a given sport or league based on group.
     * 1. Insert statGroup:  http://statsapi.mlb.com/api/v1/stats/metrics?stats=metricAverages&metrics=launchSpeed&group=hitting&season=2019
     *
     * **Find available statGroups at https://statsapi.mlb.com/api/v1/statGroups**
     *
     * @param season
     * Insert year to return statistics for a particular season.
     * 1. Insert year:  http://statsapi.mlb.com/api/v1/stats/metrics?stats=metricAverages&metrics=launchSpeed&group=hitting&season=2019
     *
     * @param gameType Insert gameType to return statistics for a given sport or league based on gameType.
     * 1. Insert gameType:  http://statsapi.mlb.com/api/v1/stats/metrics?stats=metricAverages&metrics=launchSpeed&group=hitting&season=2018&gameType=W
     *
     * Find available gameType at https://statsapi.mlb.com/api/v1/gameTypes
     *
     * @param startDate
     * Insert date to return a directory of attendance metrics for a particular date range. Format: MM/DD/YYYY
     *
     * **startDate must be coupled with endDate**
     *
     * 1. Insert startDate:  http://statsapi.mlb.com/api/v1/stats/metrics?stats=metricAverages&metrics=launchSpeed&group=hitting&season=2019&startDate=04/17/2019&endDate=05/21/2019
     *
     * @param endDate
     * Insert date to return a directory of attendance metrics for a particular date range. Format: MM/DD/YYYY
     *
     * **endDate must be coupled with startDate**
     *
     * 1. Insert endDate:  http://statsapi.mlb.com/api/v1/stats/metrics?stats=metricAverages&metrics=launchSpeed&group=hitting&season=2019&startDate=04/17/2019&endDate=05/21/2019
     *
     * @param venueId
     * Insert venueId to return statistics for a given venue.
     * 1. One Metric: http://statsapi.mlb.com/api/v1/stats/metrics?stats=metricLog&metrics=distance&group=hitting&season=2019&venueId=3313
     * 2. Multiple Metrics: http://statsapi.mlb.com/api/v1/stats/metrics?stats=metricLog&metrics=distance,barreledBall&group=hitting&season=2019&venueId=3313
     *
     * **List of all MLB venue: https://statsapi.mlb.com/api/v1/teams?sportId=1**
     *
     * **List of statGroups can be found at https://statsapi.mlb.com/api/v1/statGroups**
     *
     * **List of metrics can be found at https://statsapi.mlb.com/api/v1/metrics**
     *
     * @param minOccurrences
     * Insert minOccurrences for a required minimum of occurrences for a given metric
     * 1. minOccurrences for barrels: http://statsapi.mlb.com/api/v1/stats/metrics?stats=metricLog&metrics=barreledBall&group=hitting&season=2019&minOccurrences=26
     *
     * **List of statGroups can be found at https://statsapi.mlb.com/api/v1/statGroups**
     *
     * **List of metrics can be found at https://statsapi.mlb.com/api/v1/metrics**
     *
     * @param percentile
     * Insert percentile for a specific percentile return for a given metric
     * 1. percentile for sprintSpeed: http://statsapi.mlb.com/api/v1/stats/metrics?stats=metricAverages&metrics=sprintSpeed&group=running&season=2019&percentile=70
     *
     * **List of statGroups can be found at https://statsapi.mlb.com/api/v1/statGroups**
     *
     * **List of metrics can be found at https://statsapi.mlb.com/api/v1/metrics**
     *
     * @param personId
     * Insert personId to return metric values for a give player, this is the only statType that takes personId in the stats endpoint.
     * 1. One Metric: http://statsapi.mlb.com/api/v1/stats?stats=metricAverages&personId=592450&group=hitting&gameType=R&season=2018&metrics=launchSpeed
     * 2. Multiple Metrics: http://statsapi.mlb.com/api/v1/stats?stats=metricAverages&personId=592450&group=hitting&gameType=R&season=2018&metrics=launchSpeed,launchAngle
     *
     * **List of statGroups can be found at https://statsapi.mlb.com/api/v1/statGroups**
     *
     * **List of metrics can be found at https://statsapi.mlb.com/api/v1/metrics**
     *
     *
     * - Notes for populating metrics based on specific pitchTypes and playEvents.
     *
     * 1. One Metric and Event Type: https://statsapi.mlb.com/api/v1/stats/metrics?personIds=605141&group=hitting&stats=metricAverages&metrics=launchSpeed&season=2018&eventType=homeRun
     * 2. One Metric, Event Type, Pitch Type: https://statsapi.mlb.com/api/v1/stats/metrics?personIds=605141&group=hitting&stats=metricAverages&metrics=launchSpeed&season=2018&eventType=homeRun&pitchType=FF
     * 3. Multiple Players: https://statsapi.mlb.com/api/v1/stats/metrics?personIds=605141,592450&group=hitting&stats=metricAverages&metrics=launchSpeed&season=2018&eventType=homeRun&pitchType=FF
     * 4. Multiple Metrics:  https://statsapi.mlb.com/api/v1/stats/metrics?personIds=605141,592450&group=hitting&stats=metricAverages&metrics=launchSpeed,launchAngle&season=2018&eventType=homeRun&pitchType=FF
     * 5. Pitching: https://statsapi.mlb.com/api/v1/stats/metrics?personIds=663855&group=pitching&stats=metricAverages&metrics=effectiveSpeed&season=2019&pitchType=FF
     * 6. Pitching with Event Type: https://statsapi.mlb.com/api/v1/stats/metrics?personIds=571945&group=pitching&stats=metricAverages&metrics=effectiveSpeed&season=2019&eventType=homeRun&pitchType=SL
     * 7. Pitching with Event Type and Venue: https://statsapi.mlb.com/api/v1/stats/metrics?personIds=571945,592866&group=pitching&stats=metricLog&metrics=effectiveSpeed&season=2019&eventType=homeRun&pitchType=SL&venueId=31
     * 8. For League: https://statsapi.mlb.com/api/v1/stats/metrics?group=hitting&stats=metricAverages&metrics=launchSpeed&season=2019&eventType=homeRun&offset=100&limit=100
     *
     * **List of statTypes can be found at http://statsapi.mlb.com/api/v1/pitchTypes**
     *
     * **List of statGroups can be found at https://statsapi.mlb.com/api/v1/statGroups**
     *
     * **List of metrics can be found at https://statsapi.mlb.com/api/v1/metrics**
     *
     * **List of eventTypes can be found at https://statsapi.mlb.com/api/v1/eventTypes**
     *
     * @param teamId Insert teamId to return statistics for a given team.
     * 1. Insert teamId: http://statsapi.mlb.com/api/v1/stats/metrics?stats=metricAverages&metrics=launchSpeed&group=hitting&season=2019&teamId=140
     *
     * @param limit Insert a limit to limit return.
     * 1. Insert limit:  http://statsapi.mlb.com/api/v1/stats/metrics?stats=metricAverages&metrics=launchSpeed&group=hitting&season=2019&limit=1
     *
     * @param offset Insert an offset to returns i+1 as the first record in the set of players.
     * 1. Insert offset: http://statsapi.mlb.com/api/v1/stats/metrics?stats=metricAverages&metrics=launchSpeed&group=hitting&season=2019&limit=1&offset=1
     *
     * @param hydrate Insert Hydration(s) to return data for any available stats hydration. The hydrations for Stats contain "person" and "team" which have subhydrations Format "team(subHydration1, subHydrations2)"
     * 1. One Hydration Using Person Sub Hydration: http://statsapi.mlb.com/api/v1/stats/metrics?stats=metricAverages&metrics=launchSpeed&group=hitting&season=2019&limit=1&hydrate=person(team)
     * 2. Multiple Hydrations Using Team Sub Hydration: http://statsapi.mlb.com/api/v1/stats/metrics?stats=metricAverages&metrics=launchSpeed&group=hitting&season=2019&limit=1&hydrate=person(team,rosterEntries)
     * 3. Multiple Hydrations Using Team & Stat Sub Hydrations: http://statsapi.mlb.com/api/v1/stats/metrics?stats=metricAverages&metrics=launchSpeed&group=hitting&season=2019&limit=1&hydrate=person(team,rosterEntries,stats(type=season,season=2019))
     *
     * - Available Hydrations:
     *
     * 1. person
     * - Hydrations Available Through Person
     * 1. hydrations
     * 2. awards
     * 3. currentTeam
     * 4. team
     * 5. rosterEntries
     * 6. jobs
     * 7. relatives
     * 8. transactions
     * 9. social
     * 10. education
     * 11. stats
     * 12. draft
     * 13. mixedFeed
     * 14. articles
     * 15. videos
     * 16. xrefId
     *
     * 2. team
     * - Hydrations Available Through Team
     * 1. hydrations
     * 2. previousSchedule(inclusive=true)
     * 3. nextSchedule
     * 4. venue
     * 5. springVenue
     * 6. social
     * 7. deviceProperties
     * 8. game(promotions)
     * 9. game(promotions)
     * 10. game(atBatPromotions)
     * 11. game(tickets)
     * 12. game(atBatTickets)
     * 13. game(sponsorships)
     * 14. league
     * 15. videos
     * 16. person
     * 17. sport
     * 18. standings
     * 18. division
     * 19. xref
     *
     * - Notes on "currentTeam" hydration
     *
     * When hydrating for "currentTeam" users can use the 'appContext' parameter to specify most recent team by league
     * 1. Most Recent Major League Team: http://statsapi.mlb.com/api/v1/stats/metrics?stats=metricAverages&metrics=launchSpeed&group=hitting&season=2019&limit=1&hydrate=person(appContext=majorLeague,currentTeam)
     * 2. Most Recent Minor League Team: http://statsapi.mlb.com/api/v1/stats/metrics?stats=metricAverages&metrics=launchSpeed&group=hitting&season=2019&limit=1&hydrate=person(appContext=minorLeague,currentTeam)
     *
     * @param fields Comma delimited list of specific fields to be returned. Format: topLevelNode, childNode, attribute
     *
     * Example: http://statsapi.mlb.com/api/v1/stats/metrics?stats=metricAverages&metrics=launchSpeed&group=hitting&season=2019&limit=1&fields=stats,type,splits,season,stat,homeruns,player,fullName
     *
     * @returns any OK
     * @throws ApiError
     */
    public static statsMetrics(
        stats: string,
        group: Array<string>,
        season: string,
        gameType?: string,
        startDate?: string,
        endDate?: string,
        venueId?: number,
        minOccurrences?: number,
        percentile?: number,
        personId?: number,
        teamId?: number,
        limit?: number,
        offset?: string,
        hydrate?: Array<string>,
        fields?: Array<string>,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/stats/metrics',
            query: {
                'stats': stats,
                'group': group,
                'gameType': gameType,
                'season': season,
                'startDate': startDate,
                'endDate': endDate,
                'venueId': venueId,
                'minOccurrences': minOccurrences,
                'percentile': percentile,
                'personId': personId,
                'teamId': teamId,
                'limit': limit,
                'offset': offset,
                'hydrate': hydrate,
                'fields': fields,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * View leaders for a statistic.
     * **Description:**
     * This endpoint returns statistical data for top performers  information based on League Leader Categories.
     *
     * **Return Includes:** Player biographical and statistical information.
     *
     * **Required Parameters:** leaderCategories is required to run this call.
     *
     * **Hydrations:** This endpoint can accept the hydrations query parameter.
     *
     *
     *
     * ---
     * **Example of call with required parameters**
     *
     * https://statsapi.mlb.com/api/v1/stats/leaders?leaderCategories=homeRuns
     *
     * ---
     * **Example of call with hydration parameters**
     *
     * https://statsapi.mlb.com/api/v1/stats/leaders?leaderCategories=homeRuns&hydrate=team
     *
     * @param leaderCategories Insert a league leader category to return information  and ranking for a particular statistic.
     * 1. Insert leaderCategory:  https://statsapi.mlb.com/api/v1/stats/leaders?leaderCategories=homeRuns
     *
     * For  a list of all leaderCategories:  https://statsapi.mlb.com/api/v1/leagueLeaderTypes
     *
     * @param season Insert year to return information  and ranking for a particular statistic in a given year.
     * 1. Insert year: https://statsapi.mlb.com/api/v1/stats/leaders?leaderCategories=homeRuns&leaderGameTypes=R&statGroups=hitting&season=2018
     *
     * @param playerPool
     * There are 4 different types of playerPools to return statistics for a particular playerPool across a sport.
     *
     * Use "ALL" for the APIequivalent of lookup cur_hitting/cur_pitching/cur_fielding
     * 1. Insert All:  https://statsapi.mlb.com/api/v1/stats/leaders?leaderCategories=homeRuns&leaderGameTypes=R&season=2018&leagueId=104&playerPool=All
     * 2. Insert Qualified: https://statsapi.mlb.com/api/v1/stats/leaders?leaderCategories=homeRuns&leaderGameTypes=R&season=2018&playerPool=Qualified
     * 3. Insert Rookies: https://statsapi.mlb.com/api/v1/stats/leaders?leaderCategories=homeRuns&leaderGameTypes=R&season=2018&playerPool=Rookies
     * 4. Insert Qualified Rookies: https://statsapi.mlb.com/api/v1/stats/leaders?leaderCategories=homeRuns&leaderGameTypes=R&season=2018&playerPool=Qualified_rookies
     *
     * @param leaderGameTypes Insert a game type to return information  and ranking for a particular statistic in a particular game type.
     * 1. Insert gameType:  https://statsapi.mlb.com/api/v1/stats/leaders?leaderCategories=homeRuns&leaderGameTypes=R
     *
     * For a list of all gameTypes: https://statsapi.mlb.com/api/v1/gameTypes
     *
     * @param sitCodes Insert a sitCode to return information  and ranking for a particular statistic in a particular game type.
     * 1. Insert sitCode:  https://statsapi.mlb.com/api/v1/stats/leaders?leaderCategories=homeRuns&sitCodes=4
     *
     * For a list of all sitCodes: https://statsapi.mlb.com/api/v1/situationCodes
     *
     * @param position
     * Insert position to return statistics for a given position. Default to "Qualified" playerPool
     * 1. Insert position: https://statsapi.mlb.com/api/v1/stats/leaders?leaderCategories=homeRuns&position=1B
     *
     * **Find available positions at https://statsapi.mlb.com/api/v1/positions**
     *
     * @param statGroup Insert a stat group to return information  and ranking for a particular statistic in a particular group.
     * 1. Insert statGroup:  https://statsapi.mlb.com/api/v1/stats/leaders?leaderCategories=homeRuns&leaderGameTypes=R&statGroups=hitting&season=2018
     *
     * For a list of all statGroups: https://statsapi.mlb.com/api/v1/statGroups
     *
     * - Best practice to request all time stat leaders:
     *
     * When requesting for all time leaders in a particular stat, it is best practices to include
     * - statType=statsSingleseason
     * - statGroup
     * - leaderGameTypes
     * - leaderCategories
     *
     * 1. All time leaders in assists: https://statsapi.mlb.com/api/v1/stats/leaders?statType=statsSingleSeason&statGroup=fielding&limit=10&sportId=1&leaderGameTypes=R&leaderCategories=assists&season=2018
     *
     * @param leagueId Insert leagueId to return statistics for a given team. Default to "Qualified" playerPool
     * 1. Insert leagueId: https://statsapi.mlb.com/api/v1/stats/leaders?leaderCategories=homeRuns&sportId=1&leagueId=104&season=2018
     *
     * @param startDate Insert date to return a directory of attendance metrics for a particular date range. Format:
     * MM/DD/YYYY
     *
     * **startDate must be coupled with endDate and byDateRange statType**
     *
     * 1. Insert date range: https://statsapi.mlb.com/api/v1/stats/leaders?leaderCategories=homeRuns&startDate=06/01/2018&endDate=06/15/2018&season=2018&statType=byDateRange
     *
     * @param endDate Insert date to return a directory of attendance metrics for a particular date range. Format:
     * MM/DD/YYYY
     *
     * **endDate must be coupled with startDate and byDateRange statType**
     *
     * 1. Insert date range: https://statsapi.mlb.com/api/v1/stats/leaders?leaderCategories=homeRuns&startDate=06/01/2018&endDate=06/15/2018&season=2018&statType=byDateRange
     *
     * @param sportId Insert a sportId to return information  and ranking for a particular statistic in a given sport.
     * 1. Insert sportId:  https://statsapi.mlb.com/api/v1/stats/leaders?leaderCategories=homeRuns&sportId=12&season=2018
     *
     * For  a list of all sportIds:  http://statsapi.mlb.com/api/v1/sports
     *
     * @param hydrate Insert Hydration(s) to return data for any available stats hydration. The hydrations for Stats contain "person" and "team" which have subhydrations Format "team(subHydration1, subHydrations2)" "
     * 1. One Hydration Using Team Sub Hydration: https://statsapi.mlb.com/api/v1/stats/leaders?leaderCategories=homeRuns&leaderGameTypes=R&statGroups=hitting&season=2018&hydrate=team(league)
     * 2. Multiple Hydrations Using Team Sub Hydration:  https://statsapi.mlb.com/api/v1/stats/leaders?leaderCategories=homeRuns&leaderGameType=R&statGroups=hitting&season=2018&hydrate=team(league,social)
     * 3. Multiple Hydrations Using Team & Stat Sub Hydrations:  https://statsapi.mlb.com/api/v1/stats/leaders?leaderCategories=homeRuns&leaderGameType=R&statGroups=hitting&season=2018&hydrate=person(transactions),team(league)
     * 3. Check For Available Hydrations: https://statsapi.mlb.com/api/v1/stats/leaders?leaderCategories=homeRuns&leaderGameTypes=R&statGroups=hitting&season=2018&hydrate=hydrations
     *
     * - Available Hydrations:
     *
     * 1. person
     * - Hydrations Available Through Person
     * 1. hydrations
     * 2. awards
     * 3. currentTeam
     * 4. team
     * 5. rosterEntries
     * 6. jobs
     * 7. relatives
     * 8. transactions
     * 9. social
     * 10. education
     * 11. stats
     * 12. draft
     * 13. mixedFeed
     * 14. articles
     * 15. videos
     * 16. xrefId
     *
     * 2. team
     * - Hydrations Available Through Team
     * 1. hydrations
     * 2. previousSchedule(inclusive=true)
     * 3. nextSchedule
     * 4. venue
     * 5. springVenue
     * 6. social
     * 7. deviceProperties
     * 8. game(promotions)
     * 9. game(promotions)
     * 10. game(atBatPromotions)
     * 11. game(tickets)
     * 12. game(atBatTickets)
     * 13. game(sponsorships)
     * 14. league
     * 15. videos
     * 16. person
     * 17. sport
     * 18. standings
     * 18. division
     * 19. xref
     *
     * - Notes on "currentTeam" hydration:
     *
     * When hydrating for "currentTeam" users can use the 'appContext' parameter to specify most recent team by league
     * 1. Most Recent Major League Team: https://statsapi.mlb.com/api/v1/stats/leaders?leaderCategories=homeRuns&hydrate=person(appContext=majorLeague,currentTeam)
     * 2. Most Recent Minor League Team: https://statsapi.mlb.com/api/v1/stats/leaders?leaderCategories=homeRuns&hydrate=person(appContext=minorLeague,currentTeam)
     *
     * - Notes on Stat Hydrations
     *
     * Best practice for MLB stat hydrations, use person(stats(group=["statGroup1","statGroup2"],type=["statType1","statType2"])).
     *
     * 1. Hydrating one stat: https://statsapi.mlb.com/api/v1/stats/leaders?leaderCategories=homeRuns&season=2018&hydrate=person(stats(group=[hitting],type=[career])%3A%29
     * 2. Hydrating multiple statTypes/statGroups: https://statsapi.mlb.com/api/v1/stats/leaders?leaderCategories=homeRuns&season=2018&hydrate=person(stats(group=[hitting,pitching],type=[career,yearByYear])%3A%29
     *
     * **List of statTypes can be found at https://statsapi.mlb.com/api/v1/statTypes**
     *
     * **List of statGroups can be found at https://statsapi.mlb.com/api/v1/statGroups**
     *
     * Best practice for MLB individual stat hydrations, use person(stats(group=["statGroup1","statGroup2"],type=["statType1","statType2"],season="year")).
     *
     * 1. Hydrating one stat: https://statsapi.mlb.com/api/v1/stats/leaders?leaderCategories=homeRuns&season=2018&hydrate=person(stats(group=[hitting],type=[season],season=2018)%3A%29
     * 2. Hydrating multiple statTypes/statGroups: https://statsapi.mlb.com/api/v1/stats/leaders?leaderCategories=homeRuns&season=2018&hydrate=person(stats(group=[hitting,pitching],type=[season,seasonAdvanced],season=2018)%3A%29
     *
     * **List of statTypes can be found at https://statsapi.mlb.com/api/v1/statTypes**
     *
     * **List of statGroups can be found at https://statsapi.mlb.com/api/v1/statGroups**
     *
     * Best practice for MiLB stat hydrations, use person(stats(group=["statGroup1,statGroup2"],type=["statType1","statType2],sportId="MiLB Id")).
     *
     * 1. Hydrating one stat: https://statsapi.mlb.com/api/v1/stats/leaders?leaderCategories=homeRuns&sportId=12&season=2018&hydrate=person(stats(group=[hitting],type=[career],sportId=12)%3A%29
     * 2. Hydrating multiple statTypes/statGroups: https://statsapi.mlb.com/api/v1/stats/leaders?leaderCategories=homeRuns&sportId=12&season=2018&hydrate=person(stats(group=[hitting,pitching],type=[career,yearByYear],sportId=12)%3A%29
     *
     * **List of statTypes can be found at https://statsapi.mlb.com/api/v1/statTypes**
     *
     * **List of sportIds can be found at http://statsapi.mlb.com/api/v1/sports**
     *
     * **List of statGroups can be found at https://statsapi.mlb.com/api/v1/statGroups**
     *
     * Best practice for MiLB individual stat hydrations, use person(stats(group=["statGroup1,statGroup2"],type=["statType1","statType2],sportId="MiLB Id")).
     *
     * 1. Hydrating one stat: https://statsapi.mlb.com/api/v1/stats/leaders?leaderCategories=homeRuns&season=2018&sportId=12&hydrate=person(stats(group=[hitting],type=[season],sportId=12,season=2018)%3A%29
     * 2. Hydrating multiple statTypes/statGroups: https://statsapi.mlb.com/api/v1/stats/leaders?leaderCategories=homeRuns&sportId=12&season=2018&hydrate=person(stats(group=[hitting,pitching],type=[season,seasonAdvanced],sportId=12,season=2018)%3A%29
     *
     * **List of statTypes can be found at https://statsapi.mlb.com/api/v1/statTypes**
     *
     * **List of sportIds can be found at http://statsapi.mlb.com/api/v1/sports**
     *
     * **List of statGroups can be found at https://statsapi.mlb.com/api/v1/statGroups**
     *
     * Best practice for season stats in date range, use person(stats(group=["statGroup1","statGroup2"],type=["byDateRange"]startDate="mm/dd/yyyy",endDate="mm/dd/yyyy",season="year")).
     *
     * 1. Hydrating byDateRange stat: http://statsapi.mlb.com/api/v1/stats/leaders?leaderCategories=homeRuns&season=2018&hydrate=person(stats(group=[hitting,pitching],type=[byDateRange],startDate=05/17/2018,endDate=05/21/2018,season=2018)%3A%29
     *
     * **List of statTypes can be found at https://statsapi.mlb.com/api/v1/statTypes**
     *
     * **List of statGroups can be found at https://statsapi.mlb.com/api/v1/statGroups**
     *
     * Best practice for limiting playLog & pitchLog, use stats(group=["statGroup1","statGroup2"],type=["playLog"],limit=1,season="year").
     *
     * 1. Limiting playLog: http://statsapi.mlb.com/api/v1/stats/leaders?leaderCategories=homeRuns&season=2018&hydrate=person(stats(group=[hitting,pitching],type=[playLog],limit=1,season=2017)%3A%29
     *
     * 2. Limiting pitchLog: http://statsapi.mlb.com/api/v1/stats/leaders?leaderCategories=homeRuns&season=2018&hydrate=person(stats(group=[hitting,pitching],type=[pitchLog],limit=1,season=2017)%3A%29
     *
     * **List of statTypes can be found at https://statsapi.mlb.com/api/v1/statTypes**
     *
     * **List of statGroups can be found at https://statsapi.mlb.com/api/v1/statGroups**
     *
     * Best practice for metrics in stat hydrations, use person(stats(type=[metricAverages],metrics=[launchSpeed],season="year")) or person(stats(type=[metricLog],metrics=[launchSpeed],season="year")).
     *
     * 1. Hydrating one metric with metricAverages: https://statsapi.mlb.com/api/v1/stats/leaders?leaderCategories=homeRuns&season=2018&hydrate=person(stats(type=[metricAverages],metrics=[launchSpinRate],season=2018)%3A%29
     * 2. Hydrating one statType and multiple metrics with metricAverages: https://statsapi.mlb.com/api/v1/stats/leaders?leaderCategories=homeRuns&season=2018&hydrate=person(stats(type=[byMonth,metricAverages],metrics=[launchSpeed,launchSpinRate],season=2018)%3A%29
     * 3. Hydrating one metric with metricLog: https://statsapi.mlb.com/api/v1/stats/leaders?leaderCategories=homeRuns&season=2018&hydrate=person(stats(type=[metricLog,metrics=launchSpinRate,season=2018)%3A%29
     * 4. Hydrating one statType and multiple metrics with metricLog: https://statsapi.mlb.com/api/v1/stats/leaders?leaderCategories=homeRuns&season=2018&hydrate=person(stats(type=[byMonth,metricLog],metrics=[launchSpeed,launchSpinRate],season=2018)%3A%29
     *
     * **List of metrics can be found at https://statsapi.mlb.com/api/v1/metrics**
     *
     * Best practice for MLB sitCodes in stat hydrations, use person(stats(type=[statSplits],sitCodes=[h,a],season="year")).
     *
     * 1. Hydrating one sitCode: https://statsapi.mlb.com/api/v1/stats/leaders?leaderCategories=homeRuns&season=2018&hydrate=person(stats(group=[hitting,pitching],type=[career,statSplits],sitCodes=a,season=2018)%3A%29
     * 2. Hydrating one statType and multiple sitCodes: https://statsapi.mlb.com/api/v1/stats/leaders?leaderCategories=homeRuns&season=2018&hydrate=person(stats(group=[hitting,pitching],type=[career,statSplits],sitCodes=[a,h],season=2018)%3A%29
     *
     * **List of sitCodes can be found at https://statsapi.mlb.com/api/v1/situationCodes**
     *
     * Best practice for MiLB sitCodes in stat hydrations, use person(stats(type=statSplits,sitCodes=[h,a],season=2018,sportId = "MiLB Id",season="year")).
     *
     * 1. Hydrating on sitCode: https://statsapi.mlb.com/api/v1/stats/leaders?leaderCategories=homeRuns&season=2018&&sportId=12&hydrate=person(stats(group=[hitting,pitching],type=[career,statSplits],sitCodes=a,sportId=12,season=2018)%3A%29
     * 2. Hydrating one statType and multiple sitCodes: https://statsapi.mlb.com/api/v1/stats/leaders?leaderCategories=homeRuns&&sportId=12&season=2018&hydrate=person(stats(group=[hitting,pitching],type=[career,statSplits],sitCodes=[a,h],sportId=12,season=2018)%3A%29
     *
     * **List of sitCodes can be found at https://statsapi.mlb.com/api/v1/situationCodes**
     *
     * **List of sportIds can be found at http://statsapi.mlb.com/api/v1/sports**
     *
     *
     *
     *
     *
     * @param limit Insert a limit to limit return. Limited to 100 returns.
     * 1. Insert limit: https://statsapi.mlb.com/api/v1/stats/leaders?leaderCategories=homeRuns&hydrate=person(stats(type=season,season=2018),education),hydrations,team(league)&limit=1
     *
     * @param offset Insert an offset to returns i+1 as the first record in the set of teams. Limited to 100 returns.
     * 1. Insert offset: https://statsapi.mlb.com/api/v1/stats/leaders?sportId=1&offset=10&limit=1&leaderCategories=homeRuns&leaderGameTypes=R&season=2019
     *
     * @param fields Comma delimited list of specific fields to be returned. Format: topLevelNode, childNode, attribute
     *
     * Example: https://statsapi.mlb.com/api/v1/stats/leaders?leaderCategories=homeRuns&fields=leagueLeaders,leaders,person,fullName
     *
     * @returns LeagueLeaderContainerRestObject OK
     * @throws ApiError
     */
    public static leaders(
        leaderCategories: Array<string>,
        season: string,
        playerPool?: string,
        leaderGameTypes?: Array<string>,
        sitCodes?: Array<string>,
        position?: 'P' | 'C' | '1B' | '2B' | '3B' | 'SS' | 'LF' | 'CF' | 'RF' | 'DH' | 'PH' | 'PR' | 'BR' | 'OF' | 'IF' | 'SP' | 'RP' | 'CP' | 'UT' | 'UI' | 'UO' | 'RHP' | 'LHP' | 'RHS' | 'LHS' | 'LHR' | 'RHR' | 'B' | 'X',
        statGroup?: Array<string>,
        leagueId?: number,
        startDate?: string,
        endDate?: string,
        sportId?: string,
        hydrate?: Array<string>,
        limit?: number,
        offset?: string,
        fields?: Array<string>,
    ): CancelablePromise<LeagueLeaderContainerRestObject> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/stats/leaders',
            query: {
                'leaderCategories': leaderCategories,
                'playerPool': playerPool,
                'leaderGameTypes': leaderGameTypes,
                'sitCodes': sitCodes,
                'position': position,
                'statGroup': statGroup,
                'season': season,
                'leagueId': leagueId,
                'startDate': startDate,
                'endDate': endDate,
                'sportId': sportId,
                'hydrate': hydrate,
                'limit': limit,
                'offset': offset,
                'fields': fields,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * View statistical streaks for a given season
     * **Description:**
     * This endpoint returns statistical streaks based on streakType,streakSpan,gameType,season, & sportId.
     *
     * **Return Includes:** biographical and statistical information for a group of players.
     *
     * **Required Parameters:** streakType,streakSpan,gameType,season, sportId & limit
     *
     * **Hydrations:** This endpoint can accept the hydrations query parameter.
     *
     *
     *
     * ---
     * **Example of call with hydration parameters**
     *
     * http://statsapi.mlb.com/api/v1/stats/streaks?gameType=R&streakSpan=season&streakType=hittingStreakOverall&season=2018&sportId=1&limit=10&hydrate=person(stats(type=season,season=2018))
     *
     * @param streakType Insert streakType to return streak information for player in a particular season.
     * 1. Insert streakType: http://statsapi.mlb.com/api/v1/stats/streaks?gameType=R&streakSpan=season&streakType=hittingStreakOverall&season=2018&sportId=1&limit=10
     *
     * @param streakSpan Insert streakSpan to return the span of streak for player in a particular season.
     * 1. Insert streakSpan: http://statsapi.mlb.com/api/v1/stats/streaks?gameType=R&streakSpan=season&streakType=hittingStreakOverall&season=2018&sportId=1&limit=10
     *
     * @param season Insert year to return streak stats for a particular season.
     * 1. Insert year: http://statsapi.mlb.com/api/v1/stats/streaks?gameType=R&streakSpan=notableInSeason&streakType=hittingStreakOverall&season=2018&sportId=1&limit=10
     *
     * @param gameType Insert gameType to return streak stats for a particular gameType.
     * 1. Insert gameType: http://statsapi.mlb.com/api/v1/stats/streaks?gameType=R&streakSpan=notableInSeason&streakType=hittingStreakOverall&season=2018&sportId=1&limit=10
     *
     * For a list of all gameTypes: https://statsapi.mlb.com/api/v1/gameTypes
     *
     * @param startersOnly Insert startersOnly to return streak stats for a starting pitchers only.
     * 1. Insert year: http://statsapi.mlb.com/api/v1/streaks?statGroup=pitching&gameType=R&streakStat=hits&sportId=1&season=2018&limit=5&streakOrg=player&streakSpan=season&streakLevel=game&inverse=true&startersOnly=true
     *
     * @param sportId Insert sportId to return streak stats for a particular sportId.
     * 1. Insert sportId: http://statsapi.mlb.com/api/v1/stats/streaks?gameType=R&streakSpan=notableInSeason&streakType=hittingStreakOverall&season=2018&sportId=1&limit=10
     *
     * For a list of all sportId: http://statsapi.mlb.com/api/v1/sports
     *
     * @param limit Insert a limit to limit return.
     * 1. Insert limit: http://statsapi.mlb.com/api/v1/stats/streaks?gameType=R&streakSpan=notableInSeason&streakType=hittingStreakOverall&season=2018&sportId=1&limit=10
     *
     * @param hydrate Insert Hydration(s) to return data for any available stats hydration. The hydrations for Stats contain "person" and "team" which have subhydrations Format "team(subHydration1, subHydrations2)" "
     * 1. One Hydration Using Team Sub Hydration: http://statsapi.mlb.com/api/v1/stats?stats=season&sportIds=1&season=2018&group=hitting&sortStat=battingAverage&order=asc&playerPool=Qualified&hydrate=team(league)
     * 2. Multiple Hydrations Using Team Sub Hydration: http://statsapi.mlb.com/api/v1/stats?stats=season&sportIds=1&season=2018&group=hitting&sortStat=battingAverage&order=asc&playerPool=Qualified&hydrate=team(league,social)
     * 3. Multiple Hydrations Using Team & Stat Sub Hydrations: http://statsapi.mlb.com/api/v1/stats?stats=season&sportIds=1&season=2018&group=hitting&sortStat=battingAverage&order=asc&playerPool=Qualified&hydrate=person(transactions),team(league)
     *
     * - Available Hydrations:
     *
     * 1. person
     * - Hydrations Available Through Person
     * 1. hydrations
     * 2. awards
     * 3. currentTeam
     * 4. team
     * 5. rosterEntries
     * 6. jobs
     * 7. relatives
     * 8. transactions
     * 9. social
     * 10. education
     * 11. stats
     * 12. draft
     * 13. mixedFeed
     * 14. articles
     * 15. videos
     * 16. xrefId
     *
     * 2. team
     * - Hydrations Available Through Team
     * 1. hydrations
     * 2. previousSchedule(inclusive=true)
     * 3. nextSchedule
     * 4. venue
     * 5. springVenue
     * 6. social
     * 7. deviceProperties
     * 8. game(promotions)
     * 9. game(promotions)
     * 10. game(atBatPromotions)
     * 11. game(tickets)
     * 12. game(atBatTickets)
     * 13. game(sponsorships)
     * 14. league
     * 15. videos
     * 16. person
     * 17. sport
     * 18. standings
     * 18. division
     * 19. xref
     *
     * - Notes on "currentTeam" hydration
     *
     * When hydrating for "currentTeam" users can use the 'appContext' parameter to specify most recent team by league
     * 1. Most Recent Major League Team: http://statsapi.mlb.com/api/v1/stats/streaks?gameType=R&streakSpan=notableInSeason&streakType=hittingStreakOverall&season=2018&sportId=1&limit=10&hydrate=person(appContext=majorLeague,currentTeam)%3A%29
     * 2. Most Recent Minor League Team: http://statsapi.mlb.com/api/v1/stats/streaks?gameType=R&streakSpan=notableInSeason&streakType=hittingStreakOverall&season=2018&sportId=1&limit=10&hydrate=person(appContext=minorLeague,currentTeam)%3A%29
     *
     *
     * - Notes on Stat Hydrations
     *
     * Best practice for MLB stat hydrations, use person(stats(group=["statGroup1","statGroup2"],type=["statType1","statType2"]).
     *
     * 1. Hydrating one statType/statGroup: http://statsapi.mlb.com/api/v1/stats/streaks?gameType=R&streakSpan=notableInSeason&streakType=hittingStreakOverall&season=2018&sportId=1&limit=10&hydrate=person(stats(group=[hitting],type=[career])%3A%29
     * 2. Hydrating multiple statTypes/statGroups: http://statsapi.mlb.com/api/v1/stats/streaks?gameType=R&streakSpan=notableInSeason&streakType=hittingStreakOverall&season=2018&sportId=1&limit=10&hydrate=person(stats(group=[hitting,pitching],type=[career,yearByYear])%3A%29
     *
     * **List of statTypes can be found at https://statsapi.mlb.com/api/v1/statTypes**
     *
     * **List of statGroups can be found at https://statsapi.mlb.com/api/v1/statGroups**
     *
     * Best practice for MLB individual stat hydrations, use person(stats(group=["statGroup1","statGroup2"],type=["statType1","statType2"],season="year").
     *
     * 1. Hydrating one statType/statGroup: http://statsapi.mlb.com/api/v1/stats/streaks?gameType=R&streakSpan=notableInSeason&streakType=hittingStreakOverall&season=2018&sportId=1&limit=10&hydrate=person(stats(group=[hitting],type=[season],season=2018)%3A%29
     * 2. Hydrating multiple statTypes/statGroups: http://statsapi.mlb.com/api/v1/stats/streaks?gameType=R&streakSpan=notableInSeason&streakType=hittingStreakOverall&season=2018&sportId=1&limit=10&hydrate=person(stats(group=[hitting,pitching],type=[season,seasonAdvanced],season=2018)%3A%29
     *
     * **List of statTypes can be found at https://statsapi.mlb.com/api/v1/statTypes**
     *
     * **List of statGroups can be found at https://statsapi.mlb.com/api/v1/statGroups**
     *
     * Best practice for MiLB stat hydrations, use person(stats(group=["statGroup1,statGroup2"],type=["statType1","statType2],sportId="MiLB Id")).
     *
     * 1. Hydrating one statType/statGroup: http://statsapi.mlb.com/api/v1/stats/streaks?gameType=R&streakSpan=notableInSeason&streakType=hittingStreakOverall&season=2018&sportId=12&limit=10&hydrate=person(stats(group=[hitting],sportId=12,type=[career])%3A%29
     * 2. Hydrating multiple statTypes/statGroups: http://statsapi.mlb.com/api/v1/stats/streaks?gameType=R&streakSpan=notableInSeason&streakType=hittingStreakOverall&season=2018&sportId=12&limit=10&hydrate=person(stats(group=[hitting,pitching],sportId=12,type=[career,yearByYear])%3A%29
     *
     * **List of statTypes can be found at https://statsapi.mlb.com/api/v1/statTypes**
     *
     * **List of sportIds can be found at http://statsapi.mlb.com/api/v1/sports**
     *
     * **List of statGroups can be found at https://statsapi.mlb.com/api/v1/statGroups**
     *
     * Best practice for MiLB individual stat hydrations, use person(stats(group=["statGroup1,statGroup2"],type=["statType1","statType2],sportId="MiLB Id",season=2018)).
     *
     * 1. Hydrating one statType/statGroup: http://statsapi.mlb.com/api/v1/stats/streaks?gameType=R&streakSpan=notableInSeason&streakType=hittingStreakOverall&season=2018&sportId=12&limit=10&hydrate=person(stats(group=[hitting],type=[season],sportId=12,season=2018)%3A%29
     * 2. Hydrating multiple statTypes/statGroups: http://statsapi.mlb.com/api/v1/stats/streaks?gameType=R&streakSpan=notableInSeason&streakType=hittingStreakOverall&season=2018&sportId=12&limit=10&hydrate=person(stats(group=[hitting,pitching],type=[season,seasonAdvanced],sportId=12,season=2018)%3A%29
     *
     * **List of statTypes can be found at https://statsapi.mlb.com/api/v1/statTypes**
     *
     * **List of sportIds can be found at http://statsapi.mlb.com/api/v1/sports**
     *
     * **List of statGroups can be found at https://statsapi.mlb.com/api/v1/statGroups**
     *
     * Best practice for season stats in date range, use person(stats(group=["statGroup1","statGroup2"],type=["byDateRange"]startDate="mm/dd/yyyy",endDate="mm/dd/yyyy",season="year")).
     *
     * 1. Hydrating byDateRange stat: http://statsapi.mlb.com/api/v1/stats/streaks?gameType=R&streakSpan=notableInSeason&streakType=hittingStreakOverall&season=2018&sportId=1&limit=10&hydrate=person(stats(group=[hitting,pitching],type=[byDateRange],startDate=05/17/2018,endDate=05/21/2018,season=2018)%3A%29
     *
     * **List of statTypes can be found at https://statsapi.mlb.com/api/v1/statTypes**
     *
     * **List of statGroups can be found at https://statsapi.mlb.com/api/v1/statGroups**
     *
     * Best practice for limiting playLog & pitchLog, use stats(group=["statGroup1","statGroup2"],type=["playLog"],limit=1,seaon="year").
     *
     * 1. Limiting playLog: http://statsapi.mlb.com/api/v1/stats/streaks?gameType=R&streakSpan=notableInSeason&streakType=hittingStreakOverall&season=2018&sportId=1&limit=10&hydrate=person(stats(group=[hitting,pitching],type=[playLog],limit=1,season=2018)%3A%29
     *
     * 2. Limiting pitchLog: http://statsapi.mlb.com/api/v1/stats/streaks?gameType=R&streakSpan=notableInSeason&streakType=hittingStreakOverall&season=2018&sportId=1&limit=10&hydrate=person(stats(group=[hitting,pitching],type=[pitchLog],limit=1,season=2018)%3A%29
     *
     * **List of statTypes can be found at https://statsapi.mlb.com/api/v1/statTypes**
     *
     * **List of statGroups can be found at https://statsapi.mlb.com/api/v1/statGroups**
     *
     * Best practice for metrics in stat hydrations, use person(stats(type=[metricAverages],metrics=[launchSpeed],season=2018)) or person(stats(type=[metricLog],metrics=[launchSpeed],season=2018)).
     *
     * 1. Hydrating one metric with metricAverages: http://statsapi.mlb.com/api/v1/stats/streaks?gameType=R&streakSpan=notableInSeason&streakType=hittingStreakOverall&season=2018&sportId=1&limit=10&hydrate=person(stats(type=[metricAverages],metrics=[launchSpinRate],season=2018)%3A%29
     * 2. Hydrating one statType and multiple metrics with metricAverages: http://statsapi.mlb.com/api/v1/stats/streaks?gameType=R&streakSpan=notableInSeason&streakType=hittingStreakOverall&season=2018&sportId=1&limit=10&hydrate=person(stats(type=[byMonth,metricAverages],metrics=[launchSpeed,launchSpinRate],season=2018)%3A%29
     *
     * 3. Hydrating one metric with metricLog: http://statsapi.mlb.com/api/v1/stats/streaks?gameType=R&streakSpan=notableInSeason&streakType=hittingStreakOverall&season=2018&sportId=1&limit=10&teamId=147&hydrate=person(stats(type=[metricLog],metrics=[launchSpinRate],season=2018)%3A%29
     * 4. Hydrating one statType and multiple metrics with metricLog: http://statsapi.mlb.com/api/v1/stats/streaks?gameType=R&streakSpan=notableInSeason&streakType=hittingStreakOverall&season=2018&sportId=1&limit=10&teamId=147&hydrate=person(stats(type=[byMonth,metricLog],metrics=[launchSpeed,launchSpinRate],season=2018)%3A%29
     *
     * **List of metrics can be found at https://statsapi.mlb.com/api/v1/metrics**
     *
     * Best practice for MLB sitCodes in stat hydrations, use person(stats(type=[statSplits],sitCodes=[h,a],season="year")).
     *
     * 1. Hydrating one sitCode: http://statsapi.mlb.com/api/v1/stats/streaks?gameType=R&streakSpan=notableInSeason&streakType=hittingStreakOverall&season=2018&sportId=1&limit=10&hydrate=person(stats(group=[hitting],type=[statSplits],sitCodes=a)%3A%29
     * 2. Hydrating one statType and multiple sitCodes: http://statsapi.mlb.com/api/v1/stats/streaks?gameType=R&streakSpan=notableInSeason&streakType=hittingStreakOverall&season=2018&sportId=1&limit=10&hydrate=person(stats(group=[hitting,pitching],type=[career,statSplits],sitCodes=[a,h])%3A%29
     *
     * **List of sitCodes can be found at https://statsapi.mlb.com/api/v1/situationCodes**
     *
     * Best practice for MiLB sitCodes in stat hydrations, use person(stats(type=[statSplits],sitCodes=[h,a],season="year",sportId = "MiLB Id")).
     *
     * 1. Hydrating one sitCode: http://statsapi.mlb.com/api/v1/stats/streaks?gameType=R&streakSpan=notableInSeason&streakType=hittingStreakOverall&season=2018&sportId=12&limit=10&hydrate=person(stats(group=[hitting],type=[statSplits],sportId=12,sitCodes=a,season=2018)%3A%29
     * 2. Hydrating one statType and multiple sitCodes: http://statsapi.mlb.com/api/v1/stats/streaks?gameType=R&streakSpan=notableInSeason&streakType=hittingStreakOverall&season=2018&sportId=12&limit=10&hydrate=person(stats(group=[hitting,pitching],type=[career,statSplits],sportId=12,sitCodes=[a,h],season=2018)%3A%29
     *
     * **List of sitCodes can be found at https://statsapi.mlb.com/api/v1/situationCodes**
     *
     * **List of sportIds can be found at http://statsapi.mlb.com/api/v1/sports**
     *
     *
     *
     *
     * @param fields Comma delimited list of specific fields to be returned. Format: topLevelNode, childNode, attribute
     *
     * Example: http://statsapi.mlb.com/api/v1/stats/streaks?gameType=R&streakSpan=notableInSeason&streakType=hittingStreakOverall&season=2018&sportId=1&limit=10&fields=streaks,person,fullName,stats,gamesPlayed,hits
     *
     * @returns StatStreaksRestObject OK
     * @throws ApiError
     */
    public static getStreaks(
        streakType: 'hittingStreakOverall' | 'hittingStreakHome' | 'hittingStreakAway' | 'onBaseOverall' | 'onBaseHome' | 'onBaseAway',
        streakSpan: 'career' | 'season' | 'currentStreak' | 'currentStreakInSeason' | 'notable' | 'notableInSeason',
        season: string,
        gameType?: string,
        startersOnly?: string,
        sportId?: string,
        limit?: number,
        hydrate?: Array<string>,
        fields?: Array<string>,
    ): CancelablePromise<StatStreaksRestObject> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/stats/streaks',
            query: {
                'streakType': streakType,
                'streakSpan': streakSpan,
                'gameType': gameType,
                'startersOnly': startersOnly,
                'season': season,
                'sportId': sportId,
                'limit': limit,
                'hydrate': hydrate,
                'fields': fields,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

}