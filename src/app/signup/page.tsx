"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function SignUp() {
  const router = useRouter();
  const [user, setUser] = useState({
    email: "",
    password: "",
    username: "",
  });
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSignup = async () => {
    try {
      setLoading(true);
      const response = await axios.post("/api/users/signup", user);
      console.log("Signup success", response.data);
      if (response) {
        setButtonDisabled(false);
      }
      router.push("/login");
    } catch (error: any) {
      console.log("SignUp failed", error.message);
    } finally {
    }
  };

  useEffect(() => {
    if (loading) {
      setButtonDisabled(true);
    }
  }, [loading]);
  return (
    <div className="bg-gray-500 h-screen flex justify-center items-center">
      <div className="text-black flex flex-col items-center bg-neutral-200 w-64 h-auto pb-8 rounded-md">
        <h1 className="text-lg font-semibold py-4 ">Register Here!</h1>
        <hr />
        <label className="mt-2.5 mb-1.5 text-left" htmlFor="email">
          Enter Email:
        </label>
        <input
          className="py-1 px-2 rounded-md text-sm"
          id="email"
          type="email"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
          placeholder="email"
        />
        <label className="mt-2.5 mb-1.5 text-left" htmlFor="username">
          Enter Username:
        </label>
        <input
          className="py-1 px-2 rounded-md text-sm"
          id="username"
          type="text"
          value={user.username}
          onChange={(e) => setUser({ ...user, username: e.target.value })}
          placeholder="username"
        />
        <label className="mt-2.5 mb-1.5 text-left" htmlFor="password">
          Enter Password:
        </label>
        <input
          className="py-1 px-2 rounded-md text-sm"
          id="password"
          type="password"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
          placeholder="password"
        />
        <button
          disabled={buttonDisabled}
          onClick={handleSignup}
          className="btn bg-stone-700 focus:outline-none hover:bg-neutral-400 hover:text-black ease-in duration-200 px-4 my-4 text-white rounded-md"
        >
          SIGN UP
        </button>
        <Link className="text-sm text-sky-800" href="/login">
          Already a User? Sign In
        </Link>
      </div>
    </div>
  );
}
