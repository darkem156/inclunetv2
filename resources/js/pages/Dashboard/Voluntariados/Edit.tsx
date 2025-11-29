import { useEffect, useState } from "react";
import { router, usePage } from "@inertiajs/react";

export default function Edit({ id }: any) {
    const [form, setForm] = useState<any>(null);

    useEffect(() => {
        fetch(`/api/voluntariados/${id}`)
            .then((res) => res.json())
            .then((data) => setForm(data));
    }, []);

    if (!form) return <div>Cargando...</div>;

    const submit = async () => {
        const token = document.querySelector('meta[name="csrf-token"]')?.getAttribute('content');
        if (!token) {
            alert("CSRF token not found");
            return;
        }

        await fetch(`/api/voluntariados/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "X-CSRF-TOKEN": token
            },
            body: JSON.stringify(form),
        });

        router.visit("/dashboard/voluntariados");
    };

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-6">Editar Voluntariado</h1>

            <div className="flex flex-col gap-3 max-w-lg">
                {Object.keys(form).map((key) => (
                    <input
                        key={key}
                        placeholder={key}
                        className="border p-2 rounded"
                        value={form[key]}
                        onChange={(e) =>
                            setForm({ ...form, [key]: e.target.value })
                        }
                    />
                ))}

                <button
                    onClick={submit}
                    className="bg-blue-600 text-white px-4 py-2 rounded"
                >
                    Guardar cambios
                </button>
            </div>
        </div>
    );
}