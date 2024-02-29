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
              Algo Events
            </h1>
            <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Temukan acara yang menarik minatmu dan bergabunglah menjadi orang
              yang bermanfaat.
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
            <Link
              href={`/events/${data.events.id}`}
              className="hover:translate-y-2"
            >
              <div
                key={idx}
                className="justify-between flex flex-col gap-2 h-full overflow-hidden rounded-xl border bg-indigo-50 border-gray-100 dark:border-gray-800"
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

                  <div className="line-clamp-1">
                    <div>
                      <p className="font-semibold">participants :</p>
                    </div>
                    <div className="flex gap-1 max-w-96 line-clamp-2">
                      {data.participants.length > 0 ? (
                        data.participants.map((participant, _) => (
                          <p
                            key={participant.id}
                            className="line-clamp-2 tooltip"
                            data-tip={data.participants.name}
                          >
                            {participant.name}
                          </p>
                        ))
                      ) : (
                        <p className="text-gray-500 italic">no participant</p>
                      )}
                    </div>
                  </div>
                </div>

                {/* <Link
                  className="btn btn-active p-2 rounded justify-center flex"
                  size="sm"
                  variant="outline"
                  href={`/events/${data.events.id}`}
                >
                  lihat detail
                </Link> */}
              </div>
            </Link>
          ))
        ) : (
          <div>no data</div>
        )}
      </div>
    </main>
  );
};
