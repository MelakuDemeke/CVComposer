const { default: Card } = require("../Card/Card")
import { Formik, Form } from "formik"
import { Input, Textarea } from "../FormComponents"
import { useDispatch, useSelector } from "react-redux"
import { setCourses } from "@/app/GlobalRedux/form"
import nanoid from "nanoid"
import CardDetail from "../FormComponents/CardDetail"
import { Buttons } from "../FormComponents/Buttons"


const FormCourse = () => {
	return (
		<Card>

		</Card>
	)
}

export default FormCourse
