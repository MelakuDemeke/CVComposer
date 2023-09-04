"use client";
import { MdDynamicFeed } from 'react-icons/md';
import { CiEdit } from 'react-icons/ci';
import { FaLanguage } from 'react-icons/fa';
import { useState } from 'react';

const FeaturesDetail = () => {
	const [activeImage, setActiveImage] = useState('one');
	
	function onbuttonclick(buttonnum){
		setActiveImage(buttonnum);
	}

	return (
		<div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
			<div className="relative p-6 md:p-16">
				<div className="relative z-10 lg:grid lg:grid-cols-12 lg:gap-16 lg:items-center">
					<div className="mb-10 lg:mb-0 lg:col-span-6 lg:col-start-8 lg:order-2">
						<h2 className="text-2xl text-gray-800 font-bold sm:text-3xl dark:text-gray-200">
							Our 3 key features
						</h2>
						<nav className="grid gap-4 mt-5 md:mt-10">
							<button onClick={()=> onbuttonclick('one')} type="button" className="hs-tab-active:bg-white hs-tab-active:shadow-md hs-tab-active:hover:border-transparent text-left hover:bg-gray-200 p-4 md:p-5 rounded-xl dark:hs-tab-active:bg-slate-900 dark:hover:bg-gray-700 active" id="tabs-with-card-item-1" data-hs-tab="#tabs-with-card-1" aria-controls="tabs-with-card-1" role="tab">
								<span className="flex">
									<MdDynamicFeed className='w-16 h-16' />
									<span className="grow ml-6">
										<span className="block text-lg font-semibold hs-tab-active:text-blue-600 text-gray-800 dark:hs-tab-active:text-blue-500 dark:text-gray-200">Dynamic Content Input</span>
										<span className="block mt-1 text-gray-800 dark:hs-tab-active:text-gray-200 dark:text-gray-200">Design a user-friendly interface for inputting personal information, work experience, education, and skills with a dynamic drag-and-drop feature for seamless data entry.</span>
									</span>
								</span>
							</button>
						</nav>

						<nav className="grid gap-4 mt-5 md:mt-10">
							<button onClick={()=> onbuttonclick('two')} type="button" className="hs-tab-active:bg-white hs-tab-active:shadow-md hs-tab-active:hover:border-transparent text-left hover:bg-gray-200 p-4 md:p-5 rounded-xl dark:hs-tab-active:bg-slate-900 dark:hover:bg-gray-700 active" id="tabs-with-card-item-1" data-hs-tab="#tabs-with-card-1" aria-controls="tabs-with-card-1" role="tab">
								<span className="flex">
									<CiEdit className='w-16 h-16' />
									<span className="grow ml-6">
										<span className="block text-lg font-semibold hs-tab-active:text-blue-600 text-gray-800 dark:hs-tab-active:text-blue-500 dark:text-gray-200">Real-Time Preview and Editing</span>
										<span className="block mt-1 text-gray-800 dark:hs-tab-active:text-gray-200 dark:text-gray-200">Offer real-time CV preview and editing with spell-check, formatting, and section rearrangement options for customization.</span>
									</span>
								</span>
							</button>
						</nav>

						<nav className="grid gap-4 mt-5 md:mt-10">
							<button onClick={()=> onbuttonclick('three')} type="button" className="hs-tab-active:bg-white hs-tab-active:shadow-md hs-tab-active:hover:border-transparent text-left hover:bg-gray-200 p-4 md:p-5 rounded-xl dark:hs-tab-active:bg-slate-900 dark:hover:bg-gray-700 active" id="tabs-with-card-item-1" data-hs-tab="#tabs-with-card-1" aria-controls="tabs-with-card-1" role="tab">
								<span className="flex">
									<FaLanguage className='w-16 h-16' />
									<span className="grow ml-6">
										<span className="block text-lg font-semibold hs-tab-active:text-blue-600 text-gray-800 dark:hs-tab-active:text-blue-500 dark:text-gray-200">Language Localization</span>
										<span className="block mt-1 text-gray-800 dark:hs-tab-active:text-gray-200 dark:text-gray-200">Offer the option to switch between different languages or regional formats to cater to a diverse user base.</span>
									</span>
								</span>
							</button>
						</nav>

					</div>
					<div className='lg:col-span-6'>
						<div className="relative">
							<div>
								<div className={activeImage !== 'one' ? 'hidden' : ''}  id="tabs-with-card-1" role="tabpanel" aria-labelledby="tabs-with-card-item-1">
									<img className="shadow-xl shadow-gray-200 rounded-xl dark:shadow-gray-900/[.2]" src="/features/dynamicedit.png" alt="Image Description" />
								</div>

								<div className={activeImage !== 'two' ? 'hidden' : ''} id="tabs-with-card-2"  role="tabpanel" aria-labelledby="tabs-with-card-item-2">
									<img className="shadow-xl shadow-gray-200 rounded-xl dark:shadow-gray-900/[.2]" src="/features/liveedit.png" alt="Image Description" />
								</div>

								<div className={activeImage !== 'three' ? 'hidden' : ''} id="tabs-with-card-3"  role="tabpanel" aria-labelledby="tabs-with-card-item-3">
									<img className="shadow-xl shadow-gray-200 rounded-xl dark:shadow-gray-900/[.2]" src="/features/dynamicedit.png" alt="Image Description" />
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="absolute inset-0 grid grid-cols-12 w-full h-full">
					<div class="col-span-full lg:col-span-7 lg:col-start-6 bg-gray-100 w-full h-5/6 rounded-xl sm:h-3/4 lg:h-full dark:bg-white/[.075]">
					</div>
				</div>
			</div>
		</div>
	)
}

export default FeaturesDetail;
