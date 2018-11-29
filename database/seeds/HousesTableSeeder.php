<?php

use Illuminate\Database\Seeder;

class HousesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $houses = [
            [
                'title' => 'Cabane',
                'user_id' => 1,
                'category_id' => 1,
                'ville' => 'PARIS',
                'description' => 'Super cabane',
                'price' => 300.00,
                'photo' => '1541548442.jpg',
                'statut' => 'Validé'
            ],
            [
                'title' => 'Igloo',
                'user_id' => 2,
                'category_id' => 2,
                'ville' => 'PARIS',
                'description' => 'Super igloo',
                'price' => 400.00,
                'photo' => 'igloo.jpg',
                'statut' => 'Validé'
            ]
        ];
        DB::table('houses')->insert($houses);
    }
}
