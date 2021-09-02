import Link from "next/link";

// Components
import Layout from "../../components/Layout";
import { MenuBar } from "../../components/MenuBar";

// Style
import styles from "../../components/Layout.module.css";

// Services
import { getAllBootcamps } from "../../services/BootCampService";

export interface UserHomeProps {
	allBootcamps: any[];
}

export async function getStaticProps() {
	const allBootcamps = await getAllBootcamps();

	return {
		props: { allBootcamps },
	};
}

export default function UserHome(props: UserHomeProps) {
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
