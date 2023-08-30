"use client";
import PreviewHeader from "./PreviewHeader";
import { useDispatch, useSelector } from "react-redux";
import PreviewPersonal from "./PreviewPersonal";
import { setLeftSide, setRightSide } from "@/app/GlobalRedux/site";
import React, { forwardRef } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const Preview = forwardRef(({ array, ref }) => {
	const dispatch = useDispatch();
	const { leftSide, rightSide, colors, isContentEditable } = useSelector(
		(state) => state.site
	);

	const handleOnDrugEndLeft = (result) => {
		if (!result.destination) return;
		const items = Array.from(leftSide);
		const [reorderedItem] = items.splice(result.source.index, 1);
		items.splice(result.destination.index, 0, reorderedItem);
		dispatch(setLeftSide(items));
	};

	const handleOnDrugEndRight = (result) => {
		if (!result.destination) return;
		const items = Array.from(rightSide);
		const [reorderedItem] = items.splice(result.source.index, 1);
		items.splice(result.destination.index, 0, reorderedItem);
		dispatch(setRightSide(items));
	};
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
});

export default Preview;