"use client"
import { useDispatch } from "react-redux";
import FormPersonal from "./FormPersonal";
import FormSocial from "./FormSocial";
import FormLanguage from "./FormLanguage";
import FormHobbies from "./FormHobbies";
import FormEducation from "./FormEducation";
import FormExperience from "./FormExperience";

const Form = () => {
	const dispatch = useDispatch();
	const handleResetData = (setter) => {
		dispatch(setter([]));
	};

	return (
		<div className="bg-slate-100 dark:bg-gray-900 w-full lg:w-2/5 h-full flex flex-col items-start justify-start overflow-auto p-5 xl:p-10">
			<FormPersonal />
			<FormSocial handleResetData={handleResetData} />
			<FormLanguage handleResetData={handleResetData} />
			<FormHobbies handleResetData={handleResetData} />
			<FormEducation handleResetData={handleResetData} />,
			<FormExperience handleResetData={handleResetData} />
		</div>
	)
}

export default Form;
