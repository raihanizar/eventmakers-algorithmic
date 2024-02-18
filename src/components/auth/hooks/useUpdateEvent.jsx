"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";
import toast from "react-hot-toast";

export const UseUpdateEvent = (item) => {
  const router = useRouter();
  const [updateEvent, setUpdateEvent] = useState(false);

  const [title, setTitle] = useState(item.title);
  const [description, setDescription] = useState(item.description);
  const [image, setImage] = useState(item.image);
  const [dateTime, setDate] = useState(item.dateTime);
  const [author, setAuthor] = useState(item.author);

  async function handleUpdateEvent() {
    const res = await fetch("https://eventmakers-api.fly.dev/events/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        description,
        image,
        dateTime,
        author,
      }),
    });

    const data = await res.json();
    console.log(data);
    router.refresh();
    setUpdateEvent(false);
    toast.success("berhasil di update");
  }

  if (updateEvent) {
    return (
      <main>
        <form>
          <input
            type="text"
            placeholder="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />

          <input
            type="text"
            placeholder="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />

          <input
            type="date"
            placeholder="event date"
            value={dateTime}
            onChange={(e) => setDate(e.target.value)}
            required
          />

          <input
            type="author"
            placeholder="author of event"
            value={finish}
            onChange={(e) => setAuthor(e.target.value)}
            required
          />

          <button
            className="btn btn-xs btn-active btn-neutral rounded-lg bg-purple-600 text-white"
            onClick={handleUpdateEvent}
          >
            Update
          </button>
        </form>
      </main>
    );
  }

  return <button onClick={updateEvent}>UpdateEvent</button>;
};
