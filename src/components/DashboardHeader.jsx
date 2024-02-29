"use client";
import Cookies from "js-cookie";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { IconAlgo } from "./IconAlgo";

export const DashboardHeader = () => {
  const router = useRouter();
  const [user, setUser] = useState(null);

  function handleLogout() {
    localStorage.removeItem("user");
    Cookies.remove("token");
    router.push("/");
  }

  useEffect(() => {
    const userFromLs = localStorage.getItem("user");
    const parsedUserData = JSON.parse(userFromLs);
    setUser(parsedUserData);
  }, []);

  return (
    <main>
      <header className="flex items-center justify-between  w-full px-4 mt-4 md:mt-6 md:px-6">
        <Link
          className="flex items-center space-x-2 font-medium"
          href="/events"
        >
          <span className="text-base font-bold">Algorithmic</span>
        </Link>
        <nav className="hidden space-x-4 text-sm font-medium md:flex">
          <Link
            className="text-xl flex items-center border-b-2 border-transparent hover:border-blue-500 dark:hover:border-blue-300"
            href="/dashboard"
          >
            Dasboard
          </Link>
          <Link
            className="text-xl flex items-center border-b-2 border-transparent hover:border-blue-500 dark:hover:border-blue-300"
            href="/events"
          >
            Events
          </Link>
        </nav>
        <div>
          <Link
            href="/events/form"
            className="btn btn-neutral text-white mr-2 "
          >
            Buat Event
          </Link>
          <button onClick={handleLogout} className="btn btn-neutral text-white">
            logout
          </button>
        </div>
      </header>
      {/* <div className="flex justify-between  mx-56 items-center my-4">
        <Link href={"/events"}>
          <IconAlgo />
        </Link>
        <div className="flex gap-4 items-center">
          <Link className="text-lg font-bold btn bg-white" href={"/dashboard"}>
            <div>Dashboard</div>
          </Link>
          <div className="text-lg font-bold">hi, {user?.name}</div>
          <button onClick={handleLogout} className="btn bg-black text-white">
            logout
          </button>
        </div>
      </div> */}
      <div className="divider mt-0 mb-0"></div>
    </main>
  );
};
