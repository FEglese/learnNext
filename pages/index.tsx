// React & Next Components
import Head from "next/head";
import Layout from "../components/Layout";

// Custom Components
import { MenuBar } from "../components/MenuBar";

function HomePage() {
	return (
		<Layout>
			<Head>
				<title>User App</title>
			</Head>
			<MenuBar />
			<h1>Home</h1>
		</Layout>
	);
}

export default HomePage;
