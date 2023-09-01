import React from "react";
import { useSelector } from "react-redux";
import { useWords } from "@/hooks";

const PreviewCourses = () => {
	const { courses } = useSelector((state) => state.form);
	const { colors } = useSelector((state) => state.site);
	const words = useWords();

	let items;

	if (courses.length !== 0) {
		items = React.Children.toArray(
			courses.map((item) => (
				<div className="flex flex-col mb-4">
					<div className="flex flex-wrap justify-between">
						<strong>{item.name}</strong>
						<span>
							{item.from} - {item.to}
						</span>
					</div>
					<div>{item.company}</div>
					<div className="text-sm">{item.description}</div>
				</div>
			))
		);
	}

	return (
		<div className="flex flex-col w-full px-6 mt-2">
			{courses.length !== 0 && (
				<>
					<div
						className="p-2 mb-4 mt-4 font-bold text-center tracking-widest"
						style={{ background: colors.primary, color: colors.titles }}
					>
						{words.courses_upper}
					</div>
					{items}
				</>
			)}
		</div>
	);
}

export default PreviewCourses
