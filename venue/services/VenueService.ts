/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class VenueService {

    /**
     * View information for a venue based on venueId.
     * **Description:**
     * This endpoint returns venue directorial information for all available venues in the Stats API.
     *
     * **Return Includes:** Name and id
     *
     * **Required Parameters:** venueIds is required to run this call. However, sportIds and leagueIds must be called seperately
     *
     * **Hydrations:** This endpoint can accept the hydrations query parameter.
     *
     *
     * ---
     * **Example of call with required parameters**
     *
     * https://statsapi.mlb.com/api/v1/venues?venueIds=15
     *
     * ---
     * **Example of call with hydrated parameters**
     *
     * https://statsapi.mlb.com/api/v1/venues?venueIds=15&hydrate=location
     *
     *
     * @param venueIds Insert venueId to return venue directorial information based venueId.
     * 1. Insert venueId: https://statsapi.mlb.com/api/v1/venues?venueIds=15
     *
     * For a list of all venueId:  https://statsapi.mlb.com/api/v1/teams
     *
     * @param sportIds Insert sportIds to return venue directorial information based a given sport(s).
     * 1. Insert one sportId: https://statsapi.mlb.com/api/v1/venues?&sportIds=1&season=2019
     * 2. Insert multiple sportIds https://statsapi.mlb.com/api/v1/venues?&sportIds=1,12,13,14,15,16,23&season=2019
     *
     * For a list of all sports:  https://statsapi.mlb.com/api/v1/sports
     *
     * @param season Insert year to return venue directorial information for a given season.
     * 1. Insert year: https://statsapi.mlb.com/api/v1/venues?season=2021&sportIds=1
     * 2. Insert years: http://statsapi.mlb.com/api/v1/venues?seasons=1945,2021&sportIds=1
     *
     * @param fields Comma delimited list of specific fields to be returned. Format:
     * topLevelNode, childNode, attribute
     *
     * Example: https://statsapi.mlb.com/api/v1/venues/15?fields=venues,id
     *
     * @param hydrate Insert Hydration(s) to return data for any available venue hydration. Format "league,venue"
     * 1. One Hydration: https://statsapi.mlb.com/api/v1/venues?venueIds=15&hydrate=location
     * 2. Multiple Hydrations: https://statsapi.mlb.com/api/v1/venues?venueIds=15&hydrate=location,hydrations
     *
     * 3. Check For Available Hydrations: https://statsapi.mlb.com/api/v1/venues?venueIds=15&hydrate=hydrations
     *
     * - Available Hydrations:
     *
     * 1. hydrations
     * 2. relatedVenues
     * 3. parentVenues
     * 4. residentVenues
     * 5. relatedVenues(venue)
     * 6. parentVenues(venue)
     * 7. residentVenues(venue)
     * 8. location
     * 9. social
     * 10. relatedApplications
     * 11. timezone
     * 12. fieldInfo
     * 12. menu
     * 13. metadata
     * 14. performers
     * 15. images
     * 16. schedule
     * 17. nextSchedule
     * 18. previousSchedule(inclusive=true)
     * 19. ticketManagement
     * 20. xrefId
     *
     * @returns any OK
     * @throws ApiError
     */
    public static venues(
        venueIds: string,
        sportIds: string,
        season?: string,
        fields?: Array<string>,
        hydrate?: Array<string>,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/venues',
            query: {
                'venueIds': venueIds,
                'sportIds': sportIds,
                'season': season,
                'fields': fields,
                'hydrate': hydrate,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

}