"use client"
import { useDispatch } from "react-redux";
import FormPersonal from "./FormPersonal";
import FormSocial from "./FormSocial";
import FormLanguage from "./FormLanguage";
import FormHobbies from "./FormHobbies";
import FormEducation from "./FormEducation";
import FormExperience from "./FormExperience";
import FormTools from "./FormTools";
import FormSkills from "./FormSkills";
import FormCourses from "./FormCourses";
import FormProjects from "./FormProjects";

const Form = ({handlePrint}) => {
	const dispatch = useDispatch();
	const handleResetData = (setter) => {
		dispatch(setter([]));
	};

	return (
		<div className="bg-slate-100 dark:bg-gray-900 w-full lg:w-2/5 h-full flex flex-col items-start justify-start overflow-scroll p-5 xl:p-10">
			<FormTools handlePrint={handlePrint}/>
			<FormPersonal />
			<FormSocial handleResetData={handleResetData} />
			<FormEducation handleResetData={handleResetData} />
			<FormCourses handleResetData={handleResetData} />
			<FormExperience handleResetData={handleResetData} />
			<FormProjects handleResetData={handleResetData} />
			<FormLanguage handleResetData={handleResetData} />
			<FormHobbies handleResetData={handleResetData} />
			<FormSkills handleResetData={handleResetData} />
		</div>
	)
}

export default Form;
