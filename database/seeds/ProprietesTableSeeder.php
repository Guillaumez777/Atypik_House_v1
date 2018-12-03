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
                'label_propriete' => 'nombre de personnes',
                'category_id' => 1
            ],
            [
                'propriete' => 'nb_personne',
                'label_propriete' => 'nombre de personnes',
                'category_id' => 2
            ],
            [
                'propriete' => 'nb_personne',
                'label_propriete' => 'nombre de personnes',
                'category_id' => 3
            ],
            [
                'propriete' => 'lit(s)',
                'label_propriete' => 'nombre de lit(s)',
                'category_id' => 1
            ],
            [
                'propriete' => 'lit(s)',
                'label_propriete' => 'nombre de lit(s)',
                'category_id' => 2
            ],
            [
                'propriete' => 'lit(s)',
                'label_propriete' => 'nombre de lit(s)',
                'category_id' => 3
            ]
        ];
        DB::table('proprietes')->insert($proprietes);
    }
}
