<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateCatProprietesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('catProprietes', function (Blueprint $table) {
            // $table->increments('id');
            // $table->string('contenu');
            // $table->integer('category_id');
            // $table->foreign('category_id')->references('id')->on('categories');
            // $table->integer('propriete_id');
            // $table->foreign('propriete_id')->references('id')->on('proprietes');
            //$table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('catProprietes');
    }
}
