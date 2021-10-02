import Link from "next/link";

// Components
import Layout from "../../components/Layout";
import { MenuBar } from "../../components/MenuBar";

// Style
import styles from "../../components/Styles/Layout.module.css";

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
			<li className={styles.li} key={bootcamp.slug}>
				<Link href={"/bootcamp/" + bootcamp.slug}>
					<a> {bootcamp.name}</a>
				</Link>
			</li>
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
