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
        Schema::create('organizaciones', function (Blueprint $table) {
            $table->id('id_org');                  // ID específico solicitado
            $table->string('nombre_org');          // Nombre de la organización
            $table->string('ubicacion')->nullable();
            $table->text('descripcion')->nullable();
            $table->string('categoria')->nullable();
            $table->string('img')->nullable();     // Ruta de la imagen
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('organizaciones');
    }
};
