// Packages
import Head from "next/head";
import { GetStaticPropsResult } from "next";

// Components
import { MenuBar } from "../../components/MenuBar";
import Layout from "../../components/Layout";

// Services
import { BootcampDetails, getAllBootcamps, getBootcampBySlug } from "../../services/BootCampService";

interface BootcampProps {
	bootcampData: BootcampDetails;
}

export async function getStaticPaths() {
	const allBootcamps : BootcampDetails[] = await getAllBootcamps();

  const paths = allBootcamps.map(bootcamp => {
    return {
			params: {
				slug: bootcamp.slug,
			},
		};
  });
	return {
		paths,
		fallback: false,
	};
}

export async function getStaticProps({
	params,
}): Promise<GetStaticPropsResult<BootcampProps>> {
	const bootcampData : BootcampDetails = (await getBootcampBySlug(params.slug))[0];
	return {
		props: {
			bootcampData,
		},
	};
}

export default function Bootcamp({ bootcampData }: BootcampProps) {
	const AvailableCarrers = bootcampData.careers.map((career) => {
		return (
      <li>{career}</li>
		);
	});
  
  return (
		<Layout>
			<Head>
				<title>{bootcampData.name}</title>
			</Head>
			<MenuBar />
      <h1>{bootcampData.name}</h1>
      <p>{bootcampData.description}</p>
      <h2>Carrers available:</h2>
      <ul>{AvailableCarrers}</ul>
		</Layout>
	);
}
