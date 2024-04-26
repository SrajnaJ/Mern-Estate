import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-slate-200 shadow-md">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <Link to="/">
          <h1 className="font-bold text-sm sm:text-xl flex flex-wrap">
            <span className="text-yellow-600">Estates</span>
            <span className="text-gray-600"> Here</span>
          </h1>
        </Link>
        <form className="bg-slate-100 p-2 rounded-md flex items-center">
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent focus:outline-none w-24 sm:w-64"
          />
          <FaSearch className="text-gray-600" />
        </form>
        <ul className="flex gap-5 text-gray-600">
          <Link to="/">
            <li className="hidden sm:inline hover:font-bold">Home</li>
          </Link>
          <Link to="/about">
            <li
              className="hidden sm:inline 
          hover:font-bold"
            >
              About
            </li>
          </Link>
          <Link to="/sign-in">
            <li className="hover:font-bold">Sign In</li>
          </Link>
        </ul>
      </div>
    </header>
  );
}
