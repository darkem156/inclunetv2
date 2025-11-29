import PublicLayout from "@/layouts/public-layout";
import fundacionEsperanzaImg from '@/assets/images/fundacion-esperanza.jpg';
import redVerdeImg from '@/assets/images/red-verde.jpg';
import apoyoComunidadesImg from '@/assets/images/apoyo-comunidades.jpg';

export default function Organizaciones() {
  return (
    <>
    <div className="section-title">
      <h2>Organizaciones Aliadas</h2>
    </div>
    <div id="lista-org" className="grid grid-cols-3 gap-4">
    <article className="card reveal visible">
      <img src={fundacionEsperanzaImg} alt="Fundación Esperanza" />
      <div className="content">
        <span className="badge">Educación</span>
        <h3 className="text-xl font-bold my-3">Fundación Esperanza</h3>
        <p>Apoya la educación y alimentación infantil en comunidades marginadas.</p>
      </div>
    </article>

    <article className="card reveal visible">
      <img src={redVerdeImg} alt="Red Verde" />
      <div className="content">
        <span className="badge">Medio Ambiente</span>
        <h3 className="text-xl font-bold my-3">Red Verde</h3>
        <p>Promueve acciones ecológicas, campañas de reforestación y reciclaje.</p>
      </div>
    </article>

    <article className="card reveal visible">
      <img src={apoyoComunidadesImg} alt="Apoyo a Comunidades" />
      <div className="content">
        <span className="badge">Comunidad</span>
        <h3 className="text-xl font-bold my-3">Apoyo a Comunidades</h3>
        <p>Distribución de alimentos y talleres comunitarios para familias necesitadas.</p>
      </div>
    </article>
  </div>
  </>
  )
}

Organizaciones.layout = (page: React.ReactNode) => <PublicLayout>{page}</PublicLayout>;