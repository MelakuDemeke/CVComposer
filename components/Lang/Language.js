import { useDispatch, useSelector } from "react-redux";
import { setLanguage } from "@/app/GlobalRedux/language";
import ReactCountryFlag from "react-country-flag";

const Language = () => {
	const dispatch = useDispatch();
  const { words, language } = useSelector((state) => state.language);

  const handleLanguage = () => {
    dispatch(setLanguage(language === "en" ? "am" : "en"));
  };
	
	return (
		<div>

		</div>
	)
}

export default Language;
