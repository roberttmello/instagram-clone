import Image from "next/image";

import {
  SearchIcon,
  PlusCircleIcon,
  UserGroupIcon,
  HeartIcon,
  PaperAirplaneIcon,
  MenuIcon,
} from "@heroicons/react/outline";

const Header = () => {
  return (
    <div>
      <div className="flex justify-between bg-white max-w-6xl">
        {/* Left block */}
        <div className="relative hidden lg:inline-grid w-24  cursor-pointer">
          <Image src="/images/logo.png" layout="fill" objectFit="contain" />
        </div>

        <div className="relative w-10 lg:hidden flex-shrink-0 cursor-pointer">
          <Image
            src="/images/logo-small.png"
            layout="fill"
            objectFit="contain"
          />
        </div>

        {/* Middle block */}
        <div className="max-w-xs">
          <div className="relative mt-1 p-3 rounded-md">

            <div className="absolute inset-y-0 pl-3 flex items-center pointer-events-none">
              <SearchIcon className="h-5 w-5 text-gray-500" />
            </div>

            <input
              className="bg-gray-50 block w-full pl-10 sm:text-sm border-gray-300 rounded-md focus:ring-black focus:border-black"
              type="text"
              placeholder="Search"
            />
          </div>
        </div>

        {/* Right block */}
        <div>

        </div>
      </div>
    </div>
  );
};

export default Header;