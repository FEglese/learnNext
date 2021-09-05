export interface BootcampDetails {
	slug: string;
	name: string;
	description: number;
	careers: string[];
}

export const getAllBootcamps = () => {
	const ALL_BOOTCAMP_URL = process.env.API_BASE_URL + "/api/v1/bootcamps";
	return fetch(ALL_BOOTCAMP_URL)
		.then((data) => data.json())
		.then((data) => data.data);
};

export const getBootcampIndexDetails = () => {
	const ALL_BOOTCAMP_URL =
		process.env.API_BASE_URL + "/api/v1/bootcamps?select=slug,name";
	return fetch(ALL_BOOTCAMP_URL, { method: "GET" })
		.then((data) => data.json())
		.then((data) => data.data);
};

export const getBootcampBySlug = (slug: string) => {
	const BOOTCAMP_BY_SLUG_URL =
		process.env.API_BASE_URL + `/api/v1/bootcamps?slug=${slug}`;
	return fetch(BOOTCAMP_BY_SLUG_URL)
		.then((data) => data.json())
		.then((data) => data.data);
};
