"use client";

import { useState } from "react";
import Cookies from "js-cookie";

export const useRegister = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmitRegister(event) {
    event.preventDefault();
    const res = await fetch("https://eventmakers-api.fly.dev/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    });

    const data = await res.json();
    console.log(data);
  }

  return { handleSubmitRegister, setName, setEmail, setPassword };
};