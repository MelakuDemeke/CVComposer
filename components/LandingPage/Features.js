import { MdPhoneIphone } from "react-icons/md";
import { BsPalette2, BsFiletypePdf } from "react-icons/bs";
import { MdSupportAgent } from "react-icons/md";

const Features = () => {
	return (
		<div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
			<div class="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
				<h2 class="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">Why Choose Us</h2>
			</div>
			<div className="grid sm:grid-cols-2 lg:grid-cols-4 items-center gap-12">
				<div>
					<MdPhoneIphone className="w-9 h-9 text-gray-800 dark:text-white" />
					<div className="bg-gradient-to-r from-gray-200 to-white/0 h-0.5 mt-6 dark:from-gray-700 dark:to-slate-900/0">
						<div className="bg-gray-400 w-9 h-0.5"></div>
					</div>
					<div className="mt-5">
						<h3 className="text-lg font-semibold text-gray-800 dark:text-white">Responsive</h3>
						<p className="mt-1 text-gray-600 dark:text-gray-400">Responsive, and mobile-first project on the web</p>
					</div>
				</div>
				<div>
					<BsPalette2 className="w-9 h-9 text-gray-800 dark:text-white" />
					<div className="bg-gradient-to-r from-gray-200 to-white/0 h-0.5 mt-6 dark:from-gray-700 dark:to-slate-900/0">
						<div className="bg-gray-400 w-9 h-0.5"></div>
					</div>
					<div className="mt-5">
						<h3 className="text-lg font-semibold text-gray-800 dark:text-white">Customizable</h3>
						<p className="mt-1 text-gray-600 dark:text-gray-400">We allow flexible customization for your cv</p>
					</div>
				</div>
				<div>
					<BsFiletypePdf className="w-9 h-9 text-gray-800 dark:text-white" />
					<div className="bg-gradient-to-r from-gray-200 to-white/0 h-0.5 mt-6 dark:from-gray-700 dark:to-slate-900/0">
						<div className="bg-gray-400 w-9 h-0.5"></div>
					</div>
					<div className="mt-5">
						<h3 className="text-lg font-semibold text-gray-800 dark:text-white">PDF Download</h3>
						<p className="mt-1 text-gray-600 dark:text-gray-400">we will give you PDF version of your CV</p>
					</div>
				</div>
				<div>
					<MdSupportAgent className="w-9 h-9 text-gray-800 dark:text-white" />
					<div className="bg-gradient-to-r from-gray-200 to-white/0 h-0.5 mt-6 dark:from-gray-700 dark:to-slate-900/0">
						<div className="bg-gray-400 w-9 h-0.5"></div>
					</div>
					<div className="mt-5">
						<h3 className="text-lg font-semibold text-gray-800 dark:text-white">24/7 Support</h3>
						<p className="mt-1 text-gray-600 dark:text-gray-400">Contact us 24 hours a day, 7 days a week</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Features;
