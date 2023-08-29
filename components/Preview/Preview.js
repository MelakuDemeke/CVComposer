"use client";
import PreviewHeader from "./PreviewHeader";
import PreviewPersonal from "./PreviewPersonal";

const Preview = () => {
	return (
		<div className="w-full h-full flex items-start justify-start overflow-auto">
			<div className="w-2/6 h-auto min-h-full p-6">
				<PreviewPersonal />
			</div>
			<div className="w-4/6 h-auto min-h-full">
				<PreviewHeader />
			</div>
		</div>
	)
}

export default Preview;