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
                'value' => 'oui',
                'category_id' => 1,
                'house_id' => 1
            ],
            [
                'value' => 'oui',
                'category_id' => 7,
                'house_id' => 2
            ]
        ];
        DB::table('valuecatProprietes')->insert($valuecatProprietes);
    }
}
