<?php $__env->startSection('content'); ?>
<div class="container list-category">
    <h2>Nos hébergements</h2>
    <div class="row">
        <div class="col-lg-12">
            <div class="input-group">
                <span class="input-group-btn">
                    <form class="form-horizontal" method="get" action="<?php echo e(url('search')); ?>" enctype="multipart/form-data">
                        <div class="row">
                            <div class="col-lg-12 col-md-12 col-sm-12" style="margin-bottom: 30px;">
                                <div class="col-lg-8 col-lg-offset-2 col-md-8 col-md-offset-3 col-sm-9 col-sm-offset-1">
                                    <div class="form-group button2">
                                        <?php echo $__env->make('search',['url'=>'search','link'=>'search'], array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </span>
            </div>
        </div>
    </div>
    <div class="row">
        <?php $__currentLoopData = $houses; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $house): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
            <div class="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                <div class="card h-100">
                    <a href="<?php echo e(action('UsersController@showHouse', $house['id'])); ?>"><img class="img-responsive" src="<?php echo e(asset('img/houses/'.$house->photo)); ?>"></a>
                    <div class="card-body">
                        <h3 class="title card-title">
                            <a href="<?php echo e(action('UsersController@showHouse', $house['id'])); ?>"><?php echo e($house->title); ?></a>
                        </h3>
                        <p>Type de bien : <?php echo e($house->category->category); ?></p>
                        <?php $__currentLoopData = $house->valuecatproprietes; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $valuecatpropriete): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                            <p><?php echo e($valuecatpropriete->propriete->propriete); ?>: <?php echo e($valuecatpropriete->value); ?></p>        
                        <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                        <p class="price"><?php echo e($house->price); ?>€ par nuit</p>
                        <p class="card-text"><?php echo(substr($house->description, 0, 40));?></p>
                        <p><?php echo e($house->ville); ?></p>
                    </div>
                    <div class="note card-footer">
                        <medium class="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</medium>
                        <a class="btn btn-success btn_reserve" href="<?php echo e(action('UsersController@showHouse', $house['id'])); ?>">Réserver</a>
                    </div>
                </div>
            </div>   
            <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
        </div>
    </div>   
</div>
<?php echo $__env->make('layouts.app', array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>