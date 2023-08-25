const Footer = () => {
	return (
		<footer className="w-full max-w-[85rem] py-10 px-4 sm:px-6 lg:px-8 mx-auto border-t-2 border-gray-300 dark:border-gray-600">
			<div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 mb-10">
				<div class="col-span-full hidden lg:col-span-1 lg:block">
					<a class="flex-none text-xl font-semibold dark:text-white" href="#" aria-label="Brand">CVComposer</a>
					<p class="mt-3 text-xs sm:text-sm text-gray-600 dark:text-gray-400">© 2023 ALX</p>
				</div>
			</div>
		</footer>
	);
}

export default Footer;