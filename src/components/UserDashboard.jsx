"use client";

import Link from "next/link";

export const UserDashboard = ({ events }) => {
  return (
    <main className="max-w-screen-md w-full m-auto ">
      <header></header>
      Dashboard
      {events.map(({ events }) => (
        <div key={events.id} events={events} className="space-y-2">
          <div>My Events</div>
          <p>{events.title}</p>
          <p>{events.dateTime}</p>
          <Link
            href={`/events/edit/${events.id}`}
            className="bg-black text-white"
          >
            edit
          </Link>
        </div>
      ))}
      <div>
        <Link href={"/events"}>Lihat Semua Event</Link>
      </div>
      <div>
        <Link href={"/events/form"}>Create Event</Link>
      </div>
    </main>
  );
};
