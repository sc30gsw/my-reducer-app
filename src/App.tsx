import { useReducer } from "react";

const reducer = (state: { count: number }, action: { type: string }) => {
	switch (action.type) {
		case "increment":
			return { ...state, count: state.count + 1 };

		case "decrement":
			return { ...state, count: state.count - 1 };

		default:
			throw new Error("不明なactionです");
	}
};

function App() {
	const [state, dispatch] = useReducer(reducer, { count: 0 });

	return (
		<div className="flex flex-col items-center justify-center min-h-dvh w-screen">
			<p className="text-2xl font-bold">Count: {state.count}</p>
			<div className="flex gap-4 mt-4">
				<button
					type="button"
					className="bg-blue-500 text-white px-4 py-2 rounded-full"
					onClick={() => dispatch({ type: "increment" })}
				>
					+
				</button>
				<button
					type="button"
					className="bg-blue-500 text-white px-4 py-2 rounded-full"
					onClick={() => dispatch({ type: "decrement" })}
				>
					-
				</button>
			</div>
		</div>
	);
}

export default App;
