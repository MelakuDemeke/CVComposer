import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

const Team = () => {
  return (
    <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div class="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
        <h2 class="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">Our Team</h2>
        <p class="mt-1 text-gray-600 dark:text-gray-400">Creative people</p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

        <div class="flex flex-col rounded-xl p-4 md:p-6 shadow-md bg-white border border-gray-200 dark:bg-slate-900 dark:border-gray-700">
          <div class="flex items-center gap-x-4">
            <img class="rounded-full w-20 h-20" src="https://avatars.githubusercontent.com/u/38818398?v=4" alt="Melaku Image" />
            <div class="grow">
              <h3 class="font-medium text-gray-800 dark:text-gray-200">
                Melaku Demeke
              </h3>
              <p class="text-xs uppercase text-gray-500">
                Software Developer
              </p>
            </div>
          </div>
          <p class="mt-3 text-gray-500">
            I am an ambitious workaholic, but apart from that, pretty simple person.
          </p>
          <div class="mt-3 space-x-1">
            <a class="inline-flex justify-center items-center text-gray-500 border border-gray-200 w-8 h-8 rounded-md hover:text-gray-800 hover:shadow-sm dark:hover:text-gray-200 dark:border-gray-700 dark:hover:shadow-slate-700/[.7]" href="https://twitter.com/m314ku" target='_blank'>
              <FaTwitter />
            </a>
            <a class="inline-flex justify-center items-center text-gray-500 border border-gray-200 w-8 h-8 rounded-md hover:text-gray-800 hover:shadow-sm dark:hover:text-gray-200 dark:border-gray-700 dark:hover:shadow-slate-700/[.7]" href="#">
              <FaGithub />
            </a>
            <a class="inline-flex justify-center items-center text-gray-500 border border-gray-200 w-8 h-8 rounded-md hover:text-gray-800 hover:shadow-sm dark:hover:text-gray-200 dark:border-gray-700 dark:hover:shadow-slate-700/[.7]" href="#">
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Team;