<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Voluntariado;
use Illuminate\Http\Request;

class VoluntariadoController extends Controller
{
    public function index()
    {
        return Voluntariado::all();
    }

    public function show($id)
    {
        return Voluntariado::findOrFail($id);
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'nombre_vol' => 'required',
            'categoria' => 'required',
            'descripcion' => 'required',
            'img' => 'required',
            'fecha_inicio' => 'required|date',
        ]);

        return Voluntariado::create($data);
    }

    public function update(Request $request, $id)
    {
        $item = Voluntariado::findOrFail($id);

        $data = $request->validate([
            'nombre_vol' => 'required',
            'categoria' => 'required',
            'descripcion' => 'required',
            'img' => 'required',
            'fecha_inicio' => 'required|date',
        ]);

        $item->update($data);

        return $item;
    }

    public function destroy($id)
    {
        $item = Voluntariado::findOrFail($id);
        $item->delete();

        return response()->json(['message' => 'Eliminado']);
    }
}
