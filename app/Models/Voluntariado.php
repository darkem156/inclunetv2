<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Voluntariado extends Model
{
    use HasFactory;

    protected $table = 'voluntariados';

    protected $primaryKey = 'id_vol';

    public $incrementing = true;

    protected $fillable = [
        'nombre_vol',
        'categoria',
        'descripcion',
        'img',
        'fecha_inicio',
    ];

    protected $casts = [
        'fecha_inicio' => 'date',
    ];

    public function organizacion()
    {
        return $this->belongsTo(Organizacion::class, 'id_org');
    }
}