<?php
namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Organizacion;
use Illuminate\Http\Request;

class OrganizacionController extends Controller
{
    public function index() {
        return Organizacion::all();
    }

    public function store(Request $request) {
        $data = $request->validate([
            'nombre_org' => 'required',
            'ubicacion' => 'required',
            'descripcion' => 'required',
            'categoria' => 'required',
            'img' => 'required',
        ]);

        return Organizacion::create($data);
    }

    public function show($id) {
        return Organizacion::findOrFail($id);
    }

    public function update(Request $request, $id) {
        $item = Organizacion::findOrFail($id);
        $item->update($request->all());
        return $item;
    }

    public function destroy($id) {
        Organizacion::destroy($id);
        return response()->json(['deleted' => true]);
    }
}
