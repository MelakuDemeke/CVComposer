const Testimonials = () => {
	return (
		<div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
			<div class="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
				<h2 class="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">Testimonials</h2>
			</div>
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
				<div className="flex flex-col  bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700">
					<div className="flex-auto p-4 md:p-6">
						<p className="mt-3 sm:mt-6 text-base text-gray-800 md:text-xl dark:text-white">
							<em>
								" I was thoroughly impressed with the CV design service provided. They transformed my plain CV into a visually appealing and professional document. Thanks to their expertise, I landed my dream job. Highly recommended!"
							</em>
						</p>
						<div className="p-4 rounded-b-xl md:px-6">
							<h3 className="text-sm font-semibold text-gray-800 sm:text-base dark:text-gray-200">
								Melaku Demeke
							</h3>
							<p className="text-sm text-gray-500">
								Backend Software Developer
							</p>
						</div>
					</div>
				</div>

				<div className="flex flex-col  bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700">
					<div className="flex-auto p-4 md:p-6">
						<p className="mt-3 sm:mt-6 text-base text-gray-800 md:text-xl dark:text-white">
							<em>
								" CVComposer exceeded my expectations. They not only created a stunning CV but also highlighted my skills and experience effectively. Their attention to detail is exceptional. I'm extremely satisfied!"
							</em>
						</p>
						<div className="p-4 rounded-b-xl md:px-6">
							<h3 className="text-sm font-semibold text-gray-800 sm:text-base dark:text-gray-200">
								Muluken Malako
							</h3>
							<p className="text-sm text-gray-500">
								Frontend Software Developer
							</p>
						</div>
					</div>
				</div>

				<div className="flex flex-col  bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700">
					<div className="flex-auto p-4 md:p-6">
						<p className="mt-3 sm:mt-6 text-base text-gray-800 md:text-xl dark:text-white">
							<em>
								" I can't thank CVComposer enough for their outstanding service. They took the time to understand my career goals and tailored my CV accordingly."
							</em>
						</p>
						<div className="p-4 rounded-b-xl md:px-6">
							<h3 className="text-sm font-semibold text-gray-800 sm:text-base dark:text-gray-200">
								Getenet Legese
							</h3>
							<p className="text-sm text-gray-500">
								QA Engineer
							</p>
						</div>
					</div>
				</div>


			</div>
		</div>
	)
}

export default Testimonials;