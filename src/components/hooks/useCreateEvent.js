"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function useCreateEvent() {
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [dateTime, setDate] = useState("");
  const [author, setAuthor] = useState("");

  async function handleCreateEvent(event) {
    event.preventDefault();

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
    if (!!res.ok) {
      return data;
    } else {
      throw new Error(data.message);
    }
  }

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
