"use client";

import Link from "next/link";
import { MousePointerClick } from "lucide-react";

export const UserDashboard = ({ authoredEvent, joinedEvent }) => {
  return (
    <main className="w-full m-auto flex flex-col gap-y-8 p-8">
      <h1 className="text-4xl font-bold">Dashboard</h1>

      <div className="flex flex-col gap-y-4">
        <div className="text-2xl font-bold">Event Yang Saya Buat</div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
          {authoredEvent.length ? authoredEvent.map(({ events }) => (
            <div key={events.id} className="justify-between flex flex-col gap-2 p-4 h-full overflow-hidden rounded-xl border bg-indigo-50 hover:bg-indigo-100 border-indigo-200">
              <img className="object-cover h-48 w-104 rounded-md flex justify-center items-center" src={events.image}></img>
              <p className="text-xl font-bold">{events.title}</p>
              <p className="text-sm text-gray-500">{events.dateTime}</p>
              <div className="flex gap-x-2">
                <Link href={`/events/${events.id}`} className="w-28 btn btn-accent font-semibold">
                  Lihat Event
                </Link>
                <Link href={`/events/edit/${events.id}`} className="w-28 btn btn-accent font-semibold">
                  Edit Event
                </Link>
              </div>
            </div>
          )) : (
            <p className="text-indigo-800 text-sm italic">Belum ada event yang kamu buat. Buat event pertamamu!</p>
          )}
        </div>
      </div>

      <div className="flex flex-col gap-y-4">
        <div className="text-2xl font-bold">Event Yang Saya Ikuti</div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
          {joinedEvent.length ? joinedEvent.map(({ events }) => (
            <div key={events.id} className="justify-between flex flex-col gap-2 p-4 h-full overflow-hidden rounded-xl border bg-indigo-50 hover:bg-indigo-100 border-indigo-200">
              <img className="object-cover h-48 w-104 rounded-md flex justify-center items-center" src={events.image}></img>
              <p className="text-xl font-bold">{events.title}</p>
              <p className="text-sm text-gray-500">{events.dateTime}</p>
              <div className="flex gap-x-2">
                <Link href={`/events/${events.id}`} className="w-28 btn btn-accent font-semibold">
                  Lihat Event
                </Link>
              </div>
            </div>
          )) : (
            <p className="text-indigo-800 text-sm italic">Belum ada event yang diikuti. Cari event di dashboard dan gabung event yang kamu minati!</p>
          )}
        </div>
      </div>
    </main>
  );
};
