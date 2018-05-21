<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateVillesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('villes', function (Blueprint $table) {
            // $table->increments('id');
            // $table->string('ville_departement');
            // $table->string('ville_nom');
            // $table->string('ville_nom_simple');
            // $table->string('ville_nom_reel');
            // $table->string('ville_code_postal');
            // $table->string('ville_commune');
            // $table->string('ville_code_commune');
            // $table->integer('ville_arrondissement');
            // $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
    }
}
