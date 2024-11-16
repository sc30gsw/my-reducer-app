import { useReducer } from "react";

function App() {
	const [state, dispatch] = useReducer(
		(_: unknown, action: number) => `${action}円`,
		"0円",
	);
	return (
		<div className="flex flex-col items-center justify-center min-h-dvh w-screen">
			<div>{state}</div>
			<input
				type="number"
				className="block w-3/4 p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500"
				onChange={(e) => {
					const { value } = e.target;
					dispatch(Number(value));
				}}
			/>
		</div>
	);
}

export default App;
