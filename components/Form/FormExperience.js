const { default: Card } = require("../Card/Card")
import { Formik, Form } from "formik";
import { Input, Textarea } from "../FormComponents";
import { nanoid } from "nanoid";
import { useDispatch, useSelector } from "react-redux";
import { setExperience } from "@/app/GlobalRedux/form";
import CardDetail from "../FormComponents/CardDetail";
import { Buttons } from "../FormComponents/Buttons";
import { useWords } from "@/hooks";

const FormExperience = ({ handleResetData }) => {
	return (
		<Card>

		</Card>
	)
}

export default FormExperience;
