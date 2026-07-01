import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Footer/Footer";
import ScrollToTopButton from "../ScrollToTopButton/ScrollToTopButton";
import MobileBottomNav from "../MobileBottomNav/MobileBottomNav";

export function Layout() {
  const location = useLocation();

  const ocultarLayout = ["/", "/login", "/register", "/forgot-pass"].includes(
    location.pathname,
  );

  const ocultarFooter = [
    "/",
    "/home",
    "/login",
    "/register",
    "/forgot-pass",
  ].includes(location.pathname);

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

        {!ocultarFooter && <Footer />}
      </div>
    </>
  );
}
