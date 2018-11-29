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
                'house_id' => 1
            ],
            [
                'category' => 'Igloo',
                'house_id' => 2
            ]
        ];
        DB::table('categories')->insert($categories);
    }
}
