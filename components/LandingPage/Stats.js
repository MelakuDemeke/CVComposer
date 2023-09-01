import React from 'react';
const Stats = () => {
	return (
		<>
			<div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
				<div className="grid items-center lg:grid-cols-12 gap-6 lg:gap-12">
					<div className="lg:col-span-4">
						<div className="lg:pr-6 xl:pr-12">
							<p className="text-6xl font-bold leading-10  text-gray-800 dark:text-white">
								0.1%
								<span className="ml-1 inline-flex items-center gap-x-1 bg-gray-200  font-medium  text-gray-800 text-xs leading-4 rounded-full py-0.5 px-2">
									+0.1% this month
								</span>
							</p>
							<p className="mt-2 sm:mt-3 text-gray-500">of Graduates create their cv with us</p>
						</div>
					</div>

					<div className="lg:col-span-8 relative lg:before:absolute lg:before:top-0 lg:before:-left-12 lg:before:w-px lg:before:h-full lg:before:bg-gray-200 lg:before:dark:bg-gray-700">
						<div className="grid gap-6 grid-cols-2 md:grid-cols-4 lg:grid-cols-3 sm:gap-8">
							<div>
								<p className="text-3xl font-semibold  text-gray-800 dark:text-white">2</p>
								<p className="mt-1 text-gray-500">CV Templates</p>
							</div>
							<div>
								<p className="text-3xl font-semibold  text-gray-800 dark:text-white">3</p>
								<p className="mt-1 text-gray-500">Active users</p>
							</div>
							<div>
								<p className="text-3xl font-semibold text-gray-800 dark:text-white">10</p>
								<p className="mt-1 text-gray-500">Downloads</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
export default Stats;