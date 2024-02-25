"use client";

import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import toast from "react-hot-toast";

export const EditEvent = ({ event }) => {
  const { events } = event;
  const router = useRouter();

  const [title, setTitle] = useState(events.title);
  console.log(title);
  const [description, setDescription] = useState(events.description);
  const [image, setImage] = useState(events.image);
  const [dateTime, setDate] = useState(events.dateTime);

  async function handleEditEvent(event) {
    const id = events.id;

    event.preventDefault();

    const token = Cookies.get("token");

    const res = await fetch(`https://eventmakers-api.fly.dev/events/${id}`, {
      method: "PATCH",
      cache: "no-cache",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },

      body: JSON.stringify({
        token,
        title,
        description,
        image,
        dateTime,
      }),
    });

    router.refresh();
    toast.success("berhasil update event");
    router.push("/dashboard");

    const data = await res.json();
    if (!!res.ok) {
      return data;
    } else {
      throw new Error(data.message);
    }
  }

  return (
    <main>
      <div>
        <form onSubmit={handleEditEvent}>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          ></input>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          ></input>
          <input
            value={dateTime}
            type="date"
            onChange={(e) => setDate(e.target.value)}
            required
          ></input>
          <input
            value={image}
            type="text"
            onChange={(e) => setImage(e.target.value)}
          ></input>
          <button>Edit Event</button>
        </form>
      </div>
    </main>
  );
};
