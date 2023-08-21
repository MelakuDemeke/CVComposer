"use client";
import React from "react";
import Image from 'next/image';
import ThemeSwitcher from "@/app/ThemeSwitcher";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from 'next/navigation'

const Header = () => {
	const [openMenu, setOpenMenu] = useState(false);

	const handleMenuToggle = () => {
		setOpenMenu((prevState) => !prevState);
	};
	const currentRoute = usePathname()

	return (
		<header className="flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full bg-white border-b border-gray-200 text-sm py-3 sm:py-0 dark:bg-gray-800 dark:border-gray-700">
			<nav className="relative max-w-7xl w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8" aria-label="Global">
				<div className="flex items-center justify-between">
					<a className="flex-none text-xl font-semibold dark:text-white" href="#" aria-label="Brand">
						<p>CVComposer</p>
					</a>
					<div className="sm:hidden">
						<button onClick={handleMenuToggle} className={` hs-collapse-toggle p-2 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800`} data-hs-collapse="#navbar-collapse-with-animation" aria-controls="navbar-collapse-with-animation" aria-label="Toggle navigation">
							{openMenu ? (<svg className="hs-collapse-open:hidden w-4 h-4" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
								<path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
							</svg>) : (<svg className="hs-collapse-open:hidden w-4 h-4" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
								<path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
							</svg>)}
						</button>
					</div>
				</div>
				<div id="navbar-collapse-with-animation" className={`hs-collapse ${openMenu ? '' : 'hidden'} overflow-hidden transition-all duration-300 basis-full grow sm:block`}>
					<div className="flex flex-col gap-y-4 gap-x-0 mt-5 sm:flex-row sm:items-center sm:justify-end sm:gap-y-0 sm:gap-x-7 sm:mt-0 sm:pl-7">
						<Link className={`${currentRoute === '/' ? "text-blue-600 dark:text-blue-500" : "text-gray-500 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500"} font-medium  sm:py-6 `} href="/" aria-current="page">Home</Link>
						<ThemeSwitcher />
					</div>
				</div>
			</nav>
		</header>
	);
};
export default Header;