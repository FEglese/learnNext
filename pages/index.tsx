// React & Next Components
import Head from "next/head";
import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { loggedInUerDetails, MeRequestResult } from "../services/AuthService";

// Custom Components
import { MenuBar } from "../components/MenuBar";

function HomePage() {
	const [userDetails, setUserDetails] = useState<MeRequestResult>(null);
	const [error, setError] = useState<string>("");

	useEffect(() => {
		const token =
			typeof window == "undefined" ? "null" : localStorage.getItem("token");

		if (token != "null") {
			loggedInUerDetails()
				.then((res) => {
					setUserDetails(res);
				})
				.catch((error) => {
					setError(error);
				});
		}
	}, []);

	return (
		<Layout>
			<Head>
				<title>User App</title>
			</Head>
			<MenuBar />
			<h1>Home</h1>
			{userDetails != null && (
				<>
					<h3>Welcome {userDetails.name}</h3>
					<p>Role: {userDetails.role}</p>
				</>
			)}
			<h2>{error}</h2>
		</Layout>
	);
}

export default HomePage;
