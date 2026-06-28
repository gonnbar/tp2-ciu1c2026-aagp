function PanelDerecho(){
    return(
        <aside className="w-full lg:w-72 shrink-0">
      <div className="flex flex-col sm:flex-row lg:flex-col gap-6">
        <div className="flex-1 rounded-xl bg-surface shadow-md p-5">
          <h2 className="text-lg font-bold text-text mb-4"> Etiquetas Populares</h2>
          <div className="flex flex-wrap gap-2">
            <span className="text-primary"># Programación</span>
            <span className="text-primary"># React</span>
            <span className="text-primary"># antisocial</span>
            <span className="text-primary"># Unahur</span>
            <span className="text-primary"># Tranquilidad</span>
            <span className="text-primary"># Universidad</span>
          </div>
        </div>
        <div className="flex-1 rounded-xl bg-surface shadow-md p-5">
          <h2 className="text-lg font-bold text-text mb-4"> Sobre Nosotros</h2>
          <p className="text-sm text-text-secondary">
            UnaHur Anti-Social Net es una red social para compartir ideas,
            publicaciones y contenido entre estudiantes.
            Menos ruido, más vos.
          </p>
        </div>
      </div>
    </aside>
  );
}

export default PanelDerecho;