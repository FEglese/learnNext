import Link from "next/link";

export const MenuBar = () => {
	return (
		<div>
			<Link href="/">
				<button>Home</button>
			</Link>
			<Link href="/user">
				<button>Users</button>
			</Link>
			<Link href="/bootcamp">
				<button>Bootcamps</button>
			</Link>
			<Link href="/login">
				<button>Login</button>
			</Link>
		</div>
	);
};
