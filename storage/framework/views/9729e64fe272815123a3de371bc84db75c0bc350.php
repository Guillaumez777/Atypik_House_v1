<?php echo Form::open(['method'=>'GET','url'=>$url,'class'=>'form','role'=>'search']); ?>

    <?php echo Form::text('search', null,
            array('required',
                    'class'=>'form-control ',
                    'placeholder'=>'Saisir une ville ...')); ?>


    <?php echo Form::submit('Rechercher',
            array('class'=>'btn btn-searchbar')); ?>

<?php echo Form::close(); ?>