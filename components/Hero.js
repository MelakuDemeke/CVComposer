import Image from 'next/image';

const Hero = () => {
	return (
		<div className='max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8'>
			<div className="grid lg:grid-cols-7 lg:items-center">
				<div className="lg:col-span-3">
					<h1 className="block text-3xl font-bold text-gray-800 sm:text-4xl md:text-5xl lg:text-6xl dark:text-white">Build your Dream CV</h1>
					<p className="mt-3 text-lg text-gray-800 dark:text-gray-400">Unlock Your Career Potential - Your Perfect CV Awaits with CVComposer</p>
				</div>

				<div className="lg:col-span-4 mt-10 lg:mt-0">
					<img className="w-full rounded-xl" src="/cvlist.png" alt="Image Description" />
				</div>
			</div>
		</div>
	)
}

export default Hero;