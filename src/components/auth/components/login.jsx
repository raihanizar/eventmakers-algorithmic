"use client";

import { useLogin } from "../hooks/useLogin";

export const Login = () => {
  const { handleSubmitLogin, setEmail, setPassword } = useLogin();

  return (
    <div>
      <form onSubmit={handleSubmitLogin}>
        <input
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <input
          placeholder="password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <button>Login</button>
      </form>
    </div>
  );
};
