import Card from "../Card/Card";
import { Formik, Form } from "formik"
import { Input, Select} from "../FormComponents"
import { useDispatch, useSelector } from "react-redux";
import { setSkills } from "@/app/GlobalRedux/form";
import { nanoid } from "nanoid";
import CardDetail from "../FormComponents/CardDetail";
import { Buttons } from "../FormComponents/Buttons";
import { useWords } from "@/hooks";

const FormSkills = ({handleResetData}) => {
	const dispatch = useDispatch();
	const {skills} = useSelector((state) => state.form);
	const words = useWords();

	return (
		<Card>

		</Card>
	)
}

export default FormSkills
