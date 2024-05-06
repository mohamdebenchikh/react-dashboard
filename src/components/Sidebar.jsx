import {
  Squares2X2Icon,
  EllipsisVerticalIcon,
  EnvelopeIcon,
  FolderIcon,
  ChevronDownIcon,
  CircleStackIcon,
  MinusIcon,
} from "@heroicons/react/24/outline";
import { Transition, Disclosure } from "@headlessui/react";
import ApplicationLogo from './ApplicationLogo';

const SidebarItem = ({ label, icon: Icon, active, alert }) => {
  return (
    <li
      className={`flex items-center py-2 my-1 px-4 rounded-lg ${
        active
          ? "text-indigo-800 bg-indigo-100 dark:text-gray-100 dark:bg-indigo-700"
          : "text-gray-600 hover:text-indigo-800 hover:bg-indigo-50 dark:text-gray-400 dark:hover:text-gray-200 dark:hover:bg-gray-800"
      }`}
    >
      <Icon className="h-5 w-5" />
      <span className="ml-3">{label}</span>
      {alert && (
        <span className="bg-yellow-400 absolute rounded h-2 w-2 right-2 dark:bg-yellow-600" />
      )}
    </li>
  );
};

const SidebarSubMenuItem = ({ label, active, icon: Icon, alert }) => {
  return (
    <li
      className={`px-3 text-sm py-2 flex items-center gap-2 rounded-lg ${
        active
          ? "text-indigo-800 bg-indigo-100 dark:text-gray-100 dark:bg-indigo-700"
          : "text-gray-600 hover:text-indigo-800 hover:bg-indigo-50 dark:text-gray-400 dark:hover:text-gray-100 dark:hover:bg-gray-800"
      }`}
    >
      {Icon ? <Icon className="h-4 w-4" /> : <MinusIcon className="h-2 w-2" />}
      <span>{label}</span>
      {alert && (
        <span className="bg-indigo-400 absolute rounded h-2 w-2 right-2 dark:bg-indigo-600" />
      )}
    </li>
  );
};

const SidebarSubMenu = ({ children, label,active }) => {
  return (
    <Disclosure defaultOpen={active}>
      {({ open }) => (
        <>
          <Disclosure.Button
            as="li"
            className={`px-4 py-2 my-1 flex items-center justify-between rounded-lg ${
              active
                ? "text-indigo-800 bg-indigo-100 dark:text-gray-100 dark:bg-indigo-700"
                : "text-gray-600 hover:text-indigo-800 hover:bg-indigo-50 dark:text-gray-400 dark:hover:text-gray-100 dark:hover:bg-gray-800"
            }`}
          >
            <div className="flex items-center gap-2">
              <FolderIcon className="h-5 w-5" />
              <span>{label}</span>
            </div>
            <ChevronDownIcon
              className={`h-5 w-5 transform ${open ? "rotate-180" : ""} dark:text-gray-400`}
            />
          </Disclosure.Button>
          <Disclosure.Panel className="pl-4">{children}</Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

const SidebarHeader = () => {
  return (
    <div className="h-14 border-b flex items-center p-4 gap-2 border-gray-300 dark:border-gray-700">
      <ApplicationLogo className="w-8 h-8 fill-current text-indigo-600 dark:text-indigo-500" />
      <span className="text-indigo-600 font-bold tracking-wide text-xl uppercase dark:text-gray-100">
        App name
      </span>
    </div>
  );
};

const SidebarFooter = () => {
  return (
    <div className="h-16 border-t border-gray-300 flex items-center p-4 gap-2 dark:border-gray-700">
      <img
        src="https://avatar.iran.liara.run/public"
        alt="user name"
        className="rounded-full h-10 w-10 dark:bg-gray-900"
      />
      <div className="flex flex-1 justify-between items-center">
        <div className="leading-4 flex-1">
          <p className="font-semibold text-gray-900 dark:text-gray-200">Mohamde Ben Chikh</p>
          <small className="text-sm text-gray-700 dark:text-gray-400">mohamdeben@gmail.com</small>
        </div>
        <button className="text-gray-800 dark:text-gray-400">
          <EllipsisVerticalIcon className="h-6 w-6" />
        </button>
      </div>
    </div>
  );
};

export default function Sidebar({ show, onClose }) {
  return (
    <Transition show={show}>
      <Transition.Child
        enter="transition ease-in-out duration-300 transform"
        enterFrom="-translate-x-full"
        enterTo="translate-x-0"
        leave="transition ease-in-out duration-300 transform"
        leaveFrom="translate-x-0"
        leaveTo="-translate-x-full"
      >
        <aside className="absolute z-40 bg-white dark:bg-gray-900 w-80 md:w-72 left-0 h-screen border-r border-gray-300 dark:border-gray-700">
          <nav className="flex relative flex-shrink-0 flex-col h-full justify-between">
            <SidebarHeader></SidebarHeader>
            <ul className="flex-1 overflow-auto px-2 py-4">
              <SidebarItem label="Dashboard" icon={Squares2X2Icon} active />
              <SidebarItem label="Messages" icon={EnvelopeIcon} />
              <h6 className="text-gray-500 ml-2 my-3 font-bold text-xs uppercase dark:text-gray-400">
                Sidebar header
              </h6>

              <SidebarSubMenu label="Projects">
                <SidebarSubMenuItem label="Messages" />
                <SidebarSubMenuItem label="Messages" />
                <SidebarSubMenuItem label="Messages" />
              </SidebarSubMenu>

              <SidebarItem label="Databases" icon={CircleStackIcon} />
            </ul>
            <SidebarFooter></SidebarFooter>
          </nav>
        </aside>
      </Transition.Child>

      <Transition.Child
        enter="transition-opacity ease-linear duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity ease-linear duration-300"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div
          onClick={onClose}
          className="absolute md:hidden inset-0 opacity-40 bg-gray-800 z-10 dark:bg-gray-900"
          role="button"
        ></div>
      </Transition.Child>
    </Transition>
  );
}

