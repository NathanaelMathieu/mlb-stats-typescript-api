/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class StandingsService {

    /**
     * View standings for a league.
     * **Description:**
     * This endpoint returns standings information for a given league.
     *
     * **Return Includes:** Team and standing information.
     *
     * **Required Parameters:** leagueId and season are required to run this call.
     *
     * **Hydrations:** This endpoint can accept the hydrations query parameter.
     *
     * ---
     * **Example of call with required parameters**
     *
     * https://statsapi.mlb.com/api/v1/standings?leagueId=103&season=2018
     *
     * **Call defaults to regularSeason standings**
     *
     * ---
     * **Example of call with hydrated parameters**
     *
     * https://statsapi.mlb.com/api/v1/standings?leagueId=103&season=2018&standingsTypes=wildCard,regularSeason&hydrate=team(league)
     *
     * @param leagueId
     * Insert leagueId  to return all standings based on a particular standingType for a specific league.
     * 1. Insert leagueId: https://statsapi.mlb.com/api/v1/standings?leagueId=103&season=2018&standingsTypes=regularSeason
     *
     * **For Spring Training pass regular season AL and NL values.**
     *
     * For a list of all leagueIds:  https://statsapi.mlb.com/api/v1/league?sportId=1
     *
     * @param season
     * Insert year to return all standings based on a particular year.
     * 1. Insert year: https://statsapi.mlb.com/api/v1/standings?leagueId=103&season=2018&standingsTypes=regularSeason
     *
     * @param standingsTypes
     * Insert standingType  to return all standings based on a particular year.
     * 1. One standingType: https://statsapi.mlb.com/api/v1/standings?leagueId=103&season=2018&standingsTypes=regularSeason
     * 2. Multiple standingType: https://statsapi.mlb.com/api/v1/standings?leagueId=103&season=2018&standingsTypes=regularSeason,wildCard
     *
     * **Description of all standingTypes**
     * 1. regularSeason - Regular Season Standings
     * 2. wildCard - Wild card standings
     * 3. divisionLeaders - Division Leader standings
     * 4. wildCardWithLeaders - Wild card standings with Division Leaders
     * 5. firstHalf - First half standings.  Only valid for leagues with a split season (Mexican League).
     * 6. secondHalf - Second half standings. Only valid for leagues with a split season (Mexican League).
     * 7. springTraining - Spring Training Standings
     * 8. postseason - Postseason Standings
     * 9. byDivision - Standings by Division
     * 10. byConference - Standings by Conference
     * 11. byLeague - Standings by League
     *
     *
     * **Find standingTypes at https://statsapi.mlb.com/api/v1/standingsTypes**
     *
     * @param date Insert date to return standing information for on a particular date. Format: MM/DD/YYYY
     * 1. Insert date: https://statsapi.mlb.com/api/v1/standings?leagueId=103&season=2018&standingsTypes=regularSeason&date=08/07/2018
     *
     * @param hydrate Insert Hydration(s) to return data for any available standings hydration. Format "team,league"
     * 1. One Hydration: https://statsapi.mlb.com/api/v1/standings?leagueId=103&season=2018&standingsTypes=wildCard,regularSeason&hydrate=league
     * 2. Multiple Hydrations: https://statsapi.mlb.com/api/v1/standings?leagueId=103&season=2018&standingsTypes=wildCard,regularSeason&hydrate=league,sport
     * 3. Check For Available Hydrations: https://statsapi.mlb.com/api/v1/standings?leagueId=103&season=2018&standingsTypes=wildCard,regularSeason&hydrate=hydrations
     * - Available Hydrations:
     * 1.  team
     * 2.  league
     * 3.  division
     * 4.  sport
     * 5.  conference
     * 6.  record(conference)
     * 7.  record(division)
     *
     *
     * - Notes on Hydrations:
     * The team has  individual hydrations on its own. These sub hydrations can be used in the standings call
     * <br> </br>
     * IE:
     * https://statsapi.mlb.com/api/v1/standings?leagueId=103&season=2018&standingsTypes=wildCard,regularSeason&hydrate=team(division)
     * 1. "team(division)" = a directory of divisions for the given league
     *
     *
     * @param fields Comma delimited list of specific fields to be returned. Format:
     * topLevelNode, childNode, attribute
     *
     * Example: https://statsapi.mlb.com/api/v1/standings?leagueId=103,104&teamId=147&season=2018&standingsTypes=regularSeason&fields=records,league,division,sport,id
     *
     * @returns any OK
     * @throws ApiError
     */
    public static standings(
        leagueId: string,
        season: string,
        standingsTypes?: string,
        date?: string,
        hydrate?: string,
        fields?: Array<string>,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/standings',
            query: {
                'leagueId': leagueId,
                'season': season,
                'standingsTypes': standingsTypes,
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