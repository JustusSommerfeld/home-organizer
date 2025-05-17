import "../lib/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPenToSquare,
  faShoppingCart,
  faNewspaper,
  faKey,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

export default function Dashboard() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-start px-4 py-16 bg-gradient-to-br from-gray-50 to-gray-200">
      <section className="w-full max-w bg-white rounded-2xl shadow-lg p-10 flex flex-col items-center">
        <img
          src="/profile.jpg"
          alt="Profile Picture"
          className="w-20 h-20 rounded-full border-4 border-gray-200 shadow mb-4"
        />
        <h1 className="text-4xl font-bold text-gray-800 mb-1">Dashboard</h1>
        <button className="mt-3 px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition">
          Edit Profile <FontAwesomeIcon icon={faPenToSquare} className="ml-1" />
        </button>
        <div className="grid grid-cols-4 gap-6 w-full">
          {[
            {
              label: "Einkaufsliste",
              icon: <FontAwesomeIcon icon={faShoppingCart} />,
            },
            {
              label: "Prospekte",
              icon: <FontAwesomeIcon icon={faNewspaper} />,
            },
            { label: "Passwörter", icon: <FontAwesomeIcon icon={faKey} /> },
            { label: "Account", icon: <FontAwesomeIcon icon={faUser} /> },
          ].map(({ label, icon }) => (
            <div
              key={label}
              className="mt-5 bg-gray-50 hover:bg-gray-100 transition rounded-xl shadow-sm p-6 flex flex-col items-center justify-center cursor-pointer"
            >
              <span className="text-3xl mb-2 text-gray-400">{icon}</span>
              <span className="text-base font-medium text-gray-700">
                {label}
              </span>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
