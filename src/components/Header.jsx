import { Bars3Icon, SunIcon, MoonIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { Menu } from "@headlessui/react";
import {
  BellIcon,
  ClockIcon,
  ShoppingCartIcon,
  ArrowRightCircleIcon,
} from "@heroicons/react/24/outline";

const Header = ({ toggleSidebar }) => {
  const isDark = document.documentElement.classList.contains("dark");
  const [darkMode, setDarkMode] = useState(isDark);

  const handleDarkMode = (mode) => {
    const classList = document.documentElement.classList;
    classList.remove(classList.contains("dark") ? "dark" : "light");
    classList.add(mode);
    setDarkMode(mode === "dark");
  };

  const notifications = [
    {
      id: 1,
      icon: (
        <div className=" p-2 mt-2 text-white rounded-full flex items-center justify-center bg-indigo-500">
          <ShoppingCartIcon className="h-6 w-6" />
        </div>
      ),
      title: "New order",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      time: "10 min ago",
    },
    {
      id: 2,
      icon: (
        <div className=" p-2 mt-2 text-white rounded-full flex items-center justify-center bg-indigo-400">
          <ClockIcon className="h-6 w-6" />
        </div>
      ),
      title: "New shipment",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta.",
      time: "23 min ago",
    },
    {
      id: 3,
      icon: (
        <div className=" p-2 mt-2 text-white rounded-full flex items-center justify-center bg-indigo-400">
          <ClockIcon className="h-6 w-6" />
        </div>
      ),
      title: "New message",
      description: "Lorem ipsum dolor sit amet consectetur.",
      time: "45 min ago",
    },
  ];

  return (
    <header className="h-14 border-b border-gray-300 dark:border-gray-700 flex items-center justify-between px-4">
      <button
        className="rounded p-1 shadow-sm hover:bg-gray-100 dark:hover:bg-gray-800 dark:text-gray-200 text-gray-900"
        onClick={toggleSidebar}
      >
        <Bars3Icon className="h-6 w-6" />
      </button>
      <div className="flex items-center gap-6">
        <Menu as={"div"} className={"relative flex items-center"}>
          <Menu.Button
            className={"dark:text-gray-400 dark:hover:text-gray-200"}
          >
            <BellIcon className="h-6 w-6" />
            <span className="absolute -top-1 -right-1 inline-flex items-center justify-center py-1 px-2 text-xs font-bold leading-none text-red-100 transform translate-x-1 -translate-y-1 bg-red-600 rounded-full">
              3
            </span>
          </Menu.Button>
          <Menu.Items
            as="ul"
            className={
              "absolute dark:bg-gray-800 bg-white divide-y dark:divide-gray-700 right-0 top-8 min-w-[400px] rounded-md shadow-sm border dark:border-gray-700"
            }
          >
            <div className="flex justify-between items-center py-3 px-4">
              <strong className="font-bold dark:text-gray-200">
                Notifications
              </strong>
              <small className="text-sm dark:text-indigo-400 cursor-pointer ">
                View all
              </small>
            </div>
            {notifications.map((notification) => (
              <Menu.Item
                as={"li"}
                key={notification.id}
                className={
                  "flex items-start gap-4 py-3 px-3 dark:hover:bg-gray-700 cursor-pointer"
                }
              >
                {notification.icon}
                <div className="flex-1 flex flex-col">
                  <div className="flex items-center justify-between">
                    <div className="dark:text-gray-200 font-semibold">
                      {notification.title}
                    </div>
                    <span className="text-xs dark:text-gray-400 flex items-center gap-1">
                      {notification.time}
                    </span>
                  </div>

                  <small className="text-sm dark:text-gray-400">
                    {notification.description}
                  </small>
                </div>
              </Menu.Item>
            ))}
            <div className="p-3 text-center">
              <small className="text-sm dark:text-indigo-400 flex gap-2 justify-center items-center cursor-pointer ">
                <ArrowRightCircleIcon className="h-5 w-5" />
                View more
              </small>
            </div>
          </Menu.Items>
        </Menu>

        <button
          className="dark:hover:text-gray-200 dark:text-gray-400"
          onClick={() => handleDarkMode(darkMode ? "light" : "dark")}
        >
          {darkMode ? (
            <MoonIcon className="h-6 w-6" />
          ) : (
            <SunIcon className="h-6 w-6" />
          )}
        </button>
        <img
          src="https://avatar.iran.liara.run/public"
          alt="user name"
          className="rounded-full h-8 w-8 "
        />
      </div>
    </header>
  );
};

export default Header;
