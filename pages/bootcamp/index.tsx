import Link from "next/link";

// Components
import Layout from "../../components/Layout";
import { MenuBar } from "../../components/MenuBar";

// Style
import styles from "../../components/Layout.module.css";

// Services
import { getBootcampIndexDetails } from "../../services/BootCampService";

interface BootcampListObject {
	slug: string;
	name: string;
}

export interface BootcampIndexProps {
	allBootcamps: BootcampListObject[];
}

export async function getStaticProps() {
	const allBootcamps = (await getBootcampIndexDetails()) as BootcampIndexProps;

	return {
		props: { allBootcamps },
		revalidate: 1,
	};
}

export default function UserHome(props: BootcampIndexProps) {
	const bootcampList = props.allBootcamps.map((bootcamp) => {
		return (
			<Link href={"/bootcamp/" + bootcamp.slug}>
				<li className={styles.li}>{bootcamp.name}</li>
			</Link>
		);
	});

	return (
		<Layout>
			<MenuBar />
			<h1>User Home!</h1>

			<h2>Bootcamps available to you:</h2>
			<ul>{bootcampList}</ul>
		</Layout>
	);
}
