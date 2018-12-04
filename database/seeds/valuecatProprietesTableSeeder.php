<?php

use Illuminate\Database\Seeder;

class valuecatProprietesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $valuecatProprietes = [
            [
                'value' => '2',
                'category_id' => 1,
                'propriete_id' => 1,
                'house_id' => 1
            ],
            [
                'value' => '1',
                'category_id' => 2,
                'propriete_id' => 2,
                'house_id' => 2
            ],
            [
                'value' => '3',
                'category_id' => 3,
                'propriete_id' => 3,
                'house_id' => 2
            ]
        ];
        DB::table('valuecatProprietes')->insert($valuecatProprietes);
    }
}
