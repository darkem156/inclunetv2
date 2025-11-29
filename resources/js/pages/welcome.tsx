import PublicLayout from '@/layouts/public-layout';
import reforestacionImg from '@/assets/images/reforestacion.jpg';

export default function Welcome() {
    return (
        <>
            <section className="hero">
                <div className='flex gap-4 flex-col'>
                    <span className="badge w-fit">Plataforma Social</span>
                    <h1 className='text-3xl font-bold my-4'>Incunet<span style={{ color: '#00aaff' }}>Spaces</span></h1>
                    <p>Conectamos personas con <b>voluntariados</b> y <b>organizaciones</b>. Diseño glass + neumorphism con modo AMOLED / Azul cielo.</p>
                    <div className="ctas">
                    <a className="btn" href="voluntariados.html">Explorar Voluntariados</a>
                    <a className="btn alt" href="organizaciones.html">Ver Organizaciones</a>
                    </div>
                </div>
                <img className='max-w-none' src={reforestacionImg} alt="IncunetSpaces" />
            </section>
        </>
    );
}

Welcome.layout = (page: React.ReactNode) => <PublicLayout>{page}</PublicLayout>;