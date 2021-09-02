export interface UserDetails {
	id: string;
	name: string;
	age: number;
}

const users: UserDetails[] = [
	{ id: "1", name: "Matt", age: 25 },
	{ id: "2", name: "Jonno", age: 27 },
	{ id: "3", name: "Ben", age: 23 },
];

export function getAllUserIds() {
	return users.map((user) => {
		return {
			params: {
				id: user.id,
			},
		};
	});
}

export function getAllUsers(): Array<UserDetails> {
	return users;
}

export function getDetailsForUser(id: string) {
	const selectedUser = users.filter((user) => user.id === id)[0];
	return {
		id,
		...selectedUser,
	};
}
