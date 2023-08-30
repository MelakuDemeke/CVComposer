import React from "react";
import { useSelector } from "react-redux";
import { useWords } from "@/hooks";

const PreviewEducation = () => {
	const { education } = useSelector((state) => state.form);
	const { colors } = useSelector((state) => state.site);
	const words = useWords();

	let items;

	if (education.length !== 0) {
		items = React.Children.toArray(
			education.map((item) => (
				<div className="flex flex-col mb-4">
					<div className="flex flex-wrap justify-between">
						<strong>
							{item.degree} / {item.subject}
						</strong>
						<span>
							{item.from} - {item.to}
						</span>
					</div>
					<div>
						{item.school}, {item.city}
					</div>
				</div>
			))
		);
	}

	return (
		<div className="flex flex-col w-full px-6 mt-2">
			{education.length !== 0 && (
				<>
					<div
						className="p-2 mb-4 mt-4 font-bold text-center tracking-widest"
						style={{ background: colors.primary, color: colors.titles }}
					>
						{words.education_upper}
					</div>
					{items}
				</>
			)}
		</div>
	)
}

export default PreviewEducation;
