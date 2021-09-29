export interface LoginRequestResult {
	success: boolean;
	error?: string;
	token?: string;
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
	}).then((data) => data.json());
};
