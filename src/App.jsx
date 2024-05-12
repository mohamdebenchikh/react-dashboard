import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import {
  WalletIcon,
  UserGroupIcon,
  ShoppingBagIcon,
  ChartBarIcon,
  EllipsisHorizontalIcon,
  ArrowDownIcon,
  ArrowUpIcon,
} from "@heroicons/react/24/outline";
import FlagIcon from "react-flagkit";

import LineChartBox from './components/LineChartBox';


function App() {
  const [openSidebar, setOpenSidebar] = useState(true);

  const closeSidebar = () => setOpenSidebar(false);

  return (
    <div className="min-h-screen w-full dark:bg-gray-900">
      <Sidebar show={openSidebar} onClose={closeSidebar}></Sidebar>
      <main
        className={`transition-all ease-linear duration-300 ${
          openSidebar ? "ml-0 md:ml-72" : "ml-0"
        }`}
      >
        <Header toggleSidebar={() => setOpenSidebar((curr) => !curr)}></Header>
        <div className="py-8 px-6 space-y-6">
          <div className="flex">
            <h3 className="text-2xl dark:text-gray-200 font-semibold">
              Dashboard
            </h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="border rounded-lg space-y-3 dark:border-gray-700 px-4 py-3">
              <div className="flex justify-between">
                <div className="dark:text-gray-300 font-semibold">
                  Total Revenue
                </div>

                <div className="bg-gradient-to-br from-pink-600 to-purple-600 text-white p-2 rounded-full">
                  <WalletIcon className="h-5 w-5" />
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="text-xl font-bold dark:text-gray-100">
                  $92,854
                </div>
                <div className="dark:text-gray-400 text-sm">+6.32%</div>
              </div>
            </div>

            <div className="border rounded-lg space-y-3 dark:border-gray-700 px-4 py-3">
              <div className="flex justify-between">
                <div className="dark:text-gray-300 font-semibold">
                  Total Customer
                </div>

                <div className="bg-gradient-to-br from-blue-600 to-blue-400 text-white p-2 rounded-full">
                  <UserGroupIcon className="h-5 w-5" />
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="text-xl font-bold dark:text-gray-100">
                  45,854
                </div>
                <div className="dark:text-gray-400 text-sm">+16.3%</div>
              </div>
            </div>

            <div className="border rounded-lg space-y-3 dark:border-gray-700 px-4 py-3">
              <div className="flex justify-between">
                <div className="dark:text-gray-300 font-semibold">
                  Total Orders
                </div>

                <div className="bg-gradient-to-br from-red-600 to-orange-400 text-white p-2 rounded-full">
                  <ShoppingBagIcon className="h-5 w-5" />
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="text-xl font-bold dark:text-gray-100">
                  23,760
                </div>
                <div className="dark:text-gray-400 text-sm">+7.98%</div>
              </div>
            </div>

            <div className="border rounded-lg space-y-3 dark:border-gray-700 px-4 py-3">
              <div className="flex justify-between">
                <div className="dark:text-gray-300 font-semibold">
                  Conversion Rate
                </div>

                <div className="bg-gradient-to-br from-green-600 to-green-400 text-white p-2 rounded-full">
                  <ChartBarIcon className="h-5 w-5" />
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="text-xl font-bold dark:text-gray-100">
                  48,045%
                </div>
                <div className="dark:text-gray-400 text-sm">+7.87%</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border dark:border-gray-700 rounded-lg py-3 px-4 space-y-4">
              <div className="flex items-center justify-between">
                <h4 className="font-semibold text-lg dark:text-gray-100">
                  Sales by countries
                </h4>
                <button className="dark:text-gray-200">
                  <EllipsisHorizontalIcon className="h-6 w-6" />
                </button>
              </div>
              <div className="px-2 flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center flex-1 gap-4">
                    <FlagIcon className="w-16 h-16 " country="US" />
                    <div>
                      <div className="text-xl font-bold dark:text-gray-100">
                        $76,56K
                      </div>
                      <div className="text-gray-400">United states</div>
                    </div>
                  </div>

                  <span className="text-green-500 text-sm flex items-center">
                    <ArrowUpIcon className="h-3 w-3" /> 23%
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center flex-1 gap-4">
                    <FlagIcon className="w-16 h-16 " country="DE" />
                    <div>
                      <div className="text-xl font-bold dark:text-gray-100">
                        $32,45K
                      </div>
                      <div className="text-gray-400">Germany</div>
                    </div>
                  </div>

                  <span className="text-green-500 text-sm flex items-center">
                    <ArrowUpIcon className="h-3 w-3" /> 12%
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center flex-1 gap-4">
                    <FlagIcon className="w-16 h-16 " country="FR" />
                    <div>
                      <div className="text-xl font-bold dark:text-gray-100">
                        $21,45K
                      </div>
                      <div className="text-gray-400">France</div>
                    </div>
                  </div>

                  <span className="text-red-500 text-sm flex items-center">
                    <ArrowDownIcon className="h-3 w-3" /> 6%
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center flex-1 gap-4">
                    <FlagIcon className="w-16 h-16 " country="GB" />
                    <div>
                      <div className="text-xl font-bold dark:text-gray-100">
                        $15,45K
                      </div>
                      <div className="text-gray-400">United Kingdom</div>
                    </div>
                  </div>

                  <span className="text-green-500 text-sm flex items-center">
                    <ArrowUpIcon className="h-3 w-3" /> 21%
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center flex-1 gap-4">
                    <FlagIcon className="w-16 h-16 " country="CA" />
                    <div>
                      <div className="text-xl font-bold dark:text-gray-100">
                        $10,45K
                      </div>
                      <div className="text-gray-400">Canada</div>
                    </div>
                  </div>

                  <span className="text-green-500 text-sm flex items-center">
                    <ArrowUpIcon className="h-3 w-3" /> 10%
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center flex-1 gap-4">
                    <FlagIcon className="w-16 h-16 " country="AU" />
                    <div>
                      <div className="text-xl font-bold dark:text-gray-100">
                        $12,45K
                      </div>
                      <div className="text-gray-400">Australia</div>
                    </div>
                  </div>

                  <span className="text-red-500 text-sm flex items-center">
                    <ArrowDownIcon className="h-3 w-3" /> 1%
                  </span>
                </div>

              </div>
            </div>
            <div className="border dark:border-gray-700 rounded-lg py-3 px-4 space-y-4">
            <div className="flex items-center justify-between">
                <h4 className="font-semibold text-lg dark:text-gray-100">
                Total Earning
                </h4>
                <button className="dark:text-gray-200">
                  <EllipsisHorizontalIcon className="h-6 w-6" />
                </button>
              </div>
              <div >
              <LineChartBox/>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
