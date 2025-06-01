"use client";
import "../lib/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPenToSquare,
  faShoppingCart,
  faNewspaper,
  faKey,
  faUser,
  faCalendar,
  faBell
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import React from "react";
import Image from "next/image";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

export default function Dashboard() {
  const [activeSection, setActiveSection] = useState("")
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <nav className="w-64 bg-white shadow-md flex flex-col py-8 px-4">
        {/*<h1 className="text-3xl font-bold mb-10 text-center">Dashboard</h1>*/}
        <Image
          src="/logo.svg"
          alt="Logo"
          width={110}
          height={100}
          className="mx-auto mb-10"
        />
        <ul className="space-y-4">
          <li>
            <div className="flex items-center space-x-4 p-3 rounded-lg hover:bg-gray-100 cursor-pointer transition text-gray-300"
            onClick={() => setActiveSection("calendar")}>
              <FontAwesomeIcon icon={faCalendar} size="lg" />
              <span className="text-gray-400 text-lg font-medium">Calendar</span>
            </div>
          </li>
          <li>
            <div className="flex items-center space-x-4 p-3 rounded-lg hover:bg-gray-100 cursor-pointer transition text-gray-300">
              <FontAwesomeIcon icon={faShoppingCart} size="lg" />
              <span className="text-gray-400 text-lg font-medium">
                Shopping List
              </span>
            </div>
          </li>
          <li>
            <div className="flex items-center space-x-4 p-3 rounded-lg hover:bg-gray-100 cursor-pointer transition text-gray-300">
              <FontAwesomeIcon icon={faBell} size="lg" />
              <span className="text-gray-400 text-lg font-medium">Reminder</span>
            </div>
          </li>
          <li>
            <div className="flex items-center space-x-4 p-3 rounded-lg hover:bg-gray-100 cursor-pointer transition text-gray-300">
              <FontAwesomeIcon icon={faKey} size="lg" />
              <span className="text-gray-400 text-lg font-medium">
                Password Manager
              </span>
            </div>
          </li>
          <li>
            <div className="flex items-center space-x-4 p-3 rounded-lg hover:bg-gray-100 cursor-pointer transition text-gray-300">
              <FontAwesomeIcon icon={faUser} size="lg" />
              <span className="text-gray-400 text-lg font-medium">Profile</span>
            </div>
          </li>
        </ul>
      </nav>
      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center">
      {activeSection === "calendar" ? (
          <Calendar /> // You can replace this with your own calendar component
        ) : (
        <div className="text-gray-400 text-2xl">
          Select a section from the sidebar
        </div>
        )}
      </main>
    </div>
  );
}
