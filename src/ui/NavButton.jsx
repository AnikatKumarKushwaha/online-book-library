/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

export default function NavButton({ path, text }) {
  return (
    <Link
      to={path}
      className="border border-yellow-50 px-1 sm:px-3 py-1 rounded-full shadow-lg hover:-translate-y-1 transition-all duration-200 active:translate-y-0 hover:bg-yellow-50 hover:text-yellow-900 hover:border-yellow-950 text-sm sm:text-base"
    >
      {text}
    </Link>
  );
}
