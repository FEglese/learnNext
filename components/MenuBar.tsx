import Link from "next/link";
import { useEffect, useState } from "react";
import { getJWT, setJWT } from "../services/AuthService";

import styles from "./Styles/MenuBar.module.scss";

interface MenuItemModel {
	url: string;
	text: string;
}

export const MenuBar = () => {
	const LOG_OFF = "Log Off";
	const [logOffText, setLogOffText] = useState<string>(LOG_OFF);

	const logUserOff = () => {
		setLogOffText("Logging out...");
		setJWT(null);
		setTimeout(() => {
			location.reload();
		}, 400);
	};

	const items: MenuItemModel[] = [
		{ url: "/", text: "Home" },
		{ url: "/user", text: "Users" },
		{ url: "/bootcamp", text: "Bootcamps" },
		{ url: "/login", text: "Login" },
	];

	const token =
		typeof window == "undefined" ? "null" : localStorage.getItem("token");

	const isUserLoggedIn = token !== "null";

	const logOffButton = isUserLoggedIn ? (
		<button onClick={logUserOff}>{logOffText}</button>
	) : null;

	return (
		<div className={styles.menuBar}>
			{items.map((item: MenuItemModel) => (
				<Link href={item.url} key={item.text} passHref={true}>
					<button>{item.text}</button>
				</Link>
			))}
			{logOffButton}
		</div>
	);
};
