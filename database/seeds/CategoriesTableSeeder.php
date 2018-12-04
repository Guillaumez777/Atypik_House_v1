<?php

use Illuminate\Database\Seeder;

class CategoriesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $categories = [
            [
                'category' => 'Cabane',
            ],
            [
                'category' => 'Igloo',
            ],
            [
                'category' => 'Yourte',
            ]
        ];
        DB::table('categories')->insert($categories);
    }
}
