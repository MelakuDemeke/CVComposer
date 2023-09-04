import {MdDynamicFeed} from 'react-icons/md';
import {CiEdit} from 'react-icons/ci';

const FeaturesDetail = () => {
	return (
		<div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
			<div className="relative p-6 md:p-16">
				<div class="relative z-10 lg:grid lg:grid-cols-12 lg:gap-16 lg:items-center">
					<div class="mb-10 lg:mb-0 lg:col-span-6 lg:col-start-8 lg:order-2">
						<h2 class="text-2xl text-gray-800 font-bold sm:text-3xl dark:text-gray-200">
							Our 3 key features
						</h2>
						<nav class="grid gap-4 mt-5 md:mt-10">
							<button type="button" class="hs-tab-active:bg-white hs-tab-active:shadow-md hs-tab-active:hover:border-transparent text-left hover:bg-gray-200 p-4 md:p-5 rounded-xl dark:hs-tab-active:bg-slate-900 dark:hover:bg-gray-700 active" id="tabs-with-card-item-1" data-hs-tab="#tabs-with-card-1" aria-controls="tabs-with-card-1" role="tab">
								<span class="flex">
									<MdDynamicFeed className='w-16 h-16'/>
									<span class="grow ml-6">
										<span class="block text-lg font-semibold hs-tab-active:text-blue-600 text-gray-800 dark:hs-tab-active:text-blue-500 dark:text-gray-200">Dynamic Content Input</span>
										<span class="block mt-1 text-gray-800 dark:hs-tab-active:text-gray-200 dark:text-gray-200">Design a user-friendly interface for inputting personal information, work experience, education, and skills with a dynamic drag-and-drop feature for seamless data entry.</span>
									</span>
								</span>
							</button>
						</nav>

						<nav class="grid gap-4 mt-5 md:mt-10">
							<button type="button" class="hs-tab-active:bg-white hs-tab-active:shadow-md hs-tab-active:hover:border-transparent text-left hover:bg-gray-200 p-4 md:p-5 rounded-xl dark:hs-tab-active:bg-slate-900 dark:hover:bg-gray-700 active" id="tabs-with-card-item-1" data-hs-tab="#tabs-with-card-1" aria-controls="tabs-with-card-1" role="tab">
								<span class="flex">
									<CiEdit className='w-16 h-16'/>
									<span class="grow ml-6">
										<span class="block text-lg font-semibold hs-tab-active:text-blue-600 text-gray-800 dark:hs-tab-active:text-blue-500 dark:text-gray-200">Real-Time Preview and Editing</span>
										<span class="block mt-1 text-gray-800 dark:hs-tab-active:text-gray-200 dark:text-gray-200">Offer real-time CV preview and editing with spell-check, formatting, and section rearrangement options for customization.</span>
									</span>
								</span>
							</button>
						</nav>

					</div>
				</div>
			</div>
		</div>
	)
}

export default FeaturesDetail;
