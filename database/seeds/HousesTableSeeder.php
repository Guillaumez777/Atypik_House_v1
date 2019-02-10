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
                'adresse' => '31 rue des peupliers',
                'description' => 'Super cabane',
                'price' => 25.00,
                'photo' => '1523888761.png',
                'statut' => 'Validé'
            ],
            [
                'title' => 'Igloo',
                'user_id' => 2,
                'category_id' => 2,
                'ville' => 'LYON',
                'adresse' => '32 rue mozart',
                'description' => 'Super igloo',
                'price' => 10.00,
                'photo' => '1522347485.jpg',
                'statut' => 'Validé'
            ],
            [
                'title' => 'Yourte Pays de la Loire - Grande Yourte Mongole',
                'user_id' => 2,
                'category_id' => 3,
                'ville' => 'LOIRE',
                'adresse' => '12 rue tolbiac',
                'description' => 'Super yourte',
                'price' => 30.00,
                'photo' => '1543837576.jpg',
                'statut' => 'Validé'
            ]
        ];
        DB::table('houses')->insert($houses);
    }
}
