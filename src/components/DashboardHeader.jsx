"use client";
import Cookies from "js-cookie";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { Plus } from 'lucide-react';

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
      <header className="flex items-center justify-between w-full px-4 mt-2 md:px-6">
        <Link
          className="flex items-center space-x-2 font-medium"
          href="/events"
        >
          <span className="text-base font-bold">Algorithmic</span>
        </Link>
        <nav className="hidden space-x-8 text-sm font-medium md:flex">
          <Link
            className="text-xl flex items-center border-b-2 border-transparent hover:border-blue-500 dark:hover:border-blue-300"
            href="/dashboard"
          >
            Dashboard
          </Link>
          <Link
            className="text-xl flex items-center border-b-2 border-transparent hover:border-blue-500 dark:hover:border-blue-300"
            href="/events"
          >
            Semua Event
          </Link>
        </nav>
        <div className="flex flex-row gap-x-2">
          <Link href="/events/form" className="btn btn-neutral text-white">
            <Plus />
            <p>Buat Event</p>
          </Link>
          <button onClick={handleLogout} className="btn btn-neutral text-white">
            <p>Log Out</p>
          </button>
        </div>
      </header>
      <div className="divider mt-0 mb-0"></div>
    </main>
  );
};
