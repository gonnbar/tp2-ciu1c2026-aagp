import { Link, Outlet, useLocation } from "react-router-dom";
import Footer from "../Footer/Footer";
import {
  HiHome,
  HiUser,
  HiPlusCircle,
  HiArrowUp,
  HiArrowRightOnRectangle,
} from "react-icons/hi2";
import { useAuth } from "../../context/UserContext";

export function Layout() {
  const location = useLocation();
  const { logout } = useAuth();

  const ocultarLayout = ["/", "/login", "/register", "/profile", "/forgot-pass"].includes(
    location.pathname,
  );

  const isHome =
    location.pathname === "/home" ||
    location.pathname === "/about" ||
    location.pathname.startsWith("/post/");

  return (
    <>
      <div className="min-h-screen flex flex-col bg-background pb-20 lg:pb-0">

        <main className="flex-1">
          <Outlet />

          {!ocultarLayout && (
            <button
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              })
            }
            className="
              fixed
              bottom-20
              right-4
              rounded-full
              bg-primary
              text-white
              p-3
              shadow-lg
              hover:bg-primary-dark
              transition
              cursor-pointer
            "
          >
            <HiArrowUp className="w-4 h-4 stroke-2" />
          </button>
          )}
          
          {!ocultarLayout && (
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
              <HiHome className="w-7 h-7" />
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
              <HiPlusCircle className="w-7 h-7" />
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
              <HiUser className="w-7 h-7" />
            </Link>

            <button
              onClick={logout}
              className="group flex items-center gap-3 rounded-xl px-4 py-3 transition hover:bg-secondary/20 cursor-pointer"
            >
              <HiArrowRightOnRectangle className="w-7 h-7 text-primary stroke-1" />
            </button>
          </div>
          )}
          
        </main>

        {!ocultarLayout && <Footer />}
      </div>
    </>
  );
}
