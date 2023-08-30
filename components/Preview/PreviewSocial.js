import React from "react";
import { useSelector } from "react-redux";
import { useWords } from "@/hooks";
import { use } from "react";

const PreviewSocial = () => {
	const {social} = useSelector((state) => state.form);
	const {colors} = useSelector((state) => state.site);
	const words = useWords();

	let items;

	return (
		<div>
			
		</div>   
    )
}

export default PreviewSocial;