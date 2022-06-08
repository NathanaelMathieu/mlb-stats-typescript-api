import type { CancelablePromise } from "../core/CancelablePromise";
import { OpenAPI } from "../core/OpenAPI";
import { request as __request } from "../core/request";

export class JobsService {
	/**
   * View directory by jobType.
   *
   *
   * **Description:**
   * This endpoint returns a directory of persons for a particular job type on the Stats API.
   *
   * **Return Includes:** personId,uniform number, and jobId.
   *
   * **Required Parameters:** No parameters are required to run this call.
   *
   * ---
   * **Example of call with required parameters**
   *
   * https://statsapi.mlb.com/api/v1/jobs?jobType=UMPR
   *
   * **Example of call with all parameters**
   *
   * https://statsapi.mlb.com/api/v1/jobs?jobType=UMPR&sportId=1
   *
   * @param jobType Insert jobType to return information for a given jobType.
   * 1. One jobType: https://statsapi.mlb.com/api/v1/jobs?jobType=UMPR
   *
   * For a list of all jobTypes: https://statsapi.mlb.com/api/v1/jobTypes
   *
   * @param sportId Insert sportId to return information for a given jobType in a specific sport.
   * 1. One sportId: hhttps://statsapi.mlb.com/api/v1/jobs?jobType=UMPR&sportId=1
   *
   * For a list of all sportIds: https://statsapi.mlb.com/api/v1/sports
   *
   * @param date Insert date to return information for jobs on a particular date. Format:
   * MM/DD/YYYY
   * 1. Insert date: https://statsapi.mlb.com/api/v1/jobs?jobType=UMPR&date=09/10/2011
   *
   * @param fields Comma delimited list of specific fields to be returned. Format:
   * topLevelNode, childNode, attribute
   *
   * Example: https://statsapi.mlb.com/api/v1/jobs?jobType=UMPR&sportId=1&fields=roster,person,fullName
   *
   * @returns any OK
   * @throws ApiError
   */
	public static anyjob(
		jobType: string,
		sportId?: string,
		date?: string,
		fields?: Array<string>
	): CancelablePromise<any> {
		return __request(OpenAPI, {
			method: "GET",
			url: "/api/v1/jobs",
			query: {
				jobType: jobType,
				sportId: sportId,
				date: date,
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
   * View umpire directory.
   *
   *
   * **Description:**
   * This endpoint returns a directory of umpires.
   *
   * **Return Includes:** personId,uniform number, and jobId.
   *
   * **Required Parameters:** No parameters are required to run this call.
   *
   * ---
   * **Example of call with all parameters**
   *
   * https://statsapi.mlb.com/api/v1/jobs/umpires?sportId=1
   *
   * @param sportId Insert sportId to return information for umpires in a specific sport.
   * 1. One sportId: https://statsapi.mlb.com/api/v1/jobs/umpires?sportId=1
   *
   * For a list of all sportIds: https://statsapi.mlb.com/api/v1/sports
   *
   * @param date Insert date to return information for umpires on a particular date. Format:
   * MM/DD/YYYY
   * 1. Insert date: https://statsapi.mlb.com/api/v1/jobs/umpires?sportId=1&date=09/10/2011
   *
   * @param hydrate Insert Hydration(s) to return data for any available stats hydration. The hydrations for Stats contain "person" and "team" which have subhydrations Format "team(subHydration1, subHydrations2)" "
   * 1. One Hydration Using Person Sub Hydration: https://statsapi.mlb.com/api/v1/jobs/umpires?sportId=1&date=09/10/2011&hydrate=person(education)
   * 2. Multiple Hydrations Using Person Sub Hydration: https://statsapi.mlb.com/api/v1/jobs/umpires?sportId=1&date=09/10/2011&hydrate=person(education,xrefId)
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
   * @param fields Comma delimited list of specific fields to be returned. Format:
   * topLevelNode, childNode, attribute
   *
   * Example: https://statsapi.mlb.com/api/v1/jobs/umpires?sportId=1&fields=roster,person,fullName
   *
   * @returns any OK
   * @throws ApiError
   */
	public static umpires(
		sportId?: string,
		date?: string,
		hydrate?: Array<string>,
		fields?: Array<string>
	): CancelablePromise<any> {
		return __request(OpenAPI, {
			method: "GET",
			url: "/api/v1/jobs/umpires",
			query: {
				sportId: sportId,
				date: date,
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

	/**
   * View datacasters directory.
   *
   *
   * **Description:**
   * This endpoint returns a directory of datacasters.
   *
   * **Return Includes:** personId and jobId.
   *
   * **Required Parameters:** No parameters are required to run this call.
   *
   * ---
   * **Example of call with all parameters**
   *
   * https://statsapi.mlb.com/api/v1/jobs/datacasters
   *
   * @param sportId Insert sportId to return information for datacasters in a specific sport.
   * 1. One sportId: https://statsapi.mlb.com/api/v1/jobs/datacasters?sportId=1
   *
   * For a list of all sportIds: https://statsapi.mlb.com/api/v1/sports
   *
   * @param date Insert date to return information for datacasters on a particular date. Format:
   * MM/DD/YYYY
   * 1. Insert date: https://statsapi.mlb.com/api/v1/jobs/datacasters?date=09/10/2011
   *
   * @param hydrate Insert Hydration(s) to return data for any available stats hydration. The hydrations for Stats contain "person" and "team" which have subhydrations Format "team(subHydration1, subHydrations2)" "
   * 1. One Hydration Using Person Sub Hydration: https://statsapi.mlb.com/api/v1/jobs/datacasters?sportId=1&date=09/10/2011&hydrate=person(education)
   * 2. Multiple Hydrations Using Person Sub Hydration: https://statsapi.mlb.com/api/v1/jobs/datacasters?sportId=1&date=09/10/2011&hydrate=person(education,xrefId)
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
   * @param fields Comma delimited list of specific fields to be returned. Format:
   * topLevelNode, childNode, attribute
   *
   * Example: https://statsapi.mlb.com/api/v1/jobs/datacasters?sportId=1&fields=roster,person,fullName
   *
   * @returns any OK
   * @throws ApiError
   */
	public static datacasters(
		sportId?: string,
		date?: string,
		hydrate?: Array<string>,
		fields?: Array<string>
	): CancelablePromise<any> {
		return __request(OpenAPI, {
			method: "GET",
			url: "/api/v1/jobs/datacasters",
			query: {
				sportId: sportId,
				date: date,
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

	/**
   * View official scorer directory.
   *
   *
   * **Description:**
   * This endpoint returns a directory of officialScorers.
   *
   * **Return Includes:** personId and jobId.
   *
   * **Required Parameters:** No parameters are required to run this call.
   *
   * ---
   * **Example of call with all parameters**
   *
   * https://statsapi.mlb.com/api/v1/jobs/officialScorers?sportId=1
   *
   * @param sportId Insert sportId to return information for officialScorers in a specific sport.
   * 1. One sportId: https://statsapi.mlb.com/api/v1/jobs/officialScorers?sportId=1
   *
   * For a list of all sportIds: https://statsapi.mlb.com/api/v1/sports
   *
   * @param date Insert date to return information for officialScorers on a particular date. Format:
   * MM/DD/YYYY
   * 1. Insert date: https://statsapi.mlb.com/api/v1/jobs/officialScorers?sportId=1&date=09/10/2011
   *
   * @param hydrate Insert Hydration(s) to return data for any available stats hydration. The hydrations for Stats contain "person" and "team" which have subhydrations Format "team(subHydration1, subHydrations2)" "
   * 1. One Hydration Using Person Sub Hydration: https://statsapi.mlb.com/api/v1/jobs/officialScorers?sportId=1&date=09/10/2011&hydrate=person(education)
   * 2. Multiple Hydrations Using Person Sub Hydration: https://statsapi.mlb.com/api/v1/jobs/officialScorers?sportId=1&date=09/10/2011&hydrate=person(education,xrefId)
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
   * @param fields Comma delimited list of specific fields to be returned. Format:
   * topLevelNode, childNode, attribute
   *
   * Example: https://statsapi.mlb.com/api/v1/jobs/officialScorers?sportId=1&fields=roster,person,fullName
   *
   * @returns any OK
   * @throws ApiError
   */
	public static officialScorers(
		sportId?: string,
		date?: string,
		hydrate?: Array<string>,
		fields?: Array<string>
	): CancelablePromise<any> {
		return __request(OpenAPI, {
			method: "GET",
			url: "/api/v1/jobs/officialScorers",
			query: {
				sportId: sportId,
				date: date,
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
