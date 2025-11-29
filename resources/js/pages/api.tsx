import PublicLayout from "@/layouts/public-layout";
import { useRef } from "react";

export default function API() {
  const alertRef = useRef<HTMLDivElement>(null);

  function showAlert(msg: string) {
    console.log(alertRef.current);
    if (alertRef.current) {
      alertRef.current.textContent = msg;
      alertRef.current.classList.add('show');
      setTimeout(() => alertRef.current?.classList.remove('show'), 1800);
    }
  }

  function copyCode(event: React.MouseEvent<HTMLButtonElement>) {
    const btn = event.target;
    console.log(btn)
    const code = btn?.parentElement?.querySelector('code')?.innerText || '';
    if (!code) return;
    navigator.clipboard.writeText(code).then(() => showAlert('✅ Copiado con éxito'));
  }

  return (
    <>
    <div ref={alertRef} className="alert" role="status">✅ Copiado con éxito</div>
    <div className="section-title"><h2>Estructura de las API’s</h2></div>
    <section className="grid grid-cols-3 gap-4">
      <article className="card reveal visible">
        <div className="content">
          <span className="badge">GET</span>
          <h3 className="font-bold text-lg mb-4">/api/voluntariados</h3>
          <p>Obtiene la lista de campañas de voluntariado disponibles.</p>
          <div className="codeblock">
            <button className="copy" onClick={copyCode}>📋 Copiar</button>
            <code>{`[
  {
    "id_vol": 1,
    "nombre_vol": "Reforestación en Cancún",
    "categoria": "Medio Ambiente",
    "descripcion": "Plantación y cuidado de árboles en zonas afectadas por la deforestación.",
    "img": "assets/images/voluntariados/reforestacion.jpg",
    "fecha_inicio": "2025-06-01"
  }
]`}</code>
          </div>
        </div>
      </article>

      <article className="card reveal visible">
        <div className="content">
          <span className="badge">GET</span>
          <h3 className="font-bold text-lg mb-4">/api/organizaciones</h3>
          <p>Devuelve las organizaciones registradas.</p>
          <div className="codeblock">
            <button className="copy" onClick={copyCode}>📋 Copiar</button>
            <code>{`[
  {
    "id_org": 1,
    "nombre_org": "Fundación Esperanza",
    "ubicacion": "Cancún",
    "descripcion": "Apoya la educación y alimentación infantil en comunidades marginadas.",
    "categoria": "Educación",
    "img": "assets/images/organizaciones/fundacion-esperanza.jpg"
  }
]`}</code>
          </div>
        </div>
      </article>

      <article className="card reveal visible">
        <div className="content">
          <span className="badge">POST</span>
          <h3 className="font-bold text-lg mb-4">/api/participaciones</h3>
          <p>Registra que un usuario se une a un voluntariado.</p>
          <div className="codeblock">
            <button className="copy" onClick={copyCode}>📋 Copiar</button>
            <code>{`{
  "id_usuario": 5,
  "id_vol": 1
}`}</code>
          </div>
          <div className="codeblock">
            <button className="copy" onClick={copyCode}>📋 Copiar</button>
            <code>{`{
  "id_part": 321,
  "estado": "pendiente"
}`}</code>
          </div>
        </div>
      </article>
    </section>
  </>
  )
}

API.layout = (page: React.ReactNode) => <PublicLayout>{page}</PublicLayout>;