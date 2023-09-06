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
		<div onClick={handleLanguage} className="bg-gray-500 mb-2 rounded-sm lg:bg-dark flex items-center text-xs text-white tracking-widest cursor-pointer">
			<ReactCountryFlag
        countryCode={language === "en" ? "ET" : "GB"}
        style={{
          fontSize: "22px",
          width: "auto",
        }}
        svg
      />
      <span className="px-1">{words[language]["set_language"]}</span>
		</div>
	)
}

export default Language;
