"use client";

import useCreateEvent from "@/components/hooks/useCreateEvent";
import React from "react";

export default function page() {
  const { handleCreateEvent, setTitle, setDescription, setImage, setDate } =
    useCreateEvent();

  return (
    <div>
      <form onSubmit={handleCreateEvent}>
        <input
          placeholder="title"
          onChange={(e) => setTitle(e.target.value)}
        ></input>
        <input
          placeholder="description"
          onChange={(e) => setDescription(e.target.value)}
        ></input>
        <input
          placeholder="date"
          type="date"
          onChange={(e) => setDate(e.target.value)}
        ></input>
        <input
          placeholder="image"
          type="text"
          onChange={(e) => setImage(e.target.value)}
        ></input>
        <button>Create Event</button>
      </form>
    </div>
  );
}
