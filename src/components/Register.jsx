"use client";

import Link from "next/link";
import { useRegister } from "./hooks/useRegister";

export const Register = () => {
  const { handleSubmitRegister, setName, setEmail, setPassword } = useRegister();

  return (
    <div className="h-screen w-screen flex justify-center items-center bg-slate-100">
      <div className="sm:shadow-xl px-8 pb-8 pt-12 sm:bg-white rounded-xl space-y-12">
        <h1 className="font-semibold text-2xl">Create your Account</h1>
        <form onSubmit={handleSubmitRegister} className="space-y-12 w-full sm:w-[400px]">
        <div className="grid w-full items-center gap-1.5">
          <input
            className="w-full"
            required
            placeholder="name"
            onChange={(e) => setName(e.target.value)}
          ></input>
        </div>

        <div className="grid w-full items-center gap-1.5">
          <input
            className="w-full"
            required
            placeholder="email"
            onChange={(e) => setEmail(e.target.value)}
            ></input>
        </div>

        <div className="grid w-full items-center gap-1.5">
          <input
            className="w-full"
            required
            placeholder="password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </div>

        <div className="w-full">
          <button className="w-full" size="lg">Daftar</button>
        </div>
        </form>
        <p className="text-center">Have an account? {' '}
          <Link className="text-indigo-500 hover:underline" href="./">
            Sign in
          </Link> {' '}
        </p>
      </div>
    </div>    
  )
}