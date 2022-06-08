import type { PostseasonScheduleRestObject } from "../models/PostseasonScheduleRestObject";
import type { ScheduleRestObject } from "../models/ScheduleRestObject";

import type { CancelablePromise } from "../core/CancelablePromise";
import { OpenAPI } from "../core/OpenAPI";
import { request as __request } from "../core/request";

export class ScheduleService {
	/**
   * View schedule info based on scheduleType.
   * **Description:**
   * This endpoint returns all schedules based on a particular scheduleType.
   *
   * **Return Includes:** Game and event data.
   *
   * **Required Parameters:** sportId or gamePk(s) are required to run this call
   *
   * **Hydrations:** This endpoint can accept the hydrations query parameter.
   *
   * ---
   * **Example of call with required parameters**
   * 1. https://statsapi.mlb.com/api/v1/schedule?sportId=1
   * 2. https://statsapi.mlb.com/api/v1/schedule/?sportId=1&gamePk=534262
   *
   * **If no gamePk or startDate/endDate are given then call will populate for current date**
   *
   * ---
   * **Example of call with hydration parameters**
   * https://statsapi.mlb.com/api/v1/schedule/?sportId=1&gamePk=534262&hydrate=linescore
   *
   * @param sportId
   * Insert sportId to return all schedules based on a particular scheduleType for a specific sport.
   * 1. Insert sportId: https://statsapi.mlb.com/api/v1/schedule/?sportId=1
   * 2. Insert multiple sportIds: https://statsapi.mlb.com/api/v1/schedule/?sportId=1,11
   *
   * For a list of all sportIds: https://statsapi.mlb.com/api/v1/sports
   *
   * @param gamePks
   * Insert gamePks to return all schedules based on a particular scheduleType for specific games.
   * 1. Insert teamId: https://statsapi.mlb.com/api/v1/schedule/?gamePk=531493
   * 2. Insert multiple teamIds: https://statsapi.mlb.com/api/v1/schedule/?gamePks=531493,531497
   *
   * @param scheduleType There are three different scheduleTypes:
   * 1. games - games schedule
   * 2. events -  non game events, like a ballpark tour, fireworks show, or a concert
   * 3. xref - pulls in games that are cross-referenced but don't belong to a team normally, ie. All-Star Game
   *
   * Insert one or mutliple of the three available scheduleTypes to return data for a particular schedule. Format "games,events,xref"
   * 1. Calling games scheduleType: https://statsapi.mlb.com/api/v1/schedule/?sportId=1&scheduleTypes=games
   * 2. Multiple scheduleTypes: https://statsapi.mlb.com/api/v1/schedule/?sportId=1&scheduleTypes=events,xref,games
   *
   * @param timecode Use this parameter to return a snapshot of the data at the specified time. Format: YYYYMMDD_HHMMSS.
   *
   * **Return timecodes from timecodes endpoint https://statsapi.mlb.com/api/v1.1/game/534196/feed/live/timestamps.**
   *
   *
   * 1. Insert timecode: https://statsapi.mlb.com/api/v1/schedule?sportId=1&timecode=20190707_180000&date=07/07/2019
   *
   * @param eventTypes There are two different schedule eventTypes:
   * 1. primary- returns calendar/schedule pages.
   * 2. secondary returns ticket pages.
   *
   * Insert one or mutliple of the three available eventTypes to return data for a particular schedule. Format "primary,secondary"
   * 1. Calling primary eventTypes: https://statsapi.mlb.com/api/v1/schedule?sportId=1&startDate=01/01/2019&endDate=12/31/2019&eventTypes=primary&scheduleTypes=events
   * 2. Multiple eventTypes: https://statsapi.mlb.com/api/v1/schedule?sportId=1&startDate=01/01/2019&endDate=12/31/2019&eventTypes=primary,secondary&scheduleTypes=events
   *
   * @param scheduleEventTypes
   * Insert scheduleEventTypes to return data for a particular schedule based on type.
   * 1. One scheduleEventType: https://statsapi.mlb.com/api/v1/schedule?sportId=1&startDate=01/01/2019&endDate=12/31/2019&scheduleTypes=events&scheduleEventTypes=O
   * 2. Multiple scheduleEventTypes: https://statsapi.mlb.com/api/v1/schedule?sportId=1&startDate=01/01/2019&endDate=12/31/2019&scheduleTypes=events&scheduleEventTypes=D,O
   *
   * For a list of all scheduleEventTypes:  https://statsapi.mlb.com/api/v1/scheduleEventTypes
   *
   * **For Non Game Events with Tracking data users must add an authorization header with their Stats API Okta credentials.
   * 1. https://statsapi.mlb.com/api/v1/schedule?sportId=1&startDate=01/01/2019&endDate=06/01/2020&scheduleTypes=events&scheduleEventTypes=D
   *
   * @param hydrate Insert Hydration(s) to return data for any available schedule hydration. The hydrations for schedule contain "venue" and "team" which have subhydrations Format "team(subHydration1, subHydrations2)"
   * 1. One Hydration: https://statsapi.mlb.com/api/v1/schedule/?sportId=1&gamePk=534262&hydrate=linescore
   * 2. Multiple Hydrations: https://statsapi.mlb.com/api/v1/schedule/?sportId=1&gamePk=534262&hydrate=trackingVersion,coachingVideo
   * 3. One Hydration Using Team Sub Hydration: https://statsapi.mlb.com/api/v1/schedule/?sportId=1&gamePk=534262&hydrate=team(social)
   * 4. Multiple Hydrations Using Team Sub Hydration: https://statsapi.mlb.com/api/v1/schedule/?sportId=1&gamePk=534262&hydrate=team(social,league)
   * 5. One Hydration Using Venue Sub Hydration: https://statsapi.mlb.com/api/v1/schedule/?sportId=1&gamePk=534262&hydrate=venue(location)
   * 6. Check For Available Hydrations: https://statsapi.mlb.com/api/v1/schedule/?sportId=1&gamePk=534262&hydrate=hydrations
   *
   * - Available Hydrations:
   * 1.  trackingVersion
   * 1.  coachingVideo
   * 1.  tickets
   * 2.  game(content)
   * 3.  game(content(all))
   * 4.  game(content(media(all)))
   * 5.  game(content(editorial(all)))
   * 6.  game(content(highlights(all)))
   * 7.  game(content(editorial(preview)))
   * 8.  game(content(editorial(recap)))
   * 9.  game(content(editorial(articles)))
   * 10.  game(content(editorial(wrap)))
   * 11.  game(content(media(epg)))
   * 12.  game(content(media(milestones)))
   * 13.  game(content(highlights(scoreboard)))
   * 14.  game(content(highlights(scoreboardPreview)))
   * 15.  game(content(highlights(highlights)))
   * 16.  game(content(highlights(gamecenter)))
   * 17.  game(content(highlights(milestone)))
   * 18.  game(content(highlights(live)))
   * 19.  game(content(media(featured)))
   * 20.  game(content(summary))
   * 21.  game(content(gamenotes))
   * 22.  game(tickets)
   * 23.  game(atBatTickets)
   * 24.  game(promotions)
   * 25.  game(atBatPromotions)
   * 26.  game(sponsorships)
   * 27.  lineup
   * 28.  linescore
   * 29.  linescore(matchup)
   * 30.  linescore(runners)
   * 31.  linescore(defense)
   * 32.  decisions
   * 33.  scoringplays
   * 34.  broadcasts
   * 35.  broadcasts(all)
   * 36.  radioBroadcasts
   * 37.  metadata
   * 38.  game(seriesSummary)
   * 39.  seriesStatus
   * 40.  event(performers)
   * 41.  event(promotions)
   * 42.  event(timezone)
   * 43.  event(tickets)
   * 44.  event(venue)
   * 45.  event(designations)
   * 46.  event(game)
   * 47.  event(status)
   * 48.  weather
   * 49.  officials
   * 50.  probablePitcher
   * 51.  flags
   * 51.  story
   *
   * 52. venue
   * - Hydrations Available Through Venue
   * 1. relatedVenues
   * 2. parentVenues
   * 3. residentVenues
   * 4. relatedVenues(venue)
   * 5. parentVenues(venue)
   * 6. residentVenues(venue)
   * 7. location
   * 8. social
   * 9. relatedApplications
   * 10. timezone
   * 11. menu
   * 12. metadata
   * 13. performers
   * 14. images
   * 15. schedule
   * 16. nextSchedule
   * 17. previousSchedule(inclusive=true)
   * 18. ticketManagement
   * 19. xrefId
   *
   * 48. team
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
   *
   * @param teamId
   * Insert teamId  to return all schedules based on a particular scheduleType for a specific team.
   * 1. Insert teamId: https://statsapi.mlb.com/api/v1/schedule/?sportId=1&teamId=118
   *
   * For a list of all teamIds:  https://statsapi.mlb.com/api/v1/teams
   *
   * @param leagueId
   * Insert leagueId  to return all schedules based on a particular scheduleType for a specific league.
   * 1. Insert teamId: https://statsapi.mlb.com/api/v1/schedule/?sportId=1&leagueId=103
   *
   * For a list of all leagueIds:  https://statsapi.mlb.com/api/v1/league?sportId=1
   *
   * @param venueIds Insert venueId to return all schedules based on a particular scheduleType for a specific venueId.
   * 1. Insert venueId: https://statsapi.mlb.com/api/v1/schedule/?sportId=1&venueIds=10
   *
   * For a list of all venueId:  https://statsapi.mlb.com/api/v1/teams
   *
   * @param gameTypes Insert gameTypes to return schedule information for all games in particular gameTypes.
   * 1. One gameTypes: https://statsapi.mlb.com/api/v1/schedule/?sportId=1&gameTypes=W&season=2019&startDate=01/01/2019&endDate=12/31/2019
   * 2. Multiple gameTypes: https://statsapi.mlb.com/api/v1/schedule/?sportId=1&gameTypes=D,W&season=2019&startDate=01/01/2019&endDate=12/31/2019
   *
   * For a list of all gameTypes: https://statsapi.mlb.com/api/v1/gameTypes
   *
   * @param date Insert date to return schedule information for all games or events in on a particular date. Format:
   * MM/DD/YYYY
   * 1. Insert date: https://statsapi.mlb.com/api/v1/schedule/?sportId=1&date=07/17/2018
   *
   *
   * @param startDate Insert date to return schedule information for all games or events in a particular date range. Format:
   * MM/DD/YYYY
   *
   * **startDate must be coupled with endDate**
   *
   * 1. Insert date range: https://statsapi.mlb.com/api/v1/schedule/?sportId=1&gameTypes=D,W&season=2017&startDate=10/01/2017&endDate=10/31/2017
   *
   * @param endDate Insert date to return schedule information for all games or events in a particular date range. Format:
   * MM/DD/YYYY
   *
   * **endDate must be coupled with startDate**
   *
   * 1. Insert date range: https://statsapi.mlb.com/api/v1/schedule/?sportId=1&gameTypes=D,W&season=2017&startDate=10/01/2017&endDate=10/31/2017
   *
   * @param opponentId Insert opponentId to return schedule information for all games between two opponents
   *
   * **Works best with date range and teamId**
   *
   *
   * 1. Insert opponentId: https://statsapi.mlb.com/api/v1/schedule/?sportId=1&teamId=147&opponentId=133&startDate=04/04/2018&endDate=09/27/2018&hydrate=linescore
   *
   * @param useLatestGames Insert useLatestGames to return the most recent schedule information for postponed or suspended games. Best used to filter out duplicate entries for postponded or suspended games that were finished.
   *
   *
   * 1. Insert useLastestGames: https://statsapi.mlb.com/api/v1/schedule?sportId=1&season=2021&useLatestGames=true&gameType=R
   *
   * @param fields Comma delimited list of specific fields to be returned. Format:
   * topLevelNode, childNode, attribute
   *
   * Example: https://statsapi.mlb.com/api/v1/schedule?sportId=1&fields=dates,date,games,link
   *
   * @returns ScheduleRestObject OK
   * @throws ApiError
   */
	public static schedule(
		sportId?: number,
		gamePks?: Array<number>,
		options?: {
      scheduleType?: string;
      timecode?: string;
      eventTypes?: string;
      scheduleEventTypes?: string;
      hydrate?: string;
      teamId?: number;
      leagueId?: number;
      venueIds?: number;
      gameTypes?: Array<string>;
      date?: string;
      startDate?: string;
      endDate?: string;
      opponentId?: number;
      useLatestGames?: boolean;
      fields?: Array<string>;
    }
	): CancelablePromise<ScheduleRestObject> {
		return __request(OpenAPI, {
			method: "GET",
			url: "/api/v1/schedule/",
			query: {
				scheduleType: options?.scheduleType,
				timecode: options?.timecode,
				eventTypes: options?.eventTypes,
				scheduleEventTypes: options?.scheduleEventTypes,
				hydrate: options?.hydrate,
				teamId: options?.teamId,
				leagueId: options?.leagueId,
				sportId: sportId,
				gamePks: gamePks?.toString(),
				venueIds: options?.venueIds,
				gameTypes: options?.gameTypes,
				date: options?.date,
				startDate: options?.startDate,
				endDate: options?.endDate,
				opponentId: options?.opponentId,
				useLatestGames: options?.useLatestGames,
				fields: options?.fields,
			},
			errors: {
				401: `Unauthorized`,
				403: `Forbidden`,
				404: `Not Found`,
			},
		});
	}

	/**
   * View schedule for non-game events with tracking.
   * **Description:**
   * This endpoint returns a schedule for all non-game events with Statcast data. Private events are only visible to users from the host Club, while public events will be visible to all Clubs. Any baseball activity that does not have MLB’s play-by-play Stringer (GUMBO feed) goes into the MLB database as an “event”, including mound sessions, simulated games, and workouts. Pre-game batting practice will not appear as a separate event in the schedule endpoint but is included with the gamePk associated with the scheduled game. Default sportId value is 1.
   *
   * **Return Includes:** event data.
   *
   * **Required Parameters:**  gamePks, date, or startDate/endDate are required to run this call.
   *
   * ---
   * **Example of call with required parameters**
   * 1. https://statsapi.mlb.com/api/v1/schedule/trackingEvents?gamePks=629699
   * 2. https://statsapi.mlb.com/api/v1/schedule/trackingEvents?date=09/22/2019
   * 3. https://statsapi.mlb.com/api/v1/schedule/trackingEvents?startDate=09/01/2019&endDate=09/30/2019
   *
   * @param gamePks
   * Insert gamePks to return all schedules for non-game events with tracking.
   * 1. Insert gamePk: https://statsapi.mlb.com/api/v1/schedule/trackingEvents?gamePks=629699
   * 2. Insert multiple gamePks: https://statsapi.mlb.com/api/v1/schedule/trackingEvents?gamePks=629699,629701
   *
   * @param date Insert date to return schedule information for non-game events with tracking. Format:MM/DD/YYYY
   * 1. Insert date: https://statsapi.mlb.com/api/v1/schedule/trackingEvents?date=09/22/2019
   *
   *
   * @param startDate Insert date to return schedule information for non-game events with tracking in a particular date range. Format:MM/DD/YYYY
   *
   * **startDate must be coupled with endDate**
   *
   * 1. Insert date range: https://statsapi.mlb.com/api/v1/schedule/trackingEvents?startDate=09/01/2019&endDate=09/30/2019
   *
   * @param endDate Insert date to return schedule information for non-game events with tracking in a particular date range. Format:MM/DD/YYYY
   *
   * **endDate must be coupled with startDate**
   *
   * 1. Insert date range: https://statsapi.mlb.com/api/v1/schedule/trackingEvents?startDate=09/01/2019&endDate=09/30/2019
   *
   * @param teamId
   * Insert teamId to return all schedules for non-game events with tracking for a specific team.
   * 1. Insert teamId: https://statsapi.mlb.com/api/v1/schedule/trackingEvents?teamId=114&date=09/22/2019
   *
   * For a list of all teamIds:  https://statsapi.mlb.com/api/v1/teams
   *
   * @param sportId Insert sportId(s) to return all schedules for non-game events with tracking for a particular sport.
   * 1. One sportId:  https://statsapi.mlb.com/api/v1/schedule/trackingEvents?date=2/25/2021&sportId=586
   * 2. Multiple sportIds: https://statsapi.mlb.com/api/v1/schedule/trackingEvents?date=2/25/2021&sportId=586,1
   *
   * For  a list of all sportIds:  https://statsapi.mlb.com/api/v1/sports
   *
   * @param hydrate Insert event(status) to the hydrate parameter to return the status for each event.
   * 1. event(status): https://statsapi.mlb.com/api/v1/schedule/trackingEvents?date=08/13/2021&sportId=22&hydrate=event(status)
   *
   * @param fields Comma delimited list of specific fields to be returned. Format:
   * topLevelNode, childNode, attribute
   *
   * Example: https://statsapi.mlb.com/api/v1/schedule/trackingEvents?&date=09/22/2019&fields=dates,events,id,name
   *
   * @returns ScheduleRestObject OK
   * @throws ApiError
   */
	public static scheduleTrackingEvents(
		gamePks: Array<number>,
		date: string,
		startDate: string,
		endDate: string,
		options?: {
      teamId?: number;
      sportId?: string;
      hydrate?: string;
      fields?: Array<string>;
    }
	): CancelablePromise<ScheduleRestObject> {
		return __request(OpenAPI, {
			method: "GET",
			url: "/api/v1/schedule/trackingEvents",
			query: {
				gamePks: gamePks.toString(),
				date: date,
				startDate: startDate,
				endDate: endDate,
				teamId: options?.teamId,
				sportId: options?.sportId,
				hydrate: options?.hydrate,
				fields: options?.fields,
			},
			errors: {
				401: `Unauthorized`,
				403: `Forbidden`,
				404: `Not Found`,
			},
		});
	}

	/**
   * View tied game schedule info.
   * **Description:**
   * This endpoint returns tied game schedules for a given  year.
   *
   * **Return Includes:** Team information, date of play and game status.
   *
   * **Required Parameters:** season is required to run this call.
   *
   * **Hydrations:** This endpoint can accept the hydrations query parameter.
   *
   *
   * ---
   * **Example of call with required parameters**
   *
   * https://statsapi.mlb.com/api/v1/schedule/games/tied?season=2016
   *
   * ---
   * **Example of call with hydration parameters**
   *
   * https://statsapi.mlb.com/api/v1/schedule/games/tied?season=2016&hydrate=linescore
   *
   * @param season Insert year to return schedule information for tied games in a season.
   * 1. Insert year: https://statsapi.mlb.com/api/v1/schedule/games/tied?season=2016
   *
   * @param gameTypes Insert gameType to return schedule information for all tied games in a particular gameType.
   * 1. Insert gameType: https://statsapi.mlb.com/api/v1/schedule/games/tied?gameTypes=R&season=2016
   *
   * For a list of all gameTypes: https://statsapi.mlb.com/api/v1/gameTypes
   *
   * @param hydrate Insert Hydration(s) to return data for any available schedule hydration. The hydrations for schedule contain "venue" and "team" which have subhydrations Format "team(subHydration1, subHydrations2)" "
   * 1. One Hydration: https://statsapi.mlb.com/api/v1/schedule/games/tied?season=2016&hydrate=linescore
   * 2. Multiple Hydrations: https://statsapi.mlb.com/api/v1/schedule/games/tied?season=2016&hydrate=linescore,officials
   * 3. Team Sub Hydration: https://statsapi.mlb.com/api/v1/schedule/games/tied?season=2016&hydrate=linescore,team(social)
   * 4. Venue Sub Hydration: https://statsapi.mlb.com/api/v1/schedule/games/tied?season=2016&hydrate=linescore,team(social),venue(location)
   * 5. Check For Available Hydrations: https://statsapi.mlb.com/api/v1/schedule/games/tied?season=2016&hydrate=hydrations
   *
   * - Available Hydrations:
   * 1.  tickets
   * 2.  game(content)
   * 3.  game(content(all))
   * 4.  game(content(media(all)))
   * 5.  game(content(editorial(all)))
   * 6.  game(content(highlights(all)))
   * 7.  game(content(editorial(preview)))
   * 8.  game(content(editorial(recap)))
   * 9.  game(content(editorial(articles)))
   * 10.  game(content(editorial(wrap)))
   * 11.  game(content(media(epg)))
   * 12.  game(content(media(milestones)))
   * 13.  game(content(highlights(scoreboard)))
   * 14.  game(content(highlights(scoreboardPreview)))
   * 15.  game(content(highlights(highlights)))
   * 16.  game(content(highlights(gamecenter)))
   * 17.  game(content(highlights(milestone)))
   * 18.  game(content(highlights(live)))
   * 19.  game(content(media(featured)))
   * 20.  game(content(summary))
   * 21.  game(content(gamenotes))
   * 22.  game(tickets)
   * 23.  game(atBatTickets)
   * 24.  game(promotions)
   * 25.  game(atBatPromotions)
   * 26.  game(sponsorships)
   * 27.  lineup
   * 28.  linescore
   * 29.  linescore(matchup)
   * 30.  linescore(runners)
   * 31.  linescore(defense)
   * 32.  decisions
   * 33.  scoringplays
   * 34.  broadcasts
   * 35.  broadcasts(all)
   * 36.  radioBroadcasts
   * 37.  metadata
   * 38.  game(seriesSummary)
   * 39.  seriesStatus
   * 40.  event(performers)
   * 41.  event(promotions)
   * 42.  event(timezone)
   * 43.  event(tickets)
   * 44.  event(venue)
   * 45.  event(designations)
   * 46.  event(game)
   * 47.  event(status)
   * 48.  weather
   * 49.  officials
   * 50.  probablePitcher
   * 51.  flags
   * 51.  story
   *
   * 52. venue
   * - Hydrations Available Through Venue
   * 1. relatedVenues
   * 2. parentVenues
   * 3. residentVenues
   * 4. relatedVenues(venue)
   * 5. parentVenues(venue)
   * 6. residentVenues(venue)
   * 7. location
   * 8. social
   * 9. relatedApplications
   * 10. timezone
   * 11. menu
   * 12. metadata
   * 13. performers
   * 14. images
   * 15. schedule
   * 16. nextSchedule
   * 17. previousSchedule(inclusive=true)
   * 18. ticketManagement
   * 19. xrefId
   *
   * 53. team
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
   * Example: https://statsapi.mlb.com/api/v1/schedule/games/tied?gameTypes=R&season=2016&fields=dates,date
   *
   * @returns ScheduleRestObject OK
   * @throws ApiError
   */
	public static tieGames(
		season: string,
		options?: {
      gameTypes?: Array<string>;
      hydrate?: string;
      fields?: Array<string>;
    }
	): CancelablePromise<ScheduleRestObject> {
		return __request(OpenAPI, {
			method: "GET",
			url: "/api/v1/schedule/games/tied",
			query: {
				gameTypes: options?.gameTypes?.toString(),
				season: season,
				hydrate: options?.hydrate,
				fields: options?.fields,
			},
			errors: {
				401: `Unauthorized`,
				403: `Forbidden`,
				404: `Not Found`,
			},
		});
	}

	/**
   * View postseason schedule info.
   * **Description:**
   * This endpoint returns postseason schedules for a given year.
   *
   * **Return Includes:** Team information, date of play and game status.
   *
   * **Required Parameters:** There are no required parameters to run this call. Blank call (https://statsapi.mlb.com/api/v1/schedule/postseason) will return current year's postseason schedule
   *
   * **Hydrations:** This endpoint can accept the hydrations query parameter.
   *
   *
   * ---
   * **Example of call with hydration parameters**
   *
   * https://statsapi.mlb.com/api/v1/schedule/postseason?hydrate=hydrations,linescore&season=2017
   *
   * @param gameTypes Insert gameType to return schedule information for all tied games in a particular gameType.
   * 1. Insert gameType: https://statsapi.mlb.com/api/v1/schedule/postseason?gameTypes=W&season=2017
   *
   * For a list of all gameTypes: https://statsapi.mlb.com/api/v1/gameTypes
   *
   * @param seriesNumber Insert seriesNumber to return schedule information for all postseason games in a round's particular series.
   * 1. Insert seriesNumber: https://statsapi.mlb.com/api/v1/schedule/postseason?seriesNumber=4&season=2017
   *
   * **Each round of the postseason has seriesNumber. Ie. seriesNumber 4 will show all games from the Cubs & Nationals NLDS becuase it was the 4th match up of teams in the Division Series**
   *
   * @param teamId Insert teamId to return schedule information for all postseason games for a particular club.
   * 1. Insert teamId: https://statsapi.mlb.com/api/v1/schedule/postseason?season=2017&teamId=112
   *
   * For a list of all teamIds:  ttps://statsapi.mlb.com/api/v1/teams
   *
   * @param sportId Insert a sportId to return schedule information for all postseason games for a particular sport.
   * 1. Insert sportId:  https://statsapi.mlb.com/api/v1/schedule/postseason?sportId=1
   *
   * For  a list of all sportIds:  https://statsapi.mlb.com/api/v1/sports
   *
   * @param season Insert year to return schedule information for postseason games for a given year.
   * 1. Insert year: https://statsapi.mlb.com/api/v1/schedule/postseason?season=2017
   *
   * @param hydrate Insert Hydration(s) to return data for any available schedule hydration. The hydrations for schedule contain "venue" and "team" which have subhydrations Format "team(subHydration1, subHydrations2)" "
   * 1. One Hydration: https://statsapi.mlb.com/api/v1/schedule/postseason?season=2016&hydrate=linescore
   * 2. Multiple Hydrations: https://statsapi.mlb.com/api/v1/schedule/postseason?season=2016&hydrate=linescore,officials
   * 3. Team Sub Hydration: https://statsapi.mlb.com/api/v1/schedule/postseason?season=2016&hydrate=linescore,team(social)
   * 4. Venue Sub Hydration: https://statsapi.mlb.com/api/v1/schedule/postseason?season=2016&hydrate=linescore,team(social),venue(location)
   * 5. Check For Available Hydrations: https://statsapi.mlb.com/api/v1/schedule/postseason?season=2016&hydrate=hydrations
   *
   * - Available Hydrations:
   * 1.  tickets
   * 2.  game(content)
   * 3.  game(content(all))
   * 4.  game(content(media(all)))
   * 5.  game(content(editorial(all)))
   * 6.  game(content(highlights(all)))
   * 7.  game(content(editorial(preview)))
   * 8.  game(content(editorial(recap)))
   * 9.  game(content(editorial(articles)))
   * 10.  game(content(editorial(wrap)))
   * 11.  game(content(media(epg)))
   * 12.  game(content(media(milestones)))
   * 13.  game(content(highlights(scoreboard)))
   * 14.  game(content(highlights(scoreboardPreview)))
   * 15.  game(content(highlights(highlights)))
   * 16.  game(content(highlights(gamecenter)))
   * 17.  game(content(highlights(milestone)))
   * 18.  game(content(highlights(live)))
   * 19.  game(content(media(featured)))
   * 20.  game(content(summary))
   * 21.  game(content(gamenotes))
   * 22.  game(tickets)
   * 23.  game(atBatTickets)
   * 24.  game(promotions)
   * 25.  game(atBatPromotions)
   * 26.  game(sponsorships)
   * 27.  lineup
   * 28.  linescore
   * 29.  linescore(matchup)
   * 30.  linescore(runners)
   * 31.  linescore(defense)
   * 32.  decisions
   * 33.  scoringplays
   * 34.  broadcasts
   * 35.  broadcasts(all)
   * 36.  radioBroadcasts
   * 37.  metadata
   * 38.  game(seriesSummary)
   * 39.  seriesStatus
   * 40.  event(performers)
   * 41.  event(promotions)
   * 42.  event(timezone)
   * 43.  event(tickets)
   * 44.  event(venue)
   * 45.  event(designations)
   * 46.  event(game)
   * 47.  event(status)
   * 48.  weather
   * 49.  officials
   * 50.  probablePitcher
   * 51.  flags
   * 52.  story
   *
   * 52. venue
   * - Hydrations Available Through Venue
   * 1. relatedVenues
   * 2. parentVenues
   * 3. residentVenues
   * 4. relatedVenues(venue)
   * 5. parentVenues(venue)
   * 6. residentVenues(venue)
   * 7. location
   * 8. social
   * 9. relatedApplications
   * 10. timezone
   * 11. menu
   * 12. metadata
   * 13. performers
   * 14. images
   * 15. schedule
   * 16. nextSchedule
   * 17. previousSchedule(inclusive=true)
   * 18. ticketManagement
   * 19. xrefId
   *
   * 53. team
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
   * Example: https://statsapi.mlb.com/api/v1/schedule/postseason?fields=dates,date,games,gamePk
   *
   * @returns ScheduleRestObject OK
   * @throws ApiError
   */
	public static postseasonSchedule(options?: {
    gameTypes?: Array<string>;
    seriesNumber?: number;
    teamId?: number;
    sportId?: string;
    season?: string;
    hydrate?: string;
    fields?: Array<string>;
  }): CancelablePromise<ScheduleRestObject> {
		return __request(OpenAPI, {
			method: "GET",
			url: "/api/v1/schedule/postseason",
			query: {
				gameTypes: options?.gameTypes?.toString(),
				seriesNumber: options?.seriesNumber,
				teamId: options?.teamId,
				sportId: options?.sportId,
				season: options?.season,
				hydrate: options?.hydrate,
				fields: options?.fields,
			},
			errors: {
				401: `Unauthorized`,
				403: `Forbidden`,
				404: `Not Found`,
			},
		});
	}

	/**
   * View schedule info for postseason based on series.
   * **Description:**
   * This endpoint returns postseason schedules for a given year broken down by series.
   *
   * **Return Includes:** Team information, date of play and game status.
   *
   * **Required Parameters:** There are no required parameters to run this call. Blank call (https://statsapi.mlb.com/api/v1/schedule/postseason/series) will return current year's postseason schedule broken down by series.
   *
   * @param gameTypes Insert gameType to return schedule information for all tied games in a particular gameType.
   * 1. Insert gameType: https://statsapi.mlb.com/api/v1/schedule/games/tied?gameTypes=R&season=2016
   *
   * For a list of all gameTypes: https://statsapi.mlb.com/api/v1/gameTypes
   *
   * @param seriesNumber Insert seriesNumber to return schedule information for all postseason games in a round's particular series.
   * 1. Insert seriesNumber: https://statsapi.mlb.com/api/v1/schedule/postseason/series?seriesNumber=4&season=2017
   *
   * **Each round of the postseason has seriesNumber. Ie. seriesNumber 4 will show all games from the Cubs & Nationals NLDS becuase it was the 4th match up of teams in the Division Series**
   *
   * @param teamId Insert teamId to return schedule information for all postseason games for a particular club.
   * 1. Insert teamId: https://statsapi.mlb.com/api/v1/schedule/postseason/series?season=2017&teamId=112
   *
   * For a list of all teamIds:  ttps://statsapi.mlb.com/api/v1/teams?
   *
   * @param sportId Insert a sportId to return schedule information for all postseason games for a particular sport.
   * 1. Insert sportId:  https://statsapi.mlb.com/api/v1/schedule/postseason/series?sportId=1
   *
   * For  a list of all sportIds:  https://statsapi.mlb.com/api/v1/sports
   *
   * @param season Insert year to return schedule information for postseason games for a given year broken down by series.
   * 1. Insert year: https://statsapi.mlb.com/api/v1/schedule/postseason/series?season=2017
   *
   * @param fields Comma delimited list of specific fields to be returned. Format:
   * topLevelNode, childNode, attribute
   *
   * Example: https://statsapi.mlb.com/api/v1/schedule/postseason/series?season=2018&fields=series,series,id
   *
   * @returns PostseasonScheduleRestObject OK
   * @throws ApiError
   */
	public static postseasonScheduleSeries(options?: {
    gameTypes?: Array<string>;
    seriesNumber?: number;
    teamId?: number;
    sportId?: string;
    season?: string;
    fields?: Array<string>;
  }): CancelablePromise<PostseasonScheduleRestObject> {
		return __request(OpenAPI, {
			method: "GET",
			url: "/api/v1/schedule/postseason/series",
			query: {
				gameTypes: options?.gameTypes,
				seriesNumber: options?.seriesNumber,
				teamId: options?.teamId,
				sportId: options?.sportId,
				season: options?.season,
				fields: options?.fields,
			},
			errors: {
				401: `Unauthorized`,
				403: `Forbidden`,
				404: `Not Found`,
			},
		});
	}

	/**
   * View schedule info for the tuneIn application.
   * **Description:**
   * This endpoint returns postseason schedules for the tuneIn application.
   *
   * **Return Includes:** Total Number of games and games in progress.
   *
   * **Required Parameters:** There are no required parameters to run this call. Blank call (https://statsapi.mlb.com/api/v1/schedule/postseason/tuneIn) will return current year's postseason tuneIn schedule
   *
   * **Hydrations:** This endpoint can accept the hydrations query parameter.
   *
   *
   * ---
   * **Example of call with hydration parameters**
   *
   * https://statsapi.mlb.com/api/v1/schedule/postseason?hydrate=hydrations,linescore&season=2017
   *
   * @param teamId Insert teamId to return schedule information for all postseason games for a particular club.
   * 1. Insert teamId: https://statsapi.mlb.com/api/v1/schedule/postseason/tuneIn?season=2017&teamId=112
   *
   * For a list of all teamIds:  ttps://statsapi.mlb.com/api/v1/teams
   *
   * @param sportId Insert a sportId to return schedule information for all postseason games for a particular sport.
   * 1. Insert sportId:  https://statsapi.mlb.com/api/v1/schedule/postseason/tuneIn?sportId=1
   *
   * For  a list of all sportIds:  https://statsapi.mlb.com/api/v1/sports
   *
   * @param season Insert year to return schedule information for postseason games for a given year broken down by series.
   * 1. Insert year: https://statsapi.mlb.com/api/v1/schedule/postseason/tuneIn?season=2017
   *
   * @param hydrate Insert Hydration(s) to return data for any available schedule hydration. The hydrations for schedule contain "venue" and "team" which have subhydrations Format "team(subHydration1, subHydrations2)" "
   * 1. One Hydration: https://statsapi.mlb.com/api/v1/schedule/postseason/tuneIn?season=2016&hydrate=linescore
   * 2. Multiple Hydrations: https://statsapi.mlb.com/api/v1/schedule/postseason/tuneIn?season=2016&hydrate=linescore,officials
   * 3. Team Sub Hydration: https://statsapi.mlb.com/api/v1/schedule/postseason/tuneIn?season=2016&hydrate=linescore,team(social)
   * 4. Venue Sub Hydration: https://statsapi.mlb.com/api/v1/schedule/postseason/tuneIn?season=2016&hydrate=linescore,team(social),venue(location)
   * 5. Check For Available Hydrations: https://statsapi.mlb.com/api/v1/schedule/postseason/tuneIn?season=2016&hydrate=hydrations
   *
   * - Available Hydrations:
   * 1.  tickets
   * 2.  game(content)
   * 3.  game(content(all))
   * 4.  game(content(media(all)))
   * 5.  game(content(editorial(all)))
   * 6.  game(content(highlights(all)))
   * 7.  game(content(editorial(preview)))
   * 8.  game(content(editorial(recap)))
   * 9.  game(content(editorial(articles)))
   * 10.  game(content(editorial(wrap)))
   * 11.  game(content(media(epg)))
   * 12.  game(content(media(milestones)))
   * 13.  game(content(highlights(scoreboard)))
   * 14.  game(content(highlights(scoreboardPreview)))
   * 15.  game(content(highlights(highlights)))
   * 16.  game(content(highlights(gamecenter)))
   * 17.  game(content(highlights(milestone)))
   * 18.  game(content(highlights(live)))
   * 19.  game(content(media(featured)))
   * 20.  game(content(summary))
   * 21.  game(content(gamenotes))
   * 22.  game(tickets)
   * 23.  game(atBatTickets)
   * 24.  game(promotions)
   * 25.  game(atBatPromotions)
   * 26.  game(sponsorships)
   * 27.  lineup
   * 28.  linescore
   * 29.  linescore(matchup)
   * 30.  linescore(runners)
   * 31.  linescore(defense)
   * 32.  decisions
   * 33.  scoringplays
   * 34.  broadcasts
   * 35.  broadcasts(all)
   * 36.  radioBroadcasts
   * 37.  metadata
   * 38.  game(seriesSummary)
   * 39.  seriesStatus
   * 40.  event(performers)
   * 41.  event(promotions)
   * 42.  event(timezone)
   * 43.  event(tickets)
   * 44.  event(venue)
   * 45.  event(designations)
   * 46.  event(game)
   * 47.  event(status)
   * 48.  weather
   * 49.  officials
   * 50.  probablePitcher
   * 51.  flags
   * 52.  story
   *
   * 52. venue
   * - Hydrations Available Through Venue
   * 1. relatedVenues
   * 2. parentVenues
   * 3. residentVenues
   * 4. relatedVenues(venue)
   * 5. parentVenues(venue)
   * 6. residentVenues(venue)
   * 7. location
   * 8. social
   * 9. relatedApplications
   * 10. timezone
   * 11. menu
   * 12. metadata
   * 13. performers
   * 14. images
   * 15. schedule
   * 16. nextSchedule
   * 17. previousSchedule(inclusive=true)
   * 18. ticketManagement
   * 19. xrefId
   *
   * 53. team
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
   *
   * @param fields Comma delimited list of specific fields to be returned. Format:
   * topLevelNode, childNode, attribute
   *
   * Exmaple:
   *
   * @returns ScheduleRestObject OK
   * @throws ApiError
   */
	public static tuneIn(options?: {
    teamId?: number;
    sportId?: string;
    season?: string;
    hydrate?: string;
    fields?: Array<string>;
  }): CancelablePromise<ScheduleRestObject> {
		return __request(OpenAPI, {
			method: "GET",
			url: "/api/v1/schedule/postseason/tuneIn",
			query: {
				teamId: options?.teamId,
				sportId: options?.sportId,
				season: options?.season,
				hydrate: options?.hydrate,
				fields: options?.fields,
			},
			errors: {
				401: `Unauthorized`,
				403: `Forbidden`,
				404: `Not Found`,
			},
		});
	}
}
