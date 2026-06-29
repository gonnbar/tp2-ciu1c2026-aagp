import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

export function Layout() {
  const location = useLocation();
  const ocultarLayout = ["/", "/login", "/register"].includes(location.pathname);
  return (
    <>
      <div className="min-h-screen flex flex-col bg-background">
        
        {!ocultarLayout && <Navbar />}

        <main className="flex-1">
          <Outlet />
        </main>

        {!ocultarLayout && <Footer />}
      </div>
    </>
  );
}
