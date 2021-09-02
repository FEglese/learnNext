export interface UserWindowProps {
	name: string;
	age: number;
	id: string;
}

export const UserWindow = (userInfo: UserWindowProps) => {
	return (
		<>
			<h3>User Details</h3>
			<h4>Name: {userInfo.name}</h4>
			<h4>Age: {userInfo.age}</h4>
		</>
	);
};
