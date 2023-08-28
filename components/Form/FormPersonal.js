
import { Formik, Form } from "formik";
import {Input, Textarea, File } from "../FormComponents"
import Card from "../Card/Card";
import { Buttons } from "../FormComponents/Buttons";

const FormPersonal = () => {
	return (
		<Card title="Personal Information">
			<Formik
        initialValues={{
          nameSurname: "",
          title: "",
          photo: "",
          address: "",
          gsm: "",
          letter: "",
          description: "",
        }}
        onSubmit={(values) => {
          dispatch(
            setPersonal({
              ...values,
              photo: values.photo ? URL.createObjectURL(values.photo) : "",
            })
          );
        }}
			>
				{({ handleSubmit, handleReset, handleChange, values, dirty }) => (
          <Form onSubmit={handleSubmit} autoComplete="off" role="presentation">
            <Input
              onChange={handleChange}
              value={values.nameSurname}
              name="nameSurname"
              placeholder="Full Name"
            />
            <Input
              onChange={handleChange}
              value={values.title}
              name="title"
              placeholder="Title"
            />
            <File label="photo" name="photo" />
            <Input
              onChange={handleChange}
              value={values.address}
              name="address"
              placeholder="Address"
              sizeFull={true}
            />
            <Input
              onChange={handleChange}
              value={values.gsm}
              name="gsm"
              placeholder="Phone Number"
            />
            <Input
              onChange={handleChange}
              value={values.letter}
              name="letter"
              placeholder="Email Address"
            />
            <Textarea
              rows={5}
              onChange={handleChange}
              value={values.description}
              name="description"
              placeholder="About"
            />
            <Buttons
              dirty={dirty}
              handleReset={handleReset}
              // handleResetData={handleResetData}
              setter="Personal"
              state="Ethiop"
              isArray={false}
            />
          </Form>
        )}
			</Formik>
		</Card>
	)
}

export default FormPersonal;
