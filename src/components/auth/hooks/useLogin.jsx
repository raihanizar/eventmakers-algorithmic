"use client";

import { useState } from "react";
import Cookies from "js-cookie";

export const useLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleLogin() {
    const res = await fetch("https://eventmakers-api.fly.dev/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const { payload, token } = await res.json();

    // save payload to local storage
    localStorage.setItem("user", JSON.stringify(payload));

    // store token to cookies
    Cookies.set("token", token);
  }

  return { handleLogin, setEmail, setPassword };
};
