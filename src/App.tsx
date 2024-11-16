import { useReducer } from "react";

function App() {
	const [checked, toggle] = useReducer((state: boolean) => !state, false);

	return (
		<div className="flex flex-col items-center justify-center min-h-dvh w-screen">
			<input
				type="checkbox"
				className="cursor-pointer w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
				checked={checked}
				onChange={toggle}
			/>
		</div>
	);
}

export default App;
