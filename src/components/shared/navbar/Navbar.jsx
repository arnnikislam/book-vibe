import { NavLink } from "react-router";
import "./Navbar.css";
const Navbar = () => {
  const links = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/books"}>Listed Books</NavLink>
      </li>
      <li>
        <NavLink to={"/read-pages"}>Pages to Read</NavLink>
      </li>
    </>
  );
  return (
    <div className="container mx-auto">
      <div className="navbar bg-base-100 w-[92%] mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                aria-label="Menu"
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={-1}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <a className="font-bold text-xl hidden md:block">Book Vibe</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 space-x-2">{links}</ul>
        </div>
        <div className="navbar-end space-x-3">
          <button className="btn bg-[#23BE0A] text-white">Sign In</button>
          <button className="btn bg-[#59C6D2] text-white">Sign Up</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
