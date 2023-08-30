import { Button } from "../FormComponents";

const FormTools = ({ handlePrint }) => {
	return (
		<div className="rounded-lg w-full mb-5 flex flex-col bg-gray-500 px-2 py-4 shadow-lg shadow-black hover:shadow-xl">
			<Button
				onClick={handlePrint}
				variant="info"
				// disabled={Object.keys(personal).length === 0}
				>
					PDF
				</Button>
		</div>
	)
}

export default FormTools;
