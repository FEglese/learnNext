// Packages
import Image from "next/image";
import Head from "next/head";
import { GetStaticPropsResult } from "next";

// Services
import {
	getAllUserIds,
	getDetailsForUser,
	UserDetails,
} from "../../services/UserService";

// Components
import { MenuBar } from "../../components/MenuBar";
import Layout from "../../components/Layout";
import { UserWindow } from "../../components/UserWindow";

export async function getStaticPaths() {
	const paths = getAllUserIds();
	return {
		paths,
		fallback: false,
	};
}

interface UserProps {
	userData: UserDetails;
}

export async function getStaticProps({
	params,
}): Promise<GetStaticPropsResult<UserProps>> {
	const userData = getDetailsForUser(params.id[0]);
	return {
		props: {
			userData,
		},
	};
}

export default function User({ userData }: UserProps) {
	return (
		<Layout>
			<Head>
				<title>{userData.name}</title>
			</Head>
			<MenuBar />
			<UserWindow {...userData} />
		</Layout>
	);
}
