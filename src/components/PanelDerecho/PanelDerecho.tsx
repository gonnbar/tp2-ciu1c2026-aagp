import hastag from '../../assets/hashtag_secondary_light.svg'
function PanelDerecho(){
    return(
        <aside className="w-full lg:w-72 shrink-0">
      <div className="flex flex-col sm:flex-row lg:flex-col gap-6">
        <div className="flex-1 rounded-xl bg-surface shadow-md p-5">
          <h2 className="text-lg font-bold text-text mb-4"> Etiquetas Populares</h2>
          <div className="flex flex-col gap-3">
            <span className="flex items-center gap-2 text-secondary">
                <img src={hastag} className="w-4 h-4"/>
                Programacion
            </span>
            <span className="flex items-center gap-2 text-secondary">
                <img src={hastag} className="w-4 h-4"/>
                React
            </span>
            <span className="flex items-center gap-2 text-secondary">
                <img src={hastag} className="w-4 h-4"/>
                antisocial
            </span>
            <span className="flex items-center gap-2 text-secondary">
                <img src={hastag} className="w-4 h-4"/>
                 Unahur
            </span>
            <span className="flex items-center gap-2 text-secondary">
                <img src={hastag} className="w-4 h-4"/>
                Tranquilidad
            </span>
            <span className="flex items-center gap-2 text-secondary"> 
                <img src={hastag} className="w-4 h-4"/>
                Universidad</span>
            <span className="flex items-center gap-2 text-secondary">
                <img src={hastag} className="w-4 h-4"/>
                Miercoles
            </span>
            <span className="flex items-center gap-2 text-secondary">
                <img src={hastag} className="w-4 h-4"/>
                Interfaces
            </span>
          </div>
        </div>
        <div className="flex-1 rounded-xl bg-surface shadow-md p-5">
          <h2 className="text-lg font-bold text-text mb-4">UNAHUR</h2>
          <p className="text-sm text-text-secondary">
          UnaHur Anti-Social Net es una red social diseñada exclusivamente 
          para los estudiantes de la Universidad Nacional de Hurlingham. 
          Aquí podés compartir publicaciones, hacer consultas, intercambiar apuntes,
          debatir sobre materias, recomendar recursos y conectar con otros 
          estudiantes de la comunidad. Buscamos crear un espacio donde el 
          aprendizaje colaborativo y la participación sean los protagonistas,
          dejando de lado el ruido de las redes sociales tradicionales.
          Menos ruido, más vos.
          </p>
        </div>
      </div>
    </aside>
  );
}

export default PanelDerecho;