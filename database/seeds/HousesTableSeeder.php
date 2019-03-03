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
                'title' => 'Cabane dans les arbres',
                'user_id' => 1,
                'category_id' => 1,
                'ville' => 'Besançon',
                'adresse' => '31 rue des peupliers',
                'description' => 'Cette cabane dans les arbres vous offrira un lieu atypique et chaleureux pour vos vacances en plein air. Ce lieu idylique vous offrira confort et sérénité durant votre voyage.',
                'price' => 25.00,
                'photo' => '1523888761.png',
                'statut' => 'Validé'
            ],
            [
                'title' => 'Igloo ',
                'user_id' => 2,
                'category_id' => 2,
                'ville' => 'LYON',
                'adresse' => '32 rue mozart',
                'description' => 'Cette Igglo proche de Lyon, vous offrira le confort et la sécurtié pour votre séjour atypique, seul ou en amoureux. Son toit est ouvert ce qui vous permet de pouvoir dormir le soir à la belle étoile.',
                'price' => 10.00,
                'photo' => '1522347485.jpg',
                'statut' => 'Validé'
            ],
            [
                'title' => 'Grande Yourte Mongole',
                'user_id' => 2,
                'category_id' => 3,
                'ville' => 'LOIRE',
                'adresse' => '12 rue tolbiac',
                'description' => 'Cette yourte style mongole vous fera voyager dans le pays de la mongolie tout en restant en France, Venez vous évader dans cette nouvelle yourte ou chaleur et confort vienne ce conjuguer à la perfection',
                'price' => 30.00,
                'photo' => '1543837576.jpg',
                'statut' => 'Validé'
            ]
        ];
        DB::table('houses')->insert($houses);
    }
}
