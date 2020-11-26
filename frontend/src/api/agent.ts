/* eslint-disable @typescript-eslint/no-explicit-any */

import axios, { AxiosResponse } from "axios";

import { EventFormValuesI, EventI } from "./../models/events";
import { SLEEP_DURATION } from "./../constants/api";

axios.defaults.baseURL = process.env.REACT_APP_API_URL;

const responseBody = (response: AxiosResponse): any => response.data;

const sleep = () => (response: AxiosResponse): Promise<AxiosResponse> => {
	return new Promise<AxiosResponse>((resolve) => {
		process.env.REACT_APP_ENV === "DEVELOPMENT"
			? setTimeout(() => resolve(response), SLEEP_DURATION)
			: resolve(response);
	});
};

const requests = {
	get: (url: string): Promise<any> => axios.get(url).then(sleep()).then(responseBody),
	post: (url: string, body?: {}): Promise<any> => axios.post(url, body).then(sleep()).then(responseBody),
	put: (url: string, body: {}): Promise<any> => axios.put(url, body).then(sleep()).then(responseBody),
	del: (url: string): Promise<any> => axios.delete(url).then(sleep()).then(responseBody),
};

export const Events = {
	list: (): Promise<EventI[]> => requests.get("/events/"),
	details: (id: string): Promise<EventI> => requests.get(`/events/${id}`),
	create: (event: EventFormValuesI): Promise<string> => requests.post("/events/", event),
	update: (id: string, event: EventFormValuesI): Promise<void> => requests.put(`/events/${id}`, event),
	delete: (id: string): Promise<void> => requests.del(`/events/${id}`),
};
