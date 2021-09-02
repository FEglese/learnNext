import Link from "next/link";

// Components
import Layout from "../../components/Layout";
import { MenuBar } from "../../components/MenuBar";

// Style
import styles from "../../components/Layout.module.css";

// Services
import { getAllUsers, UserDetails } from "../../services/UserService";

export interface UserHomeProps {
	allUsers: UserDetails[];
}

export async function getStaticProps() {
	const allUsers = getAllUsers();

	return {
		props: { allUsers },
	};
}

export default function UserHome(props: UserHomeProps) {
	const userList = props.allUsers.map((user) => {
		return (
			<Link href={"/user/" + user.id}>
				<li className={styles.li}>{user.name}</li>
			</Link>
		);
	});

	return (
		<Layout>
			<MenuBar />
			<h1>User Home!</h1>

			<h2>Users available to you:</h2>
			<ul>{userList}</ul>
		</Layout>
	);
}
