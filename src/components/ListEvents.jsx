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
    <main className="p-8 bg-rose-200 flex flex-col gap-y-8">
      <header>
        <Link href={"/dashboard"}>Dashboard</Link>
      </header>
      <div>Login as: {userData ? userData.name : ""}</div>

      <SearchEvents
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        handleSearchData={() => handleSearchData(searchQuery)}
        handleReset={() => handleReset()}
      />

      {eventData ? (
        eventData.map((data, idx) => (
          <div key={idx} className="flex flex-col gap-y-4">
            <div className="flex flex-col gap-y-2">
              <h2 className="text-2xl">{data.events.title}</h2>
              <p>{data.events.description}</p>
              <p>{data.events.dateTime}</p>
            </div>

            <div className="flex flex-col gap-x-2">
              {data.participants.length > 0 ? (
                data.participants.map((participant, _) => (
                  <p key={participant.id} className="text-gray-500 italic">
                    {participant.name}
                  </p>
                ))
              ) : (
                <p className="text-gray-500 italic">no participant</p>
              )}
            </div>

            <Link
              className="bg-slate-800 text-slate-50 p-2 rounded"
              href={`/events/${data.events.id}`}
            >
              lihat detail
            </Link>
          </div>
        ))
      ) : (
        <div>no data</div>
      )}
    </main>
  );
};
