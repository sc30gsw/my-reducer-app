import { useReducer } from "react";

function App() {
	const [count, dispatch] = useReducer(
		(state: number, action: number) => state + action,
		0,
	);

	return (
		<div className="flex flex-col items-center justify-center min-h-dvh w-screen">
			<p className="text-2xl font-bold">Count: {count}</p>
			<div className="flex gap-4 mt-4">
				<button
					type="button"
					className="bg-blue-500 text-white px-4 py-2 rounded-full"
					onClick={() => dispatch(1)}
				>
					+
				</button>
				<button
					type="button"
					className="bg-blue-500 text-white px-4 py-2 rounded-full"
					onClick={() => dispatch(-1)}
				>
					-
				</button>
			</div>
		</div>
	);
}

export default App;
