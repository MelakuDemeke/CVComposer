import React from "react"
import { useSelector } from "react-redux"
import { useWords } from "@/hooks"

const PreviewLanguage = () => {
	const { languages } = useSelector((state) => state.form);
  const { colors } = useSelector((state) => state.site);
  const words = useWords();

	return (
		<div className="flex flex-col w-full">

		</div>
	)
}