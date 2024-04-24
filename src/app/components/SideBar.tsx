import Image from 'next/image';
import React from 'react';
import SideBarItem from './SideBarItem';

interface Props {}

export default function SideBar({}: Props) {
  return (
    <aside className="fixed top-0 left-0 z-40 w-60 h-screen">
      <div className="flex flex-col h-full overflow-y-auto bg-gray-900">
        <div className="flex items-center justify-center gap-3">
          <Image
            src={'/icons/logoWeb.svg'}
            alt="logo"
            width={24}
            height={24}
            className="py-8"
          />
          <span className="text-white">TruScape</span>
        </div>
        <ul className="space-y-7">
          <SideBarItem
            pathname="/dashboard"
            src="/icons/squares.svg"
            alt="dashboard"
          >
            Dashboard
          </SideBarItem>
          <SideBarItem
            pathname="/companies"
            src={'/icons/briefcase.svg'}
            alt="companies"
          >
            Companies
          </SideBarItem>
        </ul>
        <button className="flex items-center gap-2 p-6 mt-auto mx-auto">
          <Image src="/icons/exit.svg" width={18} height={18} alt="exit" />
          <a href="/" className="text-white">
            Exit
          </a>
        </button>
      </div>
    </aside>
  );
}
