import Card from "../Card/Card"
import { Formik, Form } from "formik";
import { Input } from "../FormComponents";
import { useDispatch, useSelector } from "react-redux";
import { setEducation } from "@/app/GlobalRedux/form";
import { nanoid } from "nanoid";
import CardDetail from "../FormComponents/CardDetail";
import { Buttons } from "../FormComponents/Buttons";
import { useWords } from "@/hooks";

const FormEducation = () => {
	return (
		<Card>

		</Card>
    )
}

export default FormEducation
