import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "./../providers/AuthProvider";
import toast from "react-hot-toast";
import logo from "/logo.png";

const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);
  const handleLogout = async () => {
    try {
      await signOutUser();
      toast.success("You have been logged out successfully.");
    } catch (error) {
      toast.error("An error occurred. Please try again.");
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
              <div className="flex items-center gap-2">
                <img src={logo} alt="logo" className="w-16" />
                <span className="text-white">ShopEase</span>
              </div>
            </Link>
          </div>
          <div className="flex-none">
            <div className="dropdown dropdown-end">
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
            </div>
          </div>
        </div>
      </div>
      <div className="sm:hidden block ">
        <div className="navbar bg-neutral-800 rounded-2xl ">
          <div className="navbar-start">
            <Link
              className="flex-none rounded-md text-xl inline-block font-semibold focus:outline-none focus:opacity-80"
              to="/"
            >
              <div className="flex items-center gap-2">
                <img src={logo} alt="logo" className="w-16" />
                <span className="text-white">ShopEase</span>
              </div>
            </Link>
          </div>
          <div className="navbar-end">
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
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
