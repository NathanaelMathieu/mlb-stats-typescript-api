import type { BoxscoreRestObject } from "../models/BoxscoreRestObject";
import type { GameContextRestObject } from "../models/GameContextRestObject";
import type { GameRestObject } from "../models/GameRestObject";
import type { Linescore } from "../models/Linescore";
import type { PlayByPlayRestObject } from "../models/PlayByPlayRestObject";
import type { PlayRestObject } from "../models/PlayRestObject";
import type { ResponseEntity } from "../models/ResponseEntity";

import type { CancelablePromise } from "../core/CancelablePromise";
import { OpenAPI } from "../core/OpenAPI";
import { request as __request } from "../core/request";

export class GameService {
	/**
   * View live game status. AKA GUMBO.
   * **Description:**
   * This endpoint returns the Gumbo Live Feed for a specific gamePk.
   *
   * **Return Includes:** Team information, live play by play data, and player information.
   *
   * **Required Parameters:** gamePk is required to run this call.
   *
   * **Hydrations:** This endpoint can accept the hydrations query parameter.
   *
   * <br></br>
   *
   * ---
   * **Example of call with required parameters:**
   *
   * https://statsapi.mlb.com/api/v1.1/game/534196/feed/live
   *
   * ---
   * **Example of call with all parameters:**
   *
   * https://statsapi.mlb.com/api/v1.1/game/534196/feed/live?timecode=20180323_014415&hydrate=alignment
   *
   * @param gamePk Insert gamePk to return the GUMBO live feed for a specific game.
   *
   * 1. Insert gamePk: https://statsapi.mlb.com/api/v1.1/game/534196/feed/live
   *
   * @param timecode Use this parameter to return a snapshot of the data at the specified time. Format: YYYYMMDD_HHMMSS.
   *
   * **Return timecodes from timecodes endpoint https://statsapi.mlb.com/api/v1.1/game/534196/feed/live/timestamps.**
   *
   *
   * 1. Insert timecode: https://statsapi.mlb.com/api/v1.1/game/534196/feed/live?timecode=20180323_014415
   *
   * @param hydrate Insert hydration(s) to return putout credits or defensive positioning data for all plays in a particular game. Format 'credits,alignment,flags'
   *
   * -Notes on "credits,alignment & flags" hydration
   *
   * Credits - This hydration will populate a credits array that will list the batter and pitcher of record where any event takes place. Main purpose of this hydration is to track mid ab pitching/batting substitutions.
   *
   * Alignment - This hydration will populate a defense object that lists each position for every play event in the liveData->plays->allPlays array and an offense object that contains batter and runner info if a base is occupied.
   *
   * Flags - This hydration will populate a flags array in the liveData->plays->allPlays  object when additional descriptive identifiers are needed.
   *
   * Officials - This hydration will populate an officials array with the alignment of officials for each play
   *
   * preState - This hydration will populate a preCount object for each playEvent (balls, strikes, outs)
   *
   * 1. One Hydration: https://statsapi.mlb.com/api/v1.1/game/530824/feed/live?hydrate=credits
   * 2. Multiple Hydrations: https://statsapi.mlb.com/api/v1.1/game/530824/feed/live?hydrate=credits,alignment,preState
   *
   * - Available Hydrations:
   * 1. credits
   * 2. alignment
   * 3. flags
   * 4. officials
   * 5. preState
   *
   * @param fields Comma delimited list of specific fields to be returned. Format:
   * topLevelNode, childNode, attribute
   *
   * Example: https://statsapi.mlb.com/api/v1.1/game/534196/feed/live?fields=metaData,gameEvents,logicalEvents,gameData,game,pk,type,id
   *
   * @returns GameRestObject OK
   * @throws ApiError
   */
	public static liveGameV1(
		gamePk: string,
		options?: {
      timecode?: string;
      hydrate?: any;
      fields?: Array<string>;
    }
	): CancelablePromise<GameRestObject> {
		return __request(OpenAPI, {
			method: "GET",
			url: "/v1.1/game/{gamePk}/feed/live",
			path: {
				gamePk: gamePk,
			},
			query: {
				timecode: options?.timecode,
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
   * View differences between two timecodes in live game.
   * **Description:**
   * This endpoint returns the difference/discrepancies between two timecodes in the Gumbo Live Feed using the Diff Patch System.
   *
   * **Return Includes:** Play by play data and player information.
   * <br/><br/><b>Diff/Patch
   * System:</b> startTimecode and endTimecode can be used for getting
   * diffs.<br/>Expected usage:  <br/> 1) Request full payload by not passing
   * startTimecode or endTimecode.  This will return the most recent game
   * state.<br/> 2) Find the latest timecode in this response.  <br/> 3) Wait
   * X seconds<br/> 4) Use the timecode from step 2 above as the startTimecode.  This
   * will give you a diff of everything that has happened since
   * startTimecode.  <br/> 5) If no data is returned, wait X seconds and do
   * the same request.  <br/> 6) If data is returned, get a new timeStamp
   * from the response, and use that for the next call as startTimecode.
   * <br></br>
   * **Required Parameters:** all parameters are required to run this call. If incorrectly called the call will default to https://statsapi.mlb.com/api/v1.1/game/531304/feed/live
   * <br></br>
   *
   * ---
   * **Example of call with required parameters:**
   *
   * https://statsapi.mlb.com/api/v1.1/game/531321/feed/live/diffPatch?startTimecode=20180823_193704&endTimecode=20180823_193711
   *
   * @param gamePk Insert gamePk
   * 1. Insert gamePk: https://statsapi.mlb.com/api/v1.1/game/531321/feed/live/diffPatch
   *
   * @param startTimecode Insert startTimecode. Format:
   * MMDDYYYY_HHMMSS
   * 1. Insert startTimecode: https://statsapi.mlb.com/api/v1.1/game/531321/feed/live/diffPatch?startTimecode=20180823_193704&endTimecode=20180823_193711
   *
   * @param endTimecode Insert endTimecode to complete this call
   * Format: MMDDYYYY_HHMMSS
   * 1. Insert endTimecode: https://statsapi.mlb.com/api/v1.1/game/531321/feed/live/diffPatch?startTimecode=20180823_193704&endTimecode=20180823_193711
   *
   * @returns ResponseEntity OK
   * @throws ApiError
   */
	public static liveGameDiffPatchV1(
		gamePk: number,
		startTimecode: string,
		endTimecode: string
	): CancelablePromise<ResponseEntity> {
		return __request(OpenAPI, {
			method: "GET",
			url: "/v1.1/game/{gamePk}/feed/live/diffPatch",
			path: {
				gamePk: gamePk,
			},
			query: {
				startTimecode: startTimecode,
				endTimecode: endTimecode,
			},
			errors: {
				401: `Unauthorized`,
				403: `Forbidden`,
				404: `Not Found`,
			},
		});
	}

	/**
   * Retrieve all of the play timecodes for a game in GUMBO feed.
   *
   * **Description:**
   * This endpoint returns timecodes for a specific gamePk.
   *
   * **Return Includes:** timecodes.
   *
   * **Required Parameters:** gamePk is required to run this call.
   *
   * ---
   * **Example of call with required parameters:**
   *
   * https://statsapi.mlb.com/api/v1.1/game/531060/feed/live/timestamps
   *
   * @param gamePk Insert gamePk to return timecodes for a specific game.
   * 1. Insert gamePk: https://statsapi.mlb.com/api/v1.1/game/531060/feed/live/timestamps
   *
   * @returns string OK
   * @throws ApiError
   */
	public static liveTimestampv11(gamePk: string): CancelablePromise<string> {
		return __request(OpenAPI, {
			method: "GET",
			url: "/v1.1/game/{gamePk}/feed/live/timestamps",
			path: {
				gamePk: gamePk,
			},
			errors: {
				401: `Unauthorized`,
				403: `Forbidden`,
				404: `Not Found`,
			},
		});
	}

	/**
   * View corrected non Statcast information for games
   *
   * **Description:**
   * This endpoint returns a directory of games with non Statcast data corrections. These changes include, scoring/pitching decisions,etc...
   *
   * **Return Includes:** biographical information.
   *
   * **Required Parameters:** updatedSince.
   *
   * ---
   * **Example of call with required parameters**
   *
   * https://statsapi.mlb.com/api/v1/game/changes?sportId=1&updatedSince=2020-03-17T15:34:43
   *
   * @param updatedSince Insert updatedSince to return a directory of games with non Statcast data corrections changes made since the provided timestamp.
   *
   * 1. Insert timecode: https://statsapi.mlb.com/api/v1/game/changes?sportId=1&updatedSince=2020-03-17T15:34:43
   *
   * @param gamePks Insert gamePk(s) to return a directory of games with non Statcast data corrections changes.
   *
   * 1. Insert gamePk: https://statsapi.mlb.com/api/v1/game/changes?gamePks=633879
   * 2. Insert gamePks: https://statsapi.mlb.com/api/v1/game/changes?gamePks=633879,633727
   *
   * @param gameTypes Insert gameType(s) to return a directory of games with non Statcast data corrections for a specific sport.
   * 1. Insert one gameType:   https://statsapi.mlb.com/api/v1/game/changes?sportId=1&updatedSince=2020-03-17T15:34:43&gameTypes=S
   * 2. Insert multiple gameTypes:   https://statsapi.mlb.com/api/v1/game/changes?sportId=1&updatedSince=2020-03-17T15:34:43&gameTypes=S,R
   *
   * For  a list of all gameTypes:  https://statsapi.mlb.com/api/v1/gameTypes
   *
   * @param sportId Insert a sportId to return a directory of games with non Statcast data corrections for a specific sport.
   * 1. Insert one sportIds:   https://statsapi.mlb.com/api/v1/game/changes?sportIds=1&updatedSince=2020-03-17T15:34:43
   * 2. Insert multiple sportIds:   https://statsapi.mlb.com/api/v1/game/changes?sportIds=1,16&updatedSince=2020-03-17T15:34:43
   *
   * For  a list of all sportIds:  https://statsapi.mlb.com/api/v1/sports
   *
   * @param fields Comma delimited list of specific fields to be returned. Format: topLevelNode, childNode, attribute
   *
   * Example: https://statsapi.mlb.com/api/v1/game/changes?sportId=1&updatedSince=2020-03-17T15:34:43&fields=dates,games,gamePk
   *
   * @param limit Insert limit to limit the return of games.
   *
   * 1. Insert limit: https://statsapi.mlb.com/api/v1/game/changes?updatedSince=2020-03-17T15:34:43&limit=10
   *
   * @param offset Insert an offset to return i+1 as the first record.
   *
   * 1. Insert offset:  https://statsapi.mlb.com/api/v1/game/changes?updatedSince=2020-03-17T15:34:43&offset=5
   *
   * @returns PlayByPlayRestObject OK
   * @throws ApiError
   */
	public static traditionalChanges(options?: {
    updatedSince?: string;
    gamePks?: string;
    gameTypes?: number;
    sportId?: number;
    fields?: Array<string>;
    limit?: string;
    offset?: string;
  }): CancelablePromise<PlayByPlayRestObject> {
		return __request(OpenAPI, {
			method: "GET",
			url: "/api/v1/game/changes",
			query: {
				updatedSince: options?.updatedSince,
				gamePks: options?.gamePks?.toString(),
				gameTypes: options?.gameTypes,
				sportId: options?.sportId,
				fields: options?.fields,
				limit: options?.limit,
				offset: options?.offset,
			},
			errors: {
				401: `Unauthorized`,
				403: `Forbidden`,
				404: `Not Found`,
			},
		});
	}

	/**
   * View timestamps of most recent data corrections made to games.
   * **Description:**
   * This endpoint returns timestamps reflecting the most recent data corrections made to games. This return is limited to 1000 objects.
   *
   * **Return Includes:** timestamps.
   *
   * **Required Parameters:** No parameters are required to run this call.
   *
   * ---
   * **Example of call with required parameters**
   *
   * https://statsapi.mlb.com/api/v1/analytics/game
   *
   * ---
   *
   * **Example of call with all parameters**
   *
   * https://statsapi.mlb.com/api/v1/analytics/game?lastMetricsUpdatedTime=2019-01-04T00:00:00.007380Z&gameModeId=2&limit=1
   *
   * @param gameModeId Insert gameModeId to return timestamps for data corrections made for a specific gameMode. There are 3 different gameModes:
   * 1. 0= Batting Practice
   * 2. 1 = Warm Up
   * 3. 2 = Live Game
   *
   * Insert one gameMode per request. Request default to gameMode 2
   *
   * 1. Insert BP  gameMode : https://statsapi.mlb.com/api/v1/analytics/game?gameModeId=0
   * 2. Insert Warm Up gameMode: https://statsapi.mlb.com/api/v1/analytics/game?gameModeId=1
   * 3. Insert Live gameMode: https://statsapi.mlb.com/api/v1/analytics/game?gameModeId=2
   *
   * @param timecode Use this parameter to return a snapshot of the data at the specified
   * time.
   * 1. Insert timecode: https://statsapi.mlb.com/api/v1/analytics/game?lastUpdatedTime=2019-05-20T20:33:06.000058Z
   *
   * @param limit Insert a limit to limit return {Limit 1000}.
   * 1. Insert limit: https://statsapi.mlb.com/api/v1/analytics/game?limit=10
   *
   * @param lastUpdatedTimeLastMetricsUpdatedTimeLastVideoUpdatedTime Sort return based on specific metric. Users can sort by 3 metrics:
   * 1. lastUpdatedTime - https://statsapi.mlb.com/api/v1/analytics/game?lastUpdatedTime=2021-06-19T11:00:00.000000Z&limit=10&offset=0&sortBy=lastUpdatedTime
   * 2. lastMetricsUpdatedTime - https://statsapi.mlb.com/api/v1/analytics/game?lastUpdatedTime=2021-06-19T11:00:00.000000Z&limit=10&offset=0&sortBy=lastMetricsUpdatedTime
   * 3. lastVideoUpdatedTime- https://statsapi.mlb.com/api/v1/analytics/game?lastVideoUpdatedTime=2021-06-19T11:00:00.000000Z&limit=10&offset=0&sortBy=lastVideoUpdatedTime
   *
   * Each of the 3 metrics map to the following objects
   *
   * 1. lastUpdatedTime ~ updatedAt
   * 2. lastMetricsUpdatedTime ~ metricsUpdatedAt
   * 3. lastVideoUpdatedTime ~ videoUpdatedAt
   *
   * Description of each of the 3 metrics.
   *
   * 1. lastUpdatedTime ~ Timestamp of most recent update made to an individual play from a given game. This includes reassingment of plays or updates to raw data.
   * 2. lastMetricsUpdatedTime ~ Timestamp of most recent update made only to the metrics of an individual play from a given game.
   * 3. lastVideoUpdatedTime ~ Timestamp of most recent update made to the video for an individual play from a given game.
   *
   * @param isNonStatcast Insert isNonStatcast to return most recent MiLB games that have been updated with video.
   * 1. Insert isNonStatcast: https://statsapi.mlb.com/api/v1/analytics/game?lastUpdatedTime=2019-06-07&isNonStatcast=true
   *
   * @param offset Insert an offset to returns i+1 as the first record in the set of most recent games {Limit 1000} updated since a specific time, specific gameMode.
   * 1. Insert offset: https://statsapi.mlb.com/api/v1/analytics/game?offset=10
   *
   * @param season Insert season to return all updated Games for a given season.
   * 1. Insert offset: https://statsapi.mlb.com/api/v1/analytics/game?season=2021
   *
   * @param sportId Insert sportId to return all updated Games for a given sportId.
   * 1. Insert offset: https://statsapi.mlb.com/api/v1/analytics/game?sportId=11
   *
   * @param gameType Insert gameType to return all updated Games for a given gameType.
   * 1. Insert offset: https://statsapi.mlb.com/api/v1/analytics/game?gameType=D
   *
   * @param fields Comma delimited list of specific fields to be returned. Format:
   * topLevelNode, childNode, attribute
   *
   * Example: https://statsapi.mlb.com/api/v1/analytics/game?fields=games,gamePk,metricsUpdatedAt
   *
   * @returns PlayByPlayRestObject OK
   * @throws ApiError
   */
	public static updateStatcastGames(options?: {
    gameModeId?: number;
    timecode?: string;
    limit?: string;
    lastUpdatedTimeLastMetricsUpdatedTimeLastVideoUpdatedTime?: string;
    isNonStatcast?: boolean;
    offset?: string;
    season?: string;
    sportId?: string;
    gameType?: string;
    fields?: Array<string>;
  }): CancelablePromise<PlayByPlayRestObject> {
		return __request(OpenAPI, {
			method: "GET",
			url: "/api/v1/game/analytics/game",
			query: {
				gameModeId: options?.gameModeId,
				timecode: options?.timecode,
				limit: options?.limit,
				"lastUpdatedTime/lastMetricsUpdatedTime/lastVideoUpdatedTime":
          options?.lastUpdatedTimeLastMetricsUpdatedTimeLastVideoUpdatedTime,
				isNonStatcast: options?.isNonStatcast,
				offset: options?.offset,
				season: options?.season,
				sportId: options?.sportId,
				gameType: options?.gameType,
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
   * View timestamps of most recent data corrections made to GUIDs.
   * **Description:**
   * This endpoint returns timestamps reflecting the most recent data corrections made to GUIDS. This return is limited to 1000 objects.
   *
   * **Return Includes:** timestamps.
   *
   * **Required Parameters:** No parameters are required to run this call.
   *
   * ---
   * **Example of call with required parameters**
   *
   * https://statsapi.mlb.com/api/v1/analytics/guids
   *
   * ---
   *
   * **Example of call with all parameters**
   *
   * https://statsapi.mlb.com/api/v1/analytics/guids?lastMetricsUpdatedTime=2019-01-04T00:00:00.007380Z&gameModeId=2&sortBy=lastMetricsUpdatedTime&limit=1
   *
   * @param gameModeId Insert gameModeId to return timestamps for data corrections made for a specific gameMode. There are 3 different gameModes:
   * 1. 0= Batting Practice
   * 2. 1 = Warm Up
   * 3. 2 = Live Game
   *
   * Insert one gameMode per request. Request default to gameMode 2
   *
   * 1. Insert BP  gameMode : https://statsapi.mlb.com/api/v1/analytics/guids?gameModeId=0
   * 2. Insert Warm Up gameMode: https://statsapi.mlb.com/api/v1/analytics/guids?gameModeId=1
   * 3. Insert Live gameMode: https://statsapi.mlb.com/api/v1/analytics/guids?gameModeId=2
   *
   * @param timecode Use this parameter to return a snapshot of the data at the specified
   * time.
   * 1. Insert timecode: https://statsapi.mlb.com/api/v1/analytics/guids?lastUpdatedTime=2018-10-25T09:58:06.007830Z
   *
   * @param limit Insert a limit to limit return {Limit 1000}.
   * 1. Insert limit: https://statsapi.mlb.com/api/v1/analytics/guids?limit=10
   *
   * @param sortBy Sort return based on specific metric. Users can sort by 4 metrics:
   * 1. lastUpdatedTime - https://statsapi.mlb.com/api/v1/analytics/guids?lastUpdatedTime=2019-01-04T00:00:00.007380Z&gameModeId=2&sortBy=lastUpdatedTime
   * 2. lastMetricsUpdatedTime - https://statsapi.mlb.com/api/v1/analytics/guids?lastMetricsUpdatedTime=2019-01-04T00:00:00.007380Z&gameModeId=2&sortBy=lastMetricsUpdatedTime
   * 3. lastPlayTime-https://statsapi.mlb.com/api/v1/analytics/guids?lastPlayTime=2018-02-02T16:06:51.704011Z&gameModeId=2&sortBy=lastPlayTime
   * 4. lastVideoUpdatedTime  - https://statsapi.mlb.com/api/v1/analytics/guids?lastVideoUpdatedTime=2019-08-05T14:05:34.353000Z&sortBy=lastVideoUpdatedTime
   *
   *
   * Each of the 4 metrics map to the following objects
   *
   * 1. lastUpdatedTime ~ updatedAt
   * 2. lastMetricsUpdatedTime ~ metricsUpdatedAt
   * 3. lastPlayTime ~ time
   * 4. lastVideoUpdatedTime ~ videoUpdatedAt
   *
   *
   * Description of each of the 4 metrics.
   *
   * 1. lastUpdatedTime ~ Timestamp of most recent update made to an individual play. This includes reassingment of plays or updates to raw data.
   * 2. lastMetricsUpdatedTime ~ Timestamp of most recent update made only to the metrics of an individual play.
   * 3. lastPlayTime ~ Timestamp of when play has started, however this is not frame accurate like startTime,endTime, & pitchTime and can vary between plays
   * 4. lastVideoUpdatedTime ~ Timestamp of most recent update made to an individual play.
   *
   * @param offset Insert an offset to returns i+1 as the first record in the set of most recent games {Limit 1000} updated since a specific time, specific gameMode.
   * 1. Insert offset: https://statsapi.mlb.com/api/v1/analytics/guids?offset=10
   *
   * @param season Insert season to return all updated GUIDs for a given season.
   * 1. Insert offset: https://statsapi.mlb.com/api/v1/analytics/guids?season=2021
   *
   * @param sportId Insert sportId to return all updated GUIDs for a given sportId.
   * 1. Insert offset: https://statsapi.mlb.com/api/v1/analytics/guids?sportId=11
   *
   * @param gameType Insert gameType to return all updated GUIDs for a given gameType.
   * 1. Insert offset: https://statsapi.mlb.com/api/v1/analytics/guids?gameType=D
   *
   * @param fields Comma delimited list of specific fields to be returned. Format:
   * topLevelNode, childNode, attribute
   *
   * Example: https://statsapi.mlb.com/api/v1/analytics/guids?fields=games,gamePk,metricsUpdatedAt
   *
   * @returns PlayByPlayRestObject OK
   * @throws ApiError
   */
	public static updateGameGuids(options?: {
    gameModeId?: number;
    timecode?: string;
    limit?: string;
    sortBy?: string;
    offset?: string;
    season?: string;
    sportId?: string;
    gameType?: string;
    fields?: Array<string>;
  }): CancelablePromise<PlayByPlayRestObject> {
		return __request(OpenAPI, {
			method: "GET",
			url: "/api/v1/game/analytics/guids",
			query: {
				gameModeId: options?.gameModeId,
				timecode: options?.timecode,
				limit: options?.limit,
				sortBy: options?.sortBy,
				offset: options?.offset,
				season: options?.season,
				sportId: options?.sportId,
				gameType: options?.gameType,
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
   * View Statcast data for a specific game.
   * **Description:**
   * This endpoint returns Statcast data forall plays in a specific game.
   *
   * **Return Includes:** timestamps.
   *
   * **Required Parameters:** gamePk is required to run this call.
   *
   * ---
   * **Example of call with required parameters**
   *
   * https://statsapi.mlb.com/api/v1/game/566685/guids?
   *
   * ---
   *
   * **Call with all parameters**
   *
   * https://statsapi.mlb.com/api/v1/game/566685/guids?lastUpdatedTime=2019-05-13T14:15:14.005620Z&gameModeId=2&isPitch=true&isHit=true&isPickoff=false&hydrate=analytics(result,hit,pitch,metrics,video,metaData)
   *
   * @param gamePk Insert gamePk to return GUIDS for a specific game.
   * 1. Insert gamePk: https://statsapi.mlb.com/api/v1/game/566685/guids?
   *
   * @param gameModeId Insert gameModeId to return timestamps for data corrections made for a specific gameMode. There are 3 different gameModes:
   * 1. 0= Batting Practice
   * 2. 1 = Warm Up
   * 3. 2 = Live Game
   *
   * Insert one gameMode per request. Request default to gameMode 2
   *
   * 1. Insert BP gameMode : https://statsapi.mlb.com/api/v1/game/566685/guids?gameModeId=0
   * 2. Insert Warm Up gameMode: https://statsapi.mlb.com/api/v1/game/566685/guids?gameModeId=1
   * 3. Insert Live gameMode: https://statsapi.mlb.com/api/v1/game/566685/guids?gameModeId=2
   *
   * @param lastUpdatedTime Use this parameter to return a snapshot of the data at the specified time it was updated.
   *
   * 1. Insert timecode: https://statsapi.mlb.com/api/v1/game/566685/guids?lastUpdatedTime=2019-05-13T14:15:14.005620Z&gameModeId=2&hydrate=analytics(video)
   *
   * @param lastMetricsUpdatedTime Use this parameter to return a snapshot of metrics data at the specified time it was updated.
   *
   * 1. Insert timecode: https://statsapi.mlb.com/api/v1/game/633627/guids?lastMetricsUpdatedTime=2021-06-28T04:28:39.839Z&gameModeId=2
   *
   * @param lastVideoUpdatedTime Use this parameter to return a snapshot of video data at the specified time it was updated.
   *
   * 1. Insert timecode: https://statsapi.mlb.com/api/v1/game/649014/guids?lastVideoUpdatedTime=2021-06-30T09:18:08.292Z&gameModeId=2
   *
   * @param isPitch Insert isPitch to return either all GUIDS corresponding to pitches{true} or non-pitch events{false}.
   * 1. Insert isPitch true: https://statsapi.mlb.com/api/v1/game/566685/guids?gameModeId=2&isPitch=true
   * 2. Insert isPitch false: https://statsapi.mlb.com/api/v1/game/566685/guids?gameModeId=2&isPitch=false
   *
   * @param isHit Insert isHit to return either all GUIDS corresponding to hits{true} or non-hit events{false}.
   * 1. Insert isHit true: https://statsapi.mlb.com/api/v1/game/566685/guids?gameModeId=2&isHit=true
   * 2. Insert isHit false: https://statsapi.mlb.com/api/v1/game/566685/guids?gameModeId=2&isHit=false
   *
   * @param isPickoff Insert isPickoff to return either all GUIDS corresponding to pickoffs{true} or non-pickoff events{false}.
   * 1. Insert isPickoff true: https://statsapi.mlb.com/api/v1/game/565798/guids?gameModeId=2&isPickoff=true
   * 2. Insert isPickoff false: https://statsapi.mlb.com/api/v1/game/565798/guids?gameModeId=2&isPickoff=false
   *
   * @param hydrate Insert hydration(s) to return statistical or video data for a specific game. Format 'analytics(result,hit,pitch,metrics,video)'
   * 1. One Hydration: https://statsapi.mlb.com/api/v1/game/565798/guids?hydrate=analytics(hit)
   * 2. Multiple Hydrations: https://statsapi.mlb.com/api/v1/game/565798/guids?hydrate=analytics(result,hit,pitch,metrics,video,metaData)
   *
   * - Available Hydrations:
   * 1. hit - Statcast hit segment (exit velocity, launch angle, etc.)
   * 2. pitch- Statcast ball segment (lastMeasuredData, releaseData trajectoryData
   * 3. metrics - Calculated Statcast metrics (Sprint Speed, Exit Velocity, etc.)
   * 5. video - URLs for clipped video files
   * 6. metaData- metaData for the play
   * 7. hydrations- all available hydrations
   *
   * @param parsedRaw Return full parsed or raw data via .tar for the entire game
   * 1. parsed: https://statsapi.mlb.com/api/v1/game/565798/analytics/parsed
   * 2. raw: https://statsapi.mlb.com/api/v1/game/565798/analytics/raw
   *
   * @param fields Comma delimited list of specific fields to be returned. Format:
   * topLevelNode, childNode, attribute
   *
   * Example: https://statsapi.mlb.com/api/v1/game/564248/guids?gameModeId=2&hydrate=analytics(hit)&fields=gamePk,hitSegment,launchData,speed
   *
   * @returns PlayByPlayRestObject OK
   * @throws ApiError
   */
	public static statcast(
		gamePk: string,
		options?: {
      gameModeId?: number;
      lastUpdatedTime?: string;
      lastMetricsUpdatedTime?: string;
      lastVideoUpdatedTime?: string;
      isPitch?: string;
      isHit?: string;
      isPickoff?: string;
      hydrate?: string;
      parsedRaw?: string;
      fields?: Array<string>;
    }
	): CancelablePromise<PlayByPlayRestObject> {
		return __request(OpenAPI, {
			method: "GET",
			url: "/api/v1/game/{gamePk}/guids",
			path: {
				gamePk: gamePk,
			},
			query: {
				gameModeId: options?.gameModeId,
				lastUpdatedTime: options?.lastUpdatedTime,
				lastMetricsUpdatedTime: options?.lastMetricsUpdatedTime,
				lastVideoUpdatedTime: options?.lastVideoUpdatedTime,
				isPitch: options?.isPitch,
				isHit: options?.isHit,
				isPickoff: options?.isPickoff,
				hydrate: options?.hydrate,
				"parsed/raw": options?.parsedRaw,
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
   * View Statcast data for a specific play.
   * **Description:**
   * This endpoint returns Statcast data for a specific play. Video is only available for MLB in this endpoint.
   *
   * **Return Includes:** timestamps.
   *
   * **Required Parameters:** gamePk and GUID are required to run this call.
   *
   * ---
   * **Example of call with required parameters**
   *
   * https://statsapi.mlb.com/api/v1/game/567434/621dc1d1-aa75-4aed-b449-403bd4bcd3fa/analytics
   *
   * ---
   *
   * **Example of call with hydration parameters**
   *
   * https://statsapi.mlb.com/api/v1/game/567434/621dc1d1-aa75-4aed-b449-403bd4bcd3fa/analytics?hydrate=hydrations,analytics(ball,metrics,video,positions,diagram,contextMetrics)
   *
   * @param gamePk Insert gamePk to return Statcast data for a specific play.
   * 1. Insert gamePk: https://statsapi.mlb.com/api/v1/game/567434/621dc1d1-aa75-4aed-b449-403bd4bcd3fa/analytics?
   *
   * @param guid Insert GUID to return Statcast data for a specific play.
   * 1. Insert GUID: https://statsapi.mlb.com/api/v1/game/567434/621dc1d1-aa75-4aed-b449-403bd4bcd3fa/analytics?
   *
   * @param hydrate Insert hydration(s) to return statistical or video data for a specific game. Format 'analytics(metrics, video, positions)'
   * 1. One Hydration: https://statsapi.mlb.com/api/v1/game/567434/621dc1d1-aa75-4aed-b449-403bd4bcd3fa/analytics?hydrate=hydrations,analytics(ball)
   * 2. Multiple Hydrations: https://statsapi.mlb.com/api/v1/game/567434/621dc1d1-aa75-4aed-b449-403bd4bcd3fa/analytics?hydrate=hydrations,analytics(ball,metrics,video,positions,diagram,contextMetrics)
   *
   * - Available Hydrations:
   * 1. ball- Statcast generic measurements for hit and pitch segments (firstMeasurment, startData, etc...) Array of the measurement of the ball position and velocity
   * 2. metrics - Calculated Statcast metrics (Sprint Speed, Exit Velocity, etc.)
   * 3. video - URLs for clipped video files (MLB Only)
   * 4. positions - Identification of players tracked on the field
   * 5. diagram - visual  SVG image of what transpired on the play
   * 6. contextMetrics-  Calculated metrics put in context for the play
   * 7. calibration - Calibration data for the play
   * 8. hydrations- Show all available hydrations
   *
   * @param fields Comma delimited list of specific fields to be returned. Format:
   * topLevelNode, childNode, attribute
   *
   * Example: https://statsapi.mlb.com/api/v1/game/567434/621dc1d1-aa75-4aed-b449-403bd4bcd3fa/analytics?hydrate=hydrations,analytics(ball,metrics,video,positions,diagram,contextMetrics)&fields=trackedEvents,timeStamp,playEvent
   *
   * @returns PlayByPlayRestObject OK
   * @throws ApiError
   */
	public static statcastGuids(
		gamePk: string,
		guid: string,
		options?: {
      hydrate?: string;
      fields?: Array<string>;
    }
	): CancelablePromise<PlayByPlayRestObject> {
		return __request(OpenAPI, {
			method: "GET",
			url: "/api/v1/game/{gamePk}/{GUID}/analytics",
			path: {
				gamePk: gamePk,
				GUID: guid,
			},
			query: {
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
   * View skeletalData for specific play.
   * **Description:**
   * This endpoint returns links for skeletalData for specific play.
   *
   * **Return Includes:** skeletalData.
   *
   * **Required Parameters:** gamePk and GUID are required to run this call.
   *
   * ---
   * **Example of call with required parameters**
   *
   * https://statsapi.mlb.com/api/v1/game/631105/b030086b-cc1e-4842-8941-def2c5c4d94f/analytics/skeletalData/files
   *
   * @param gamePk Insert gamePk to return links for skeletal data for a specific play.
   * 1. Insert gamePk: https://statsapi.mlb.com/api/v1/game/631105/b030086b-cc1e-4842-8941-def2c5c4d94f/analytics/skeletalData/files
   *
   * @param guid Insert GUID to return links for skeletal data for a specific play.
   * 1. Insert GUID: https://statsapi.mlb.com/api/v1/game/631105/b030086b-cc1e-4842-8941-def2c5c4d94f/analytics/skeletalData/files
   *
   * @returns PlayByPlayRestObject OK
   * @throws ApiError
   */
	public static skeletal(
		gamePk: string,
		guid: string
	): CancelablePromise<PlayByPlayRestObject> {
		return __request(OpenAPI, {
			method: "GET",
			url: "/api/v1/game/{gamePk}/{GUID}/analytics/skeletalData/files",
			path: {
				gamePk: gamePk,
				GUID: guid,
			},
			errors: {
				401: `Unauthorized`,
				403: `Forbidden`,
				404: `Not Found`,
			},
		});
	}

	/**
   * View context metrics for a game based on its current state.
   *
   * **Description:**
   * This endpoint returns Context Metrics for a specific gamePk.
   *
   * **Return Includes:** Context Metircs, team information, venue information.
   *
   * **Required Parameters:** gamePk is required to run this call.
   *
   * ---
   * **Example of call with required parameters:**
   *
   * https://statsapi.mlb.com/api/v1/game/531060/contextMetrics
   *
   * ---
   * **Example of call with all parameters:**
   *
   * https://statsapi.mlb.com/api/v1/game/531060/contextMetrics?timecode=20180803_182458
   *
   * @param gamePk Insert gamePk to return Conetext Metrics for a specific game.
   * 1. Insert gamePk: https://statsapi.mlb.com/api/v1/game/531060/contextMetrics
   *
   * @param timecode Insert timecode to return a snapshot of the data at the specified time. Format: YYYYMMDD_HHMMSS.
   * 1. Insert timecode: https://statsapi.mlb.com/api/v1/game/531060/contextMetrics?timecode=20180803_182458
   *
   * @param fields Comma delimited list of specific fields to be returned. Format:
   * topLevelNode, childNode, attribute
   *
   * Example: https://statsapi.mlb.com/api/v1/game/531060/contextMetrics?fields=game,gameDate,status,statusCode,teams,away,home,score,team,name,awayWinProbability,homeWinProbability
   *
   * @returns GameContextRestObject OK
   * @throws ApiError
   */
	public static getGameContextMetrics(
		gamePk: number,
		timecode?: string,
		fields?: Array<string>
	): CancelablePromise<GameContextRestObject> {
		return __request(OpenAPI, {
			method: "GET",
			url: "/api/v1/game/{gamePk}/contextMetrics",
			path: {
				gamePk: gamePk,
			},
			query: {
				timecode: timecode,
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
   * View win probability for a specific gamePk per atBat.
   *
   * **Description:**
   * This endpoint returns complete game data with win probabilities after each at bat for a specific game.
   *
   * **Return Includes:** Win probability and play by play data.
   *
   * **Required Parameters:** gamePk is required to run this call.
   *
   * ---
   * **Example of call with required parameters**
   *
   * https://statsapi.mlb.com/api/v1/game/531060/winProbability
   *
   * ---
   * **Example of call with all parameters**
   *
   * https://statsapi.mlb.com/api/v1/game/531060/winProbability?timecode=20180803_182458
   *
   * @param gamePk Insert gamePk to return win probabilites after every at bat for a specific game.
   * 1. Insert gamePk: https://statsapi.mlb.com/api/v1/game/531060/winProbability
   *
   * @param timecode Use this parameter to return a snapshot of the data at the specified time. Format: YYYYMMDD_HHMMSS
   * 1. Insert timecode: https://statsapi.mlb.com/api/v1/game/531060/winProbability?timecode=20180803_182458
   *
   * @param fields Comma delimited list of specific fields to be returned. Format:
   * topLevelNode, childNode, attribute
   *
   * Example: https://statsapi.mlb.com/api/v1/game/531060/winProbability?fields=atBatIndex,homeTeamWinProbability,awayTeamWinProbability
   *
   * @returns PlayRestObject OK
   * @throws ApiError
   */
	public static getWinProbability(
		gamePk: number,
		options?: {
      timecode?: string;
      fields?: Array<string>;
    }
	): CancelablePromise<Array<PlayRestObject>> {
		return __request(OpenAPI, {
			method: "GET",
			url: "/api/v1/game/{gamePk}/winProbability",
			path: {
				gamePk: gamePk,
			},
			query: {
				timecode: options?.timecode,
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
   * View boxscore for specific game.
   *
   * **Description:**
   * This endpoint returns boxscore data for a specific gamePk.
   *
   * **Return Includes:** Boxscore,play by play, and team data.
   *
   * **Required Parameters:** gamePk is required to run this call.
   *
   * ---
   * **Example of call with required parameters**
   *
   * https://statsapi.mlb.com/api/v1/game/531060/boxscore
   *
   * ---
   * **Example of call with all parameters**
   *
   * https://statsapi.mlb.com/api/v1/game/531060/boxscore?timecode=20180803_182458
   *
   * @param gamePk Insert gamePk to return boxscore information for a specific game.
   * 1. Insert gamePk: https://statsapi.mlb.com/api/v1/game/531060/boxscore
   *
   * @param timecode Use this parameter to return a snapshot of the data at the specified time. Format: YYYYMMDD_HHMMSS
   * 1. Insert timecode: https://statsapi.mlb.com/api/v1/game/531060/boxscore?timecode=20180803_182458
   *
   * @param fields Comma delimited list of specific fields to be returned. Format:
   * topLevelNode, childNode, attribute
   *
   * Example: https://statsapi.mlb.com/api/v1/game/531060/boxscore?fields=teams,away,team,id
   *
   * @returns Boxscore OK
   * @throws ApiError
   */
	public static boxscore(
		gamePk: number,
		options?: {
      timecode?: string;
      fields?: Array<string>;
    }
	): CancelablePromise<BoxscoreRestObject> {
		return __request(OpenAPI, {
			method: "GET",
			url: "/api/v1/game/{gamePk}/boxscore",
			path: {
				gamePk: gamePk,
			},
			query: {
				timecode: options?.timecode,
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
   * View all content for a game.
   *
   * **Description:**
   * This endpoint returns editorial content for a specific gamePk.
   *
   * **Return Includes:** Editorial pieces, highlights, images, game summary and game notes.
   *
   * **Required Parameters:** gamePk is required to run this call.
   *
   * ---
   * **Example of call with required parameters**
   *
   * https://statsapi.mlb.com/api/v1/game/531060/content
   *
   * ---
   * **Example of call with all parameters**
   *
   * https://statsapi.mlb.com/api/v1/game/531060/content?highlightLimit=5
   *
   * @param gamePk Insert gamePk to return content information for a specific game.
   * 1. Insert gamePk: https://statsapi.mlb.com/api/v1/game/531060/content
   *
   * @param highlightLimit Number of results to return
   * 1. Insert limit: https://statsapi.mlb.com/api/v1/game/531060/content?highlightLimit=5
   *
   * @returns any OK
   * @throws ApiError
   */
	public static content(
		gamePk: number,
		options?: {
      highlightLimit?: number;
    }
	): CancelablePromise<any> {
		return __request(OpenAPI, {
			method: "GET",
			url: "/api/v1/game/{gamePk}/content",
			path: {
				gamePk: gamePk,
			},
			query: {
				highlightLimit: options?.highlightLimit,
			},
			errors: {
				401: `Unauthorized`,
				403: `Forbidden`,
				404: `Not Found`,
			},
		});
	}

	/**
   * View game color commentary info.
   *
   * **Description:**
   * This endpoint returns the color feed for a specific gamePk.
   *
   * **Return Includes:** Play by play, video, and pitch data.
   *
   * **Required Parameters:** gamePk is required to run this call.
   *
   * ---
   * **Example of call with required parameters**
   *
   * https://statsapi.mlb.com/api/v1/game/531321/feed/color
   *
   * ---
   * **Example of call with all parameters**
   *
   * https://statsapi.mlb.com/api/v1/game/531321/feed/color?timecode=20180803_182458
   *
   * @param gamePk Insert gamePk to return the color feed for a specific game.
   * 1. Insert gamePk: https://statsapi.mlb.com/api/v1/game/531321/feed/color
   *
   * @param timecode Use this parameter to return a snapshot of the data at the specified.
   * time. Format: YYYYMMDD_HHMMSS
   * 1. Insert timecode: https://statsapi.mlb.com/api/v1/game/531321/feed/color?&timecode=20180823_181734
   *
   * @param fields Comma delimited list of specific fields to be returned. Format:
   * topLevelNode, childNode, attribute
   *
   * Example: https://statsapi.mlb.com/api/v1/game/531321/feed/color?fields=game_id,items
   *
   * @returns string OK
   * @throws ApiError
   */
	public static colorFeed(
		gamePk: string,
		options?: {
      timecode?: string;
      fields?: Array<string>;
    }
	): CancelablePromise<string> {
		return __request(OpenAPI, {
			method: "GET",
			url: "/api/v1/game/{gamePk}/feed/color",
			path: {
				gamePk: gamePk,
			},
			query: {
				timecode: options?.timecode,
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
   * View game color feed.
   * **Description:**
   * This endpoint returns the difference/discrepancies between two timecodes in the Color Feed using the Diff Patch System.
   *
   * **Return Includes:** Play by play data and player information.
   * <br/><br/><b>Diff/Patch
   * System:</b> startTimecode and endTimecode can be used for getting
   * diffs.<br/>Expected usage:  <br/> 1) Request full payload by not passing
   * startTimecode or endTimecode.  This will return the most recent game
   * state.<br/> 2) Find the latest timecode in this response.  <br/> 3) Wait
   * X seconds<br/> 4) Use the timecode from step 2 above as the startTimecode.  This
   * will give you a diff of everything that has happened since
   * startTimecode.  <br/> 5) If no data is returned, wait X seconds and do
   * the same request.  <br/> 6) If data is returned, get a new timeStamp
   * from the response, and use that for the next call as startTimecode.
   * <br></br>
   * **Required Parameters:** all parameters are required to run this call. If incorrectly called the call will default to https://statsapi.mlb.com/api/v1/game/531304/feed/color
   * <br></br>
   *
   * ---
   * **Example of call with required parameters:**
   *
   * https://statsapi.mlb.com/api/v1.1/game/531321/feed/live/diffPatch?startTimecode=20180822_163853&endTimecode=20180822_163938
   *
   * @param gamePk Insert gamePk
   * 1. Insert gamePk: https://statsapi.mlb.com/api/v1/game/531321/feed/color/diffPatch
   *
   * @param startTimecode Insert startTimecode. Format:
   * MMDDYYYY_HHMMSS
   *
   * 1. Insert starTimecode: https://statsapi.mlb.com/api/v1/game/531321/feed/color/diffPatch?startTimecode=20180823_162652
   *
   * @param endTimecode Insert endTimecode to complete this call.
   * Format: MMDDYYYY_HHMMSS
   *
   * 1. Insert endTimecode: https://statsapi.mlb.com/api/v1.1/game/531321/feed/live/diffPatch?startTimecode=20180823_170716&endTimecode=20180823_171303
   *
   * @returns ResponseEntity OK
   * @throws ApiError
   */
	public static colorFeedDiffPatch(
		gamePk: string,
		startTimecode: string,
		endTimecode: string
	): CancelablePromise<ResponseEntity> {
		return __request(OpenAPI, {
			method: "GET",
			url: "/api/v1/game/{gamePk}/feed/color/diffPatch",
			path: {
				gamePk: gamePk,
			},
			query: {
				startTimecode: startTimecode,
				endTimecode: endTimecode,
			},
			errors: {
				401: `Unauthorized`,
				403: `Forbidden`,
				404: `Not Found`,
			},
		});
	}

	/**
   * View all of the color timecodes for a game.
   * **Description:**
   * This endpoint returns timecodes for a specific gamePk.
   *
   * **Return Includes:** timecodes.
   *
   * **Required Parameters:** gamePk is required to run this call.
   *
   * ---
   * **Example of call with required parameters**
   *
   * https://statsapi.mlb.com/api/v1/game/534101/feed/color/timestamps
   *
   * @param gamePk Insert gamePk to return timecodes for a specific game.
   * 1. Insert gamePk: https://statsapi.mlb.com/api/v1/game/534101/feed/color/timestamps
   *
   * @returns string OK
   * @throws ApiError
   */
	public static colortimecodes(gamePk: string): CancelablePromise<string> {
		return __request(OpenAPI, {
			method: "GET",
			url: "/api/v1/game/{gamePk}/feed/color/timestamps",
			path: {
				gamePk: gamePk,
			},
			errors: {
				401: `Unauthorized`,
				403: `Forbidden`,
				404: `Not Found`,
			},
		});
	}

	/**
   * View game linescore.
   *
   * **Description:**
   * This endpoint returns linescore data from a specific gamePk.
   *
   * **Return Includes:** Linescore, play by play, and team data.
   *
   * **Required Parameters:** gamePk is required to run this call.
   *
   * ---
   * **Example of call with required parameters**
   *
   * https://statsapi.mlb.com/api/v1/game/531060/linescore
   *
   * ---
   * **Example of call with all parameters**
   *
   * https://statsapi.mlb.com/api/v1/game/531060/linescore?timecode=20180803_182458
   *
   * @param gamePk Insert gamePk to return linescore information for a specific game.
   * 1. Insert gamePk: https://statsapi.mlb.com/api/v1/game/531060/linescore
   *
   * @param timecode Use this parameter to return a snapshot of the data at the specified
   * time. Format: YYYYMMDD_HHMMSS
   *
   * 1. Insert timecode: https://statsapi.mlb.com/api/v1/game/531060/linescore?timecode=20180803_182458
   *
   * @param fields Comma delimited list of specific fields to be returned. Format:
   * topLevelNode, childNode, attribute
   *
   * Example: https://statsapi.mlb.com/api/v1/game/531060/linescore?fields=innings,num,home,away,runs
   *
   * @returns Linescore OK
   * @throws ApiError
   */
	public static linescore(
		gamePk: number,
		options?: {
      timecode?: string;
      fields?: Array<string>;
    }
	): CancelablePromise<Linescore> {
		return __request(OpenAPI, {
			method: "GET",
			url: "/api/v1/game/{gamePk}/linescore",
			path: {
				gamePk: gamePk,
			},
			query: {
				timecode: options?.timecode,
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
   * View game play By Play.
   * **Description:**
   * This endpoint returns play by play data for a specific gamePk.
   *
   * **Return Includes:** play by play data.
   *
   * **Required Parameters:** gamePk is required to run this call.
   *
   * ---
   * **Example of call with required parameters**
   *
   * https://statsapi.mlb.com/api/v1/game/531060/playByPlay
   *
   * ---
   *
   * **Example of call with all parameters**
   *
   * https://statsapi.mlb.com/api/v1/game/531060/playByPlay?timecode=20180803_182458
   *
   * @param gamePk Insert gamePk to return timestamps for a specific game.
   * 1. Insert gamePk: https://statsapi.mlb.com/api/v1/game/531060/playByPlay
   *
   * @param timecode Use this parameter to return a snapshot of the data at the specified
   * time. Format: YYYYMMDD_HHMMSS
   * 1. Insert timecode: https://statsapi.mlb.com/api/v1/game/531060/playByPlay?timecode=20180803_182458
   *
   * @param fields Comma delimited list of specific fields to be returned. Format:
   * topLevelNode, childNode, attribute
   *
   * Example: https://statsapi.mlb.com/api/v1/game/531060/playByPlay?fields=allPlays,result,type,description,about,inning
   *
   * @returns PlayByPlayRestObject OK
   * @throws ApiError
   */
	public static playByPlay(
		gamePk: number,
		options?: {
      timecode?: string;
      fields?: Array<string>;
    }
	): CancelablePromise<PlayByPlayRestObject> {
		return __request(OpenAPI, {
			method: "GET",
			url: "/api/v1/game/{gamePk}/playByPlay",
			path: {
				gamePk: gamePk,
			},
			query: {
				timecode: options?.timecode,
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
