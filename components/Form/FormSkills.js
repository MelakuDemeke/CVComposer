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
			<Formik
        // validationSchema={SkillsSchema}
        initialValues={{
          name: "",
          level: "",
        }}
        onSubmit={(values, actions) => {
          dispatch(
            setSkills([
              ...skills,
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
              placeholder={words.skill}
            />
            <Select
              label={words.level}
              name="level"
              options={[
                { key: "1", value: "10 / 100" },
                { key: "2", value: "20 / 100" },
                { key: "3", value: "30 / 100" },
                { key: "4", value: "40 / 100" },
                { key: "5", value: "50 / 100" },
                { key: "6", value: "60 / 100" },
                { key: "7", value: "70 / 100" },
                { key: "8", value: "80 / 100" },
                { key: "9", value: "90 / 100" },
                { key: "10", value: "100 / 100" },
              ]}
            />
            <Buttons
              dirty={dirty}
              handleReset={handleReset}
              handleResetData={handleResetData}
              setter={setSkills}
              state={skills}
            />
          </Form>
        )}
      </Formik>
      <CardDetail data={skills} setter={setSkills} print={["name", "level"]} />
		</Card>
	)
}

export default FormSkills
