import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-surface mt-10 py-10 px-6 border-t border-primary/20">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-sm text-text-secondary text-center md:text-left"> © 2026 UnaHur Anti-Social Net. Todos los derechos reservados.</p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link to="/sobre-nosotros" className="text-text hover:text-primary"> Sobre nosotros </Link>
          <Link to="/contacto" className="text-text hover:text-primary"> Contacto</Link>
        </div>
      </div>
    </footer>
  );
}
export default Footer;