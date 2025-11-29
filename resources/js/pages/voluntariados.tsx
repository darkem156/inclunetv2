import PublicLayout from "@/layouts/public-layout";
import reforestacionImg from '@/assets/images/reforestacion.jpg';
import limpiezaPlayasImg from '@/assets/images/limpieza-playas.jpg';
import comunidadesImg from '@/assets/images/comunidades.jpg';

export default function Voluntariados() {
    return (
<>
    <div className="section-title">
      <h2 className="text-2xl font-bold">Voluntariados Disponibles</h2>
      <input id="filtro" className="search" placeholder="Buscar voluntariado..." />
    </div>
    <div id="lista-vol" className="grid grid-cols-3 gap-4">
      <article className="card reveal visible">
        <img src={reforestacionImg} alt="Reforestación en Cancún" />
        <div className="content">
          <span className="badge">Medio Ambiente</span>
          <h3 className="text-xl font-bold my-3">Reforestación en Cancún</h3>
          <p>Plantación y cuidado de árboles en zonas afectadas por la deforestación.</p>
        </div>
      </article>

      <article className="card reveal visible">
        <img src={limpiezaPlayasImg} alt="Limpieza de Playas" />
        <div className="content pb-10!">
          <span className="badge">Medio Ambiente</span>
          <h3 className="text-xl font-bold my-3">Limpieza de Playas</h3>
          <p>Brigadas de voluntarios para recolectar desechos y proteger la vida marina.</p>
        </div>
      </article>

      <article className="card reveal visible">
        <img src={comunidadesImg} alt="Apoyo a Comunidades Vulnerables" />
        <div className="content">
          <span className="badge">Comunidad</span>
          <h3 className="text-xl font-bold my-3">Apoyo a Comunidades Vulnerables</h3>
          <p>Campañas de apoyo social y distribución de alimentos a familias necesitadas.</p>
        </div>
      </article>
    </div>
  </>
    );
}

Voluntariados.layout = (page: React.ReactNode) => <PublicLayout>{page}</PublicLayout>;