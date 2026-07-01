function About() {
  return(
    <div className="min-h-screen py-10 px-6">
      <div className="max-w-4xl mx-auto bg-surface rounded-2xl shadow-md p-8">
        <h1 className="text-4xl font-bold text-primary text-center mb-6">
          Sobre Nosotros
        </h1>
        <p className="text-text mb-8">
          Unahur Anti-Social Net es una red social pensada exclusivamente para estudiantes 
          Donde cada uno puede compartir sus pensamientos, conocimientos y experiencias.
        </p>
        <h2 className="text-2xl font-semibold mb-3">
          Objetivo
        </h2>
        <p className="text-text-secondary mb-8">
          Nuestro objetivo como desarolladores es crear un espacio donde los estudiantes pueden interactuar, participar y
          crecer junto a otros miembros de la comunidad mediante publicaciones,
          comentarios e intercambio de ideas.
        </p>
        <h2 className="text-2xl font-semibold mb-3">
          ¿Qué podés hacer?
        </h2>
        <ul className="list-disc pl-5 text-text mb-8">
          <li>Crear publicaciones.</li>
          <li>Comentar e interactuar con otros usuarios.</li>
          <li>Compartir conocimientos y experiencias.</li>
        </ul>
        <h2 className="text-2xl font-semibold mb-3">
          Desarolladores:
        </h2>
        <p className="text-text-secondary">
          Este proyecto fue desarrollado por:
        </p>
        <ul className="mt-3 space-y-2 text-text">
          <li>Avila, Paz Maria </li>
          <li>Barbosa, Gonzalo Nicolas </li>
          <li>Peralta, Melanie Ailen </li>
          <li>Rodriguez, Ana Paula </li>
        </ul>
        <p className="mt-8 text-sm text-text-secondary">
          Proyecto desarrollado como parcial para la materia
          Contruccion de interfaces de usuario.
        </p>
      </div>
    </div>
  )
} 
export default About;