import React from "react";
import Image from "next/image";
import {
  SearchIcon,
  PlusCircleIcon,
  UserGroupIcon,
  HeartIcon,
  PaperAirplaneIcon,
  MenuIcon,
  HomeIcon,
} from "@heroicons/react/outline";
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";

const Header = () => {
  const { data: session } = useSession();
  const router = useRouter();
  return (
    <div className="shadow-sm border-b bg-white sticky top-0 z-20">
      <div className="flex justify-between max-w-6xl mx-5 lg:mx-auto">
        <div
          className="relative hidden lg:inline-grid  w-24 cursor-pointer"
          onClick={() => router.push("/")}
        >
          <Image
            src="https://links.papareact.com/ocw"
            layout="fill"
            objectFit="contain"
          />
        </div>
        <div
          className="relative  lg:hidden w-10 flex-shrink-0 cursor-pointer"
          onClick={() => router.push("/")}
        >
          <Image
            src="https://links.papareact.com/jjm"
            layout="fill"
            objectFit="contain"
          />
        </div>
        <div className="max-w-xs">
          <div className="relative mt-1 p-3 rounded-md">
            <div className="absolute inset-y-0 pl-3 flex items-center pointer-events-none">
              <SearchIcon className="h-5 w-5 text-gray-500" />
            </div>
            <input
              type="text"
              placeholder="Search"
              className="bg-gray-50 block w-full pl-10 sm:text-sm border-gray-300 focus:ring-black focus:border-black rounded-md"
            />
          </div>
        </div>
        <div className="flex items-center justify-end space-x-4">
          <HomeIcon className="navBtn" onClick={() => router.push("/")} />
          <MenuIcon className="h-10 w-10 md:hidden cursor-pointer" />
          {session ? (
            <>
              <div className="relative navBtn">
                <PaperAirplaneIcon className="navBtn z-10" />
                <div className="absolute -top-1 -right-2 text-xs w-5 bg-red-500 flex rounded-full items-center justify-center animate-bounce text-white">
                  3
                </div>
              </div>

              <PlusCircleIcon className="navBtn" />
              <UserGroupIcon className="navBtn" />
              <HeartIcon className="navBtn" />
              <img
                onClick={signOut}
                src={session.user.image}
                alt="profile pic"
                className="h-10 rounded-full cursor-pointer w-10"
              />
            </>
          ) : (
            <button onClick={signIn}> Sign in</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
