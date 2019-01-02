<?php $__env->startSection('link'); ?>
<link href="<?php echo e(asset('css/jquery-ui.min.css')); ?>" rel="stylesheet">
<?php $__env->startSection('content'); ?>
<div class="container list-category">
    <h2>Mes réservations</h2>
    <div class="row">
    <?php $__currentLoopData = $reservations; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $reservation): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
        <div class="col-lg-4 col-md-4">
            <div class="thumbnail">
                <div class="card h-100">
                    <a href="<?php echo e(action('UsersController@showHouse', $reservation->house['id'])); ?>"><img class="img-responsive img_house" src="<?php echo e(asset('img/houses/'.$reservation->house->photo)); ?>"></a>
                    <div>
                        <h4 class="title card-title">
                            <a href="<?php echo e(route('user.showHouse', $reservation->house['id'])); ?>"><?php echo e($reservation->house->title); ?></a>
                        </h4>
                        <p>Type de bien : Logement</p>
                        <p><i class="fas fa-bed"></i> : 2 lits - <i class="fas fa-users"></i> : pour 2 Personnes</p>
                        <p><i class="fas fa-calendar"></i> Début: <?php \Date::setLocale('fr'); $startdate = Date::parse($reservation->start_date)->format('l j F Y'); echo($startdate);?> </p>
                        <p><i class="fas fa-calendar"></i> Fin:  <?php \Date::setLocale('fr'); $enddate = Date::parse($reservation->end_date)->format('l j F Y'); echo($enddate);?></p>
                        <h3 class="price"><?php echo e($reservation->house->price); ?>€</h3>
                        <p class="card-text"><?php echo(substr($reservation->house->description, 0, 40));?></p>
                        <?php if($reservation->house->statut == "En attente de validation"): ?>
                            <p>Statut: <span style="color:red;"><?php echo($reservation->house->statut);?></span></p>
                        <?php else: ?>
                            <p>Statut: <span style="color:green;"><?php echo($reservation->house->statut);?></span></p>
                        <?php endif; ?>
                    </div>
                </div> 
            </div>
        </div>
    <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
    </div>
</div>
<?php $__env->startSection('script'); ?>
<script src="<?php echo e(asset('js/jquery.js')); ?>"></script>
<script src="<?php echo e(asset('js/jquery-ui.min.js')); ?>"></script>
<script src="<?php echo e(asset('js/calendar.js')); ?>"></script>
<?php $__env->stopSection(); ?>
<?php echo $__env->make('layouts.app', array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>