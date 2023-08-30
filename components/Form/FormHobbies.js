import Card from "../Card/Card";
import { useDispatch, useSelector } from "react-redux";
import { setHobbies } from "@/app/GlobalRedux/form";
import { nanoid } from "nanoid";
import CardDetail from "../FormComponents/CardDetail";
import { Buttons } from "../FormComponents/Buttons";

const FormHobbies = ({ handleResetData }) => {
	const dispatch = useDispatch();
  const { hobbies } = useSelector((state) => state.form);
  const words = useWords();

	return (
		<Card title={words.hobbies}>
			
		</Card>
	)
}

export default FormHobbies;
