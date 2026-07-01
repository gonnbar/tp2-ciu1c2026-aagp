import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../../context/UserContext";
import {
  HiOutlineHome,
  HiOutlineUser,
  HiOutlinePencilSquare,
  HiArrowRightOnRectangle,
} from "react-icons/hi2";

export default function MobileBottomNav() {
  const location = useLocation();
  const { logout } = useAuth();

  const isHome =
    location.pathname === "/home" ||
    location.pathname === "/about" ||
    location.pathname.startsWith("/post/");

  return (
    <div
      className="
        fixed
        bottom-0
        left-0
        right-0
        bg-white
        flex
        justify-around
        items-center
        py-3
        shadow-[0_-4px_12px_rgba(0,0,0,0.09)]
        lg:hidden
        z-40
        "
    >
      <Link
        to="/home"
        className={`flex flex-col items-center gap-1 rounded-xl px-4 py-2 transition
            ${
              isHome
                ? "bg-secondary/20 text-primary-dark"
                : "text-primary hover:bg-secondary/20"
            }`}
      >
        <HiOutlineHome className="w-7 h-7" />
      </Link>

      <Link
        to="/profile"
        className={`flex flex-col items-center gap-1 rounded-xl px-4 py-2 transition
            ${
              location.pathname === "/profile"
                ? "bg-secondary/20 text-primary-dark"
                : "text-primary hover:bg-secondary/20"
            }`}
      >
        <HiOutlineUser className="w-7 h-7" />
      </Link>

      <Link
        to="/create-post"
        state={{ backgroundLocation: location }}
        className={`flex flex-col items-center gap-1 rounded-xl px-4 py-2 transition
            ${
              location.pathname === "/create-post"
                ? "bg-secondary/20 text-primary-dark"
                : "text-primary hover:bg-secondary/20"
            }`}
      >
        <HiOutlinePencilSquare className="w-7 h-7" />
      </Link>

      <button
        onClick={logout}
        className="group flex items-center gap-3 rounded-xl px-4 py-3 transition hover:bg-secondary/20 cursor-pointer"
      >
        <HiArrowRightOnRectangle className="w-7 h-7 text-primary" />
      </button>
    </div>
  );
}
