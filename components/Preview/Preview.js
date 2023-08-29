"use client";
import PreviewHeader from "./PreviewHeader";
import { useDispatch, useSelector } from "react-redux";
import PreviewPersonal from "./PreviewPersonal";
import { setLeftSide, setRightSide } from "@/app/GlobalRedux/site";

const Preview = () => {
	const dispatch = useDispatch();
	const { leftSide, rightSide, colors, isContentEditable } = useSelector(
		(state) => state.site
	);

	return (
		<div className="w-full h-full flex items-start justify-start overflow-auto">
			<div style={{ background: colors.secondary, color: colors.text1 }} className="w-2/6 h-auto min-h-full p-6">
				<PreviewPersonal />
			</div>
			<div style={{ color: colors.text2 }} className="w-4/6 h-auto min-h-full">
				<PreviewHeader />
			</div>
		</div>
	)
}

export default Preview;