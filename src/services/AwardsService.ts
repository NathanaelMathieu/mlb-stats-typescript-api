import type { CancelablePromise } from "../core/CancelablePromise";
import { OpenAPI } from "../core/OpenAPI";
import { request as __request } from "../core/request";

export class AwardsService {
	/**
   * View recipients of an award.
   * **Description:**
   * This endpoint returns awards data based on awardId.
   *
   * **Return Includes:** recipients, team, position, year.
   *
   * **Required Parameters:** awardId is required to run this call.
   *
   * **Hydrations:** This endpoint can accept the hydrations query parameter.
   *
   * ---
   * **Example of call with required parameters**
   *
   * https://statsapi.mlb.com/api/v1/awards/MLBHOF/recipients?
   * <br> </br>
   *
   * ---
   * **Example of call with all parameters**
   *
   * https://statsapi.mlb.com/api/v1/awards/MLBHOF/recipients?sportId=1&season=2017&leagueId=103
   *
   * @param awardId Insert a awardId to return a directory of players for a given award.
   * 1. One sportId:  https://statsapi.mlb.com/api/v1/awards/MLBHOF/recipients?
   *
   * For  a list of all awards:  https://statsapi.mlb.com/api/v1/awards
   *
   * @param sportId Insert a sportId to return a directory of players for a given award in a specific sport.
   * 1. One sportId:  https://statsapi.mlb.com/api/v1/awards/MLBHOF/recipients?sportId=1
   *
   * For  a list of all sportIds:  https://statsapi.mlb.com/api/v1/sports
   *
   * @param leagueId Insert leagueId(s) to return a directory of players for a given award in a specific league. Format '103,104'
   * 1. One leagueId: https://statsapi.mlb.com/api/v1/awards/MLBHOF/recipients?leagueId=103
   *
   * For  a list of all leagueIds:  https://statsapi.mlb.com/api/v1/sports
   *
   * @param season Insert year(s) to return a directory of players for a given award in a given season.
   * 1. One year: https://statsapi.mlb.com/api/v1/awards/MLBHOF/recipients?season=2017
   *
   * @param hydrate Insert Hydration(s) to return data for any available team hydration. Format "results,team"
   * 1. One Hydration: https://statsapi.mlb.com/api/v1/awards/MLBHOF/recipients?season=2017&hydrate=team
   * 2. Multiple Hydrations:  https://statsapi.mlb.com/api/v1/awards/MLBHOF/recipients?season=2017&hydrate=results,team
   * 3. One Hydration Using Team Sub Hydration: https://statsapi.mlb.com/api/v1/awards/MLBHOF/recipients?season=2017&hydrate=hydrations,team(venue)
   * 4. Multiple Hydrations Using Team Sub Hydration: https://statsapi.mlb.com/api/v1/awards/MLBHOF/recipients?season=2017&hydrate=hydrations,team(venue,social)
   * 5. Check For Available Hydrations: https://statsapi.mlb.com/api/v1/awards/MLBHOF/recipients?season=2017&hydrate=hydrations
   * - Available Hydrations:
   *
   * 1. results
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
   * @param fields Comma delimited list of specific fields to be returned. Format:
   * topLevelNode, childNode, attribute
   *
   * Example: https://statsapi.mlb.com/api/v1/awards/MLBHOF/recipients?season=2017&fields=awards,id,player,nameFirstLast
   *
   * @returns any OK
   * @throws ApiError
   */
	public static awardRecipients(
		awardId: string,
		sportId?: number,
		leagueId?: Array<number>,
		season?: Array<number>,
		hydrate?: Array<string>,
		fields?: Array<string>
	): CancelablePromise<any> {
		return __request(OpenAPI, {
			method: "GET",
			url: "/api/v1/awards/{awardId}/recipients",
			path: {
				awardId: awardId,
			},
			query: {
				sportId: sportId,
				leagueId: leagueId,
				season: season,
				hydrate: hydrate,
				fields: fields,
			},
			errors: {
				401: `Unauthorized`,
				403: `Forbidden`,
				404: `Not Found`,
			},
		});
	}
}
