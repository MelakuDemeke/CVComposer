import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

const Team = () => {
  return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
        <h2 className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">Our Team</h2>
        <p className="mt-1 text-gray-600 dark:text-gray-400">Creative people</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

        <div className="flex flex-col rounded-xl p-4 md:p-6 shadow-md bg-white border border-gray-200 dark:bg-slate-900 dark:border-gray-700">
          <div className="flex items-center gap-x-4">
            <img className="rounded-full w-20 h-20" src="https://avatars.githubusercontent.com/u/38818398?v=4" alt="Melaku Image" />
            <div className="grow">
              <h3 className="font-medium text-gray-800 dark:text-gray-200">
                Melaku Demeke
              </h3>
              <p className="text-xs uppercase text-gray-500">
                Software Developer
              </p>
            </div>
          </div>
          <p className="mt-3 text-gray-500">
            I am an ambitious workaholic, but apart from that, pretty simple person.
          </p>
          <div className="mt-3 space-x-1">
            <a className="inline-flex justify-center items-center text-gray-500 border border-gray-200 w-8 h-8 rounded-md hover:text-gray-800 hover:shadow-sm dark:hover:text-gray-200 dark:border-gray-700 dark:hover:shadow-slate-700/[.7]" href="https://twitter.com/m314ku" target='_blank'>
              <FaTwitter />
            </a>
            <a className="inline-flex justify-center items-center text-gray-500 border border-gray-200 w-8 h-8 rounded-md hover:text-gray-800 hover:shadow-sm dark:hover:text-gray-200 dark:border-gray-700 dark:hover:shadow-slate-700/[.7]" href="https://github.com/MelakuDemeke" target='_blank'>
              <FaGithub />
            </a>
            <a className="inline-flex justify-center items-center text-gray-500 border border-gray-200 w-8 h-8 rounded-md hover:text-gray-800 hover:shadow-sm dark:hover:text-gray-200 dark:border-gray-700 dark:hover:shadow-slate-700/[.7]" href="https://www.linkedin.com/in/MelakuDemeke" target='_blank'>
              <FaLinkedin />
            </a>
          </div>
        </div>
        <div className="flex flex-col rounded-xl p-4 md:p-6 shadow-md bg-white border border-gray-200 dark:bg-slate-900 dark:border-gray-700">
          <div className="flex items-center gap-x-4">
            <img className="rounded-full w-20 h-20" src="https://avatars.githubusercontent.com/u/38818398?v=4" alt="Melaku Image" />
            <div className="grow">
              <h3 className="font-medium text-gray-800 dark:text-gray-200">
              Muluken Malako 
              </h3>
              <p className="text-xs uppercase text-gray-500">
                Software Developer
              </p>
            </div>
          </div>
          <p className="mt-3 text-gray-500">
            I am an ambitious workaholic, but apart from that, pretty simple person.
          </p>
          <div className="mt-3 space-x-1">
            <a className="inline-flex justify-center items-center text-gray-500 border border-gray-200 w-8 h-8 rounded-md hover:text-gray-800 hover:shadow-sm dark:hover:text-gray-200 dark:border-gray-700 dark:hover:shadow-slate-700/[.7]" href="https://www.twitter.com/mulukenmathewo" target='_blank'>
              <FaTwitter />
            </a>
            <a className="inline-flex justify-center items-center text-gray-500 border border-gray-200 w-8 h-8 rounded-md hover:text-gray-800 hover:shadow-sm dark:hover:text-gray-200 dark:border-gray-700 dark:hover:shadow-slate-700/[.7]" href="https://github.com/MulukenMathewos" target='_blank'>
              <FaGithub />
            </a>
            <a className="inline-flex justify-center items-center text-gray-500 border border-gray-200 w-8 h-8 rounded-md hover:text-gray-800 hover:shadow-sm dark:hover:text-gray-200 dark:border-gray-700 dark:hover:shadow-slate-700/[.7]" href="https://www.linkedin.com/in/mulukenmathewos" target='_blank'>
              <FaLinkedin />
            </a>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Team;