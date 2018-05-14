<?php $__env->startSection('link'); ?>
<link href="<?php echo e(asset('css/jquery-ui.min.css')); ?>" rel="stylesheet">
<?php $__env->startSection('content'); ?>
<div class="container">
<div class="row">
    <div class="col-md-10 col-md-offset-1">
        <div class="panel panel-default">
            <h2 class="panel-heading">Récapitulatif de votre réservation</h2>      
            <p class="card-text">Date de début : <?php echo e($reservation->start_date); ?></p>
            <p class="card-text">Date de fin : <?php echo e($reservation->end_date); ?></p>
        </div>    
        </div>
    </div>
</div>
<?php $__env->startSection('script'); ?>
<script src="<?php echo e(asset('js/jquery.js')); ?>"></script>
<script src="<?php echo e(asset('js/jquery-ui.min.js')); ?>"></script>
<script src="<?php echo e(asset('js/calendar.js')); ?>"></script>
<?php $__env->stopSection(); ?>
<?php echo $__env->make('layouts.app', array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>