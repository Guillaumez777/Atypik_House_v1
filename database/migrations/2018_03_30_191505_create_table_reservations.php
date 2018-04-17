<?php
 
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;
 
class CreateTableReservations extends Migration
{
    public function up()
    {
 
        Schema::create('houses_calendars', function ($table) {
            $table->increments('id');
            $table->string('title');
            $table->integer('idUser');
            $table->string('idCategory');
            $table->string('description');
            $table->string('price');
            $table->string('photo');
            $table->date('created_at');
            $table->date('updated_at');
        });
    }
 
  
    public function down()
    {
        Schema::drop('houses_calendars');
 
    }
}
