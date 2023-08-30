import React from "react";
import { useWords } from "@/hooks";
import { useSelector } from "react-redux";

const PreviewExperience = () => {
	const { experience } = useSelector((state) => state.form);
  const { colors } = useSelector((state) => state.site);
  const words = useWords();

  let items;

  if (experience.length !== 0) {
    items = React.Children.toArray(
      experience.map((item) => (
        <div className="flex flex-col mb-4">
          <div className="flex flex-wrap justify-between">
            <strong>{item.position}</strong>
            <span>
              {item.from} - {item.to}
            </span>
          </div>
          <div>
            {item.company}, {item.city}
          </div>
          <div className="text-sm text-justify">{item.description}</div>
        </div>
      ))
    );
  }
	return (
		<div className="flex flex-col w-full px-6 mt-2">
			{experience.length !== 0 && (
        <>
          <div
            className="p-2 mb-4 mt-4 font-bold text-center tracking-widest"
            style={{ background: colors.primary, color: colors.titles }}
          >
            {words.experience_upper}
          </div>
          {items}
        </>
      )}
		</div>
	)
}

export default PreviewExperience;