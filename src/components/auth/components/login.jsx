"use client";

import { useLogin } from "../hooks/useLogin";

export const Login = () => {
  const { handleLogin, setEmail, setPassword } = useLogin();

  return (
    <div>
      <input
        placeholder="email"
        onChange={(e) => setEmail(e.target.value)}
      ></input>
      <input
        placeholder="password"
        type="password"
        onChange={(e) => setPassword(e.target.value)}
      ></input>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};
