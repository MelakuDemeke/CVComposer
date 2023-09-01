import Card from "../Card/Card"
import { Formik, Form } from "formik";
import { Input } from "../FormComponents";
import { useDispatch, useSelector } from "react-redux";
import { setProjects } from "@/app/GlobalRedux/form";
import { nanoid } from "nanoid";
import CardDetail from "../FormComponents/CardDetail";
import { Buttons } from "../FormComponents/Buttons";
import { useWords } from "@/hooks";
import Textarea from "../FormComponents/Textarea";

const FormProjects = ({ handleResetData }) => {
	const dispatch = useDispatch();
	const { projects } = useSelector((state) => state.form);
	const words = useWords();

	return (
		<Card title={words.projects}>
			<Formik
				// validationSchema={ProjectsSchema}
				initialValues={{
					name: "",
					link: "",
					description: "",
				}}
				onSubmit={(values, actions) => {
					dispatch(
						setProjects([
							...projects,
							{
								_id: nanoid(),
								...values,
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
							placeholder={words.project}
						/>
						<Input
							onChange={handleChange}
							value={values.link}
							name="link"
							placeholder={words.link}
						/>
						<Textarea
							rows={3}
							onChange={handleChange}
							value={values.description}
							name="description"
							placeholder={words.description}
						/>
						<Buttons
							dirty={dirty}
							handleReset={handleReset}
							handleResetData={handleResetData}
							setter={setProjects}
							state={projects}
						/>
					</Form>
				)}
			</Formik>
			<CardDetail
				data={projects}
				setter={setProjects}
				print={["name", "link"]}
			/>
		</Card>
	);
}

export default FormProjects;
