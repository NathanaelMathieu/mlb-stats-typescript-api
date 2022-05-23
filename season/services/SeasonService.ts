/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class SeasonService {

    /**
     * View current season info.
     * **Description:**
     * This endpoint returns season information  for the current year.
     *
     * **Return Includes:** Spring Training, Regular Season, Postseason start dates and end dates
     *
     * **Required Parameters:** sportId is required to run this call.
     *
     * ---
     * **Example of call with required parameters**
     *
     * https://statsapi.mlb.com/api/v1/seasons?sportId=1
     *
     * @param sportId Insert a sportId to return season information  for the current year for a particular sport.
     * 1. Insert sportId:  https://statsapi.mlb.com/api/v1/seasons?sportId=1
     *
     * For  a list of all sportIds:  http://statsapi.mlb.com/api/v1/sports
     *
     * @param withGameTypeDates Insert a withGameTypeDates to return season information for all gameTypes.
     * 1. Insert withGameTypeDates:  http://statsapi.mlb.com/api/v1/seasons?season=2019&sportId=1&withGameTypeDates=true
     *
     * @param fields Comma delimited list of specific fields to be returned. Format:
     * topLevelNode, childNode, attribute
     *
     * Example: https://statsapi.mlb.com/api/v1/seasons?sportId=1&fields=seasons,seasonStartDate,seasonEndDate
     *
     * @returns any OK
     * @throws ApiError
     */
    public static seasons(
        sportId: number,
        withGameTypeDates: number,
        fields?: Array<string>,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/seasons',
            query: {
                'sportId': sportId,
                'withGameTypeDates': withGameTypeDates,
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
     * View information for all seasons based on id.
     * **Description:**
     * This endpoint returns season information for all seasons based on id.
     *
     * **Return Includes:** Regular Season, Postseason start dates and end dates
     *
     * **Required Parameters:** sportId is required to run this call.
     *
     * ---
     * **Example of call with required parameters**
     *
     * https://statsapi.mlb.com/api/v1/seasons/all?sportId=1
     *
     * @param withGameTypeDates Insert a withGameTypeDates to return season information for all gameTypes.
     * 1. Insert withGameTypeDates:  https://statsapi.mlb.com/api/v1/seasons/all?sportId=1&withGameTypeDates=true
     *
     * @param divisionId Insert divisionId to return a directory of seasons for a specific division.
     * 1. One divisionId:  https://statsapi.mlb.com/api/v1/seasons/all?divisionId=200
     * For  a list of all divisionIds:  https://statsapi.mlb.com/api/v1/divisions
     *
     * @param leagueId Insert leagueId to return a directory of seasons in a specific league.
     * 1. One leagueId:  https://statsapi.mlb.com/api/v1/seasons/all?leagueId=103
     *
     * For  a list of all leagueIds:  http://statsapi.mlb.com/api/v1/sports
     *
     * @param sportId Insert a sportId to return a directory of seasons for a specific sport.
     * 1. One sportId:  https://statsapi.mlb.com/api/v1/seasons/all?sportId=1
     *
     * For  a list of all sportIds:  http://statsapi.mlb.com/api/v1/sports
     *
     * @param fields Comma delimited list of specific fields to be returned. Format:
     * topLevelNode, childNode, attribute
     *
     * Example: https://statsapi.mlb.com/api/v1/seasons/all?sportId=1&fields=seasons,seasonStartDate,seasonEndDate
     *
     * @returns any OK
     * @throws ApiError
     */
    public static allSeasons(
        withGameTypeDates: number,
        divisionId?: string,
        leagueId?: number,
        sportId?: number,
        fields?: Array<string>,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/seasons/all',
            query: {
                'divisionId': divisionId,
                'leagueId': leagueId,
                'withGameTypeDates': withGameTypeDates,
                'sportId': sportId,
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
     * View information on an individual season.
     * **Description:**
     * This endpoint returns season information  for the current year.
     *
     * **Return Includes:** Spring Training,Regular Season, Postseason start dates and end dates
     *
     * **Required Parameters:** sportId and seasonId are required to run this call.
     *
     * ---
     * **Example of call with required parameters**
     *
     * https://statsapi.mlb.com/api/v1/seasons/2017?sportId=1
     *
     * @param seasonId Insert year to return season information  for a particular season.
     * 1. Insert year: https://statsapi.mlb.com/api/v1/seasons/2017?sportId=1
     *
     * @param sportId Insert a sportId to return season information  for the current year for a particular sport.
     * 1. Insert sportId:  https://statsapi.mlb.com/api/v1/seasons/2017?sportId=1
     *
     * For  a list of all sportIds:  http://statsapi.mlb.com/api/v1/sports
     *
     * @param withGameTypeDates Insert a withGameTypeDates to return season information for all gameTypes.
     * 1. Insert withGameTypeDates:  https://statsapi.mlb.com/api/v1/seasons/2017?sportId=1&withGameTypeDates=true
     *
     * @param fields Comma delimited list of specific fields to be returned. Format:
     * topLevelNode, childNode, attribute
     *
     * Example: https://statsapi.mlb.com/api/v1/seasons/2017?sportId=1&fields=seasons,regularSeasonStartDate,regularSeasonEndDate
     *
     * @returns any OK
     * @throws ApiError
     */
    public static seasonId(
        seasonId: string,
        sportId: number,
        withGameTypeDates: number,
        fields?: Array<string>,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/seasons/{seasonId}',
            path: {
                'seasonId': seasonId,
            },
            query: {
                'sportId': sportId,
                'withGameTypeDates': withGameTypeDates,
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