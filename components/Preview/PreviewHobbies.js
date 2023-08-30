import React from 'react'
import { useWords } from '@/hooks'
import { useSelector } from "react-redux"


const PreviewHobbies = () => {
	const { hobbies } = useSelector((state) => state.form);
  const { colors } = useSelector((state) => state.site);
  const words = useWords();

	let items;

  if (hobbies.length !== 0) {
    items = React.Children.toArray(
      hobbies.map((item) => (
        <div className="flex">
          <strong>{item.name}</strong>
        </div>
      ))
    );
  }

	return (
		<div className='flex flex-col w-full'>
			{hobbies.length !== 0 && (
        <>
          <div
            className="p-2 mb-4 mt-4 font-bold text-center tracking-widest"
            style={{ background: colors.primary, color: colors.titles }}
          >
            {words.hobbies_upper}
          </div>
          {items}
        </>
      )}
		</div>
	)
}

export default PreviewHobbies
