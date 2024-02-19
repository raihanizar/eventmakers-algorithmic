"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export const useRegister = () => {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmitRegister(event) {
    event.preventDefault();

    try {
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

      // jika berhasil register, redirect ke halaman login
      router.push("/");

      // pesan berhasil register
      const { message: resMessage } = await res.json();
      toast.success(resMessage);

    } catch {
      // jika gagal register, tetap di halaman register
      toast.error("gagal register");
    } 
  }

  return { handleSubmitRegister, setName, setEmail, setPassword };
};
