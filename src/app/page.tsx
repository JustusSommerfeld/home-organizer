"use client";
import Image from "next/image";
import { use, useState } from "react";

export default function Home() {
  const [screen, setScreen] = useState<"home" | "login" | "register">("home");

  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 py-16 bg-gray-50 text-center">
      <Image
        src="/logo.svg"
        alt="Home Organizer Logo"
        width={180}
        height={180}
        priority
        className="mb-8"
      />
      <h1 className="text-5xl font-extrabold text-gray-800 mb-4">
        Home Organizer
      </h1>
      <p className="text-xl text-gray-600 max-w-md">Clean Space. Clear Mind.</p>

      {screen === "home" && (
        <button
          className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition"
          onClick={() => setScreen("login")}
        >
          Get Started
        </button>
      )}

      {screen === "home" && (
        <button
          className="mt-4 px-6 py-3 bg-green-600 text-white rounded-xl hover:bg-green-700 transition"
          onClick={() => (window.location.href = "/dashboard")}
        >
          Test dashboard
        </button>
      )}

      {screen === "home" && (
        <button
          className="mt-4 px-6 py-3 bg-[#278783] text-white rounded-xl hover:bg-[#206c68] transition"
          onClick={() => (window.location.href = "/team")}
        >
          Team
        </button>
      )}

      {screen === "login" && (
        <form className="mt-8 w-full max-w-xs flex flex-col gap-4">
          <input
            type="email"
            placeholder="Email"
            className="px-4 py-2 border rounded text-gray-600"
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="px-4 py-2 border rounded text-gray-600"
            required
          />
          <button
            type="submit"
            className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            Login
          </button>
          <button
            type="button"
            className="text-blue-600 underline mt-2"
            onClick={() => setScreen("home")}
          >
            Back
          </button>
          <span className="mt-2 text-sm text-gray-600">
            No account yet?{" "}
            <button
              type="button"
              className="text-blue-600 underline"
              onClick={() => setScreen("register")}
            >
              Register here
            </button>
          </span>
        </form>
      )}

      {screen === "register" && (
        <form className="mt-8 w-full max-w-xs flex flex-col gap-4">
          <input
            type="text"
            placeholder="Name"
            className="px-4 py-2 border rounded text-gray-600"
            required
          />
          <input
            type="email"
            placeholder="Email"
            className="px-4 py-2 border rounded text-gray-600"
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="px-4 py-2 border rounded text-gray-600"
            required
          />
          <button
            type="submit"
            className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            Register
          </button>
          <button
            type="button"
            className="text-blue-600 underline mt-2"
            onClick={() => setScreen("login")}
          >
            Back to Login
          </button>
        </form>
      )}
    </main>
  );
}
