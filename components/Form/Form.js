"use client"
import { useDispatch } from "react-redux";
import FormPersonal from "./FormPersonal";
import FormSocial from "./FormSocial";

const Form = () => {
	const dispatch = useDispatch();
	const handleResetData = (setter) => {
    dispatch(setter([]));
  };

	return (
		<div className="bg-slate-100 dark:bg-gray-900 w-full lg:w-2/5 h-full flex flex-col items-start justify-start overflow-auto p-5 xl:p-10">
			<FormPersonal />
			<FormSocial handleResetData={handleResetData}/>
		</div>
	)
}

export default Form;
