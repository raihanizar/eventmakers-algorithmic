"use client";

import Link from "next/link";
import { MousePointerClick } from "lucide-react";

export const UserDashboard = ({ events }) => {
  return (
    <main className="max-w-screen-md w-full m-auto ">
      <header></header>
      <h1 className="text-4xl font-bold mb-10">Dashboard</h1>
      <div className="text-2xl font-bold mb-4">Events Saya</div>
      <div className="space-y-4">
        {events.map(({ events }) => (
          <div
            key={events.id}
            events={events}
            className="card w-96 border shadow-md"
          >
            <img
              className="text-lg pl-2 pt-2 font-bold pr-2"
              src={events.image}
            ></img>
            <p className="text-lg pl-2 pt-2 font-bold">{events.title}</p>
            <p className="text-base pl-2">{events.dateTime}</p>
            <div className="flex">
              <Link
                href={`/events/${events.id}`}
                className="w-28 text-white btn btn-neutral font-semibold pl-2 ml-2 mb-2 hover:text-blue-500"
              >
                lihat event
              </Link>
              <Link
                href={`/events/edit/${events.id}`}
                className="w-28 text-white btn btn-neutral font-semibold pl-2 ml-2 hover:text-blue-500 "
              >
                edit event
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-row gap-4">
        <Link
          className="text-white btn btn-accent font-semibold pl-2 mt-2 w-40"
          href={"/events"}
        >
          Lihat Semua Event
        </Link>

        <Link
          className="text-white btn btn-accent font-semibold pl-2 mt-2 w-40"
          href={"/events/form"}
        >
          Buat Event Baru
        </Link>
      </div>
    </main>
  );
};
