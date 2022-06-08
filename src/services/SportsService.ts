import type { PeopleRestObject } from "../models/PeopleRestObject";
import type { SportsRestObject } from "../models/SportsRestObject";

import type { CancelablePromise } from "../core/CancelablePromise";
import { OpenAPI } from "../core/OpenAPI";
import { request as __request } from "../core/request";

export class SportsService {
	/**
   * View information for all sportIds.
   * **Description:**
   * This endpoint returns information for all sports available via the Stats API
   *
   * **Return Includes:** SportId and sport name.
   *
   * **Required Parameters:** No parameters are required to run this call.
   *
   *
   * @param activeStatus Insert activeStatus to populate teams based on active/inactive
   * status for a given season.
   * 1. https://statsapi.mlb.com/api/v1/sports?sportId=1&activeStatus=Y
   * 2. https://statsapi.mlb.com/api/v1/sports?sportId=1&activeStatus=N
   * 3. https://statsapi.mlb.com/api/v1/sports?sportId=1&activeStatus=B
   *
   * For  a list of all sportIds:  https://statsapi.mlb.com/api/v1/sports
   *
   * @param sportId Insert a sportId to return a directory of sport(s).
   * 1. Insert sportId:  https://statsapi.mlb.com/api/v1/sports?sportId=1
   *
   * For  a list of all sportIds:  https://statsapi.mlb.com/api/v1/sports
   *
   * @param fields Comma delimited list of specific fields to be returned. Format:
   * topLevelNode, childNode, attribute
   *
   * Example: https://statsapi.mlb.com/api/v1/sports?sportId=1&fields=sports,id,name
   *
   * @returns SportsRestObject OK
   * @throws ApiError
   */
	public static sports(
		activeStatus: string,
		sportId?: Array<string>,
		fields?: Array<string>
	): CancelablePromise<SportsRestObject> {
		return __request(OpenAPI, {
			method: "GET",
			url: "/api/v1/sports",
			query: {
				sportId: sportId,
				activeStatus: activeStatus,
				fields: fields,
			},
			errors: {
				401: `Unauthorized`,
				403: `Forbidden`,
				404: `Not Found`,
			},
		});
	}

	/**
   * View information for any given sportId.
   * **Description:**
   * This endpoint returns information for a sports available via the Stats API
   *
   * **Return Includes:** SportId and sport name.
   *
   * **Required Parameters:** sportId is required to run this call.
   *
   * ---
   *
   * **Example of call with required parameters**
   *
   * https://statsapi.mlb.com/api/v1/sports/1
   *
   *
   *
   * @param sportId Insert a sportId to return a directory of sport(s).
   * 1. Insert sportId:  https://statsapi.mlb.com/api/v1/sports/1
   *
   * For  a list of all sportIds:  https://statsapi.mlb.com/api/v1/sports
   *
   * @param activeStatus Insert activeStatus to populate teams based on active/inactive
   * status for a given season.
   * 1. https://statsapi.mlb.com/api/v1/sports/1?&activeStatus=Y
   * 2. https://statsapi.mlb.com/api/v1/sports/1?&activeStatus=N
   * 3. https://statsapi.mlb.com/api/v1/sports/1?&activeStatus=B
   *
   * For  a list of all sportIds:  https://statsapi.mlb.com/api/v1/sports
   *
   * @param fields Comma delimited list of specific fields to be returned. Format:
   * topLevelNode, childNode, attribute
   *
   * Example: https://statsapi.mlb.com/api/v1/sports/1?fields=sports,id,name
   *
   * @returns SportsRestObject OK
   * @throws ApiError
   */
	public static sportId(
		sportId: string,
		activeStatus: string,
		fields?: Array<string>
	): CancelablePromise<SportsRestObject> {
		return __request(OpenAPI, {
			method: "GET",
			url: "/api/v1/sports/{sportId}",
			path: {
				sportId: sportId,
			},
			query: {
				activeStatus: activeStatus,
				fields: fields,
			},
			errors: {
				401: `Unauthorized`,
				403: `Forbidden`,
				404: `Not Found`,
			},
		});
	}

	/**
   * View information on a players for a given sportId.
   * **Description:**
   * This endpoint returns player information for all players in a given sport.
   *
   * **Return Includes:** Biographical information and strikezone size.
   *
   * **Required Parameters:** sportId and season are required to run this call.
   *
   * ---
   *
   * **Example of call with required parameters**
   *
   * https://statsapi.mlb.com/api/v1/sports/1/players?season=2018
   *
   *
   * ---
   *
   * **Example of call with all parameters**
   *
   * https://statsapi.mlb.com/api/v1/sports/1/players?season=2017&gameType=W
   *
   * @param sportId Insert a sportId to return player information  for a particular sport.
   * 1. Insert sportId: https://statsapi.mlb.com/api/v1/sports/1/players
   *
   * For  a list of all sportIds:  https://statsapi.mlb.com/api/v1/sports
   *
   * @param season Insert year to return player information  for a particular season.
   * 1. Insert year: https://statsapi.mlb.com/api/v1/sports/1/players?season=2017
   *
   * @param gameType Insert gameType to return player information  for a particular gameType.
   * 1. Insert gameType:  https://statsapi.mlb.com/api/v1/sports/1/players?season=2017&gameType=W
   *
   * Find available game types at https://statsapi.mlb.com/api/v1/gameTypes
   *
   * @returns PeopleRestObject OK
   * @throws ApiError
   */
	public static sportPlayers(
		sportId: string,
		season: string,
		gameType?: string
	): CancelablePromise<PeopleRestObject> {
		return __request(OpenAPI, {
			method: "GET",
			url: "/api/v1/sports/{sportId}/players",
			path: {
				sportId: sportId,
			},
			query: {
				season: season,
				gameType: gameType,
			},
			errors: {
				401: `Unauthorized`,
				403: `Forbidden`,
				404: `Not Found`,
			},
		});
	}
}
