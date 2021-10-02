// Packages
import Head from "next/head";
import { GetStaticPropsResult } from "next";

// Components
import { MenuBar } from "../../components/MenuBar";
import Layout from "../../components/Layout";

// Services
import {
	BootcampDetails,
	getAllBootcamps,
	getBootcampBySlug,
} from "../../services/BootCampService";
import { useRouter } from "next/dist/client/router";

interface BootcampProps {
	bootcampData: BootcampDetails;
}

export async function getStaticPaths() {
	const allBootcamps: BootcampDetails[] = await getAllBootcamps();

	const paths = allBootcamps.map((bootcamp) => {
		return {
			params: {
				slug: bootcamp.slug,
			},
		};
	});
	return {
		paths,
		fallback: true,
	};
}

export async function getStaticProps({
	params,
}): Promise<GetStaticPropsResult<BootcampProps>> {
	const bootcampData: BootcampDetails = (
		await getBootcampBySlug(params.slug)
	)[0];
	return {
		props: {
			bootcampData,
		},
		revalidate: 5,
	};
}

export default function Bootcamp({ bootcampData }: BootcampProps) {
	const router = useRouter();

	if (router.isFallback) {
		return (
			<Layout>
				<Head>
					<title>Loading</title>
				</Head>
				<MenuBar />
				<p>Loading...</p>
			</Layout>
		);
	}

	if (bootcampData == null) {
		return (
			<Layout>
				<Head>
					<title>No Bootcamp</title>
				</Head>
				<MenuBar />
				<p>No Bootcamp found!</p>
			</Layout>
		);
	}

	const AvailableCarrers = bootcampData.careers
		? bootcampData.careers.map((career) => {
				return <li key={career}>{career}</li>;
		  })
		: [];

	const AvailableCarrersList =
		AvailableCarrers.length > 0 ? (
			<ul>{AvailableCarrers}</ul>
		) : (
			<p>None at this time</p>
		);

	return (
		<Layout>
			<Head>
				<title>{bootcampData.name}</title>
			</Head>
			<MenuBar />
			<h1>{bootcampData.name}</h1>
			<p>{bootcampData.description}</p>
			<h2>Carrers available:</h2>
			{AvailableCarrersList}
		</Layout>
	);
}
