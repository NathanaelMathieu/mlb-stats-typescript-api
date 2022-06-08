/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { LeagueLeaderContainerRestObject } from '../models/LeagueLeaderContainerRestObject';
import type { PeopleRestObject } from '../models/PeopleRestObject';
import type { RosterRestObject } from '../models/RosterRestObject';
import type { TeamLeaderContainerRestObject } from '../models/TeamLeaderContainerRestObject';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class TeamService {

    /**
     * View directory of team(s).
     * **Description:**
     * This endpoint returns team information based on year,leagueId,sportId and gameType.
     *
     * **Return Includes:** League,division,sport and venue information for each team.
     *
     * **Required Parameters:** No parameters are required to run this call. However, sportIds and leagueIds must be called seperately
     *
     * **Hydrations:** This endpoint can accept the hydrations query parameter.
     *
     *
     *
     * ---
     * **Example of call with hydration parameters**
     *
     * https://statsapi.mlb.com/api/v1/teams?season=2018&sportId=1&hydrate=league
     *
     * @param season Insert year to return team information for a particular season. Default excludes Allstar teams.
     * 1. Insert year: https://statsapi.mlb.com/api/v1/teams?season=1990
     *
     * @param activeStatus Insert activeStatus to populate teams based on active/inactive status for a given season.
     *
     * There are three status types:
     * 1. active - https://statsapi.mlb.com/api/v1/teams?season=2016&sportIds=13&activeStatus=Y
     * 2. inactive -  https://statsapi.mlb.com/api/v1/teams?season=2016&sportIds=13&activeStatus=N
     * 3. both - https://statsapi.mlb.com/api/v1/teams?season=2016&sportIds=13&activeStatus=B
     *
     * @param allStarStatuses Insert allStarStatuses to populate teams based on Allstar status for a given season.
     *
     * There are six status types:
     * 1. Normal Regular Season Teams (N) - https://statsapi.mlb.com/api/v1/teams?season=2016&sportIds=13&allStarStatuses=N
     * 2. Allstar Teams (Y) - https://statsapi.mlb.com/api/v1/teams?season=2016&sportIds=13&allStarStatuses=Y
     * 3. Futures Teams(F) - https://statsapi.mlb.com/api/v1/teams?season=2016&sportIds=13&allStarStatuses=F
     * 4. To Be Determined Teams/Postseason Teams (T) - https://statsapi.mlb.com/api/v1/teams?season=2016&sportIds=13&allStarStatuses=T
     * 5. International Teams (I) - https://statsapi.mlb.com/api/v1/teams?season=2016&sportIds=13&allStarStatuses=I
     * 6. Official/Non Teams (O) - https://statsapi.mlb.com/api/v1/teams?season=2016&sportIds=13&allStarStatuses=O
     *
     * @param leagueIds Insert leagueId to return team  information for particular league.
     * 1. One leagueId:  https://statsapi.mlb.com/api/v1/teams?leagueIds=103
     *
     * For  a list of all leagueIds:  https://statsapi.mlb.com/api/v1/league
     *
     * @param sportIds Insert sportId to return team information for a particular sportId.
     * 1. Insert sportId: https://statsapi.mlb.com/api/v1/teams?sportIds=1&season=1990
     * 2. Insert multiple sportIds: https://statsapi.mlb.com/api/v1/teams?sportIds=1,11,12&season=1990
     *
     * For a list of all sportId: https://statsapi.mlb.com/api/v1/sports
     *
     * @param gameType Insert gameType to return team information for a particular gameType.
     * 1. Insert gameType: https://statsapi.mlb.com/api/v1/teams?gameTypes=R&season=1990&sportIds=1
     *
     * For a list of all gameTypes: https://statsapi.mlb.com/api/v1/gameTypes
     *
     * @param hydrate Insert Hydration(s) to return data for any available team hydration. Format "league,venue"
     * 1. One Hydration: https://statsapi.mlb.com/api/v1/teams?season=2018&sportIds=1&hydrate=league
     * 2. Multiple Hydrations: https://statsapi.mlb.com/api/v1/teams?season=2018&sportIds=1&hydrate=league,venue
     * 3. Check For Available Hydrations: https://statsapi.mlb.com/api/v1/teams?season=2018&sportIds=1&hydrate=hydrations
     *
     * - Available Hydrations:
     *
     * 1. previousSchedule(inclusive=true)
     * 2. nextSchedule
     * 3. venue
     * 4. social
     * 5. deviceProperties
     * 6. game(promotions)
     * 7. game(atBatPromotions)
     * 8. game(tickets)
     * 9. game(atBatTickets)
     * 10. game(sponsorships)
     * 11. league
     * 12. person
     * 13. sport
     * 14. division
     *
     *
     *
     * @param fields Comma delimited list of specific fields to be returned. Format:
     * topLevelNode, childNode, attribute
     *
     * Example: https://statsapi.mlb.com/api/v1/teams?gameTypes=R&season=2018&sportIds=1&fields=teams,id,name
     *
     * @returns any OK
     * @throws ApiError
     */
    public static teams(
        season?: string,
        activeStatus?: string,
        allStarStatuses?: string,
        leagueIds?: string,
        sportIds?: string,
        gameType?: string,
        hydrate?: Array<string>,
        fields?: Array<string>,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/teams',
            query: {
                'season': season,
                'activeStatus': activeStatus,
                'allStarStatuses': allStarStatuses,
                'leagueIds': leagueIds,
                'sportIds': sportIds,
                'gameType': gameType,
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
     * View historical records for a list of teams.
     * allTeams
     * @param teamIds Insert teamId to return a historical data for a particular club(s).
     * 1. Insert teamId: https://statsapi.mlb.com/api/v1/teams/history?teamIds=147
     * 2. Insert multiple teamIds: https://statsapi.mlb.com/api/v1/teams/history?teamIds=147,110
     *
     * For a list of all teamIds:  https://statsapi.mlb.com/api/v1/teams
     *
     * @param startSeason Insert startSeason to return a historical data for a particular club(s) from the given year to present.
     * 1. Insert startSeason: https://statsapi.mlb.com/api/v1/teams/history?teamIds=147&startSeason=1903
     * 2. Insert startSeason & endSeason: https://statsapi.mlb.com/api/v1/teams/history?teamIds=147&startSeason=1995&endSeaon=2009
     *
     * For a list of all teamIds:  https://statsapi.mlb.com/api/v1/teams
     *
     * @param endSeason Insert endSeason to return a historical data for a particular club(s) from the creation to the given year.
     * 1. Insert teamId: https://statsapi.mlb.com/api/v1/teams/history?teamIds=147
     * 2. Insert startSeason & endSeason: https://statsapi.mlb.com/api/v1/teams/history?teamIds=120&startSeason=2000&endSeason=2005
     *
     * For a list of all teamIds:  https://statsapi.mlb.com/api/v1/teams
     *
     * @param fields Comma delimited list of specific fields to be returned. Format:
     * topLevelNode, childNode, attribute
     *
     * Example: https://statsapi.mlb.com/api/v1/teams/history?teamIds=120&startSeason=2000&endSeason=2005&fields=teams,id,name,venue,name
     *
     * @returns any OK
     * @throws ApiError
     */
    public static allTeams(
        teamIds: string,
        startSeason?: string,
        endSeason?: string,
        fields?: Array<string>,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/teams/history',
            query: {
                'teamIds': teamIds,
                'startSeason': startSeason,
                'endSeason': endSeason,
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
     * View team stats.
     * **Description:**
     * This endpoint returns team statistics based on year,leagueId,sportId and gameType.
     *
     * **Return Includes:** team season statistics.
     *
     * **Required Parameters:** stat group, season, and stats are required to run this call
     *
     *
     *
     * ---
     * **Example of call with required parameters**
     *
     * https://statsapi.mlb.com/api/v1/teams/stats?group=hitting&stats=season&season=2018
     *
     * @param season Insert year to return team stats for a particular season.
     * 1. Insert year: https://statsapi.mlb.com/api/v1/teams/stats?group=hitting&stats=season&season=2018
     *
     * @param statGroup Insert statGroup with the group parameter to return team stats for a particular statGroup.
     * 1. Insert statGroup: https://statsapi.mlb.com/api/v1/teams/stats?group=hitting&stats=season&season=2018&sportIds=1
     *
     * For a list of all statGroups: https://statsapi.mlb.com/api/v1/statGroups
     *
     * @param sportIds Insert sportId to return team stats for a particular sportId.
     * 1. Insert sportId: https://statsapi.mlb.com/api/v1/teams/stats?group=hitting&stats=season&season=2018&sportIds=1
     * 2. Insert sportIds: https://statsapi.mlb.com/api/v1/teams/stats?group=hitting&stats=season&season=2018&sportIds=1,11
     *
     * For a list of all sportId: https://statsapi.mlb.com/api/v1/sports
     *
     * @param gameType Insert gameType to return team stats for a particular gameType.
     * 1. Insert gameType: https://statsapi.mlb.com/api/v1/teams/stats?group=hitting&stats=season&season=2018&sportIds=1&gameType=W
     *
     * For a list of all gameTypes: https://statsapi.mlb.com/api/v1/gameTypes
     *
     * @param stats Insert stats to return team stats for a particular statType and statGroup.
     * 1. Insert one statType one statGroup: https://statsapi.mlb.com/api/v1/teams/stats?group=hitting&stats=season&season=2018&sportIds=1&gameType=R
     * 2. Insert multiple statTypes and statGroups: https://statsapi.mlb.com/api/v1/teams/stats?group=pitching,hitting&stats=season,seasonAdvanced&season=2018&sportIds=1&gameType=R
     *
     * **For a list of all statTypes: https://statsapi.mlb.com/api/v1/statTypes**
     *
     * **For a list of all statGroups: https://statsapi.mlb.com/api/v1/statGroups**
     *
     * - Notes on statSplits statType
     *
     * Best practice for MLB sitCodes, use stats=statSplits&sitCodes="sitCode".
     *
     * 1. Team batting statistics batting right: https://statsapi.mlb.com/api/v1/teams/stats?group=hitting&season=2018&sportIds=1&stats=statSplits&sitCodes=r
     *
     * **For a list of all sitCodes: https://statsapi.mlb.com/api/v1/situationCodes**
     *
     * Best practice for MLB byDateRange, use stats=byDateRange&startDate="mm/dd/yyyy"&endDate="mm/dd/yyyy".
     *
     * 1. Team batting statistics from May 17th-May21st: https://statsapi.mlb.com/api/v1/teams/stats?group=hitting&season=2018&sportIds=1&stats=byDateRange&startDate=05/17/2018&endDate=05/21/2018
     *
     *
     *
     * @param order Insert order to return team stats in a particular order.
     * 1. Insert order: https://statsapi.mlb.com/api/v1/teams/stats?group=hitting&season=2018&stats=season&sportIds=1&gameType=R&order=desc
     *
     *
     * @param limit Insert a limit to limit return.
     * 1. Insert limit:  https://statsapi.mlb.com/api/v1/teams/stats?sportId=1&gameType=R&group=hitting&stats=season&season=2018&limit=5&offset=0
     *
     * @param offset Insert an offset to returns i+1 as the first record in the set of teams.
     * 1. Insert offset: https://statsapi.mlb.com/api/v1/teams/stats?sportId=1&gameType=R&group=hitting&stats=season&season=2018&limit=5&offset=0
     *
     * @param sortStat Insert sortStat to sort team stats based on a specific stat.
     * 1. Insert sortStat: https://statsapi.mlb.com/api/v1/teams/stats?group=hitting&season=2018&stats=season&sportIds=1&gameType=R&order=desc&sortStat=homeRuns
     *
     * For a list of all available stats: https://statsapi.mlb.com/api/v1/baseballStats
     *
     *
     *
     * @param fields Comma delimited list of specific fields to be returned. Format:
     * topLevelNode, childNode, attribute
     *
     * Example: https://statsapi.mlb.com/api/v1/teams?gameTypes=R&season=2018&sportIds=1&fields=teams,id,name
     *
     * @returns any OK
     * @throws ApiError
     */
    public static teamsStats(
        season: string,
        statGroup: string,
        sportIds?: string,
        gameType?: string,
        stats?: string,
        order?: string,
        limit?: number,
        offset?: string,
        sortStat?: string,
        fields?: Array<string>,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/teams/stats',
            query: {
                'season': season,
                'sportIds': sportIds,
                'statGroup': statGroup,
                'gameType': gameType,
                'stats': stats,
                'order': order,
                'limit': limit,
                'offset': offset,
                'sortStat': sortStat,
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
     * This endpoint returns statistical data for top performers  based on League Leader Categories.
     *
     * **Return Includes:** Player biographical and statistical information.
     *
     * **Required Parameters:** leaderCategories is required to run this call.
     *
     * **Hydrations:** This endpoint can accept the hydrations query parameter.
     *
     *
     * ---
     * **Example of call with required parameters**
     *
     * https://statsapi.mlb.com/api/v1/teams/stats/leaders?leaderCategories=homeRuns
     *
     * ---
     * **Example of call with hydration parameters**
     *
     * https://statsapi.mlb.com/api/v1/teams/stats/leaders?leaderCategories=homeRuns&hydrate=team
     *
     * @param leaderCategories Insert a league leader category to return information  and ranking for a particular statistic.
     * 1. Insert leaderCategory:  https://statsapi.mlb.com/api/v1/teams/stats/leaders?leaderCategories=homeRuns
     *
     * For  a list of all leaderCategories:  https://statsapi.mlb.com/api/v1/leagueLeaderTypes
     *
     * @param sitCodes Insert a sitCode to return information  and ranking for a particular statistic in a particular game type.
     * 1. Insert sitCode:  https://statsapi.mlb.com/api/v1/teams/stats/leaders?sportId=1&group=hitting&sitCodes=p2&statType=statSplits&leaderCategories=homeRuns
     *
     * For a list of all sitCodes: https://statsapi.mlb.com/api/v1/situationCodes
     *
     * @param gameTypes Insert a gameType to return information  and ranking for a particular statistic in a particular gameType.
     * 1. Insert gameType:  https://statsapi.mlb.com/api/v1/teams/stats/leaders?gameTypes=D&leaderCategories=homeRuns&season=2018&sportId=1&statGroup=hitting
     *
     * For a list of all gameTypes: https://statsapi.mlb.com/api/v1/gameTypes
     *
     * @param statGroup Insert a stat group to return information  and ranking for a particular statistic in a particular group.
     * 1. Insert statGroup:  https://statsapi.mlb.com/api/v1/teams/stats/leaders?leaderCategories=homeRuns&gameTypes=R&statGroups=hitting&season=2018
     *
     * For a list of all statGroups: https://statsapi.mlb.com/api/v1/statGroups
     *
     *
     * @param season Insert year to return information  and ranking for a particular statistic in a given year.
     * 1. Insert year: https://statsapi.mlb.com/api/v1/teams/stats/leaders?leaderCategories=homeRuns&gameTypes=R&statGroups=hitting&season=2018
     *
     * @param leagueIds Insert leagueIds to return statistics for a given team.
     * 1. Insert leagueIds: https://statsapi.mlb.com/api/v1/teams/stats/leaders?leaderCategories=homeRuns&sportId=1&leagueIds=104&season=2018
     *
     * @param startDate Insert date to return a directory of attendance metrics for a particular date range. Format:
     * MM/DD/YYYY
     *
     * **startDate must be coupled with endDate and byDateRange statType**
     *
     * 1. Insert date range: https://statsapi.mlb.com/api/v1/teams/stats/leaders?leaderCategories=homeRuns&startDate=06/01/2018&endDate=06/15/2018&season=2018&statType=byDateRange
     *
     * @param endDate Insert date to return a directory of attendance metrics for a particular date range. Format:
     * MM/DD/YYYY
     *
     * **endDate must be coupled with startDate and byDateRange statType**
     *
     * 1. Insert date range: https://statsapi.mlb.com/api/v1/teams/stats/leaders?leaderCategories=homeRuns&startDate=06/01/2018&endDate=06/15/2018&season=2018&statType=byDateRange
     *
     * @param sportId Insert a sportId to return information  and ranking for a particular statistic in a given sport.
     * 1. Insert sportId:  https://statsapi.mlb.com/api/v1/teams/stats/leaders?leaderCategories=homeRuns&sportId=12&season=2018
     *
     * For  a list of all sportIds:  https://statsapi.mlb.com/api/v1/sports
     *
     * @param hydrate Insert Hydration(s) to return data for any available team hydration. The hydrations for Teams stats leaders  and "team" which have subhydrations Format "team(subHydration1, subHydrations2)"
     *
     * 1. One Hydration: https://statsapi.mlb.com/api/v1/teams/stats/leaders?leaderCategories=homeRuns&hydrate=team(league)
     * 2. Multiple Hydrations: https://statsapi.mlb.com/api/v1/teams/stats/leaders?leaderCategories=homeRuns&hydrate=team(league,nextSchedule)
     * 3. Check For Available Hydrations: https://statsapi.mlb.com/api/v1/teams?season=2018&sportIds=1&hydrate=hydrations
     *
     * - Available Hydrations:
     *
     * 1. previousSchedule(inclusive=true)
     * 2. nextSchedule
     * 3. venue
     * 4. social
     * 5. deviceProperties
     * 6. game(promotions)
     * 7. game(atBatPromotions)
     * 8. game(tickets)
     * 9. game(atBatTickets)
     * 10. game(sponsorships)
     * 11. league
     * 12. person
     * 13. sport
     * 14. division
     *
     *
     *
     * @param limit Insert a limit to limit return.
     * 1. Insert limit: https://statsapi.mlb.com/api/v1/teams/stats/leaders?leaderCategories=homeRuns&limit=1
     *
     * @param fields Comma delimited list of specific fields to be returned. Format: topLevelNode, childNode, attribute
     *
     * Example: https://statsapi.mlb.com/api/v1/teams/stats/leaders?leaderCategories=homeRuns&fields=leagueLeaders,leaders,rank,value,team,name
     *
     * @returns LeagueLeaderContainerRestObject OK
     * @throws ApiError
     */
    public static teamstatsleaders(
        leaderCategories: Array<string>,
        sitCodes?: Array<string>,
        gameTypes?: Array<string>,
        statGroup?: Array<string>,
        season?: string,
        leagueIds?: number,
        startDate?: string,
        endDate?: string,
        sportId?: string,
        hydrate?: Array<string>,
        limit?: number,
        fields?: Array<string>,
    ): CancelablePromise<LeagueLeaderContainerRestObject> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/teams/stats/leaders',
            query: {
                'leaderCategories': leaderCategories,
                'sitCodes': sitCodes,
                'gameTypes': gameTypes,
                'statGroup': statGroup,
                'season': season,
                'leagueIds': leagueIds,
                'startDate': startDate,
                'endDate': endDate,
                'sportId': sportId,
                'hydrate': hydrate,
                'limit': limit,
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
     * View a directory of affiliates for a given team.
     * **Description:**
     * This endpoint returns a directory of affiliates for a given team based on teamIds,leagueId,sportId and gameType.
     *
     * **Return Includes:** League,division,sport and venue information for each team.
     *
     * **Required Parameters:** teamIds is required to run this call.
     *
     * **Hydrations:** This endpoint can accept the hydrations query parameter.
     *
     *
     *
     * ---
     * **Example of call with required parameters**
     *
     * https://statsapi.mlb.com/api/v1/teams/affiliates?teamIds=147
     *
     * ---
     * **Example of call with hydrated parameters**
     *
     * https://statsapi.mlb.com/api/v1/teams/affiliates?teamIds=147&hydrate=league
     *
     * @param teamIds Insert teamId to return a directory of affiliates for a particular club.
     * 1. Insert teamId: https://statsapi.mlb.com/api/v1/teams/affiliates?teamIds=147
     *
     * For a list of all teamIds:  https://statsapi.mlb.com/api/v1/teams
     *
     * @param sportId Insert a sportId to return a directory of affiliates for a particular club in a particular sport.
     * 1. Insert sportId:  https://statsapi.mlb.com/api/v1/teams/affiliates?sportId=1&teamIds=147
     *
     * For  a list of all sportIds:  https://statsapi.mlb.com/api/v1/sports
     *
     * @param season Insert year to return a directory of affiliates for a particular club in a particular season.
     * 1. Insert year: https://statsapi.mlb.com/api/v1/teams/affiliates?season=2017&teamIds=147
     *
     * @param hydrate Insert Hydration(s) to return data for any available team hydration. Format "league,venue"
     * 1. One Hydration: https://statsapi.mlb.com/api/v1/teams/affiliates?season=2018&teamIds=147&sportId=1&hydrate=league
     * 2. Multiple Hydrations: https://statsapi.mlb.com/api/v1/teams/affiliates?season=2018&teamIds=147&sportId=1&hydrate=league,venue
     * 3. Check For Available Hydrations: https://statsapi.mlb.com/api/v1/teams/affiliates?season=2018&teamIds=147&sportId=1&hydrate=hydrations
     *
     * - Available Hydrations:
     *
     * 1. previousSchedule(inclusive=true)
     * 2. nextSchedule
     * 3. venue
     * 4. social
     * 5. deviceProperties
     * 6. game(promotions)
     * 7. game(atBatPromotions)
     * 8. game(tickets)
     * 9. game(atBatTickets)
     * 10. game(sponsorships)
     * 11. league
     * 12. person
     * 13. sport
     * 14. division
     *
     * @param fields Comma delimited list of specific fields to be returned. Format:
     * topLevelNode, childNode, attribute
     *
     * Example: https://statsapi.mlb.com/api/v1/teams/affiliates?teamIds=147&hydrate=league&fields=teams,id,name
     *
     * @returns any OK
     * @throws ApiError
     */
    public static affiliates(
        teamIds: string,
        sportId?: number,
        season?: string,
        hydrate?: Array<string>,
        fields?: Array<string>,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/teams/affiliates',
            query: {
                'teamIds': teamIds,
                'sportId': sportId,
                'season': season,
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
     * View a team directory.
     *
     * **Description:**
     * This endpoint returns a team directory based on teamId.
     *
     * **Return Includes:** League,division,sport and venue information for each team.
     *
     * **Required Parameters:** teamId is required to run this call.
     *
     * **Hydrations:** This endpoint can accept the hydrations query parameter.
     *
     *
     *
     * ---
     * **Example of call with required parameters**
     *
     * https://statsapi.mlb.com/api/v1/teams/147
     *
     * ---
     * **Example of call with hydrated parameters**
     *
     * https://statsapi.mlb.com/api/v1/teams/147?hydrate=league
     *
     * @param teamId Insert teamId to return a directory of team information for a particular club.
     * 1. Insert teamId: https://statsapi.mlb.com/api/v1/teams/147
     *
     * For a list of all teamIds:  https://statsapi.mlb.com/api/v1/teams
     *
     * @param season Insert year to return a directory of team information for a particular club in a specific season.
     * 1. Insert year: https://statsapi.mlb.com/api/v1/teams/147?season=1960
     *
     * @param sportId Insert a sportId to return a directory of team information for a particular club in a sport.
     * 1. Insert sportId:  https://statsapi.mlb.com/api/v1/teams/147?season=1960&sportId=1
     *
     * For  a list of all sportIds:  https://statsapi.mlb.com/api/v1/sports
     *
     * @param hydrate Insert Hydration(s) to return data for any available team hydration. Format "league,venue"
     * 1. One Hydration: https://statsapi.mlb.com/api/v1/teams/147?season=2018&sportId=1&hydrate=league
     * 2. Multiple Hydrations: https://statsapi.mlb.com/api/v1/teams/147?season=2018&sportId=1&hydrate=league,social
     * 3. Check For Available Hydrations: https://statsapi.mlb.com/api/v1/teams/147?season=2018&sportId=1&hydrate=hydrations
     *
     * - Available Hydrations:
     *
     * 1. previousSchedule(inclusive=true)
     * 2. nextSchedule
     * 3. venue
     * 4. social
     * 5. deviceProperties
     * 6. game(promotions)
     * 7. game(atBatPromotions)
     * 8. game(tickets)
     * 9. game(atBatTickets)
     * 10. game(sponsorships)
     * 11. league
     * 12. person
     * 13. sport
     * 14. division
     *
     * @param fields Comma delimited list of specific fields to be returned. Format:
     * topLevelNode, childNode, attribute
     *
     * Example: https://statsapi.mlb.com/api/v1/teams/147?fields=teams,name,id,league,division
     *
     * @returns any OK
     * @throws ApiError
     */
    public static teamId(
        teamId: string,
        season?: string,
        sportId?: number,
        hydrate?: Array<string>,
        fields?: Array<string>,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/teams/{teamId}',
            path: {
                'teamId': teamId,
            },
            query: {
                'season': season,
                'sportId': sportId,
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
     * View stats for an individual team.
     *
     * **Description:**
     * This endpoint returns a team directory based on teamId.
     *
     * **Return Includes:** Team season statistics.
     *
     * **Required Parameters:** stat group, season, and stats are required to run this call.
     *
     * **Hydrations:** This endpoint can accept the hydrations query parameter.
     *
     *
     *
     * ---
     * **Example of call with required parameters**
     *
     * https://statsapi.mlb.com/api/v1/teams/137/stats?group=hitting&stats=season&season=2019
     *
     * ---
     * **Example of call with hydrated parameters**
     *
     * https://statsapi.mlb.com/api/v1/teams/137/stats?group=hitting&stats=season&season=2019
     *
     * @param teamId Insert teamId to return a directory of team information for a particular club.
     * 1. Insert teamId: https://statsapi.mlb.com/api/v1/teams/137/stats?group=hitting&stats=season&season=2018
     *
     * For a list of all teamIds:  https://statsapi.mlb.com/api/v1/teams
     *
     * @param season Insert year to return team stats for a particular season.
     * 1. Insert year: https://statsapi.mlb.com/api/v1/teams/137/stats?group=hitting&stats=season&season=2018
     *
     * @param statGroup Insert statGroup with the group parameter to return team stats for a particular statGroup.
     * 1. Insert statGroup: https://statsapi.mlb.com/api/v1/teams/137/stats?group=hitting&stats=season&season=2018&sportIds=1
     *
     * For a list of all statGroups: https://statsapi.mlb.com/api/v1/statGroups
     *
     * @param gameType Insert gameType to return team stats for a particular gameType.
     * 1. Insert gameType: https://statsapi.mlb.com/api/v1/teams/137/stats?group=hitting&stats=season&season=2018&sportIds=1&gameType=R
     *
     * For a list of all gameTypes: https://statsapi.mlb.com/api/v1/gameTypes
     *
     * @param stats Insert stats to return team stats for a particular statType and statGroup.
     * 1. Insert one statType one statGroup: https://statsapi.mlb.com/api/v1/teams/137/stats?group=hitting&stats=season&season=2018&sportIds=1&gameType=R
     * 2. Insert multiple statTypes and statGroups: https://statsapi.mlb.com/api/v1/teams/137/stats?group=pitching,hitting&stats=season,seasonAdvanced&season=2018&sportIds=1&gameType=R
     *
     * **For a list of all statTypes: https://statsapi.mlb.com/api/v1/statTypes**
     *
     * **For a list of all statGroups: https://statsapi.mlb.com/api/v1/statGroups**
     *
     * - Notes on statSplits statType
     *
     * Best practice for MLB sitCodes, use stats=statSplits&sitCodes="sitCode".
     *
     * 1. Team batting statistics batting right: https://statsapi.mlb.com/api/v1/teams/137/stats?group=hitting&season=2018&sportIds=1&stats=statSplits&sitCodes=r
     *
     * **For a list of all sitCodes: https://statsapi.mlb.com/api/v1/situationCodes**
     *
     *
     *
     *
     * @param fields Comma delimited list of specific fields to be returned. Format:
     * topLevelNode, childNode, attribute
     *
     * Example: https://statsapi.mlb.com/api/v1/teams/137/stats?group=hitting&stats=season&season=2019&fields=stats,type,displayName,splits,stat,homeRuns
     *
     * @returns any OK
     * @throws ApiError
     */
    public static teamIdIndividualStats(
        teamId: string,
        season: string,
        statGroup: string,
        gameType?: string,
        stats?: string,
        fields?: Array<string>,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/teams/{teamId}/stats',
            path: {
                'teamId': teamId,
            },
            query: {
                'season': season,
                'statGroup': statGroup,
                'gameType': gameType,
                'stats': stats,
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
     * View a directory of affiliates for a given team.
     * **Description:**
     * This endpoint allows you to return directory of affiliates for a given team.
     *
     * **Return Includes:** League,division,sport and venue information for each team.
     *
     * **Required Parameters:** teamId is required to run this call.
     *
     * **Hydrations:** This endpoint can accept the hydrations query parameter.
     *
     *
     *
     * ---
     * **Example of call with required parameters**
     *
     * https://statsapi.mlb.com/api/v1/teams/147/affiliates
     *
     * ---
     * **Example of call with hydrated parameters**
     *
     * https://statsapi.mlb.com/api/v1/teams/147/affiliates?hydrate=league
     *
     * @param teamId Insert teamId to return a directory of affiliates for a given team.
     * 1. Insert teamId: https://statsapi.mlb.com/api/v1/teams/147/affiliates
     *
     * For a list of all teamIds:  https://statsapi.mlb.com/api/v1/teams
     *
     * @param sportId Insert sportId to return a directory of affiliates for a given team in a particular sport.
     * 1. Insert sportId: https://statsapi.mlb.com/api/v1/teams/147/affiliates?sportId=1
     *
     * For a list of all sportIds:  https://statsapi.mlb.com/api/v1/sports
     *
     * @param season Insert year to return a directory of affiliates for a particular club in a particular season.
     * 1. Insert year: https://statsapi.mlb.com/api/v1/teams/147/affiliates?season=2017
     *
     * @param hydrate Insert Hydration(s) to return data for any available team hydration. Format "league,venue"
     * 1. One Hydration: https://statsapi.mlb.com/api/v1/teams/147/affiliates?season=2018&sportId=1&hydrate=league
     * 2. Multiple Hydrations: https://statsapi.mlb.com/api/v1/teams/147/affiliates?season=2018&sportId=1&hydrate=league,social
     * 3. Check For Available Hydrations: https://statsapi.mlb.com/api/v1/teams/147/affiliates?season=2018&sportId=1&hydrate=hydrations
     *
     * - Available Hydrations:
     *
     * 1. previousSchedule(inclusive=true)
     * 2. nextSchedule
     * 3. venue
     * 4. social
     * 5. deviceProperties
     * 6. game(promotions)
     * 7. game(atBatPromotions)
     * 8. game(tickets)
     * 9. game(atBatTickets)
     * 10. game(sponsorships)
     * 11. league
     * 12. person
     * 13. sport
     * 14. division
     *
     * @param fields Comma delimited list of specific fields to be returned. Format:
     * topLevelNode, childNode, attribute
     *
     * Example: https://statsapi.mlb.com/api/v1/teams/109/affiliates?season=2018&fields=teams,name
     *
     * @returns any OK
     * @throws ApiError
     */
    public static teamIdaffiliates(
        teamId: string,
        sportId?: number,
        season?: string,
        hydrate?: Array<string>,
        fields?: Array<string>,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/teams/{teamId}/affiliates',
            path: {
                'teamId': teamId,
            },
            query: {
                'sportId': sportId,
                'season': season,
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
     * View all team alumni.
     * **Description:**
     * This endpoint allows you to return directory of active alumni for a given team.
     *
     * **Return Includes:** biographical information.
     *
     * **Required Parameters:** teamId,season & statGroup are required to run this call.
     *
     * **Hydrations:** This endpoint can accept the hydrations query parameter.
     *
     *
     *
     * ---
     * **Example of call with required parameters**
     *
     * https://statsapi.mlb.com/api/v1/teams/147/alumni?season=2018&group=hitting
     *
     * ---
     * **Example of call with hydrated parameters**
     *
     * https://statsapi.mlb.com/api/v1/teams/147/alumni?season=2018&group=hitting&hydrate=rosterEntries
     *
     * @param teamId Insert teamId to return a directory of alumni for a given team.
     * 1. Insert teamId: https://statsapi.mlb.com/api/v1/teams/147/alumni?season=2018&group=hitting
     *
     * For a list of all teamIds:  https://statsapi.mlb.com/api/v1/teams
     *
     * @param season Insert year to return a directory of alumni for a particular club in a particular season.
     * 1. Insert year: https://statsapi.mlb.com/api/v1/teams/147/alumni?season=2018&group=hitting
     *
     * @param group Insert statGroup with the group parameter to return a directory of alumni for a given team based on statistical grouping.
     * 1. Insert statGroup: https://statsapi.mlb.com/api/v1/teams/147/alumni?season=2018&group=hitting
     *
     * For a list of all statGroups:  https://statsapi.mlb.com/api/v1/statGroups
     *
     * @param hydrate
     * Insert Hydration(s) to return data for any available team hydration. The hydrations for Teams contain "person" and "team" which have subhydrations Format "team(subHydration1, subHydrations2)" "
     * 1. One Hydration Using Team Sub Hydration: https://statsapi.mlb.com/api/v1/teams/111/leaders?leaderCategories=homeRuns&season=2018&hydrate=team(league)
     * 2. Multiple Hydrations Using Team Sub Hydration: https://statsapi.mlb.com/api/v1/teams/111/leaders?leaderCategories=homeRuns&season=2018&hydrate=team(league,venue)
     * 3. Multiple Hydrations Using Team & Stat Sub Hydrations: https://statsapi.mlb.com/api/v1/teams/111/leaders?leaderCategories=homeRuns&season=2018&hydrate=person(transactions),team(league)
     * 4. Check For Available Hydrations: https://statsapi.mlb.com/api/v1/teams/111/leaders?leaderCategories=homeRuns&season=2018&hydrate=hydrations
     *
     *
     * - Available Hydrations:
     *
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
     *
     *
     * - Notes on "currentTeam" hydration:
     *
     * When hydrating for "currentTeam" users can use the 'appContext' parameter to specify most recent team by league
     * 1. Most Recent Major League Team: https://statsapi.mlb.com/api/v1/teams/147/alumni?season=2018&group=hitting&hydrate=currentTeam&appContext=majorLeague
     * 2. Most Recent Minor League Team: https://statsapi.mlb.com/api/v1/teams/147/alumni?season=2018&group=hitting&hydrate=currentTeam&appContext=minorLeague
     *
     *
     *
     * - Notes on Stat Hydrations:
     *
     * Best practice for MLB stat hydrations, use person(stats(group=["statGroup1","statGroup2"],type=["statType1","statType2"])).
     *
     * 1. Hydrating one stat:  https://statsapi.mlb.com/api/v1/teams/147/alumni?season=2018&group=hitting&hydrate=stats(group=[hitting],type=[career])
     * 2. Hydrating multiple statTypes/statGroups:  https://statsapi.mlb.com/api/v1/teams/147/alumni?season=2018&group=hitting&hydrate=stats(group=[hitting,pitching],type=[career,yearByYear])
     *
     * **List of statTypes can be found at https://statsapi.mlb.com/api/v1/statTypes**
     *
     * **List of statGroups can be found at https://statsapi.mlb.com/api/v1/statGroups**
     *
     * Best practice for MLB individual stat hydrations, use person(stats(group=["statGroup1","statGroup2"],type=["statType1","statType2"],season="year")).
     *
     * 1. Hydrating one stat:  https://statsapi.mlb.com/api/v1/teams/147/alumni?season=2018&group=hitting&hydrate=stats(group=[hitting],type=[season],season=2018)
     * 2. Hydrating multiple statTypes/statGroups:  https://statsapi.mlb.com/api/v1/teams/147/alumni?season=2018&group=hitting&hydrate=stats(group=[hitting,pitching],type=[season,seasonAdvanced],season=2018)
     *
     * **List of statTypes can be found at https://statsapi.mlb.com/api/v1/statTypes**
     *
     * **List of statGroups can be found at https://statsapi.mlb.com/api/v1/statGroups**
     *
     * Best practice for MiLB stat hydrations, use person(stats(group=["statGroup1,statGroup2"],type=["statType1","statType2],sportId="MiLB Id")).
     *
     * 1. Hydrating one stat:  https://statsapi.mlb.com/api/v1/teams/147/alumni?season=2018&group=hitting&hydrate=stats(group=[hitting,pitching],type=[career],sportId=12),hydrations
     * 2. Hydrating multiple statTypes/statGroups:  https://statsapi.mlb.com/api/v1/teams/147/alumni?season=2018&group=hitting&hydrate=stats(group=[hitting,pitching],type=[career,yearByYear],sportId=12),hydrations
     *
     * **List of statTypes can be found at https://statsapi.mlb.com/api/v1/statTypes**
     *
     * **List of sportIds can be found at https://statsapi.mlb.com/api/v1/sports**
     *
     * **List of statGroups can be found at https://statsapi.mlb.com/api/v1/statGroups**
     *
     * Best practice for MiLB stat hydrations, use person(stats(group=["statGroup1,statGroup2"],type=["statType1","statType2],sportId="MiLB Id",season=2018)).
     *
     * 1. Hydrating one stat:  https://statsapi.mlb.com/api/v1/teams/147/alumni?season=2018&group=hitting&hydrate=stats(group=[hitting,pitching],type=[season],sportId=12,season=2018),hydrations
     * 2. Hydrating multiple statTypes/statGroups:  https://statsapi.mlb.com/api/v1/teams/147/alumni?season=2018&group=hitting&hydrate=stats(group=[hitting,pitching],type=[season,seasonAdvanced],sportId=12,season=2018),hydrations
     *
     * **List of statTypes can be found at https://statsapi.mlb.com/api/v1/statTypes**
     *
     * **List of sportIds can be found at https://statsapi.mlb.com/api/v1/sports**
     *
     * **List of statGroups can be found at https://statsapi.mlb.com/api/v1/statGroups**
     *
     * Best practice for season stats in date range, use person(stats(group=["statGroup1","statGroup2"],type=["byDateRange"]startDate="mm/dd/yyyy",endDate="mm/dd/yyyy",season="year")).
     *
     * 1. Hydrating byDateRange stat: https://statsapi.mlb.com/api/v1/teams/147/alumni?season=2018&group=hitting&hydrate=stats(group=[hitting,pitching],type=[byDateRange],startDate=05/17/2018,endDate=09/21/2018,season=2018)
     *
     * **List of statTypes can be found at https://statsapi.mlb.com/api/v1/statTypes**
     *
     * **List of statGroups can be found at https://statsapi.mlb.com/api/v1/statGroups**
     *
     * Best practice for player vs. player stats, use person(stats(group=["statGroup1","statGroup2"],type=["vsPlayer"],opposingPlayerId="personId",season="year",sportId="sportId").
     *
     * 1. Hydrating vsPlayer stat: https://statsapi.mlb.com/api/v1/teams/147/alumni?season=2018&group=pitching&hydrate=stats(group=[pitching],type=[vsPlayer],opposingPlayerId=453568,season=2018,sportId=1)
     *
     * **List of statTypes can be found at https://statsapi.mlb.com/api/v1/statTypes**
     *
     * **List of statGroups can be found at https://statsapi.mlb.com/api/v1/statGroups**
     * **List of sportIds can be found at https://statsapi.mlb.com/api/v1/sports**
     *
     * Best practice for player vs. team stats, use stats(group=["statGroup1","statGroup2"],type=["vsTeam"],opposingTeamId="teamId",season="year",sportId="sportId").
     *
     * 1. Hydrating vsTeam stat: https://statsapi.mlb.com/api/v1/teams/147/alumni?season=2018&group=pitching&hydrate=stats(group=[pitching],type=[vsTeam],opposingTeamId=141,season=2018,sportId=1)
     *
     * **List of statTypes can be found at https://statsapi.mlb.com/api/v1/statTypes**
     *
     * **List of statGroups can be found at https://statsapi.mlb.com/api/v1/statGroups**
     *
     * **List of teamIds can be found at https://statsapi.mlb.com/api/v1/teams**
     *
     * **List of sportIds can be found at https://statsapi.mlb.com/api/v1/sports**
     *
     * Best practice for limiting playLog & pitchLog, use stats(group=["statGroup1","statGroup2"],type=["playLog"],limit=1,season="year").
     *
     * 1. Limiting playLog: https://statsapi.mlb.com/api/v1/teams/147/alumni?season=2018&group=pitching&hydrate=stats(group=[hitting,pitching],type=[playLog],limit=1,season=2017)
     *
     * 2. Limiting pitchLog:https://statsapi.mlb.com/api/v1/teams/147/alumni?season=2018&group=pitching&hydrate=stats(group=[hitting,pitching],type=[pitchLog],limit=1,season=2017)
     *
     * **List of statTypes can be found at https://statsapi.mlb.com/api/v1/statTypes**
     *
     * **List of statGroups can be found at https://statsapi.mlb.com/api/v1/statGroups**
     *
     * Best practice for metrics in stat hydrations, use person(stats(type=metricAverages,metrics=launchSpeed,season=2018)) or person(stats(type=metricLog,metrics=launchSpeed,season=2018)).
     *
     * 1. Hydrating one metric with metricAverages: https://statsapi.mlb.com/api/v1/teams/147/alumni?season=2018&group=pitching&hydrate=stats(group=[hitting,pitching],type=[metricAverages],metrics=launchSpeed,season=2018),hydrations
     * 2. Hydrating one statType and multiple metrics with metricAverages: https://statsapi.mlb.com/api/v1/teams/147/alumni?season=2018&group=pitching&hydrate=stats(group=[hitting,pitching],type=[career,metricAverages],metrics=[launchSpeed,launchAngle],season=2018),hydrations
     * 3. Hydrating one metric with metricLog: https://statsapi.mlb.com/api/v1/teams/147/alumni?season=2018&group=pitching&hydrate=stats(group=[hitting,pitching],type=[metricLog],metrics=launchSpeed,season=2018),hydrations
     * 4. Hydrating one statType and multiple metrics with metricLog: https://statsapi.mlb.com/api/v1/teams/147/alumni?season=2018&group=pitching&hydrate=stats(group=[hitting,pitching],type=[career,metricLog],metrics=[launchSpeed,launchAngle],season=2018),hydrations
     *
     * **List of metrics can be found at https://statsapi.mlb.com/api/v1/metrics**
     *
     * Best practice for MLB sitCodes in stat hydrations, use stats(type=statSplits,sitCodes=[h,a],season=2018).
     *
     * 1. Hydrating one sitCode: https://statsapi.mlb.com/api/v1/teams/147/alumni?season=2018&group=hitting&hydrate=stats(group=[hitting,pitching],type=[statSplits],sitCodes=h,season=2018),hydrations
     * 2. Hydrating one statType and multiple sitCodes: https://statsapi.mlb.com/api/v1/teams/147/alumni?season=2018&group=hitting&hydrate=stats(group=[hitting,pitching],type=[career,statSplits],sitCodes=[h,a],season=2018),hydrations
     *
     * **List of sitCodes can be found at https://statsapi.mlb.com/api/v1/situationCodes**
     *
     * Best practice for MiLB sitCodes in stat hydrations, use stats(type=statSplits,sitCodes=[h,a],season=2018,sportId = "MiLB Id").
     *
     * 1. Hydrating one sitCode: https://statsapi.mlb.com/api/v1/teams/260/alumni?season=2018&group=hitting&hydrate=stats(group=[hitting,pitching],type=[career,statSplits],sitCodes=[h],season=2018),hydrations
     * 2. Hydrating one statType and multiple sitCodes: https://statsapi.mlb.com/api/v1/teams/260/alumni?season=2018&group=hitting&hydrate=stats(group=[hitting,pitching],type=[career,statSplits],sitCodes=[h,a],season=2018),hydrations
     *
     * **List of sitCodes can be found at https://statsapi.mlb.com/api/v1/situationCodes**
     *
     * **List of sportIds can be found at https://statsapi.mlb.com/api/v1/sports**
     *
     *
     *
     * @param fields Comma delimited list of specific fields to be returned. Format:
     * topLevelNode, childNode, attribute
     *
     * Example: https://statsapi.mlb.com/api/v1/teams/147/alumni?season=2018&group=hitting&fields=people,fullName
     *
     * @returns PeopleRestObject OK
     * @throws ApiError
     */
    public static alumni(
        teamId: string,
        season: string,
        group: string,
        hydrate?: Array<string>,
        fields?: Array<string>,
    ): CancelablePromise<PeopleRestObject> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/teams/{teamId}/alumni',
            path: {
                'teamId': teamId,
            },
            query: {
                'season': season,
                'group': group,
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
     * View biographical  information on all coaches for a given club.
     * **Description:**
     * This endpoint allows you return a directory of coaches for a particular team.
     *
     * **Return Includes:** fullName, job,jobID and profile link.
     *
     * **Required Parameters:** teamId is required to run this call.
     *
     * ---
     * **Example of call with required parameters**
     *
     * https://statsapi.mlb.com/api/v1/teams/109/coaches
     *
     *
     * @param teamId Insert teamId to return a directory of coaches for a given team.
     * 1. Insert teamId: https://statsapi.mlb.com/api/v1/teams/147/coaches
     *
     * For a list of all teamIds:  https://statsapi.mlb.com/api/v1/teams
     *
     * @param season Insert year to return a directory of coaches for a particular club in a particular season.
     * 1. Insert year: https://statsapi.mlb.com/api/v1/teams/147/coaches?season=2017
     *
     * @param date Insert date to return a directory of coaches for a particular club on a particular date.
     * 1. Insert date: https://statsapi.mlb.com/api/v1/teams/109/coaches?date=08/28/2016
     *
     * @param fields Comma delimited list of specific fields to be returned. Format:
     * topLevelNode, childNode, attribute
     *
     * Example: https://statsapi.mlb.com/api/v1/teams/109/coaches?fields=roster,person,fullName
     *
     * @returns RosterRestObject OK
     * @throws ApiError
     */
    public static teamIdcoaches(
        teamId: number,
        season?: string,
        date?: string,
        fields?: Array<string>,
    ): CancelablePromise<RosterRestObject> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/teams/{teamId}/coaches',
            path: {
                'teamId': teamId,
            },
            query: {
                'season': season,
                'date': date,
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
     * View biographical  information on all personnel for a given club.
     * **Description:**
     * This endpoint allows you return a directory of personnel for a particular team.
     *
     * **Return Includes:** fullName, job,jobID and profile link.
     *
     * **Required Parameters:** teamId is required to run this call.
     *
     * ---
     * **Example of call with required parameters**
     *
     * https://statsapi.mlb.com/api/v1/teams/109/personnel
     *
     *
     * @param teamId Insert teamId to return a directory of personnel for a given team.
     * 1. Insert teamId: https://statsapi.mlb.com/api/v1/teams/147/personnel
     *
     * For a list of all teamIds:  https://statsapi.mlb.com/api/v1/teams
     *
     * @param date Insert date to return a directory of personnel for a particular club on a particular date.
     * 1. Insert date: https://statsapi.mlb.com/api/v1/teams/109/personnel?date=08/28/2016
     *
     * @param fields Comma delimited list of specific fields to be returned. Format:
     * topLevelNode, childNode, attribute
     *
     * Example: https://statsapi.mlb.com/api/v1/teams/109/personnel?fields=roster,person,fullName
     *
     * @returns RosterRestObject OK
     * @throws ApiError
     */
    public static teamIdpersonnel(
        teamId: number,
        date?: string,
        fields?: Array<string>,
    ): CancelablePromise<RosterRestObject> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/teams/{teamId}/personnel',
            path: {
                'teamId': teamId,
            },
            query: {
                'date': date,
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
     * View statistical and biographical  information on stat leaders for a given club.
     * **Description:**
     * This endpoint returns statistical data for a team's top performers information based on League Leader Categories.
     *
     * **Return Includes:** Player biographical and statistical information.
     *
     * **Required Parameters:** teamdId,season, and leaderCategories is required to run this call.
     *
     * **Hydrations:** This endpoint can accept the hydrations query parameter.
     *
     *
     *
     * ---
     * **Example of call with required parameters**
     *
     * https://statsapi.mlb.com/api/v1/teams/111/leaders?leaderCategories=homeRuns&season=2018
     *
     * ---
     * **Example of call with hydration parameters**
     *
     * https://statsapi.mlb.com/api/v1/teams/111/leaders?leaderCategories=homeRuns&season=2018&hydrate=team(league),hydrations
     *
     * @param teamId Insert a teamId to return information  and ranking for a particular statistic.
     * 1. Insert teamId: https://statsapi.mlb.com/api/v1/teams/111/leaders?leaderCategories=homeRuns&season=2018
     *
     * For a list of all teamIds:  https://statsapi.mlb.com/api/v1/teams
     *
     * @param leaderCategories Insert a league leader category to return information  and ranking for a particular statistic.
     * 1. Insert leaderCategories:  https://statsapi.mlb.com/api/v1/teams/111/leaders?leaderCategories=homeRuns&season=2018
     *
     * For  a list of all leaderCategories:  https://statsapi.mlb.com/api/v1/leagueLeaderTypes
     *
     * @param season Insert year to return information  and ranking for a particular statistic in a given year.
     * 1. Insert year: https://statsapi.mlb.com/api/v1/teams/111/leaders?leaderCategories=homeRuns&season=2018
     *
     * @param leaderGameTypes Insert a game type to return information  and ranking for a particular statistic in a particular game type.
     * 1. Insert gameType: https://statsapi.mlb.com/api/v1/teams/147/leaders?leaderCategories=homeRuns&season=2017&leaderGameTypes=D
     *
     * For a list of all gameTypes: https://statsapi.mlb.com/api/v1/gameTypes
     *
     * @param hydrate
     * Insert Hydration(s) to return data for any available team hydration. The hydrations for Teams contain "person" and "team" which have subhydrations Format "team(subHydration1, subHydrations2)" "
     * 1. One Hydration Using Team Sub Hydration: https://statsapi.mlb.com/api/v1/teams/111/leaders?leaderCategories=homeRuns&season=2018&hydrate=team(league)
     * 2. Multiple Hydrations Using Team Sub Hydration: https://statsapi.mlb.com/api/v1/teams/111/leaders?leaderCategories=homeRuns&season=2018&hydrate=team(league,venue)
     * 3. Multiple Hydrations Using Team & Stat Sub Hydrations: https://statsapi.mlb.com/api/v1/teams/111/leaders?leaderCategories=homeRuns&season=2018&hydrate=person(transactions),team(league)
     * 4. Check For Available Hydrations: https://statsapi.mlb.com/api/v1/teams/111/leaders?leaderCategories=homeRuns&season=2018&hydrate=hydrations
     *
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
     * 1. Most Recent Major League Team: https://statsapi.mlb.com/api/v1/teams/111/leaders?leaderCategories=homeRuns&season=2018&hydrate=person(appContext=majorLeague,currentTeam)
     * 2. Most Recent Minor League Team: https://statsapi.mlb.com/api/v1/teams/111/leaders?leaderCategories=homeRuns&season=2018&hydrate=person(appContext=minorLeague,currentTeam)
     *
     *
     *
     * - Notes on Stat Hydrations:
     *
     * Best practice for MLB stat hydrations, use person(stats(group=["statGroup1","statGroup2"],type=["statType1","statType2"])).
     *
     * 1. Hydrating one stat:  https://statsapi.mlb.com/api/v1/teams/111/leaders?leaderCategories=homeRuns&season=2018&hydrate=person(stats(group=[hitting],type=[career])%3A%29
     * 2. Hydrating multiple statTypes/statGroups:  https://statsapi.mlb.com/api/v1/teams/111/leaders?leaderCategories=homeRuns&season=2018&hydrate=person(stats(group=[hitting,pitching],type=[career,yearByYear])%3A%29
     *
     * **List of statTypes can be found at https://statsapi.mlb.com/api/v1/statTypes**
     *
     * **List of statGroups can be found at https://statsapi.mlb.com/api/v1/statGroups**
     *
     * Best practice for MLB individual stat hydrations, use person(stats(group=["statGroup1","statGroup2"],type=["statType1","statType2"],season="year")).
     *
     * 1. Hydrating one stat:  https://statsapi.mlb.com/api/v1/teams/111/leaders?leaderCategories=homeRuns&season=2018&hydrate=person(stats(group=[hitting],type=[season],season=2018)%3A%29
     * 2. Hydrating multiple statTypes/statGroups:  https://statsapi.mlb.com/api/v1/teams/111/leaders?leaderCategories=homeRuns&season=2018&hydrate=person(stats(group=[hitting,pitching],type=[season,seasonAdvanced],season=2018)%3A%29
     *
     * **List of statTypes can be found at https://statsapi.mlb.com/api/v1/statTypes**
     *
     * **List of statGroups can be found at https://statsapi.mlb.com/api/v1/statGroups**
     *
     * Best practice for MiLB stat hydrations, use person(stats(group=["statGroup1,statGroup2"],type=["statType1","statType2],sportId="MiLB Id")).
     *
     * 1. Hydrating one stat:  https://statsapi.mlb.com/api/v1/teams/260/leaders?leaderCategories=homeRuns&season=2018&hydrate=person(stats(group=[hitting],type=career,sportId=12)%3A%29
     * 2. Hydrating multiple statTypes/statGroups:  https://statsapi.mlb.com/api/v1/teams/260/leaders?leaderCategories=homeRuns&season=2018&hydrate=person(stats(group=[hitting,pitching],type=[career,yearByYear],sportId=12)),hydrations
     *
     * **List of statTypes can be found at https://statsapi.mlb.com/api/v1/statTypes**
     *
     * **List of sportIds can be found at https://statsapi.mlb.com/api/v1/sports**
     *
     * **List of statGroups can be found at https://statsapi.mlb.com/api/v1/statGroups**
     *
     * Best practice for MiLB stat hydrations, use person(stats(group=["statGroup1,statGroup2"],type=["statType1","statType2],sportId="MiLB Id",season=2018)).
     *
     * 1. Hydrating one stat:  https://statsapi.mlb.com/api/v1/teams/260/leaders?leaderCategories=homeRuns&season=2018&hydrate=person(stats(group=[hitting],type=career,sportId=12,season=2018)%3A%29
     * 2. Hydrating multiple statTypes/statGroups:  https://statsapi.mlb.com/api/v1/teams/260/leaders?leaderCategories=homeRuns&season=2018&hydrate=person(stats(group=[hitting,pitching],type=[career,yearByYear],sportId=12,season=2018)),hydrations
     *
     * **List of statTypes can be found at https://statsapi.mlb.com/api/v1/statTypes**
     *
     * **List of sportIds can be found at https://statsapi.mlb.com/api/v1/sports**
     *
     * **List of statGroups can be found at https://statsapi.mlb.com/api/v1/statGroups**
     *
     * Best practice for season stats in date range, use person(stats(group=["statGroup1","statGroup2"],type=["byDateRange"]startDate="mm/dd/yyyy",endDate="mm/dd/yyyy",season="year")).
     *
     * 1. Hydrating byDateRange stat: https://statsapi.mlb.com/api/v1/teams/111/leaders?leaderCategories=homeRuns&season=2018&hydrate=person(stats(group=[hitting,pitching],type=[byDateRange],startDate=05/17/2018,endDate=05/21/2018,season=2018)%3A%29
     *
     * **List of statTypes can be found at https://statsapi.mlb.com/api/v1/statTypes**
     *
     * **List of statGroups can be found at https://statsapi.mlb.com/api/v1/statGroups**
     *
     * Best practice for player vs. player stats, use person(stats(group=["statGroup1","statGroup2"],type=["vsPlayer"],opposingPlayerId="personId",season="year",sportId="sportId").
     *
     * 1. Hydrating vsPlayer stat: https://statsapi.mlb.com/api/v1/teams/140/leaders?leaderCategories=airOuts&season=2018&hydrate=person(stats(group=[pitching],type=[vsPlayer],opposingPlayerId=453568,season=2018,sportId=1)%3A%29
     *
     * **List of statTypes can be found at https://statsapi.mlb.com/api/v1/statTypes**
     *
     * **List of statGroups can be found at https://statsapi.mlb.com/api/v1/statGroups**
     * **List of sportIds can be found at https://statsapi.mlb.com/api/v1/sports**
     *
     * Best practice for player vs. team stats, use stats(group=["statGroup1","statGroup2"],type=["vsTeam"],opposingTeamId="teamId",season="year",sportId="sportId").
     *
     * 1. Hydrating vsTeam stat: https://statsapi.mlb.com/api/v1/teams/140/leaders?leaderCategories=airOuts&season=2018&hydrate=person(stats(group=[pitching],type=[vsTeam],opposingTeamId=147,season=2018,sportId=1)%3A%29
     *
     * **List of statTypes can be found at https://statsapi.mlb.com/api/v1/statTypes**
     *
     * **List of statGroups can be found at https://statsapi.mlb.com/api/v1/statGroups**
     *
     * **List of teamIds can be found at https://statsapi.mlb.com/api/v1/teams**
     *
     * **List of sportIds can be found at https://statsapi.mlb.com/api/v1/sports**
     *
     * Best practice for limiting playLog & pitchLog, use stats(group=["statGroup1","statGroup2"],type=["playLog"],limit=1,season="year").
     *
     * 1. Limiting playLog: https://statsapi.mlb.com/api/v1/teams/111/leaders?leaderCategories=homeRuns&season=2017&hydrate=person(stats(group=[hitting,pitching],type=[playLog],limit=1,season=2017)%3A%29
     *
     * 2. Limiting pitchLog:https://statsapi.mlb.com/api/v1/teams/111/leaders?leaderCategories=homeRuns&season=2017&hydrate=person(stats(group=[hitting,pitching],type=[pitchLog],limit=1,season=2017)%3A%29
     *
     * **List of statTypes can be found at https://statsapi.mlb.com/api/v1/statTypes**
     *
     * **List of statGroups can be found at https://statsapi.mlb.com/api/v1/statGroups**
     *
     * Best practice for metrics in stat hydrations, use person(stats(type=metricAverages,metrics=launchSpeed,season=2018)) or person(stats(type=metricLog,metrics=launchSpeed,season=2018)).
     *
     * 1. Hydrating one metric with metricAverages: https://statsapi.mlb.com/api/v1/teams/111/leaders?leaderCategories=homeRuns&season=2018&hydrate=person(stats(group=[hitting,pitching],type=[metricAverages],metrics=launchSpeed,season=2018)),hydrations
     * 2. Hydrating one statType and multiple metrics with metricAverages: https://statsapi.mlb.com/api/v1/teams/111/leaders?leaderCategories=homeRuns&season=2018&hydrate=person(stats(group=[hitting,pitching],type=[career,metricAverages],metrics=[launchSpeed,launchAngle],season=2018)),hydrations
     * 3. Hydrating one metric with metricLog: https://statsapi.mlb.com/api/v1/teams/111/leaders?leaderCategories=homeRuns&season=2018&hydrate=person(stats(group=[hitting,pitching],type=[metricLog],metrics=launchSpeed,season=2018)),hydrations
     * 4. Hydrating one statType and multiple metrics with metricLog: https://statsapi.mlb.com/api/v1/teams/111/leaders?leaderCategories=homeRuns&season=2018&hydrate=person(stats(group=[hitting,pitching],type=[career,metricLog],metrics=[launchSpeed,launchAngle],season=2018)),hydrations
     *
     * **List of metrics can be found at https://statsapi.mlb.com/api/v1/metrics**
     *
     * Best practice for MLB sitCodes in stat hydrations, use stats(type=statSplits,sitCodes=[h,a],season=2018).
     *
     * 1. Hydrating one sitCode: https://statsapi.mlb.com/api/v1/teams/111/leaders?leaderCategories=homeRuns&season=2018&hydrate=person(stats(group=[hitting,pitching],type=[statSplits],sitCodes=h,season=2018)),hydrations
     * 2. Hydrating one statType and multiple sitCodes: https://statsapi.mlb.com/api/v1/teams/111/leaders?leaderCategories=homeRuns&season=2018&hydrate=person(stats(group=[hitting,pitching],type=[career,statSplits],sitCodes=[h,a],season=2018)),hydrations
     *
     * **List of sitCodes can be found at https://statsapi.mlb.com/api/v1/situationCodes**
     *
     * Best practice for MiLB sitCodes in stat hydrations, use stats(type=statSplits,sitCodes=[h,a],season=2018,sportId = "MiLB Id").
     *
     * 1. Hydrating one sitCode: https://statsapi.mlb.com/api/v1/teams/260/leaders?leaderCategories=homeRuns&season=2018&hydrate=person(stats(group=[hitting,pitching],type=[statSplits],sitCodes=h,sportId=12,season=2018)),hydrations
     * 2. Hydrating one statType and multiple sitCodes: https://statsapi.mlb.com/api/v1/teams/260/leaders?leaderCategories=homeRuns&season=2018&hydrate=person(stats(group=[hitting,pitching],type=[career,statSplits],sitCodes=[h,a],sportId=12,season=2018)),hydrations
     *
     * **List of sitCodes can be found at https://statsapi.mlb.com/api/v1/situationCodes**
     *
     * **List of sportIds can be found at https://statsapi.mlb.com/api/v1/sports**
     *
     *
     *
     *
     *
     * @param limit Insert a limit to limit return.
     * 1. Insert limit: https://statsapi.mlb.com/api/v1/teams/147/leaders?leaderCategories=homeRuns&season=2017&leaderGameTypes=D&limit=1
     *
     * @param fields Comma delimited list of specific fields to be returned. Format:
     * topLevelNode, childNode, attribute
     *
     * Example: https://statsapi.mlb.com/api/v1/teams/147/leaders?leaderCategories=homeRuns&season=2017&leaderGameTypes=D&fields=teamLeaders,leaders,rank,value,person,fullName
     *
     * @returns TeamLeaderContainerRestObject OK
     * @throws ApiError
     */
    public static teamleaders(
        teamId: string,
        leaderCategories: string,
        season: string,
        leaderGameTypes?: string,
        hydrate?: Array<string>,
        limit?: number,
        fields?: Array<string>,
    ): CancelablePromise<TeamLeaderContainerRestObject> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/teams/{teamId}/leaders',
            path: {
                'teamId': teamId,
            },
            query: {
                'leaderCategories': leaderCategories,
                'season': season,
                'leaderGameTypes': leaderGameTypes,
                'hydrate': hydrate,
                'limit': limit,
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
     * View biographical and statistical information for a club's roster.
     *
     * **Description:**
     * Insert teamId to return a directory of players based on roster status for a particular club.
     *
     *
     * **Return Includes:** Player information for provided team.
     *
     * **Required Parameters:** teamId, season, & rosterType is required to run this call.
     *
     * **Hydrations:** This endpoint can accept the hydrations query parameter.
     *
     *
     *
     *
     *
     *
     * ---
     * **Example of call with required parameters**
     *
     * https://statsapi.mlb.com/api/v1/teams/109/roster?rosterType=active
     *
     * ---
     * **Example of call with hydrated parameters**
     *
     * https://statsapi.mlb.com/api/v1/teams/109/roster?hydrate=person(stats(type=season,season=2018),education)&rosterType=active
     *
     * @param teamId Insert teamId to return  a directory of players based on roster status for a particular club.
     * 1. Insert teamId: https://statsapi.mlb.com/api/v1/teams/109/roster?rosterType=active&season=2018
     *
     * For a list of all teamIds:  https://statsapi.mlb.com/api/v1/teams
     *
     * @param rosterType Insert teamId to return  a directory of players based on roster status for a particular club.
     * 1. Insert rosterType: https://statsapi.mlb.com/api/v1/teams/109/roster?rosterType=active&season=2018
     *
     * For a list of all rosterType:  https://statsapi.mlb.com/api/v1/rosterTypes
     *
     * @param season Insert year to return a directory of players based on roster status for a particular club in a specific season.
     * 1. Insert year: https://statsapi.mlb.com/api/v1/teams/109/roster?rosterType=active&season=2018
     *
     * @param date Insert date to return a directory of players based on roster status for a particular club on a specific date.
     * 1. Insert date: https://statsapi.mlb.com/api/v1/teams/109/roster?rosterType=active&season=2018&date=06/05/2018
     *
     * @param hydrate Insert Hydration(s) to return data for any available team hydration. The hydration for Teams contains "person" which has subhydrations Format "person(subHydration1, subHydrations2)" "
     * 1. One Hydration Using Person Sub Hydration: https://statsapi.mlb.com/api/v1/teams/109/roster?rosterType=active&season=2018&&hydrate=person(social)
     * 2. Multiple Hydrations Using Person Sub Hydration: https://statsapi.mlb.com/api/v1/teams/109/roster?hydrate=person(transactions,social)&rosterType=active&season=2018
     * 3. Check For Available Hydrations: https://statsapi.mlb.com/api/v1/teams/109/roster?rosterType=active&season=2018&&hydrate=hydrations
     *
     * - Available Hydrations:
     *
     * 1. "person"
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
     * - Notes on "currentTeam" hydration:
     *
     * When hydrating for "currentTeam" users can use the 'appContext' parameter to specify most recent team by league
     * 1. Most Recent Major League Team: https://statsapi.mlb.com/api/v1/teams/111/roster?rosterType=active&season=2018&hydrate=person(appContext=majorLeague,currentTeam)
     * 2. Most Recent Minor League Team: https://statsapi.mlb.com/api/v1/teams/111/roster?rosterType=active&season=2018&hydrate=person(appContext=minorLeague,currentTeam)
     *
     * - Notes on Stat Hydrations:
     *
     * Best practice for MLB stat hydrations, use person(stats(group=["statGroup1","statGroup2"],type=["statType1","statType2"])).
     *
     * 1. Hydrating one stat: https://statsapi.mlb.com/api/v1/teams/111/roster?rosterType=active&season=2018&hydrate=person(stats(group=[hitting],type=[career])%3A%29
     * 2. Hydrating multiple statTypes/statGroups: https://statsapi.mlb.com/api/v1/teams/111/roster?rosterType=active&season=2018&hydrate=person(stats(group=[hitting,pitching],type=[career,yearByYear])%3A%29
     *
     * **List of statTypes can be found at https://statsapi.mlb.com/api/v1/statTypes**
     *
     * **List of statGroups can be found at https://statsapi.mlb.com/api/v1/statGroups**
     *
     * Best practice for MLB individual stat hydrations, use person(stats(group=["statGroup1","statGroup2"],type=["statType1","statType2"],season="year")).
     *
     * 1. Hydrating one stat: https://statsapi.mlb.com/api/v1/teams/111/roster?rosterType=active&season=2018&hydrate=person(stats(group=[hitting],type=[season],season=2018)%3A%29
     * 2. Hydrating multiple statTypes/statGroups: https://statsapi.mlb.com/api/v1/teams/111/roster?rosterType=active&season=2018&hydrate=person(stats(group=[hitting,pitching],type=[season,seasonAdvanced],season=2018)%3A%29
     *
     * **List of statTypes can be found at https://statsapi.mlb.com/api/v1/statTypes**
     *
     * **List of statGroups can be found at https://statsapi.mlb.com/api/v1/statGroups**
     *
     * Best practice for MiLB stat hydrations, use person(stats(group=["statGroup1,statGroup2"],type=["statType1","statType2],sportId="MiLB Id")).
     *
     * 1. Hydrating one stat: https://statsapi.mlb.com/api/v1/teams/260/roster?rosterType=active&season=2018&hydrate=person(stats(group=[hitting],type=[career],sportId=12)%3A%29
     * 2. Hydrating multiple statTypes/statGroups: https://statsapi.mlb.com/api/v1/teams/260/roster?rosterType=active&season=2018&hydrate=person(stats(group=[hitting,pitching],type=[career,yearByYear],sportId=12)%3A%29
     *
     * **List of statTypes can be found at https://statsapi.mlb.com/api/v1/statTypes**
     *
     * **List of sportIds can be found at https://statsapi.mlb.com/api/v1/sports**
     *
     * **List of statGroups can be found at https://statsapi.mlb.com/api/v1/statGroups**
     *
     * Best practice for MiLB individual stat hydrations, use person(stats(group=["statGroup1,statGroup2"],type=["statType1","statType2],sportId="MiLB Id",season="year")).
     *
     * 1. Hydrating one stat: https://statsapi.mlb.com/api/v1/teams/260/roster?rosterType=active&season=2018&hydrate=person(stats(group=[hitting],type=[season],sportId=12,season=2018)%3A%29
     * 2. Hydrating multiple statTypes/statGroups: https://statsapi.mlb.com/api/v1/teams/260/roster?rosterType=active&season=2018&hydrate=person(stats(group=[hitting,pitching],type=[season,seasonAdvanced],sportId=12,season=2018)%3A%29
     *
     * **List of statTypes can be found at https://statsapi.mlb.com/api/v1/statTypes**
     *
     * **List of sportIds can be found at https://statsapi.mlb.com/api/v1/sports**
     *
     * **List of statGroups can be found at https://statsapi.mlb.com/api/v1/statGroups**
     *
     * Best practice for season stats in date range, use person(stats(group=["statGroup1","statGroup2"],type=["byDateRange"]startDate="mm/dd/yyyy",endDate="mm/dd/yyyy",season="year")).
     *
     * 1. Hydrating byDateRange stat: https://statsapi.mlb.com/api/v1/teams/111/roster?rosterType=active&season=2018&hydrate=person(stats(group=[hitting,pitching],type=[byDateRange],startDate=05/17/2018,endDate=05/21/2018,season=2018)%3A%29
     *
     * **List of statTypes can be found at https://statsapi.mlb.com/api/v1/statTypes**
     *
     * **List of statGroups can be found at https://statsapi.mlb.com/api/v1/statGroups**
     *
     * Best practice for limiting playLog & pitchLog, use stats(group=["statGroup1","statGroup2"],type=["playLog"],limit=1,season="year").
     *
     * 1. Limiting playLog: https://statsapi.mlb.com/api/v1/teams/111/roster?rosterType=active&season=2018&hydrate=person(stats(group=[hitting,pitching],type=[playLog],limit=1,season=2017)%3A%29
     *
     * 2. Limiting pitchLog: https://statsapi.mlb.com/api/v1/teams/111/roster?rosterType=active&season=2018&hydrate=person(stats(group=[hitting,pitching],type=[pitchLog],limit=1,season=2017)%3A%29
     *
     * **List of statTypes can be found at https://statsapi.mlb.com/api/v1/statTypes**
     *
     * **List of statGroups can be found at https://statsapi.mlb.com/api/v1/statGroups**
     *
     * Best practice for player vs. player stats, use person(stats(group=["statGroup1","statGroup2"],type=["vsPlayer"],opposingPlayerId="personId",season="year",sportId="sportId").
     *
     * 1. Hydrating vsPlayer stat: https://statsapi.mlb.com/api/v1/teams/111/roster?rosterType=active&season=2018&hydrate=person(stats(group=[pitching],type=[vsPlayer],opposingPlayerId=453568,season=2018,sportId=1)%3A%29
     *
     * **List of statTypes can be found at https://statsapi.mlb.com/api/v1/statTypes**
     *
     * **List of statGroups can be found at https://statsapi.mlb.com/api/v1/statGroups**
     * **List of sportIds can be found at https://statsapi.mlb.com/api/v1/sports**
     *
     * Best practice for player vs. team stats, use stats(group=["statGroup1","statGroup2"],type=["vsTeam"],opposingTeamId="teamId",season="year",sportId="sportId").
     *
     * 1. Hydrating vsTeam stat: https://statsapi.mlb.com/api/v1/teams/111/roster?rosterType=active&season=2018&hydrate=person(stats(group=[pitching],type=[vsTeam],opposingTeamId=147,season=2018,sportId=1)%3A%29
     *
     * **List of statTypes can be found at https://statsapi.mlb.com/api/v1/statTypes**
     *
     * **List of statGroups can be found at https://statsapi.mlb.com/api/v1/statGroups**
     *
     * **List of teamIds can be found at https://statsapi.mlb.com/api/v1/teams**
     *
     * **List of sportIds can be found at https://statsapi.mlb.com/api/v1/sports**
     *
     * Best practice for metrics in stat hydrations, use person(stats(group=["statGroup1,statGroup2"],type=metricAverages,metrics=launchSpeed,season=2018)) or person(stats(type=metricLog,metrics=launchSpeed,season=2018)).
     *
     * 1. Hydrating one metric with metricAverages: https://statsapi.mlb.com/api/v1/teams/111/roster?rosterType=active&season=2018&hydrate=person(stats(group=[hitting,pitching],type=[metricAverages],metrics=launchSpeed,season=2018)%3A%29
     * 2. Hydrating one statType and multiple metrics with metricAverages: https://statsapi.mlb.com/api/v1/teams/111/roster?rosterType=active&season=2018&hydrate=person(stats(group=[hitting,pitching],type=[career,metricAverages],metrics=[launchSpeed,launchAngle],season=2018)%3A%29
     * 3. Hydrating one metric with metricLog: https://statsapi.mlb.com/api/v1/teams/111/roster?rosterType=active&season=2018&hydrate=person(stats(group=[hitting,pitching],type=[career,metricLog],metrics=launchSpeed,season=2018)%3A%29
     * 4. Hydrating one statType and multiple metrics with metricLog: https://statsapi.mlb.com/api/v1/teams/111/roster?rosterType=active&season=2018&hydrate=person(stats(group=[hitting,pitching],type=[career,metricLog],metrics=[launchSpeed,launchAngle],season=2018)%3A%29
     *
     * **List of metrics can be found at https://statsapi.mlb.com/api/v1/metrics**
     *
     * Best practice for MLB sitCodes in stat hydrations, use person(stats(group=["statGroup1,statGroup2"],type=[statSplits],sitCodes=[h,a],season="year")).
     *
     * 1. Hydrating one sitCode: https://statsapi.mlb.com/api/v1/teams/111/roster?rosterType=active&season=2018&hydrate=person(stats(group=[hitting,pitching],type=[statSplits],sitCodes=[h],season=2018)),hydrations
     * 2. Hydrating one statType and multiple sitCodes: https://statsapi.mlb.com/api/v1/teams/111/roster?rosterType=active&season=2018&hydrate=person(stats(group=[hitting,pitching],type=[career,statSplits],sitCodes=[h,a],season=2018)),hydrations
     *
     * **List of sitCodes can be found at https://statsapi.mlb.com/api/v1/situationCodes**
     *
     * Best practice for MiLB sitCodes in stat hydrations, use person(stats(group=["statGroup1,statGroup2"],type=statSplits,sitCodes=[h,a],sportId = "MiLB Id",season=2018)).
     *
     * 1. Hydrating one sitCode: https://statsapi.mlb.com/api/v1/teams/260/roster?rosterType=active&season=2018&hydrate=person(stats(group=[hitting,pitching],type=[career,statSplits],sitCodes=[h],sportId=12,season=2018)),hydrations
     * 2. Hydrating one statType and multiple sitCodes: https://statsapi.mlb.com/api/v1/teams/260/roster?rosterType=active&season=2018&hydrate=person(stats(group=[hitting,pitching],type=[career,statSplits],sitCodes=[h,a],sportId=12,season=2018)),hydrations
     *
     * **List of sitCodes can be found at https://statsapi.mlb.com/api/v1/situationCodes**
     *
     * **List of sportIds can be found at https://statsapi.mlb.com/api/v1/sports**
     *
     * **List of statGroups can be found at https://statsapi.mlb.com/api/v1/statGroups**
     *
     *
     *
     * @param fields Comma delimited list of specific fields to be returned. Format:
     * topLevelNode, childNode, attribute
     *
     * Example: https://statsapi.mlb.com/api/v1/teams/109/roster?rosterType=active&season=2018&fields=roster,person,fullName
     *
     * @returns RosterRestObject OK
     * @throws ApiError
     */
    public static roster(
        teamId: string,
        rosterType: string,
        season: string,
        date?: string,
        hydrate?: Array<string>,
        fields?: Array<string>,
    ): CancelablePromise<RosterRestObject> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/teams/{teamId}/roster',
            path: {
                'teamId': teamId,
            },
            query: {
                'rosterType': rosterType,
                'season': season,
                'date': date,
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
     * View biographical and statistical information for a club's roster based on roster type.
     *
     * **Description:**
     * This endpoint returns team directorial information based on roster.
     *
     * **Return Includes:** Player information for a provided team.
     *
     * **Required Parameters:** teamId, season and, rosterType is required to run this call.
     *
     * **Hydrations:** This endpoint can accept the hydrations query parameter.
     *
     *
     *
     *
     *
     *
     * ---
     * **Example of call with required parameters**
     *
     * https://statsapi.mlb.com/api/v1/teams/109/roster/Active
     *
     * ---
     * **Example of call with hydrated parameters**
     *
     * https://statsapi.mlb.com/api/v1/teams/109/roster/Active?season=2018&hydrate=person(stats(type=season,season=2018),education),hydrations
     *
     * @param teamId Insert teamId to return  team directorial information based on roster for a particular club.
     * 1. Insert teamId: https://statsapi.mlb.com/api/v1/teams/109/roster/Active?season=2018
     *
     * For a list of all teamIds:  https://statsapi.mlb.com/api/v1/teams
     *
     * @param rosterType Insert rosterType to return  team directorial information based for a particular roster.
     * 1. Insert rosterType: https://statsapi.mlb.com/api/v1/teams/109/roster/Active?season=2018
     *
     * For a list of all rosterType:  https://statsapi.mlb.com/api/v1/rosterTypes
     *
     * @param season Insert year to return team directorial information based on roster a particular club in a specific season.
     * 1. Insert year: https://statsapi.mlb.com/api/v1/teams/109/roster/Active?hydrate=person(stats(type=season,season=2018),education)&season=2018
     *
     * @param date Insert date to return team and their  coaching staff directorial information for a particular date.
     * 1. Insert date: https://statsapi.mlb.com/api/v1/teams/109/roster/Active?season=2000&hydrate=person(stats(type=season,season=2000),education)&date=06/05/2000
     *
     * @param hydrate Insert Hydration(s) to return data for any available team hydration. The hydrations for Teams contain "person" and "team" which have subhydrations Format "team(subHydration1, subHydrations2)" "
     * 1. One Hydration Using Person Sub Hydration: https://statsapi.mlb.com/api/v1/teams/109/roster/Active?season=2018&hydrate=person(transactions%3A%29
     * 2. Multiple Hydrations Using Person Sub Hydration: https://statsapi.mlb.com/api/v1/teams/109/roster/Active?season=2018&hydrate=person(transactions,social%3A%29
     * 3. Check For Available Hydrations: https://statsapi.mlb.com/api/v1/teams/109/roster/Active?season=2018&hydrate=hydrations
     *
     * - Available Hydrations:
     *
     * 1. "person"
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
     *
     * - Notes on "currentTeam" hydration:
     *
     * When hydrating for "currentTeam" users can use the 'appContext' parameter to specify most recent team by league
     * 1. Most Recent Major League Team: https://statsapi.mlb.com/api/v1/teams/111/roster/Active?season=2018&hydrate=person(appContext=majorLeague,currentTeam)
     * 2. Most Recent Minor League Team: https://statsapi.mlb.com/api/v1/teams/111/roster/Active?season=2018&hydrate=person(appContext=minorLeague,currentTeam)
     *
     * - Notes on Stat Hydrations:
     *
     * Best practice for MLB stat hydrations, use person(stats(group=["statGroup1","statGroup2"],type=["statType1","statType2"])).
     *
     * 1. Hydrating one stat: https://statsapi.mlb.com/api/v1/teams/111/roster/Active?season=2018&hydrate=person(stats(group=[hitting],type=[career])%3A%29
     * 2. Hydrating multiple statTypes/statGroups: https://statsapi.mlb.com/api/v1/teams/111/roster/Active?season=2018&hydrate=person(stats(group=[hitting,pitching],type=[career,yearByYear])%3A%29
     *
     * **List of statTypes can be found at https://statsapi.mlb.com/api/v1/statTypes**
     *
     * **List of statGroups can be found at https://statsapi.mlb.com/api/v1/statGroups**
     *
     * Best practice for MLB individual stat hydrations, use person(stats(group=["statGroup1","statGroup2"],type=["statType1","statType2"],season="year")).
     *
     * 1. Hydrating one stat: https://statsapi.mlb.com/api/v1/teams/111/roster/Active?season=2018&hydrate=person(stats(group=[hitting],type=[season],season=2018)%3A%29
     * 2. Hydrating multiple statTypes/statGroups: https://statsapi.mlb.com/api/v1/teams/111/roster/Active?rosterType=active&season=2018&hydrate=person(stats(group=[hitting,pitching],type=[season,seasonAdvanced],season=2018)%3A%29
     *
     * **List of statTypes can be found at https://statsapi.mlb.com/api/v1/statTypes**
     *
     * **List of statGroups can be found at https://statsapi.mlb.com/api/v1/statGroups**
     *
     * Best practice for MiLB stat hydrations, use person(stats(group=["statGroup1,statGroup2"],type=["statType1","statType2],sportId="MiLB Id")).
     *
     * 1. Hydrating one stat: https://statsapi.mlb.com/api/v1/teams/260/roster/Active?season=2018&hydrate=person(stats(group=[hitting],type=[career],sportId=12)%3A%29
     * 2. Hydrating multiple statTypes/statGroups: https://statsapi.mlb.com/api/v1/teams/260/roster/Active?season=2018&hydrate=person(stats(group=[hitting,pitching],type=[career,yearByYear],sportId=12)%3A%29
     *
     * **List of statTypes can be found at https://statsapi.mlb.com/api/v1/statTypes**
     *
     * **List of sportIds can be found at https://statsapi.mlb.com/api/v1/sports**
     *
     * **List of statGroups can be found at https://statsapi.mlb.com/api/v1/statGroups**
     *
     * Best practice for MiLB individual stat hydrations, use person(stats(group=["statGroup1,statGroup2"],type=["statType1","statType2],sportId="MiLB Id",season="year")).
     *
     * 1. Hydrating one stat: https://statsapi.mlb.com/api/v1/teams/260/roster/Active?season=2018&hydrate=person(stats(group=[hitting],type=[season],sportId=12,season=2018)%3A%29
     * 2. Hydrating multiple statTypes/statGroups: https://statsapi.mlb.com/api/v1/teams/260/roster/Active?season=2018&hydrate=person(stats(group=[hitting,pitching],type=[season,seasonAdvanced],sportId=12,season=2018)%3A%29
     *
     * **List of statTypes can be found at https://statsapi.mlb.com/api/v1/statTypes**
     *
     * **List of sportIds can be found at https://statsapi.mlb.com/api/v1/sports**
     *
     * **List of statGroups can be found at https://statsapi.mlb.com/api/v1/statGroups**
     *
     * Best practice for season stats in date range, use person(stats(group=["statGroup1","statGroup2"],type=["byDateRange"]startDate="mm/dd/yyyy",endDate="mm/dd/yyyy",season="year")).
     *
     * 1. Hydrating byDateRange stat: https://statsapi.mlb.com/api/v1/teams/111/roster/Active?season=2018&hydrate=person(stats(group=[hitting,pitching],type=[byDateRange],startDate=05/17/2018,endDate=05/21/2018,season=2018)%3A%29
     *
     * **List of statTypes can be found at https://statsapi.mlb.com/api/v1/statTypes**
     *
     * **List of statGroups can be found at https://statsapi.mlb.com/api/v1/statGroups**
     *
     * Best practice for limiting playLog & pitchLog, use stats(group=["statGroup1","statGroup2"],type=["playLog"],limit=1,season="year").
     *
     * 1. Limiting playLog: https://statsapi.mlb.com/api/v1/teams/111/roster/Active?season=2018&hydrate=person(stats(group=[hitting,pitching],type=[playLog],limit=1,season=2017)%3A%29
     *
     * 2. Limiting pitchLog: https://statsapi.mlb.com/api/v1/teams/111/roster/Active?season=2018&hydrate=person(stats(group=[hitting,pitching],type=[pitchLog],limit=1,season=2017)%3A%29
     *
     * **List of statTypes can be found at https://statsapi.mlb.com/api/v1/statTypes**
     *
     * **List of statGroups can be found at https://statsapi.mlb.com/api/v1/statGroups**
     *
     * Best practice for player vs. player stats, use person(stats(group=["statGroup1","statGroup2"],type=["vsPlayer"],opposingPlayerId="personId",season="year",sportId="sportId").
     *
     * 1. Hydrating vsPlayer stat: https://statsapi.mlb.com/api/v1/teams/111/roster/Active?season=2018&hydrate=person(stats(group=[pitching],type=[vsPlayer],opposingPlayerId=453568,season=2018,sportId=1)%3A%29
     *
     * **List of statTypes can be found at https://statsapi.mlb.com/api/v1/statTypes**
     *
     * **List of statGroups can be found at https://statsapi.mlb.com/api/v1/statGroups**
     * **List of sportIds can be found at https://statsapi.mlb.com/api/v1/sports**
     *
     * Best practice for player vs. team stats, use stats(group=["statGroup1","statGroup2"],type=["vsTeam"],opposingTeamId="teamId",season="year",sportId="sportId").
     *
     * 1. Hydrating vsTeam stat: https://statsapi.mlb.com/api/v1/teams/111/roster/Active?season=2018&hydrate=person(stats(group=[pitching],type=[vsTeam],opposingTeamId=147,season=2018,sportId=1)%3A%29
     *
     * **List of statTypes can be found at https://statsapi.mlb.com/api/v1/statTypes**
     *
     * **List of statGroups can be found at https://statsapi.mlb.com/api/v1/statGroups**
     *
     * **List of teamIds can be found at https://statsapi.mlb.com/api/v1/teams**
     *
     * **List of sportIds can be found at https://statsapi.mlb.com/api/v1/sports**
     *
     * Best practice for metrics in stat hydrations, use person(stats(group=["statGroup1,statGroup2"],type=metricAverages,metrics=launchSpeed,season=2018)) or person(stats(type=metricLog,metrics=launchSpeed,season=2018)).
     *
     * 1. Hydrating one metric with metricAverages: https://statsapi.mlb.com/api/v1/teams/111/roster/Active?season=2018&hydrate=person(stats(group=[hitting,pitching],type=[metricAverages],metrics=launchSpeed,season=2018)%3A%29
     * 2. Hydrating one statType and multiple metrics with metricAverages: https://statsapi.mlb.com/api/v1/teams/111/roster/Active?season=2018&hydrate=person(stats(group=[hitting,pitching],type=[career,metricAverages],metrics=[launchSpeed,launchAngle],season=2018)%3A%29
     * 3. Hydrating one metric with metricLog: https://statsapi.mlb.com/api/v1/teams/111/roster/Active?season=2018&hydrate=person(stats(group=[hitting,pitching],type=[career,metricLog],metrics=launchSpeed,season=2018)%3A%29
     * 4. Hydrating one statType and multiple metrics with metricLog: https://statsapi.mlb.com/api/v1/teams/111/roster/Active?season=2018&hydrate=person(stats(group=[hitting,pitching],type=[career,metricLog],metrics=[launchSpeed,launchAngle],season=2018)%3A%29
     *
     * **List of metrics can be found at https://statsapi.mlb.com/api/v1/metrics**
     *
     * Best practice for MLB sitCodes in stat hydrations, use person(stats(group=["statGroup1,statGroup2"],type=[statSplits],sitCodes=[h,a],season="year")).
     *
     * 1. Hydrating one sitCode: https://statsapi.mlb.com/api/v1/teams/111/roster/Active?season=2018&hydrate=person(stats(group=[hitting,pitching],type=[statSplits],sitCodes=[h],season=2018)),hydrations
     * 2. Hydrating one statType and multiple sitCodes: https://statsapi.mlb.com/api/v1/teams/111/roster/Active?season=2018&hydrate=person(stats(group=[hitting,pitching],type=[career,statSplits],sitCodes=[h,a],season=2018)),hydrations
     *
     * **List of sitCodes can be found at https://statsapi.mlb.com/api/v1/situationCodes**
     *
     * Best practice for MiLB sitCodes in stat hydrations, use person(stats(group=["statGroup1,statGroup2"],type=statSplits,sitCodes=[h,a],sportId = "MiLB Id",season=2018)).
     *
     * 1. Hydrating one sitCode: https://statsapi.mlb.com/api/v1/teams/260/roster/Active?season=2018&hydrate=person(stats(group=[hitting,pitching],type=[career,statSplits],sitCodes=[h],sportId=12,season=2018)),hydrations
     * 2. Hydrating one statType and multiple sitCodes: https://statsapi.mlb.com/api/v1/teams/260/roster/Active?season=2018&hydrate=person(stats(group=[hitting,pitching],type=[career,statSplits],sitCodes=[h,a],sportId=12,season=2018)),hydrations
     *
     * **List of sitCodes can be found at https://statsapi.mlb.com/api/v1/situationCodes**
     *
     * **List of sportIds can be found at https://statsapi.mlb.com/api/v1/sports**
     *
     * **List of statGroups can be found at https://statsapi.mlb.com/api/v1/statGroups**
     *
     * @param fields Comma delimited list of specific fields to be returned. Format:
     * topLevelNode, childNode, attribute
     *
     * Example: https://statsapi.mlb.com/api/v1/teams/109/roster/Active?season=2018&&fields=roster,person,fullName
     *
     * @returns RosterRestObject OK
     * @throws ApiError
     */
    public static rosterType(
        teamId: number,
        rosterType: string,
        season: string,
        date?: string,
        hydrate?: Array<string>,
        fields?: Array<string>,
    ): CancelablePromise<RosterRestObject> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/teams/{teamId}/roster/{rosterType}',
            path: {
                'teamId': teamId,
                'rosterType': rosterType,
            },
            query: {
                'season': season,
                'date': date,
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