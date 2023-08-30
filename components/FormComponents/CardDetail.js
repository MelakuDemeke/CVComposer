import { useDispatch } from "react-redux";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import {FaTimes} from "react-icons/fa";
import React from "react";

const CardDetail = ({ data, setter, print }) => {
	const dispatch = useDispatch();
	const handleRemoveItem = (id) => {
		dispatch(setter(data.filter((item) => item._id !== id)));
	};

	const handleOnDrugEnd = (result) => {
		if (!result.destination) return;
		const items = Array.from(data);
		const [reorderedItem] = items.splice(result.source.index, 1);
		items.splice(result.destination.index, 0, reorderedItem);
		dispatch(setter(items));
	};

	if (data.length !== 0) {
		return (
			<div className="mx-2 mt-4 flex flex-col">
				<hr className="mb-4" />
				<DragDropContext onDragEnd={handleOnDrugEnd}>
					<Droppable droppableId="details">
						{(provided) => (
							<div
								{...provided.droppableProps}
								ref={provided.innerRef}
							>
								{React.Children.toArray(
									data.map((item, index) => {
										let result = "";

										return (
											<Draggable
												key={`${item._id}`}
												draggableId={`${item._id}`}
												index={index}
											>
												{(provided) => (
													<div
														{...provided.draggableProps}
														{...provided.dragHandleProps}
														ref={provided.innerRef}
													>
														<div className="flex justify-between items-center p-2 border-b-2 border-b-primary text-white">
															<div className="w-full flex flex-wrap items-center gap-x-3 pr-5">
																{React.Children.toArray(
																	print.map((it) => {
																		return <span>{item[it]}</span>;
																	})
																)}
															</div>
															<FaTimes
																className="cursor-pointer"
																onClick={() => {
																	handleRemoveItem(item._id);
																}}
															/>
														</div>
													</div>
												)}
											</Draggable>
										);
									})
								)}

								{provided.placeholder}
							</div>
						)}
					</Droppable>
				</DragDropContext>
			</div>
		)
	}
}

export default CardDetail;
