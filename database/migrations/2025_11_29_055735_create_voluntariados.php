<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('voluntariados', function (Blueprint $table) {
            $table->id('id_vol');                      // ID solicitado
            $table->string('nombre_vol');              // Nombre del voluntariado
            $table->string('categoria')->nullable();
            $table->text('descripcion')->nullable();
            $table->string('img')->nullable();
            $table->date('fecha_inicio')->nullable();  // Fecha
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('voluntariados');
    }
};
