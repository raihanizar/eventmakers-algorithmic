"use client";

import React from "react";
import useCreateEvent from "../../hooks/useCreateEvent";

export const CreateEvent = () => {
  const {
    handleCreateEvent,
    setTitle,
    setDescription,
    setImage,
    setDate,
    setAuthor,
  } = useCreateEvent();

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
          placeholder="author"
          onChange={(e) => setAuthor(e.target.value)}
        ></input>
        <button>Create Event</button>
      </form>
    </div>
  );
};
