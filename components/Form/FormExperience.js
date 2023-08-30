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
	const dispatch = useDispatch();
  const { experience } = useSelector((state) => state.form);
  const words = useWords();

	return (
		<Card title={words.experience}>
			<Formik
        // validationSchema={ExperienceSchema}
        initialValues={{
          company: "",
          position: "",
          city: "",
          description: "",
          from: "",
          to: "",
        }}
        onSubmit={(values, actions) => {
          dispatch(
            setExperience([
              {
                _id: nanoid(),
                ...values,
              },
              ...experience,
            ])
          );
          actions.resetForm();
        }}
      >
        {({ handleSubmit, handleReset, handleChange, values, dirty }) => (
          <Form onSubmit={handleSubmit} autoComplete="off" role="presentation">
            <Input
              onChange={handleChange}
              value={values.company}
              name="company"
              placeholder={words.company}
              sizeFull={true}
            />
            <Input
              onChange={handleChange}
              value={values.position}
              name="position"
              placeholder={words.position}
            />
            <Input
              onChange={handleChange}
              value={values.city}
              name="city"
              placeholder={words.city}
            />
            <Input
              onChange={handleChange}
              value={values.from}
              name="from"
              placeholder={words.from}
            />
            <Input
              onChange={handleChange}
              value={values.to}
              name="to"
              placeholder={words.to}
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
              setter={setExperience}
              state={experience}
            />
          </Form>
        )}
      </Formik>
      <CardDetail
        data={experience}
        setter={setExperience}
        print={["company", "position"]}
      />
		</Card>
	)
}

export default FormExperience;
