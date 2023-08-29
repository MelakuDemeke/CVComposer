import { useWords } from "@/hooks";
import Card from "../Card/Card";
import { Formik, Form } from "formik";
import { useDispatch, useSelector } from "react-redux";

const FormSocial = () => {
	const dispatch = useDispatch();
	const { social } = useSelector((state) => state.form);
	const words = useWords();

	return (
		<Card title={words.social}>
		</Card>
	)
}

export default FormSocial;