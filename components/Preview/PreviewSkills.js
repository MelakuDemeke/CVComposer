import React from "react";
import { useSelector } from "react-redux";
import { FaCircle, FaRegCircle } from "react-icons/fa";
import { useWords } from "@/hooks";

const PreviewSkills = () => {
	const { skills } = useSelector((state) => state.form);
	const { colors } = useSelector((state) => state.site);
	const words = useWords();

	let items;

	if (skills.length !== 0) {
		items = React.Children.toArray(
			skills.map((item) => {
				const levels = [];
				for (let index = 1; index <= item.level; index++) {
					levels.push(React.Children.toArray(<FaCircle />));
				}
				for (let index = item.level; index < 10; index++) {
					levels.push(React.Children.toArray(<FaRegCircle />));
				}
				return (
					<div className="flex flex-col mb-3">
						<div className="flex flex-wrap justify-between items-center">
							<strong>{item.name}</strong>
							<span className="flex gap-x-[2px]">{levels}</span>
						</div>
					</div>
				);
			})
		);
	}
	return (
		<div className="flex flex-col w-full px-6 mt-2">
			{skills.length !== 0 && (
        <>
          <div
            className="p-2 mb-4 mt-4 font-bold text-center tracking-widest"
            style={{ background: colors.primary, color: colors.titles }}
          >
            {words.skills_upper}
          </div>
          {items}
        </>
      )}
		</div>
	)
}
export default PreviewSkills;
