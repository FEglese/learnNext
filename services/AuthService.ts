export interface LoginRequestResult {
	success: boolean;
	error?: string;
	token?: string;
}

export interface MeRequestResult {
	name: string;
	email: string;
	role: string;
}

export const sendLoginRequest = (
	email: string,
	password: string
): Promise<LoginRequestResult> => {
	return fetch(process.env.NEXT_PUBLIC_API_BASE_URL + "/api/v1/auth/login", {
		mode: "cors",
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({ email, password }),
	})
		.then((data) => data.json())
		.then((res) => {
			setJWT(res.token);
			return res;
		});
};

export const loggedInUerDetails = (): Promise<MeRequestResult> => {
	return fetch(process.env.NEXT_PUBLIC_API_BASE_URL + "/api/v1/auth/me", {
		headers: new Headers({
			Authorization: `Bearer ${localStorage.getItem("token")}`,
		}),
	})
		.then((res) => res.json())
		.then((res) => res.data);
};

export const getJWT = (): string => {
	if (typeof window !== "undefined") {
		return localStorage.getItem("token");
	}
	return null;
};

export const setJWT = (value: string) => {
	return localStorage.setItem("token", value);
};
