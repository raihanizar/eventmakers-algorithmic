"use client";
import Cookies from "js-cookie";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

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
    <div className="flex justify-between  mx-56 items-center my-4">
      <Link href={"/events"}>Aghorithmic</Link>
      <div className="flex gap-4 items-center">
        <div className="text-lg font-bold">{user?.name}</div>
        <button onClick={handleLogout} className="btn bg-black text-white">
          logout
        </button>
      </div>
    </div>
  );
};
