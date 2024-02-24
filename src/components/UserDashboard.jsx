"use client";

export const UserDashboard = ({ events }) => {


  return (
    <main className="max-w-screen-md w-full m-auto ">
      Dashboard
      {events.map(({ events }) => (
        <div key={events.id} events={events} className="space-y-2">
          <p>{events.title}</p>
          <p>{events.dateTime}</p>
          <button onClick={handleDelete} className="bg-black text-white">
            Hapus
          </button>
          <button className="bg-black text-white">Edit</button>
        </div>
      ))}
    </main>
  );
};
