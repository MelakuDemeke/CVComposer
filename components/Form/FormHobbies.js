import Card from "../Card/Card";
import { useDispatch, useSelector } from "react-redux";
import { setHobbies } from "@/app/GlobalRedux/form";
import { nanoid } from "nanoid";
import CardDetail from "../FormComponents/CardDetail";
import { Buttons } from "../FormComponents/Buttons";
import { useWords } from "@/hooks";
import { Formik, Form } from "formik";
import { Input } from "../FormComponents";

const FormHobbies = ({ handleResetData }) => {
	const dispatch = useDispatch();
	const { hobbies } = useSelector((state) => state.form);
	const words = useWords();

	return (
		<Card title={words.hobbies}>
			<Formik
				// validationSchema={HobbiesSchema}
				initialValues={{
					name: "",
				}}
				onSubmit={(values, actions) => {
					dispatch(
						setHobbies([
							...hobbies,
							{
								_id: nanoid(),
								name: values.name,
							},
						])
					);
					actions.resetForm();
				}}
			>
				{({ handleSubmit, handleReset, handleChange, values, dirty }) => (
					<Form onSubmit={handleSubmit} autoComplete="off" role="presentation">
						<Input
							onChange={handleChange}
							value={values.name}
							name="name"
							placeholder={words.hobby}
							sizeFull={true}
						/>
						<Buttons
							dirty={dirty}
							handleReset={handleReset}
							handleResetData={handleResetData}
							setter={setHobbies}
							state={hobbies}
						/>
					</Form>
				)}
			</Formik>
			<CardDetail data={hobbies} setter={setHobbies} print={["name"]} />
		</Card>
	)
}

export default FormHobbies;
