"use client";

import { useState, useEffect } from 'react';
import { useRouter } from "next/navigation";
import Cookies from "js-cookie"

export const DetailEvents = ({ id }) => {
  const [userData, setUserData] = useState(null);
  const [eventData, setEventData] = useState(null);
  const [eventMessage, setEventMessage] = useState("");
  const router = useRouter();

  useEffect(() => {
    const payload = localStorage.getItem("user");
    setUserData(JSON.parse(payload))

    const token = Cookies.get("token");
    const fetchData = async () => {
      try {
        const { data, message } = await getEventData(token, id);
        setEventData(data)
        setEventMessage(message)
      } catch (error) {
        console.error(error)
      }
    }
    fetchData()
  }, [id])

  const getEventData = async (token, id = "") => {
    try {
      const response = await fetch(`https://eventmakers-api.fly.dev/events/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json"
        },
        cache: "no-store"
      })
      const res = await response.json()
      return res
    } catch (error) {
      console.error(error)
      return {
        "message": "Fetch events failed",
        "data": {}
      }
    }
  }

  const handleJoinEvent = async (id) => {
    const token = Cookies.get("token");
    try {
      const response = await fetch(`https://eventmakers-api.fly.dev/events/${id}/join`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json"
        },
        cache: "no-store",
        body: JSON.stringify({
          "name": userData.name,
          "email": userData.email,
          "phoneNumber": "123"
        })
      })
      const res = await response.json()
      window.location.reload() // reload page
      return res
    } catch (error) {
      console.error(error)
      return {
        "message": "Join events failed",
        "data": {}
      }
    }
  }

  return (
    <main className="p-8 bg-rose-200 flex flex-col gap-y-8">
      <div>Login as: {userData ? userData.name : ''}</div>

      {eventData
        ? (
          <div className="flex flex-col gap-y-4">
            <div className="flex flex-col gap-y-2">
              <h2 className="text-2xl">{eventData.events.title}</h2>
              <p>{eventData.events.description}</p>
              <p>{eventData.events.dateTime}</p>
            </div>

            <div className="flex flex-col gap-x-2">
              {eventData.participants.length > 0
                ? eventData.participants.map((participant, _) => (
                  <p key={participant.id} className="text-gray-500 italic">{participant.name}</p>
                ))
                : <p className="text-gray-500 italic">no participant</p>
              }
            </div>

            <button className="bg-slate-800 text-slate-50 p-2 rounded" onClick={() => handleJoinEvent(eventData.events.id)}>join</button>
            <button className="bg-slate-800 text-slate-50 p-2 rounded" onClick={() => router.back()}>kembali</button>
          </div>
        )
        : <p>no data</p>}

    </main>
  )
}