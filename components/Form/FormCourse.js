const { default: Card } = require("../Card/Card")
import { Formik, Form } from "formik"
import { Input, Textarea } from "../FormComponents"
import { useDispatch, useSelector } from "react-redux"
import { setCourses } from "@/app/GlobalRedux/form"
import nanoid from "nanoid"
import CardDetail from "../FormComponents/CardDetail"
import { Buttons } from "../FormComponents/Buttons"
import { useWords } from "@/hooks"


const FormCourse = ({handleResetData}) => {
	const dispatch = useDispatch();
  const { courses } = useSelector((state) => state.form);
  const words = useWords();

	return (
		<Card title={words.courses}>
      <Formik
        // validationSchema={CoursesSchema}
        initialValues={{
          name: "",
          company: "",
          description: "",
          from: "",
          to: "",
        }}
        onSubmit={(values, actions) => {
          dispatch(
            setCourses([
              {
                _id: nanoid(),
                ...values,
              },
              ...courses,
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
              placeholder={words.course}
            />
            <Input
              onChange={handleChange}
              value={values.company}
              name="company"
              placeholder={words.company}
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
              setter={setCourses}
              state={courses}
            />
          </Form>
        )}
      </Formik>
      <CardDetail
        data={courses}
        setter={setCourses}
        print={["name", "company"]}
      />
    </Card>
	)
}

export default FormCourse
