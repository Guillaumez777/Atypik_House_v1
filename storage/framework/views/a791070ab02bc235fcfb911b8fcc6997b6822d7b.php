<?php $__env->startSection('link'); ?>
<link href="<?php echo e(asset('css/jquery-ui.min.css')); ?>" rel="stylesheet">
<?php $__env->startSection('content'); ?>
<div class="container list-category">
    <h2>Mes hébergements</h2>
    <div class="row">
    <?php $__currentLoopData = $houses; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $house): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
        <div class="col-lg-4 col-md-4">
            <div class="thumbnail">
                <div class="card h-100">
                    <a href="<?php echo e(action('UsersController@showHouse', $house['id'])); ?>"><img class="img-responsive img_house" src="<?php echo e(asset('img/houses/'.$house->photo)); ?>"></a>
                    <div>
                        <h4 class="title card-title">
                            <a href="<?php echo e(route('user.showHouse', $house['id'])); ?>"><?php echo e($house->title); ?></a>
                        </h4>
                        <p>Type de bien : <?php echo e($house->category->category); ?></p>
                            <?php $__currentLoopData = $house->category->proprietes; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $proprietes): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                                <p><?php echo e($proprietes->propriete); ?>: 
                                    <?php $__currentLoopData = $proprietes->valuecatproprietes; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $valuepropriete): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?> 
                                        <?php echo e($valuepropriete->value); ?>

                                    <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                                </p>     
                            <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>

                        <p class="price"><?php echo e($house->price); ?>€ par nuit</p>
                        <p class="card-text"><?php echo(substr($house->description, 0, 40));?></p>
                        <?php if($house->statut == "En attente de validation"): ?>
                            <p>Statut: <span style="color:red;"><?php echo($house->statut);?></span></p>
                        <?php else: ?>
                            <p>Statut: <span style="color:green;"><?php echo($house->statut);?></span></p>
                        <?php endif; ?>
                        <div class="row">
                            <div class="form-group">
                                <div class="col-md-12 text-center">
                                    <a href="<?php echo e(route('user.editHouse', $house['id'])); ?>" class="btn btn-primary">Modifier</a>
                                </div>                      
                            </div>
                        </div>
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