<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateHousesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        // Schema::table('houses', function (Blueprint $table) {
        //     $table->string('title');
        //     $table->integer('user_id');
        //     $table->foreign('user_id')->references('id')->on('users');
        //     $table->integer('category_id');
        //     $table->foreign('category_id')->references('id')->on('categories');
        //     $table->integer('ville_id');
        //     $table->foreign('ville_id')->references('id')->on('villes');
        //     $table->string('description');
        //     $table->float('price');
        //     $table->string('photo');
        //     $table->timestamps();
        // });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //Schema::dropIfExists('houses');
    }
}
