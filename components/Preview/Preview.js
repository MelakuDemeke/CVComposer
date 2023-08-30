"use client";
import PreviewHeader from "./PreviewHeader";
import { useDispatch, useSelector } from "react-redux";
import PreviewPersonal from "./PreviewPersonal";
import { setLeftSide, setRightSide } from "@/app/GlobalRedux/site";
import React, { forwardRef } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import PreviewSocial from "./PreviewSocial";

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

	const previews = {
		PreviewSocial: <PreviewSocial />
	}

	return (
		<div className="w-full h-full flex items-start justify-start overflow-auto"
			style={{ background: colors.body }}
			ref={ref}
			contentEditable={isContentEditable}
			suppressContentEditableWarning={true}
		>
			<div style={{ background: colors.secondary, color: colors.text1 }} className="w-2/6 h-auto min-h-full p-6">
				<PreviewPersonal />
				<DragDropContext onDragEnd={handleOnDrugEndLeft}>
					<Droppable droppableId="leftSide">
						{(provided) => (
							<div {...provided.droppableProps} ref={provided.innerRef}>
								{leftSide.map((item, index) => (
									<Draggable
										key={`${item.id}`}
										draggableId={`${item.id}`}
										index={index}
										isDragDisabled={isContentEditable}
									>
										{(provided) => (
											<div
												{...provided.draggableProps}
												{...provided.dragHandleProps}
												ref={provided.innerRef}
											>
												{previews[item.component]}
											</div>
										)}
									</Draggable>
								))}
								{provided.placeholder}
							</div>
						)}
					</Droppable>
				</DragDropContext>
			</div>
			<div style={{ color: colors.text2 }} className="w-4/6 h-auto min-h-full">
				<PreviewHeader />
				<DragDropContext onDragEnd={handleOnDrugEndRight}>
					<Droppable droppableId="rightSide">
						{(provided) => (
							<div {...provided.droppableProps} ref={provided.innerRef}>
								{rightSide.map((item, index) => (
									<Draggable
										key={`${item.id}`}
										draggableId={`${item.id}`}
										index={index}
										isDragDisabled={isContentEditable}
									>
										{(provided) => (
											<div
												{...provided.draggableProps}
												{...provided.dragHandleProps}
												ref={provided.innerRef}
											>
												{previews[item.component]}
											</div>
										)}
									</Draggable>
								))}
								{provided.placeholder}
							</div>
						)}
					</Droppable>
				</DragDropContext>
			</div>
		</div>
	)
});

export default Preview;