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
                'photo' => '1523888761.png',
                'statut' => 'Validé'
            ],
            [
                'title' => 'Igloo',
                'user_id' => 2,
                'category_id' => 2,
                'ville' => 'LYON',
                'description' => 'Super igloo',
                'price' => 400.00,
                'photo' => '1522347485.jpg',
                'statut' => 'Validé'
            ],
            [
                'title' => 'Yourte Pays de la Loire - Grande Yourte Mongole',
                'user_id' => 2,
                'category_id' => 3,
                'ville' => 'LOIRE',
                'description' => 'Super yourte',
                'price' => 400.00,
                'photo' => '1543837576.jpg',
                'statut' => 'Validé'
            ]
        ];
        DB::table('houses')->insert($houses);
    }
}
