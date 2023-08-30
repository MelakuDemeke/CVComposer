import { useDispatch } from "react-redux";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const CardDetail = ({data, setter, print}) => {
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

	if (data.length !== 0){
		return (
			<div className="mx-2 mt-4 flex flex-col">
				<hr className="mb-4"/>

			</div>
			)
	}
}

export default CardDetail;
