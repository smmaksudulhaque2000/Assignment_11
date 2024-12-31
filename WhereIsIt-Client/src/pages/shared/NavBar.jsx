import { Link, NavLink } from "react-router-dom";
import { FaDonate, FaHome, FaSitemap, FaUserCircle } from "react-icons/fa";
import { useContext } from "react";
import AuthContext from "../../context/AuthContext/AuthContext";
import { FaUserPen } from "react-icons/fa6";
import { MdNoteAdd, MdOutlineFindInPage } from "react-icons/md";
import { TiThSmall } from "react-icons/ti";
import { LuBookUser } from "react-icons/lu";
import ThemeToggleButton from "../../components/ThemeToggleButton";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);

  const dropdownLinks = (
    <>
      <li className="text-gray-700 font-bold">
        <NavLink to={"/addItems"}>
          <MdNoteAdd />
          Add Lost & Found Item
        </NavLink>
      </li>
      <li className="text-gray-700 font-bold">
        <NavLink to={"/recovered"}>
          <LuBookUser />
          All Recovered Items
        </NavLink>
      </li>
      <li className="text-gray-700 font-bold">
        <NavLink to={"/myItems"}>
          <FaSitemap />
          Manage My Items
        </NavLink>
      </li>
      <li className="text-gray-700 font-bold">
        <NavLink to={"/dashboard"}>
          <FaUserPen />
          Dashboard
        </NavLink>
      </li>
      <li>
        <ThemeToggleButton />
      </li>
    </>
  );

  const mainLinks = (
    <>
      <li className="text-gray-700 font-bold">
        <NavLink to={"/"}>
          <FaHome />
          Home
        </NavLink>
      </li>
      <li className="text-gray-700 font-bold">
        <NavLink to={"/items"}>
          <TiThSmall />
          Lost & Found Items
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100 lg:px-10 justify-between">
      <div>
        <Link
          to={"/"}
          className="text-xl lg:text-2xl font-bold flex gap-2 justify-center items-center"
        >
          <MdOutlineFindInPage className="text-3xl" />
          WhereIsIt
        </Link>
      </div>

      <div className="hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{mainLinks}</ul>
      </div>

      <div className="gap-5 pr-4 flex items-center">
        <div className="dropdown dropdown-end z-50">
          <label
            tabIndex={0}
            className="tooltip tooltip-bottom cursor-pointer"
            data-tip={user?.displayName || "Guest"}
          >
            {user && user.email ? (
              <img
                referrerPolicy="no-referrer"
                className="w-10 h-10 bg-slate-500 rounded-full"
                src={user?.photoURL}
                alt="User Photo"
              />
            ) : (
              <FaUserCircle className="w-10 h-10" />
            )}
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li className="text-gray-700 font-bold lg:hidden">
              <NavLink to={"/"}>
                <FaHome />
                Home
              </NavLink>
            </li>
            <li className="text-gray-700 font-bold lg:hidden">
              <NavLink to={"/items"}>
                <TiThSmall />
                Lost & Found Items
              </NavLink>
            </li>

            {dropdownLinks}
          </ul>
        </div>

        {user && user.email ? (
          <button
            onClick={logOut}
            className="bg-gray-700 text-white p-2 rounded"
          >
            Log Out
          </button>
        ) : (
          <div className="flex flex-col gap-2">
            <Link className="bg-gray-700 text-white p-1 lg:p-2 text-center rounded" to="/auth/login">
              Login
            </Link>
            <Link className="bg-gray-700 text-white p-1 lg:p-2 text-center rounded" to="/auth/register">
              Register
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
