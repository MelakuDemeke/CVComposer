import { useWords } from "@/hooks";
import Card from "../Card/Card";
import { Formik, Form } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { nanoid } from "nanoid";
import { Select, Input } from "../FormComponents";
import { Buttons } from "../FormComponents/Buttons";
import { setSocial } from "@/app/GlobalRedux/form";


const FormSocial = () => {
	const dispatch = useDispatch();
	const { social } = useSelector((state) => state.form);
	const words = useWords();

	return (
		<Card title={words.social}>
			<Formik
				initialValues={{
					name: "",
					link: "",
				}}
				onSubmit={(values, actions) => {
					dispatch(
						setSocial([
							...social,
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
						<Select
							label="Type"
							name="name"
							options={[
								{ key: "Twitter", value: words.twitter_username },
								{ key: "Github", value: words.github_username },
								{ key: "LinkedIn", value: words.linkedin_username },
								{ key: "Website", value: words.personal_website },
								{ key: "URL", value: words.external_url },
							]}
						/>
						<Input
							onChange={handleChange}
							value={values.link}
							name="link"
							placeholder={words.username_or_url}
						/>
						<Buttons
							dirty={dirty}
							handleReset={handleReset}
							// handleResetData={handleResetData}
							setter={setSocial}
							state={social}
						/>
					</Form>
				)}
			</Formik>
			
		</Card>
	)
}

export default FormSocial;