import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const uris = [
  {
    id: 1,
    path: "/",
    name: "Home",
  },
  {
    id: 2,
    path: "/products",
    name: "Products",
  },
  {
    id: 3,
    path: "/dashboard",
    name: "Dashboard",
  },
  {
    id: 4,
    path: "/about",
    name: "About",
  },
];

export default function Navbar() {
  const [show, setShow] = useState(false);
  const { pathname } = useLocation();

  return (
    <nav className="bg-white py-3.5 border-b">
      <div className="w-4/5 flex justify-between items-center mx-auto">
        <Link to="/" className="text-3xl font-semibold text-gray-900">
          Xventory
        </Link>

        <ul className="hidden md:flex items-center gap-3.5">
          {uris.map((uri) => (
            <li key={uri.id}>
              <Link
                to={uri.path}
                className={`text-gray-500 ${
                  pathname === uri.path && "font-semibold text-gray-900"
                }`}
              >
                {uri.name}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-1.5">
          <Link
            to="/signin"
            className="text-gray-900 bg-gray-200 hover:bg-gray-300 px-3.5 py-2 rounded-3xl "
          >
            Signin
          </Link>
          <Link
            to="/signup"
            className="text-white bg-gray-900 hover:bg-gray-700 px-3.5 py-2 rounded-3xl "
          >
            Signup
          </Link>
        </div>

        <button className="md:hidden" onClick={() => setShow(true)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-7"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>

        <aside
          className={`md:hidden bg-gray-100 fixed inset-0 ${
            show ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-300`}
        >
          <div className="flex justify-end p-5">
            <button onClick={() => setShow(false)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-10 text-gray-600"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <ul className="flex flex-col items-center gap-3.5 my-20">
            {uris.map((uri) => (
              <li key={uri.id}>
                <Link
                  to={uri.path}
                  className={`text-2xl font-semibold text-gray-500 ${
                    pathname === uri.path && "font-bold text-gray-900"
                  }`}
                >
                  {uri.name}
                </Link>
              </li>
            ))}

            <li className="flex items-center gap-1.5">
              <Link
                to="/signin"
                className="text-gray-900 bg-gray-200 hover:bg-gray-300 px-3.5 py-2 rounded-3xl "
              >
                Signin
              </Link>
              <Link
                to="/signup"
                className="text-white bg-gray-900 hover:bg-gray-700 px-3.5 py-2 rounded-3xl "
              >
                Signup
              </Link>
            </li>
          </ul>
        </aside>
      </div>
    </nav>
  );
}
