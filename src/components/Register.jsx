"use client";

import { useRegister } from "./hooks/useRegister";

export const Register = () => {
  const { handleSubmitRegister, setName, setEmail, setPassword } = useRegister();

  return (
    <div>
      <form onSubmit={handleSubmitRegister} className="bg-emerald-200">
        <input
          placeholder="name"
          onChange={(e) => setName(e.target.value)}
        ></input>
        <input
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <input
          placeholder="password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <button>Daftar</button>
      </form>
    </div>
  )
}