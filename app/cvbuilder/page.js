import Features from '@/components/Features'
import Form from '@/components/Form/Form'
import Hero from '@/components/Hero'
import Preview from '@/components/Preview/Preview'
import Stats from '@/components/Stats'
import Testimonials from '@/components/Testimonials'

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
