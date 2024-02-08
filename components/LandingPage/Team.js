import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

const Team = () => {
  return (
    <div className="mt-10 lg:mt-0 lg:col-span-6 lg:col-end-13">
      <div className="flex w-[25rem] flex-col rounded-xl p-4 md:p-6 shadow-md bg-white border border-gray-200 dark:bg-slate-900 dark:border-gray-700">
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

      <div className="flex w-[25rem] mt-5 flex-col rounded-xl p-4 md:p-6 shadow-md bg-white border border-gray-200 dark:bg-slate-900 dark:border-gray-700">
        <div className="flex items-center gap-x-4">
          <img className="rounded-full w-20 h-20" src="/team/muluken.png" alt="Melaku Image" />
          <div className="grow">
            <h3 className="font-medium text-gray-800 dark:text-gray-200">
              Muluken Mathewos
            </h3>
            <p className="text-xs uppercase text-gray-500">
              Software Developer
            </p>
          </div>
        </div>
        <p className="mt-3 text-gray-500">
          Ambitious workaholic, yet pleasantly uncomplicated.
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
  )
}

export default Team;
