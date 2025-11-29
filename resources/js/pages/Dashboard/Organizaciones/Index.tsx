import { useEffect, useState } from "react";
import { Link } from "@inertiajs/react";

export default function Index() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch("/api/organizaciones")
            .then((r) => r.json())
            .then(setItems);
    }, []);

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold">Organizaciones</h1>

            <Link
                href="/dashboard/organizaciones/create"
                className="block mt-4 bg-blue-600 text-white px-4 py-2 rounded w-fit"
            >
                Crear nueva
            </Link>

            <table className="mt-6 w-full border">
                <thead className="bg-gray-100">
                    <tr>
                        <th className="p-2 border text-black">Nombre</th>
                        <th className="p-2 border text-black">Ubicación</th>
                        <th className="p-2 border text-black">Acciones</th>
                    </tr>
                </thead>

                <tbody>
                    {items.map((o: any) => (
                        <tr key={o.id_org}>
                            <td className="p-2 border">{o.nombre_org}</td>
                            <td className="p-2 border">{o.ubicacion}</td>
                            <td className="p-2 border">
                                <Link
                                    href={`/dashboard/organizaciones/${o.id_org}/edit`}
                                    className="text-blue-600 mr-2"
                                >
                                    Editar
                                </Link>

                                <button
                                    className="text-red-600"
                                    onClick={() => {
                                        if (!confirm("¿Eliminar?")) return;

                                        fetch(`/api/organizaciones/${o.id_org}`, {
                                            method: "DELETE",
                                        }).then(() =>
                                            setItems(items.filter((x: any) => x.id_org !== o.id_org))
                                        );
                                    }}
                                >
                                    Eliminar
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
