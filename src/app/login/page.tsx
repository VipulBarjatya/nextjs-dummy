"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function Login() {
  const router = useRouter()
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false)

  const handleLogin = async () => {
    try {
      setLoading(true)
      const response = await axios.post("/api/users/login", user)
      console.log("response",response);
      
      router.push("/profile")
    } catch (error: any) {
      console.log("Login Failed", error.message);
    } finally{
      setLoading(false)
    }
  };
  return (
    <div className="bg-gray-500 h-screen flex justify-center items-center">
      <div className="text-black flex flex-col items-center bg-neutral-100 w-64 h-auto pb-4 rounded-md">
        <h1 className="text-lg font-semibold py-4 ">Login Here!</h1>
        <hr />
        <label className="mt-2.5 mb-1.5 text-left" htmlFor="username">
          Enter Email:
        </label>
        <input
          id="email"
          type="email"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
          placeholder="email"
        />
        <label className="mt-2.5 mb-1.5 text-left" htmlFor="password">
          Enter Password:
        </label>
        <input
          id="password"
          type="password"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
          placeholder="password"
        />
        <button
          onClick={handleLogin}
          className="btn bg-stone-700 focus:outline-none hover:bg-gray-200 hover:text-black ease-in duration-200 px-4 my-4 text-white rounded-lg"
        >
         Login
        </button>
        <Link className="text-sm text-sky-800" href="/signup">New User? Sign Up</Link>
      </div>
    </div>
  );
}
