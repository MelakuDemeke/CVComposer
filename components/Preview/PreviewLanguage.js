import React from "react"
import { useSelector } from "react-redux"
import { useWords } from "@/hooks"

const PreviewLanguage = () => {
	const { languages } = useSelector((state) => state.form);
  const { colors } = useSelector((state) => state.site);
  const words = useWords();

	let items;

	if (languages.length !== 0) {
    items = React.Children.toArray(
      languages.map((item) => (
        <div className="flex justify-between">
          <strong>{item.name}</strong> {item.level}
        </div>
      ))
    );
  }
	return (
		<div className="flex flex-col w-full">
			{languages.length !== 0 && (
        <>
          <div
            className="p-2 mb-4 mt-4 font-bold text-center tracking-widest"
            style={{ background: colors.primary, color: colors.titles }}
          >
            {words.languages_upper}
          </div>
          {items}
        </>
      )}
		</div>
	)
}

export default PreviewLanguage;
