import type { CancelablePromise } from "../core/CancelablePromise";
import { OpenAPI } from "../core/OpenAPI";
import { request as __request } from "../core/request";

export class PeopleService {
	public static GetPeople(
		id?: number,
		options?: {			
		fields?: Array<string>;
		}
	): CancelablePromise<any> {
		return __request(OpenAPI, {
			method: "GET",
			url: "/api/v1/people/{id}",
			path: {
				id: id,
			},
			query: {
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
