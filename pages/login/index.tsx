// React & Next Components
import Head from "next/head";
import Layout from "../../components/Layout";
import { Login } from "../../components/Login";

// Custom Components
import { MenuBar } from "../../components/MenuBar";

function LoginPage() {
	return (
		<Layout>
			<Head>
				<title>User App</title>
			</Head>
			<MenuBar />
			<Login />
		</Layout>
	);
}

export default LoginPage;
