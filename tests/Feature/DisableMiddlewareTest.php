<?php

namespace Tests\Feature;

use Tests\TestCase;
use Illuminate\Foundation\Testing\WithoutMiddleware;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Foundation\Testing\DatabaseTransactions;

class DisableMiddlewareTest extends TestCase
{
    public function testBasicExample()
    {
        $this->withoutMiddleware();
        $this->assertResponseOk();
    }

}
