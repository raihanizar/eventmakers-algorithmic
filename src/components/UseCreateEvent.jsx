"use client";

import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

export const UseCreateEvent = () => {
  const router = useRouter();

  let userData;

  if (typeof window !== "undefined") {
    userData = localStorage.getItem("user");
  }

  const user = JSON.parse(userData);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [dateTime, setDate] = useState("");
  const [author, setAuthor] = useState(user.id);

  async function handleCreateEvent(event) {
    event.preventDefault();

    const token = Cookies.get("token");

    const res = await fetch("https://eventmakers-api.fly.dev/events/", {
      method: "POST",
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
        author,
      }),
    });

    router.refresh();
    toast.success("berhasil menambahkan events");
    router.push("/dashboard");

    // ini ga ngaruh, ga hilangg
    setTitle("");
    setDescription("");
    setDate("");
    setImage("");

    const data = await res.json();
    if (!!res.ok) {
      return data;
    } else {
      throw new Error(data.message);
    }
  }

  return (
    <div>
      <form onSubmit={handleCreateEvent}>
        <input
          placeholder="title"
          onChange={(e) => setTitle(e.target.value)}
          required
        ></input>
        <input
          placeholder="description"
          onChange={(e) => setDescription(e.target.value)}
          required
        ></input>
        <input
          placeholder="date"
          type="date"
          onChange={(e) => setDate(e.target.value)}
          required
        ></input>
        <input
          placeholder="image"
          type="file"
          onChange={(e) => setImage(e.target.value)}
          required
        ></input>
        <button>Create Event</button>
      </form>
    </div>
  );
};
