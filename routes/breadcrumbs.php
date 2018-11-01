<?php

// Accueil
Breadcrumbs::register('home', function($breadcrumbs)
{
    $breadcrumbs->push('Home', route('home'));
});

//Où est situé votre bien
Breadcrumbs::register('step1', function($breadcrumbs)
{
    $breadcrumbs->push('Où est situé votre bien ?', route('house.create_step1'));
});

// Accueil > Où est situé votre bien
Breadcrumbs::register('/house/create', function($breadcrumbs)
{
    //$breadcrumbs->parent('house.create_step1', route('house.create_step1'));
    $breadcrumbs->parent('step1');
    //$breadcrumbs->push('Où est situé votre bien ?', route('house.create_step1'));
    $breadcrumbs->push('Décrivez-nous votre bien', route('house.create_step2'));
    $breadcrumbs->push('Quel est le montant de votre bien ?', route('house.create_step3'));
    $breadcrumbs->push('Passons aux photos et vidéos', route('house.create_step4'));
});