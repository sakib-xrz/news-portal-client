import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import LeftSidebar from "../left-sidebar/LeftSidebar";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const signOut = () => {
    logOut()
      .then(() => {})
      .catch(() => {});
  };

  return (
    <div className="bg-secondary shadow-md sticky top-0 z-50">
      <div className="navbar container mx-auto">
        {/* navbar start for large device  */}
        <div className="navbar-start hidden lg:block">
          <Link
            to={"/"}
            className="btn btn-ghost normal-case text-lg md:text-xl text-primary hover:bg-secondary"
          >
            <span className="bg-primary text-secondary px-3 py-2 rounded-md mr-2">
              News
            </span>
            Portal
          </Link>
        </div>
        {/* navbar start for small device */}
        <div className="navbar-start lg:hidden">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-5 h-5 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
            <div
              tabIndex={0}
              className="menu dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <LeftSidebar></LeftSidebar>
              {user?.uid ? (
                <></>
              ) : (
                <Link
                  to={"/login"}
                  className="text-primary font-medium -mt-4 pb-4 pl-3 pt-2 md:hidden"
                >
                  Log In
                </Link>
              )}
            </div>
          </div>
        </div>
        {/* navbar center for large device */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0"></ul>
        </div>
        {/* navbar center for small device */}
        <div className="navbar-center lg:hidden">
          <Link
            to={"/"}
            className="btn btn-ghost normal-case md:text-lg text-xs text-primary hover:bg-secondary"
          >
            <span className="bg-primary text-secondary px-3 py-2 rounded-md">
              News
            </span>
            Portal
          </Link>
        </div>
        {/* navbar end for large and small device */}
        <div className="navbar-end">
          {user?.uid ? (
            <>
              <h2 className="text-neutral font-medium text-sm md:text-lg">
                {user?.displayName?.split(" ")[0]}
              </h2>
              <div className="dropdown dropdown-end">
                <label
                  tabIndex={0}
                  className="btn btn-ghost btn-circle avatar ml-2"
                >
                  <div className="w-10 rounded-full">
                    {user?.photoURL ? (
                      <img alt="" src={user.photoURL} />
                    ) : (
                      <img
                        alt=""
                        src="https://i.ibb.co/VvZScTP/blank-avatar.png"
                      />
                    )}
                  </div>
                </label>
                <ul
                  tabIndex={0}
                  className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <li>
                    <Link onClick={signOut}>Logout</Link>
                  </li>
                </ul>
              </div>
            </>
          ) : (
            <>
              <Link
                to={"/login"}
                className="text-primary font-medium hidden md:block"
              >
                Log In
              </Link>
              <Link
                to={"/register"}
                className="text-secondary text-xs md:text-base font-medium bg-primary px-3 py-2 rounded-md ml-3"
              >
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
