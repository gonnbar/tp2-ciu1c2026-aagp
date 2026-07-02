import { Outlet, useLocation } from "react-router-dom";
import ScrollToTopButton from "../ScrollToTopButton/ScrollToTopButton";
import MobileBottomNav from "../MobileBottomNav/MobileBottomNav";

export function Layout() {
  const location = useLocation();

  const ocultarLayout = ["/", "/login", "/register", "/forgot-pass"].includes(
    location.pathname,
  );

  return (
    <>
      <div
        className={`
          min-h-screen
          flex
          flex-col
          ${ocultarLayout ? "" : "pb-20 lg:pb-0"}
        `}
      >
        <main className="flex-1">
          <Outlet />

          {!ocultarLayout && <ScrollToTopButton />}

          {!ocultarLayout && <MobileBottomNav />}
        </main>

      </div>
    </>
  );
}
