"use client";
import Link from "next/link";
import React, { useState } from "react";
import { CornerDownLeft } from "react-feather";

const LoginPage: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(username, password)
  };

  return (
    <div className="flex justify-center items-center flex-col gap-4 h-screen bg-gradient-to-br from-gray-800 to-gray-700 px-10 md:px-0">
      <div className="w-full md:max-w-md flex justify-end" >
        <Link className="text-teal-500 hover:text-teal-300 duration-300 flex gap-2 text-base font-extralight" href={'/'}> <CornerDownLeft /> Back to Home</Link>
      </div>
      <div className="bg-white p-8 rounded shadow-md w-full md:max-w-md">
        <h1 className="text-3xl font-bold mb-4 text-center text-gray-800">Login</h1>
        <form onSubmit={(e) => handleLogin(e)} className="space-y-4">
          <div>
            <label htmlFor="username" className="block text-gray-600">
              Username:
            </label>
            <input
              type="text"
              id="username"
              value={username}
              autoFocus
              onChange={(e) => setUsername(e.target.value)}
              className="w-full border border-gray-300 rounded p-2 mb-2"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-gray-600">
              Password:
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-gray-300 rounded p-2 mb-4"
            />
          </div>
          <div>
            <p className="text-sm">Dont have accout? <Link className="text-sm text-teal-600 ml-1" href={'/register'}>Register</Link></p>
          </div>
          <button
            type="submit"
            className="bg-teal-800 text-white px-4 py-4 rounded transition duration-300 hover:bg-teal-700 w-full"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
