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
                'pays' => 'France',
                'ville' => 'Besançon',
                'adresse' => '31 rue des peupliers',
                'description' => 'Cette cabane dans les arbres vous offrira un logement atypique et chaleureux pour vos vacances en plein air. Ce lieu idylique vous offrira confort et sérénité durant votre voyage.

                Rien de plus reposant que de passer un peu de temps au calme avec sa famille ou ses amies dans un logement insolite et remarquable de part sa verdure et sa tranquillité.',
                'price' => 25.00,
                'photo' => '1523888761.png',
                'statut' => 'Validé'
            ],
            [
                'title' => 'Igloo ',
                'user_id' => 2,
                'category_id' => 2,
                'pays' => 'France',
                'ville' => 'LYON',
                'adresse' => '32 rue mozart',
                'description' => 'Cette Igglo proche de Lyon, vous offrira le confort et la sécurité pour votre logement atypique, seul ou en amoureux. Son toit est ouvert ce qui vous permet de pouvoir dormir le soir à la belle étoile.

                Parfait pour un séjour en amoureux, ce logement insolite saura répondre à toutes vos envies avec son toit charmant et romantique. ',
                'price' => 10.00,
                'photo' => '1522347485.jpg',
                'statut' => 'Validé'
            ],
            [
                'title' => 'Yourte Mongole',
                'user_id' => 2,
                'category_id' => 3,
                'pays' => 'France',
                'ville' => 'LOIRE',
                'adresse' => '12 rue tolbiac',
                'description' => 'Cette yourte style mongole vous fera voyager dans le pays de la mongolie tout en restant en France, Venez vous évader dans cette nouvelle yourte ou chaleur et confort vienne ce conjuguer à la perfection dans ce logement atypique.

                Venez passez un moment inoubliable avec votre tribu dans ce logement insolite, ou le pays de la Mongolie et la chaleur de la yourte vienne ce conjuguer à la perfection. ',
                'price' => 30.00,
                'photo' => '1543837576.jpg',
                'statut' => 'Validé'
            ]
        ];
        DB::table('houses')->insert($houses);
    }
}
