"use client";

import Link from "next/link";
import { useLogin } from "./hooks/useLogin";

export const Login = () => {
  const { handleSubmitLogin, setEmail, setPassword } = useLogin();

  return (
    <div className="h-screen w-screen flex justify-center items-center bg-slate-100">
      <div className="sm:shadow-xl px-8 pb-8 pt-12 sm:bg-white rounded-xl space-y-12">
        <h1 className="font-semibold text-2xl flex justify-center">
          Welcome Back
        </h1>

        <form
          onSubmit={handleSubmitLogin}
          className="space-y-8 w-full sm:w-[400px]"
        >
          <div className="grid w-full items-center">
            <label>Email</label>
            <input
              className="input input-primary"
              required
              placeholder="input your email"
              name="email "
              type="email"
              onChange={(e) => setEmail(e.target.value)}
            ></input>
          </div>

          <div className="grid w-full items-center">
            <label>Password</label>
            <input
              className="input input-primary"
              required
              placeholder="input your password"
              name="password"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            ></input>
          </div>

          <div className="w-full">
            <button className="w-full btn btn-primary" size="lg">
              Login
            </button>
          </div>
        </form>

        <p className="text-center">
          Need to create an account?{" "}
          <Link className="text-indigo-500 hover:underline" href="./register">
            Create Account
          </Link>{" "}
        </p>
      </div>
    </div>
  );
};
