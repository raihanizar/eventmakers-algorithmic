"use client";

import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function useCreateEvent() {
  const router = useRouter();

  const userFromLs = localStorage.getItem("user");
  const user = JSON.parse(userFromLs);
  // console.log(user);

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

    const data = await res.json();
    if (!!res.ok) {
      return data;
    } else {
      throw new Error(data.message);
    }
  }

  // kosongin input setelah isi
  setTitle("");
  setDescription("");
  setDate("");
  setImage("");

  router.refresh();

  return {
    handleCreateEvent,
    setTitle,
    setDescription,
    setImage,
    setDate,
    setAuthor,
  };
}
