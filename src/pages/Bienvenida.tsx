import { Link } from 'react-router-dom';
import logoBienvenida from '../assets/logoBienvenida.png'

//  <h1 className="tracking-wider"> Bienvenido a </h1>

function bienvenida(){
    return(
    <div className="min-h-screen bg-gradient-to-br from-[#3F2B96] via-[#6A4CDB] to-[#D16BA5]">
         <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-purple-400/20 blur-3xl"></div>
         <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-pink-300/20 blur-3xl"></div>
        <div className="relative z-10 flex min-h-screen flex-col items-center justify-center text-center">
            <h1 className="pt-10 text-4xl md:text-6xl font-black uppercase leading-tight text-white drop-shadow-lg">
                Unahur Anti-Social
            </h1>
            <span className="mt-2 text-xl text-white/90 font-medium">
                Menos ruido, más vos.
            </span>
            <img src={logoBienvenida} className='mt-8 mb-8 w-72'/>
        <div className="mt-10 flex flex-col sm:flex-row gap-4">
        <Link to="/login" className="rounded-xl bg-white px-8 py-3 font-semibold text-primary transition-all duration-300 hover:scale-105">Iniciar sesión</Link>
        <Link to="/register" className="rounded-xl border-2 border-white px-8 py-3 font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-white hover:text-primary">
            Registrarse
        </Link>
        </div>
        </div>
    </div>
    )
}
export default bienvenida;
