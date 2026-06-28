function PanelDerecho(){
    return(
        <aside className="w-72 shrink-0 flex flex-col gap-6">
            <div className="rounded-xl bg-surface shadow-md p-5">
                <h2 className="text-lg font-bold text-text mb-4">
                    Etiquetas Populares
                </h2>
                <div className="flex flex-col gap-3">
                    <span className="text-primary">
                        # Programación
                    </span>
                    <span className="text-primary">
                        # React
                    </span>
                    <span className="text-primary">
                        # antisocial
                    </span>
                    <span className="text-primary">
                        # Unahur
                    </span>
                    <span className="text-primary">
                        # Tranquilidad
                    </span>
                    <span className="text-primary">
                        # Universidad
                    </span>
                </div>
            </div>
            <div className="rounded-xl bg-surface shadow-md p-5">
                <h2 className="text-lg font-bold text-text mb-4">
                    Sobre Nosotros
                </h2>
                <p className="text-sm text-text-secondary">
                    UnaHur Anti-Social Net es una red social para compartir ideas,
                    publicaciones y contenido entre estudiantes.
                    Menos ruido, y más vos.
                </p>
            </div>
        </aside>
    )
}

export default PanelDerecho;