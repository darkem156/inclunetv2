import PublicLayout from "@/layouts/public-layout";

export default function Quienes() {
  return (
    <>
    <div className="section-title"><h2 className="font-bold text-2xl">Nuestra misión</h2></div>
    <section className="grid grid-cols-3 gap-4">
      <article className="card reveal visible">
        <div className="content">
          <span className="badge">Propósito</span>
          <h3 className="text-xl font-bold my-3">Conectar para transformar</h3>
          <p>Unimos a personas con ganas de ayudar con organizaciones y proyectos que lo necesitan.</p>
        </div>
      </article>
      <article className="card reveal visible">
        <div className="content">
          <span className="badge">Valores</span>
          <h3 className="text-xl font-bold my-3">Humanos y sostenibles</h3>
          <p>Inclusión, impacto social, sostenibilidad y transparencia.</p>
        </div>
      </article>
      <article className="card reveal visible">
        <div className="content">
          <span className="badge">Participa</span>
          <h3 className="text-xl font-bold my-3">Únete</h3>
          <p>Explora voluntariados, elige una causa y súmate.</p>
        </div>
      </article>
    </section>
  </>
  )
}

Quienes.layout = (page: React.ReactNode) => <PublicLayout>{page}</PublicLayout>;