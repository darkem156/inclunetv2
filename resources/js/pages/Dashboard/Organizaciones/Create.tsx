import { useState } from "react";
import { router } from "@inertiajs/react";

export default function Create() {
    const [form, setForm] = useState({
        nombre_org: "",
        ubicacion: "",
        descripcion: "",
        categoria: "",
        img: "",
    });

    const submit = async () => {
      const token = document.querySelector('meta[name="csrf-token"]')?.getAttribute('content');
      if (!token) {
        alert("CSRF token not found");
        return;
      }
        fetch("/api/organizaciones", {
            method: "POST",
            headers: { "Content-Type": "application/json", "X-CSRF-TOKEN": token },
            credentials: "include",
            body: JSON.stringify(form),
        }).then(() => router.visit("/dashboard/organizaciones"));
    };

    return (
        <div className="p-6 max-w-xl">
            <h1 className="text-2xl font-bold">Crear Organización</h1>

            {Object.keys(form).map((key) => (
                <input
                    key={key}
                    placeholder={key}
                    className="border p-2 rounded w-full mt-3"
                    value={(form as any)[key]}
                    onChange={(e) =>
                        setForm({ ...form, [key]: e.target.value })
                    }
                />
            ))}

            <button
                className="mt-4 bg-green-600 text-white px-4 py-2 rounded"
                onClick={submit}
            >
                Guardar
            </button>
        </div>
    );
}
