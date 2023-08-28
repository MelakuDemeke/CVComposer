import Button from "./Button";

export const Buttons = ({
	dirty,
	handleReset,
	handleResetData,
	setter,
	state,
	isArray = true,
}) => {

	return (
		<>
			<Button type="submit" variant="info" disabled={!dirty}>
				Add
			</Button>
			<Button
				type="reset"
				variant="danger"
				onClick={handleReset}
				disabled={!dirty}
			>
				Clear
			</Button>
			<Button
				type="button"
				variant="danger"
				onClick={() => {
					handleResetData(setter);
				}}
				disabled={
					isArray ? state.length === 0 : Object.keys(state).length === 0
				}
			>
				Clear all
			</Button>
		</>
	);
};
