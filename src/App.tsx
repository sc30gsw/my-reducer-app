import { useReducer } from "react";

type User = {
	name: string;
	age: number;
};

function App() {
	const [user, dispatch] = useReducer(
		(state: User, action: Partial<User>) => ({
			...state,
			...action,
		}),
		{ name: "", age: 0 },
	);
	return (
		<div className="flex flex-col items-center justify-center min-h-dvh w-screen">
			<div>
				{user.name} / {user.age}歳
			</div>
			<div className="flex w-3/4 flex-col items-center justify-center gap-4">
				<input
					type="text"
					className="block p-4 w-full text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500"
					onChange={(e) => {
						const { value } = e.target;
						dispatch({ name: value });
					}}
				/>
				<input
					type="number"
					className="block p-4 w-full text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500"
					onChange={(e) => {
						const { value } = e.target;
						dispatch({ age: Number(value) });
					}}
				/>
			</div>
		</div>
	);
}

export default App;
