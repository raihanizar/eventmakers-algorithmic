import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

export const useLogin = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmitLogin(event) {
    event.preventDefault();

    try {
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

      // set payload to localstorage
      localStorage.setItem("user", JSON.stringify(payload));

      // set token to cookie
      Cookies.set("token", token);
      toast.success("selamat datang kembali");

      // jika berhasil login, redirect ke halaman events
      router.push("/dashboard");
    } catch {
      // jika gagal login, kembalikan ke halaman login
      toast.error("coba lagi");
      router.push("/");
    }
  }

  return { handleSubmitLogin, setEmail, setPassword };
};
