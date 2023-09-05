import { FaTwitter, FaGithub, FaLinkedin } from 'react-icons/fa';
import Team from './Team';

const About = () => {
	return (
		<div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
			<div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
				<h2 className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">About Us</h2>
			</div>
			<div className="lg:grid lg:grid-cols-12 lg:gap-16 lg:items-center lg:justify-between">
				<div className="lg:col-span-5 lg:col-start-1">
					<div className="mb-8">
						<h2 className="mb-2 text-3xl text-gray-800 font-bold lg:text-4xl dark:text-gray-200">
							Inspiration
						</h2>
						<p className="text-gray-600 dark:text-gray-400 text-justify">
							CVComposer is more than a <a>Holberton School</a>  project; it's a personal mission inspired by my own job-hunting experience. Crafting the perfect CV and Cover Letter can be challenging, and I've been there. This project was born from a desire to simplify this process for everyone. I believe that everyone deserves the chance to present their skills effectively, and CVComposer is my way of making that happen.
						</p>
					</div>
				</div>
				<Team />
			</div>
		</div>
	);
}

export default About;