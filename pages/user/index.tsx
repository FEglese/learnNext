import Link from "next/link";

// Components
import Layout from "../../components/Layout";
import { MenuBar } from "../../components/MenuBar";

// Style
import styles from "../../components/Styles/Layout.module.css";

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
	const userListItems = props.allUsers?.map((user) => {
		return (
			<li className={styles.li} key={user.id}>
				<Link href={"/user/" + user.id}>
					<a>{user.name}</a>
				</Link>
			</li>
		);
	});

	const usersExist: boolean = userListItems != null;

	return (
		<Layout>
			<MenuBar />
			<h1>User Home!</h1>

			{usersExist && (
				<>
					<h2>Users available to you:</h2>
					<ul>{userListItems}</ul>
				</>
			)}

			{!usersExist && <h3>No users found</h3>}
		</Layout>
	);
}
