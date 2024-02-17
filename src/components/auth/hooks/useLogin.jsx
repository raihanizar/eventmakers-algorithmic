import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { useState } from "react";

export const useLogin = () => {
  //   const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handlerSubmitLogin(event) {
    event.preventDefault();

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

    // router.push("/dashboard");
  }

  return { handlerSubmitLogin, setEmail, setPassword };
};
