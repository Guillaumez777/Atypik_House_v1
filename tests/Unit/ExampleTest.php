<?php

namespace Tests\Unit;

use Tests\TestCase;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Foundation\Testing\DatabaseTransactions;
use App\User;
use App\House;

class ExampleTest extends TestCase
{
    # restaure la base de données après chaque test et à la migrer avant le test suivant
    use DatabaseMigrations;

    /**
     * A basic test example.
     *
     * @return void
     */
    public function testBasicTest()
    {
        $this->assertTrue(true, 'Message erreur !');   
    }

    public function testUsersIsEmpty() 
    {
        $this->assertDatabaseHas('users', [
            'email' => 'gilbert.trinidad@gmail.com'
        ]);
    }

    public function testIsAdminIsEmpty() 
    {
        $this->assertDatabaseHas('admins', [
            'email' => 'gilbert@atypikhouse.com'
        ]);
    }

    public function testIsUserIsEmpty() 
    {
        $user = factory(User::class)->make();
    }

    public function testIsHouseIsEmpty() 
    {
        $user = factory(House::class)->make();
    }

    public function testIsPayementIsOk()
    {
        $stripe_token = Token::create(array(
            'card' => array(
                "number" => "4242 4242 4242 4242",
                "exp_month" => '1',
                "exp_year" => '2022',
                "cvc" => '567',
            )
        ));
        $this->post('ddd', [
            'token' => $stripe_token,
            'type' => "subscriber"
        ]);
    }

}
