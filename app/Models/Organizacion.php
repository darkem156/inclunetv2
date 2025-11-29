<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Organizacion extends Model
{
    use HasFactory;

    protected $table = 'organizaciones';

    protected $primaryKey = 'id_org';

    public $incrementing = true;

    protected $fillable = [
        'nombre_org',
        'ubicacion',
        'descripcion',
        'categoria',
        'img',
    ];
    public function voluntariados()
    {
        return $this->hasMany(Voluntariado::class, 'id_org');
    }
}