import { useEffect, useState } from "react";
import { Link } from "@inertiajs/react";

export default function Index() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch("/api/voluntariados")
            .then((res) => res.json())
            .then((data) => setItems(data));
    }, []);

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Voluntariados</h1>

            <Link
                href="/dashboard/voluntariados/create"
                className="bg-blue-600 text-white px-4 py-2 rounded"
            >
                Crear Voluntariado
            </Link>

            <table className="w-full mt-6 border">
                <thead>
                    <tr className="bg-gray-200">
                        <th className="p-2 border text-black">ID</th>
                        <th className="p-2 border text-black">Nombre</th>
                        <th className="p-2 border text-black">Categoría</th>
                        <th className="p-2 border text-black">Acciones</th>
                    </tr>
                </thead>

                <tbody>
                    {items.map((item: any) => (
                        <tr key={item.id_vol}>
                            <td className="border p-2">{item.id_vol}</td>
                            <td className="border p-2">{item.nombre_vol}</td>
                            <td className="border p-2">{item.categoria}</td>
                            <td className="border p-2 flex gap-2">
                                <Link
                                    href={`/dashboard/voluntariados/${item.id_vol}/edit`}
                                    className="text-blue-600"
                                >
                                    Editar
                                </Link>

                                <button
                                    className="text-red-600"
                                    onClick={() => {
                                        if (!confirm("¿Eliminar?")) return;
                                        const token = document.querySelector('meta[name="csrf-token"]')?.getAttribute('content');
                                        if (!token) {
                                            alert("CSRF token not found");
                                            return;
                                        }

                                        fetch(`/api/voluntariados/${item.id_vol}`, {
                                            method: "DELETE",
                                            headers: {
                                                "X-CSRF-TOKEN": token
                                            }
                                        }).then(() => {
                                            setItems(items.filter((x: any) => x.id_vol !== item.id_vol));
                                        });
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