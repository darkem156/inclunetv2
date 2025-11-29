import { useState } from "react";
import { router } from "@inertiajs/react";

export default function Create() {
    const [form, setForm] = useState({
        nombre_vol: "",
        categoria: "",
        descripcion: "",
        img: "",
        fecha_inicio: "",
    });

    const submit = async () => {
      const token = document.querySelector('meta[name="csrf-token"]')?.getAttribute('content');
      if (!token) {
        alert("CSRF token not found");
        return;
      }
      await fetch("/api/voluntariados", {
          method: "POST",
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
            <h1 className="text-2xl font-bold mb-6">Crear Voluntariado</h1>

            <div className="flex flex-col gap-3 max-w-lg">
                {Object.keys(form).map((key) => (
                    <input
                        key={key}
                        placeholder={key}
                        className="border p-2 rounded"
                        value={(form as any)[key]}
                        onChange={(e) =>
                            setForm({ ...form, [key]: e.target.value })
                        }
                    />
                ))}

                <button
                    onClick={submit}
                    className="bg-green-600 text-white px-4 py-2 rounded"
                >
                    Guardar
                </button>
            </div>
        </div>
    );
}