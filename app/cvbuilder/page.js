"use client";
import Form from '@/components/Form/Form'
import Preview from '@/components/Preview/Preview'
import { useEffect, useRef } from 'react'
import { useReactToPrint } from 'react-to-print';
import { useSelector } from 'react-redux';

export default function Home() {
	const { language } = useSelector((state) => state.language);

	const printRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => printRef.current,
  });

	useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

	return (
		<main className="min-h-screen h-auto lg:h-screen flex flex-wrap overflow-hidden">
			<Form  handlePrint={handlePrint}/>
			<div className='w-full lg:w-3/5'>
				<Preview ref={printRef}/>
			</div>
		</main>
	)
}
