<?php

namespace Tests\Browser;

use Tests\DuskTestCase;
use Laravel\Dusk\Browser;
use Illuminate\Foundation\Testing\DatabaseMigrations;

class RegisterTest extends DuskTestCase
{
    /**
     * A Dusk test example.
     *
     * @return void
     */
    public function testExample()
    {
        $this->browse(function (Browser $browser) {
            $browser->visit('/')
                ->clickLink('Inscription')
                ->assertSee('Register')
                ->value('#name', 'Ponpon')
                ->value('#prenom', 'Toto')
                ->value('#email', 'test@test.fr')
                ->value('#password', '0123')
                ->value('#password-confirm', '0123')
                ->click('button[type="submit"]')
                ->assertPathIs('/home')
                ->assertSee("You are logged in!");
        });
    }
}
