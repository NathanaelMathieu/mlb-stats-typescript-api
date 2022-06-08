/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class LeagueService {

    /**
     * View league information.
     * **Description:**
     * This endpoint returns league information data based on sportId,leagueId,or year.
     *
     * **Return Includes:** Regular Season Start/End Date, Post  Season Start/End Date, leagueId.
     *
     * **Required Parameters:** SportId or LeagueId are required to run this call.
     *
     * ---
     * **Example of call with required parameters**
     *
     * 1. https://statsapi.mlb.com/api/v1/league?sportId=1
     * 2. https://statsapi.mlb.com/api/v1/league?leagueIds=103
     * <br> </br>
     * **Blank season value defaults to current year.**
     *
     * ---
     * **Example of call with all parameters**
     *
     * https://statsapi.mlb.com/api/v1/league?leagueIds=103&seasons=2018
     *
     * @param sportId Insert sportId to return league information and season date information for a specific sport.
     * 1. One sportId: https://statsapi.mlb.com/api/v1/league?sportId=1
     *
     * For a list of all sportIds: https://statsapi.mlb.com/api/v1/sports
     *
     * @param leagueIds Insert leagueId(s) to return league information for a specific league. Format '103,104'
     * 1. One leagueId: https://statsapi.mlb.com/api/v1/league?leagueIds=103
     * 2. Multiple leagueId: https://statsapi.mlb.com/api/v1/league?leagueIds=103,104
     *
     * @param season Insert year to return league information for a specific season. Format '2018'
     * 1. One year: https://statsapi.mlb.com/api/v1/league?season=2018&sportId=1
     *
     * @param seasons Insert year(s) and leagueIds to return league information and season date information  for a specific season or multiple seasons. Format '2017,2018'
     * 1. One year: https://statsapi.mlb.com/api/v1/league?seasons=2018&leagueIds=103
     * 2. Multiple years: https://statsapi.mlb.com/api/v1/league?seasons=2017,2018&leagueIds=103
     *
     * @param fields Format: Comma delimited list of specific fields to be returned. Format: topLevelNode, childNode, attribute
     *
     * Example: https://statsapi.mlb.com/api/v1/league?sportId=1&fields=leagues,id,name
     *
     * @returns any OK
     * @throws ApiError
     */
    public static league(
        sportId: string,
        leagueIds: string,
        season?: string,
        seasons?: string,
        fields?: Array<string>,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/league',
            query: {
                'sportId': sportId,
                'leagueIds': leagueIds,
                'season': season,
                'seasons': seasons,
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
     * View All-Star Ballots per league.
     *
     * **Description:**
     * This endpoint returns Allstar Game Roster Ballot data based on leagueId or year.
     *
     * **Return Includes:** Player biographical information.
     *
     * **Required Parameters:** Season and LeagueId are required to run this call.
     *
     * ---
     * **Example of call with required parameters**
     *
     * https://statsapi.mlb.com/api/v1/league/103/allStarBallot?season=2018
     *
     * @param leagueId Insert leagueId to return allStarBallot information for a specific league.
     * 1. Insert leagueId: https://statsapi.mlb.com/api/v1/league/103/allStarBallot?
     *
     * @param season Insert year to return allStarBallot information for a specific season and complete the call.
     * 1. https://statsapi.mlb.com/api/v1/league/103/allStarBallot?season=2018
     *
     * @param fields Format: Comma delimited list of specific fields to be returned. Format: topLevelNode, childNode, attribute
     *
     * Example: https://statsapi.mlb.com/api/v1/league/103/allStarBallot?season=2018&fields=people,id,fullName
     *
     * @returns any OK
     * @throws ApiError
     */
    public static allStarBallot(
        leagueId: string,
        season: string,
        fields?: Array<string>,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/league/{leagueId}/allStarBallot',
            path: {
                'leagueId': leagueId,
            },
            query: {
                'season': season,
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
     * View All-Star Write-ins per league.
     *
     * **Description:**
     * This endpoint returns Allstar Game Roster Write In Vote data based on leagueId or year.
     *
     * **Return Includes:** Player biographical information.
     *
     * **Required Parameters:** Season and LeagueId are required to run this call.
     *
     * ---
     * **Example of call with required parameters**
     *
     * https://statsapi.mlb.com/api/v1/league/103/allStarWriteIns?season=2018
     *
     * @param leagueId Insert leagueId to return allStarBallot information for a specific league.
     * 1. Insert leagueId: https://statsapi.mlb.com/api/v1/league/103/allStarWriteIns
     *
     * @param season Insert year to return allStarBallot information for a specific season and complete the call.
     * 1. https://statsapi.mlb.com/api/v1/league/103/allStarWriteIns?season=2018
     *
     * @param fields Format: Comma delimited list of specific fields to be returned. Format: topLevelNode, childNode, attribute
     *
     * Example: https://statsapi.mlb.com/api/v1/league/103/allStarWriteIns?season=2018&fields=people,id,fullName
     *
     * @returns any OK
     * @throws ApiError
     */
    public static allStarWriteIns(
        leagueId: string,
        season: string,
        fields?: Array<string>,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/league/{leagueId}/allStarWriteIns',
            path: {
                'leagueId': leagueId,
            },
            query: {
                'season': season,
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
     * View All-Star Final Vote per league.
     *
     * **Description:**
     * This endpoint returns data for Allstar Game Roster Final Vote based on leagueId or year.
     *
     * **Return Includes:** Player biographical information.
     *
     * **Required Parameters:** Season and LeagueId are required to run this call.
     *
     * ---
     * **Example of call with required parameters**
     *
     * https://statsapi.mlb.com/api/v1/league/103/allStarFinalVote?season=2018
     *
     * @param leagueId Insert leagueId to return allStarBallot information for a specific league.
     * 1. Insert leagueId: https://statsapi.mlb.com/api/v1/league/103/allStarFinalVote
     *
     * @param season Insert year to return allStarBallot information for a specific season and complete the call.
     * 1. https://statsapi.mlb.com/api/v1/league/103/allStarFinalVote?season=2018
     *
     * @param fields Format: Comma delimited list of specific fields to be returned. Format: topLevelNode, childNode, attribute
     *
     * Example: https://statsapi.mlb.com/api/v1/league/103/allStarFinalVote?season=2018&fields=people,id,fullName
     *
     * @returns any OK
     * @throws ApiError
     */
    public static allStarFinalVote(
        leagueId: string,
        season: string,
        fields?: Array<string>,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/league/{leagueId}/allStarFinalVote',
            path: {
                'leagueId': leagueId,
            },
            query: {
                'season': season,
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