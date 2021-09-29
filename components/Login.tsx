import { useState } from "react";
import styles from "./Layout.module.css";
import { sendLoginRequest } from "../services/AuthService";

export interface LoginProps {}

export const Login = (props: LoginProps) => {
	const [email, setEmail] = useState<string>("");
	const [password, setPassword] = useState<string>("");
	const [isInputDissabled, setInputDisabled] = useState<boolean>(false);
	const [errorMessage, setErrorMessage] = useState<string>(null);
	const [successMessage, setSuccessMessage] = useState<string>(null);

	const handleEmailChange = (event) => {
		setEmail(event.target.value);
	};

	const handlePasswordChange = (event) => {
		setPassword(event.target.value);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		handleLogin();
	};

	const handleLogin = () => {
		setErrorMessage("");
		setSuccessMessage("");

		if (email == "" || password == "") {
			setErrorMessage("Provide email and password");
			return;
		}

		setInputDisabled(true);
		sendLoginRequest(email, password)
			.then((res) => {
				if (res.success) {
					setSuccessMessage("Loggged in!");
				} else {
					setErrorMessage(res.error);
				}
			})
			.catch((ex) => {
				setErrorMessage("Error occured, please try again later.");
			})
			.finally(() => {
				setInputDisabled(false);
			});
	};

	return (
		<div className={styles.body}>
			<h2>Login here!</h2>
			{errorMessage && <h4>{errorMessage}</h4>}
			{successMessage && <h4>{successMessage}</h4>}
			<form onSubmit={handleSubmit}>
				<label>
					Email address:
					<input
						type="text"
						name="email"
						value={email}
						onChange={handleEmailChange}
						disabled={isInputDissabled}
					/>
				</label>
				<label>
					Password
					<input
						type="password"
						name="password"
						value={password}
						onChange={handlePasswordChange}
						disabled={isInputDissabled}
					/>
				</label>
				<input type="submit" value="Submit" />
			</form>
		</div>
	);
};
