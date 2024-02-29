"use client";

import { useState, useEffect } from "react";
import { SearchEvents } from "@/components/SearchEvents";
import Cookies from "js-cookie";
import Link from "next/link";

const getEventData = async (token, query = "") => {
  try {
    const response = await fetch(
      `https://eventmakers-api.fly.dev/events?search=${query}`,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    const res = await response.json();
    return res;
  } catch (error) {
    console.error(error);
    return {
      message: "Fetch events failed",
      data: {},
    };
  }
};

export const ListEvents = () => {
  const [userData, setUserData] = useState(null);
  const [eventData, setEventData] = useState(null);
  console.log(eventData);
  const [eventMessage, setEventMessage] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  // pertama kali, munculkan semua data event
  useEffect(() => {
    const payload = localStorage.getItem("user");
    setUserData(JSON.parse(payload));

    const token = Cookies.get("token");
    const fetchData = async () => {
      try {
        const { data, message } = await getEventData(token);
        setEventData(data);
        setEventMessage(message);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  const handleSearchData = async (searchQuery) => {
    const token = Cookies.get("token");

    try {
      const { data, message } = await getEventData(token, searchQuery);
      setEventData(data);
      setEventMessage(message);
    } catch (error) {
      console.error(error);
    }
  };

  const handleReset = () => {
    setSearchQuery("");
    handleSearchData("");
  };

  return (
    <main className="p-8 gap-y-8 flex flex-col justify-center items-center min-h-screen">
      {/* <header>
        <Link href={"/dashboard"}>Dashboard</Link>
      </header> */}
      {/* <div>Login as: {userData ? userData.name : ""}</div> */}

      <div className="container flex flex-col justify-center items-center py-6 space-y-6 md:py-12 lg:space-y-10">
        <div className="flex flex-col items-center justify-center space-y-4 text-center md:space-y-2">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
              Upcoming Events
            </h1>
            <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Discover amazing events near you. Buy tickets, register, or learn
              more.
            </p>
          </div>
        </div>

        <SearchEvents
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          handleSearchData={() => handleSearchData(searchQuery)}
          handleReset={() => handleReset()}
        />
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
        {eventData ? (
          eventData.map((data, idx) => (
            <div
              key={idx}
              className="justify-between flex flex-col gap-2 max-h-full overflow-hidden rounded-xl border border-gray-100 dark:border-gray-800"
            >
              <div className="p-4 space-y-2">
                <img
                  src={data.events.image}
                  className="object-cover h-48 w-104 rounded-md flex justify-center items-center"
                ></img>
                <h2 className="text-xl font-bold">{data.events.title}</h2>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {data.events.dateTime}
                </p>
                <p className="line-clamp-3">{data.events.description}</p>
              </div>

              <div className="p-4 flex">
                {data.participants.length > 0 ? (
                  data.participants.map((participant, _) => (
                    <p key={participant.id} className="line-clamp-3">
                      {participant.name}
                    </p>
                  ))
                ) : (
                  <p className="text-gray-500 italic">no participant</p>
                )}
              </div>

              <Link
                className="btn btn-active p-2 rounded justify-center flex"
                size="sm"
                variant="outline"
                href={`/events/${data.events.id}`}
              >
                lihat detail
              </Link>
            </div>
          ))
        ) : (
          <div>no data</div>
        )}
      </div>
    </main>
  );
};

// import Link from "next/link"
// import { Button } from "@/components/ui/button"

// export default function Component() {
//   return (
//     <div className="flex flex-col min-h-screen">
//       <header className="flex items-center justify-between w-full px-4 py-4 md:py-6 md:px-6">
//         <Link className="flex items-center space-x-2 font-medium" href="#">
//           <FlagIcon className="h-6 w-6" />
//           <span className="text-base font-bold">EventMakers</span>
//         </Link>
//         <nav className="hidden space-x-4 text-sm font-medium md:flex">
//           <Link
//             className="flex items-center border-b-2 border-transparent hover:border-blue-500 dark:hover:border-blue-300"
//             href="#"
//           >
//             Home
//           </Link>
//           <Link
//             className="flex items-center border-b-2 border-blue-500 hover:border-blue-500 dark:hover:border-blue-300"
//             href="#"
//           >
//             Events
//           </Link>
//           <Link
//             className="flex items-center border-b-2 border-transparent hover:border-blue-500 dark:hover:border-blue-300"
//             href="#"
//           >
//             About
//           </Link>
//           <Link
//             className="flex items-center border-b-2 border-transparent hover:border-blue-500 dark:hover:border-blue-300"
//             href="#"
//           >
//             Contact
//           </Link>
//         </nav>
//       </header>
//       <main className="flex-1">
//         <div className="container py-6 space-y-6 md:py-12 lg:space-y-10">
//           <div className="flex flex-col items-center justify-center space-y-4 text-center md:space-y-2">
//             <div className="space-y-2">
//               <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl">Upcoming Events</h1>
//               <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
//                 Discover amazing events near you. Buy tickets, register, or learn more.
//               </p>
//             </div>
//           </div>
//           <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
//             <div className="flex flex-col gap-2 overflow-hidden rounded-xl border border-gray-100 dark:border-gray-800">
//               <img
//                 alt="Event 1"
//                 className="object-cover aspect-[2/1]"
//                 height="200"
//                 src="/placeholder.svg"
//                 width="400"
//               />
//               <div className="p-4 space-y-2">
//                 <h3 className="text-xl font-bold">Summer Music Festival</h3>
//                 <p className="text-sm text-gray-500 dark:text-gray-400">June 15th - June 17th, 2023</p>
//                 <p className="line-clamp-3">
//                   The hottest bands and the coolest vibes. Join us for three days of music and fun in the sun. Food
//                   trucks, art installations, and more!
//                 </p>
//               </div>
//               <Button size="sm" variant="outline">
//                 View Event
//               </Button>
//             </div>
//             <div className="flex flex-col gap-2 overflow-hidden rounded-xl border border-gray-100 dark:border-gray-800">
//               <img
//                 alt="Event 2"
//                 className="object-cover aspect-[2/1]"
//                 height="200"
//                 src="/placeholder.svg"
//                 width="400"
//               />
//               <div className="p-4 space-y-2">
//                 <h3 className="text-xl font-bold">Wine Tasting Experience</h3>
//                 <p className="text-sm text-gray-500 dark:text-gray-400">August 10th, 2023</p>
//                 <p className="line-clamp-3">
//                   Sample the finest wines from around the world in this exclusive tasting event. Meet the vintners,
//                   learn about the wines, and enjoy a sophisticated evening of oenophilia.
//                 </p>
//               </div>
//               <Button size="sm" variant="outline">
//                 View Event
//               </Button>
//             </div>
//             <div className="flex flex-col gap-2 overflow-hidden rounded-xl border border-gray-100 dark:border-gray-800">
//               <img
//                 alt="Event 3"
//                 className="object-cover aspect-[2/1]"
//                 height="200"
//                 src="/placeholder.svg"
//                 width="400"
//               />
//               <div className="p-4 space-y-2">
//                 <h3 className="text-xl font-bold">Yoga in the Park</h3>
//                 <p className="text-sm text-gray-500 dark:text-gray-400">July 5th, 2023</p>
//                 <p className="line-clamp-3">
//                   Find your inner peace with our outdoor yoga session. Led by experienced instructors, suitable for all
//                   levels. Bring your own mat and join us in the park!
//                 </p>
//               </div>
//               <Button size="sm" variant="outline">
//                 View Event
//               </Button>
//             </div>
//           </div>
//         </div>
//       </main>
//       <footer className="flex items-center justify-center w-full px-4 py-4 md:py-6 md:px-6 border-t">
//         <nav className="flex items-center space-x-4 text-sm font-medium">
//           <Link className="hover:underline" href="#">
//             Terms
//           </Link>
//           <Link className="hover:underline" href="#">
//             Privacy
//           </Link>
//           <Link className="hover:underline" href="#">
//             Policy
//           </Link>
//         </nav>
//       </footer>
//     </div>
//   )
// }

// function FlagIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
//       <line x1="4" x2="4" y1="22" y2="15" />
//     </svg>
//   )
// }
