import { useEffect, useState } from "react";
import { router, usePage } from "@inertiajs/react";

export default function Edit({ id }: any) {
    const [form, setForm] = useState<any>(null);

    useEffect(() => {
        fetch(`/api/organizaciones/${id}`)
            .then((r) => r.json())
            .then(setForm);
    }, []);

    if (!form) return <div className="p-6">Cargando...</div>;

    const submit = () => {
      const token = document.querySelector('meta[name="csrf-token"]')?.getAttribute('content');
      if (!token) {
        alert("CSRF token not found");
        return;
      }
      fetch(`/api/organizaciones/${id}`, {
          method: "PUT",
          headers: {
              "Content-Type": "application/json",
              "X-CSRF-TOKEN": token
          },
          body: JSON.stringify(form),
      }).then(() => router.visit("/dashboard/organizaciones"));
    };

    return (
        <div className="p-6 max-w-xl">
            <h1 className="text-2xl font-bold">Editar Organización</h1>

            {Object.keys(form).map((key) => (
                <input
                    key={key}
                    placeholder={key}
                    className="border p-2 rounded w-full mt-3"
                    value={form[key]}
                    onChange={(e) =>
                        setForm({ ...form, [key]: e.target.value })
                    }
                />
            ))}

            <button
                className="mt-4 bg-blue-600 text-white px-4 py-2 rounded"
                onClick={submit}
            >
                Actualizar
            </button>
        </div>
    );
}