<?php

use Illuminate\Database\Seeder;

class ProprietesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $proprietes = [
            [
                'propriete' => 'nb_personne',
                'category_id' => 1
            ],
            [
                'propriete' => 'nb_personne',
                'category_id' => 2
            ],
            [
                'propriete' => 'nb_personne',
                'category_id' => 3
            ],
            [
                'propriete' => 'lit(s)',
                'category_id' => 1
            ],
            [
                'propriete' => 'lit(s)',
                'category_id' => 2
            ],
            [
                'propriete' => 'lit(s)',
                'category_id' => 3
            ],
            [
                'propriete' => 'cheminée',
                'category_id' => 1
            ],
            [
                'propriete' => 'chauffage',
                'category_id' => 2
            ]
        ];
        DB::table('proprietes')->insert($proprietes);
    }
}
