// import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
// import { AuthContext } from "./../providers/AuthProvider";
// import toast from "react-hot-toast";
import logo from "/logo.png";
// import useAxios from "../hooks/useAxios";
// import { useQuery } from "@tanstack/react-query";
// import Loading from "./Loading";
// import useUser from "../hooks/useUser";

const Navbar = () => {
  const handleLogout = async () => {
    try {
      //   await signOutUser();
      //   toast.success("You have been logged out successfully.");
    } catch (error) {
      //   toast.error("An error occurred. Please try again.");
    }
  };

  return (
    <>
      <div className="sm:block hidden">
        <div className="navbar bg-neutral-800 rounded-2xl">
          <div className="flex-1">
            <Link
              className="flex-none rounded-md text-xl inline-block font-semibold focus:outline-none focus:opacity-80"
              to="/"
            >
              <div className="flex items-center">
                <img src={logo} alt="logo" className="w-16" />
                <span className="text-white">Thread Nexus</span>
              </div>
            </Link>
          </div>
          <div className="flex-none">
            <div>
              <NavLink
                to={"/"}
                className={({ isActive }) =>
                  isActive
                    ? "py-3 ps-px sm:px-3 md:py-4 text-sm text-neutral-400 hover:text-neutral-400 focus:outline-none "
                    : "py-3 ps-px sm:px-3 md:py-4 text-sm text-white hover:text-neutral-400 focus:outline-none"
                }
              >
                Home
              </NavLink>

              <NavLink
                to={"/membership"}
                className={({ isActive }) =>
                  isActive
                    ? "py-3 ps-px sm:px-3 md:py-4 text-sm text-neutral-400 hover:text-neutral-400 focus:outline-none "
                    : "py-3 ps-px sm:px-3 md:py-4 text-sm text-white hover:text-neutral-400 focus:outline-none"
                }
              >
                Membership
              </NavLink>
            </div>

            {/* <div className="dropdown dropdown-end">
              {user ? (
                <div className="dropdown dropdown-end">
                  <div
                    tabIndex={0}
                    role="button"
                    className="btn btn-ghost btn-circle avatar"
                  >
                    <div className="size-9 rounded-full">
                      <img
                        alt="Tailwind CSS Navbar component"
                        src={user?.photoURL}
                      />
                    </div>
                  </div>
                  <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                  >
                    <li className="disabled">
                      <a className="justify-between">{user?.displayName}</a>
                    </li>
                    <li>
                      {isAdmin ? (
                        <Link to={"/dashboard/admin-profile"}>Dashboard</Link>
                      ) : (
                        <Link to={"/dashboard/profile"}>Dashboard</Link>
                      )}
                    </li>
                    <li onClick={handleLogout}>
                      <a>Logout</a>
                    </li>
                  </ul>
                </div>
              ) : (
                <div>
                  <button
                    type="button"
                    className="flex items-center w-full text-sm text-white hover:text-neutral-400 focus:outline-none focus:text-neutral-400 md:mr-2"
                  >
                    <div>
                      <Link
                        to="/login"
                        className="group inline-flex items-center gap-x-2 py-2 px-3 bg-lime-400 hover:bg-lime-500 font-medium text-sm text-neutral-800 rounded-full focus:outline-none"
                      >
                        JOIN US
                      </Link>
                    </div>
                  </button>
                </div>
              )}
            </div> */}
          </div>
        </div>
      </div>
      <div className="sm:hidden block ">
        <div className="navbar bg-neutral-800 rounded-2xl ">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h7"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 space-y-2"
              >
                <li>
                  <Link to={"/"} className="justify-between">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to={"/membership"}>Membership</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="navbar-center">
            <Link
              className="flex-none rounded-md text-xl inline-block font-semibold focus:outline-none focus:opacity-80"
              to="/"
            >
              <div className="flex items-center">
                <img src={logo} alt="logo" className="w-16" />
                <span className="text-white">Thread Nexus</span>
              </div>
            </Link>
          </div>
          <div className="navbar-end">
            {/* {user ? (
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar"
                >
                  <div className="size-9 rounded-full">
                    <img
                      alt="Tailwind CSS Navbar component"
                      src={user?.photoURL}
                    />
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <li className="disabled">
                    <a className="justify-between">{user?.displayName}</a>
                  </li>
                  <li>
                    {isAdmin ? (
                      <Link to={"/dashboard/admin-profile"}>Dashboard</Link>
                    ) : (
                      <Link to={"/dashboard/profile"}>Dashboard</Link>
                    )}
                  </li>
                  <li onClick={handleLogout}>
                    <a>Logout</a>
                  </li>
                </ul>
              </div>
            ) : (
              <div>
                <button
                  type="button"
                  className="flex items-center w-full text-sm text-white hover:text-neutral-400 focus:outline-none focus:text-neutral-400 md:mr-2"
                >
                  <div>
                    <Link
                      to="/login"
                      className="group inline-flex items-center gap-x-2 py-2 px-3 bg-lime-400 hover:bg-lime-500 font-medium text-sm text-neutral-800 rounded-full focus:outline-none"
                    >
                      JOIN US
                    </Link>
                  </div>
                </button>
              </div>
            )} */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
