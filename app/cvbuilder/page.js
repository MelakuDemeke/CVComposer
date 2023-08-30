"use client";
import Form from '@/components/Form/Form'
import Preview from '@/components/Preview/Preview'
import { useEffect, useRef } from 'react'

export default function Home() {
	return (
		<main className="min-h-screen h-auto lg:h-screen flex flex-wrap overflow-hidden">
			<Form />
			<div className='w-full lg:w-3/5'>
				<Preview />
			</div>
		</main>
	)
}
