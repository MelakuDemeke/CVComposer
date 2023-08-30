import React from 'react'
import { useWords } from '@/hooks'
import { useSelector } from "react-redux"


const PreviewHobbies = () => {
	const { hobbies } = useSelector((state) => state.form);
  const { colors } = useSelector((state) => state.site);
  const words = useWords();

	return (
		<div className='flex flex-col w-full'>

		</div>
	)
}

export default PreviewHobbies
