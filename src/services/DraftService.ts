import type { BaseballDraftLatestRestObject } from "../models/BaseballDraftLatestRestObject";
import type { BaseballDraftListRestObject } from "../models/BaseballDraftListRestObject";
import type { ProspectListRestObject } from "../models/ProspectListRestObject";

import type { CancelablePromise } from "../core/CancelablePromise";
import { OpenAPI } from "../core/OpenAPI";
import { request as __request } from "../core/request";

export class DraftService {
	/**
   * View drafted players by year.
   *
   * **Description:**
   * This endpoint returns biographical and financial data for the Rule 4 draft.
   *
   * **Return Includes:** Player name, id, financial data, & team data.
   *
   * **Required Parameters:** year is required to run this call.
   *
   * ---
   * **Example of call with required parameters:**
   *
   * https://statsapi.mlb.com/api/v1/draft/2018
   *
   * ---
   * **Example of call with all parameters:**
   *
   * https://statsapi.mlb.com/api/v1/draft/2018?limit=1&round=1&name=M&school=A&position=P&teamId=116&playerId=663554&bisPlayerId=759143
   *
   * @param year
   * Insert year to return biographical and financial data for a specific Rule 4 draft.
   * 1. Insert year:  https://statsapi.mlb.com/api/v1/draft/2018
   *
   * @param limit Insert a limit to limit return. Limit number applies to each round.
   * 1. Insert limit:  https://statsapi.mlb.com/api/v1/draft/2018?limit=1
   *
   * @param fields Comma delimited list of specific fields to be returned. Format:
   * topLevelNode, childNode, attribute
   *
   * Example: https://statsapi.mlb.com/api/v1/draft/2018?fields=drafts,draftYear,rounds,round
   *
   * @param round Insert a round to return biographical and financial data for a specific round in a Rule 4 draft.
   * 1. Insert limit:  https://statsapi.mlb.com/api/v1/draft/2018?round=1
   *
   * @param name
   * Insert the first letter of a draftees last name to return their Rule 4 biographical and financial data.
   * 1. Insert name:  https://statsapi.mlb.com/api/v1/draft/2018?name=M
   *
   * @param school
   * Insert the first letter of a draftees school to return their Rule 4 biographical and financial data.
   * 1. Insert school:  https://statsapi.mlb.com/api/v1/draft/2018?&school=A
   *
   * @param state
   * Insert state to return a list of Rule 4 draftees from that given state
   * 1. Insert state:  https://statsapi.mlb.com/api/v1/draft/2018?&state=NY
   *
   * @param country
   * Insert state to return a list of Rule 4 draftees from that given state
   * 1. Insert state:  https://statsapi.mlb.com/api/v1/draft/2018?&country=PR
   *
   * @param position
   * Insert the position  to return Rule 4 biographical and financial data for a players drafted at that position.
   * 1. Insert position: https://statsapi.mlb.com/api/v1/draft/2018?position=P
   *
   * **Find available positions at https://statsapi.mlb.com/api/v1/positions**
   *
   * @param teamId
   * Insert teamId  to return Rule 4 biographical and financial data for all picks made by a specific team.
   * 1. Insert teamId: https://statsapi.mlb.com/api/v1/draft/2018?teamId=116
   *
   * For a list of all teamIds:  https://statsapi.mlb.com/api/v1/teams
   *
   * @param playerId
   * Insert MLB playerId to return a player's Rule 4 biographical and financial data for a specific Rule 4 draft.
   * 1. Insert playerId: https://statsapi.mlb.com/api/v1/draft/2018?playerId=663554
   *
   * @param bisPlayerId
   * Insert bisPlayerId to return a player's Rule 4 biographical and financial data for a specific Rule 4 draft.
   * 1. Insert bisPlayerId: https://statsapi.mlb.com/api/v1/draft/2018?bisPlayerId=759143
   *
   * @returns BaseballDraftListRestObject OK
   * @throws ApiError
   */
	public static draft(
		year: number,
		limit?: number,
		fields?: Array<string>,
		round?: string,
		name?: string,
		school?: string,
		state?: string,
		country?: string,
		position?:
      | "P"
      | "C"
      | "1B"
      | "2B"
      | "3B"
      | "SS"
      | "LF"
      | "CF"
      | "RF"
      | "DH"
      | "PH"
      | "PR"
      | "BR"
      | "OF"
      | "IF"
      | "SP"
      | "RP"
      | "CP"
      | "UT"
      | "UI"
      | "UO"
      | "RHP"
      | "LHP"
      | "RHS"
      | "LHS"
      | "LHR"
      | "RHR"
      | "B"
      | "X",
		teamId?: number,
		playerId?: number,
		bisPlayerId?: number
	): CancelablePromise<BaseballDraftListRestObject> {
		return __request(OpenAPI, {
			method: "GET",
			url: "/api/v1/draft/{year}",
			path: {
				year: year,
			},
			query: {
				limit: limit,
				fields: fields,
				round: round,
				name: name,
				school: school,
				state: state,
				country: country,
				position: position,
				teamId: teamId,
				playerId: playerId,
				bisPlayerId: bisPlayerId,
			},
			errors: {
				401: `Unauthorized`,
				403: `Forbidden`,
				404: `Not Found`,
			},
		});
	}

	/**
   * View draft eligible prospects by year.
   *
   * **Description:**
   * This endpoint returns biographical and financial data for Rule 4 draft eligible prospects.
   *
   * **Return Includes:** Player name, id, financial data, & team data.
   *
   * **Required Parameters:** year is required to run this call.
   *
   * ---
   * **Example of call with required parameters:**
   *
   * https://statsapi.mlb.com/api/v1/draft/prospects/2018
   *
   * ---
   * **Example of call with all parameters:**
   *
   * https://statsapi.mlb.com/api/v1/draft/prospects/2018?limit=1&round=1&name=M&school=A&position=P&teamId=116&playerId=663554&bisPlayerId=759143
   *
   * @param year
   * Insert year to return biographical and financial data for a specific Rule 4 draft's eligibile prospects.
   * 1. Insert year:  https://statsapi.mlb.com/api/v1/draft/prospects/2018
   *
   * @param limit Insert a limit to limit return. Limit number applies to each round.
   * 1. Insert limit:  https://statsapi.mlb.com/api/v1/draft/prospects/2018?limit=1
   *
   * @param fields Comma delimited list of specific fields to be returned. Format:
   * topLevelNode, childNode, attribute
   *
   * Example: https://statsapi.mlb.com/api/v1/draft/prospects/2018?fields=drafts,draftYear,rounds,round
   *
   * @param round Insert a round to return biographical and financial data for a specific round in a Rule 4 draft.
   * 1. Insert limit:  https://statsapi.mlb.com/api/v1/draft/prospects/2018?round=1
   *
   * @param name
   * Insert the first letter of an eligible draftee's last name to return their  Rule 4 biographical and financial data.
   * 1. Insert name:  https://statsapi.mlb.com/api/v1/draft/prospects/2018?name=M
   *
   * @param school
   * Insert the first letter of an eligible draftee's school to return their  Rule 4 biographical and financial data.
   * 1. Insert school: https://statsapi.mlb.com/api/v1/draft/prospects/2018?&school=A
   *
   * @param state
   * Insert state to return a list of Rule 4 draftees from that given state
   * 1. Insert state:  https://statsapi.mlb.com/api/v1/draft/prospects/2018?&state=NY
   *
   * @param country
   * Insert state to return a list of Rule 4 draftees from that given state
   * 1. Insert state:  https://statsapi.mlb.com/api/v1/draft/prospects/2018?&country=PR
   *
   * @param position
   * Insert the position  to return an eligible draftee's Rule 4 biographical and financial data for a players drafted at that position.
   * 1. Insert position: https://statsapi.mlb.com/api/v1/draft/prospects/2018?position=P
   *
   * **Find available positions at https://statsapi.mlb.com/api/v1/positions**
   *
   * @param teamId
   * Insert teamId  to return Rule 4 biographical and financial data for all picks made by a specific team.
   * 1. Insert teamId: https://statsapi.mlb.com/api/v1/draft/prospects/2018?teamId=116
   *
   * For a list of all teamIds:  https://statsapi.mlb.com/api/v1/teams
   *
   * @param playerId
   * Insert MLB playerId to return an eligible draftee's Rule 4 biographical and financial data a specific Rule 4 draft.
   * 1. Insert playerId: https://statsapi.mlb.com/api/v1/draft/prospects/2018?playerId=663554
   *
   * @param bisPlayerId
   * Insert bisPlayerId to return an eligible draftee's Rule 4 biographical and financial data a specific Rule 4 draft.
   * 1. Insert bisPlayerId: https://statsapi.mlb.com/api/v1/draft/prospects/2018?bisPlayerId=759143
   *
   * @returns ProspectListRestObject OK
   * @throws ApiError
   */
	public static draftProspects(
		year: number,
		limit?: number,
		fields?: Array<string>,
		round?: string,
		name?: string,
		school?: string,
		state?: string,
		country?: string,
		position?:
      | "P"
      | "C"
      | "1B"
      | "2B"
      | "3B"
      | "SS"
      | "LF"
      | "CF"
      | "RF"
      | "DH"
      | "PH"
      | "PR"
      | "BR"
      | "OF"
      | "IF"
      | "SP"
      | "RP"
      | "CP"
      | "UT"
      | "UI"
      | "UO"
      | "RHP"
      | "LHP"
      | "RHS"
      | "LHS"
      | "LHR"
      | "RHR"
      | "B"
      | "X",
		teamId?: number,
		playerId?: number,
		bisPlayerId?: number
	): CancelablePromise<ProspectListRestObject> {
		return __request(OpenAPI, {
			method: "GET",
			url: "/api/v1/draft/prospects/{year}",
			path: {
				year: year,
			},
			query: {
				limit: limit,
				fields: fields,
				round: round,
				name: name,
				school: school,
				state: state,
				country: country,
				position: position,
				teamId: teamId,
				playerId: playerId,
				bisPlayerId: bisPlayerId,
			},
			errors: {
				401: `Unauthorized`,
				403: `Forbidden`,
				404: `Not Found`,
			},
		});
	}

	/**
   * View latest player drafted, endpoint best used when draft is currently open.
   *
   * **Description:**
   * This endpoint returns biographical and financial data for the most recent pick in the Rule 4 draft.
   *
   * **Return Includes:** Player name, id, financial data, & team data.
   *
   * **Required Parameters:** year is required to run this call.
   *
   * ---
   * **Example of call with required parameters:**
   *
   * https://statsapi.mlb.com/api/v1/draft/2018/latest
   *
   * @param year
   * Insert year to return biographical and financial data for the most recent pick in the Rule 4 draft.
   * 1. Insert year:  https://statsapi.mlb.com/api/v1/draft/2018/latest
   *
   * @returns BaseballDraftLatestRestObject OK
   * @throws ApiError
   */
	public static latestDraftPicks(
		year: number
	): CancelablePromise<BaseballDraftLatestRestObject> {
		return __request(OpenAPI, {
			method: "GET",
			url: "/api/v1/draft/{year}/latest",
			path: {
				year: year,
			},
			errors: {
				401: `Unauthorized`,
				403: `Forbidden`,
				404: `Not Found`,
			},
		});
	}
}
