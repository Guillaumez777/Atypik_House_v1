<?php

namespace Tests\Feature;

use Tests\TestCase;
use Illuminate\Foundation\Testing\WithoutMiddleware;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Foundation\Testing\DatabaseTransactions;

class DatabaseTest extends TestCase
{
    /**
     * A basic test example.
     *
     * @return void
     */
    use DatabaseMigrations;
    
    public function testDatabase()
    {
        // Make call to application...
    
        $this->seeInDatabase('users', ['email' => '']);
    }
} 