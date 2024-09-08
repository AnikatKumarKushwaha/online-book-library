import { Link } from "react-router-dom";
import NavButton from "./NavButton";

export default function Header() {
  return (
    <div className="flex justify-between item-center px-2 sm:px-10 py-5 bg-yellow-900 shadow-2xl text-yellow-50">
      <Link to="/" className="font-semibold  sm:font-bold text-sm sm:text-base">
        LIBRARY SYSTEM
      </Link>
      <nav className="flex sm:gap-10 gap-2">
        <NavButton path="/" text="Home" />
        <NavButton path="/books/all" text="Books" />
        <NavButton path="/add-books" text="Add Books" />
      </nav>
    </div>
  );
}
