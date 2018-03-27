<?php $__env->startSection('content'); ?>
<div class="container list-category">
    <h2>Mes hébergements</h2>
    <div class="row">
        <?php $__currentLoopData = $houseProfil; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $house): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
        
        <div class="col-lg-4 col-md-6 mb-4">
            <div class="card h-100">
                <a href="#"><img class="card-img-top" src="<?php echo e(asset('img/houses/'.$house->photo)); ?>"></a></a>
                <div class="card-body">
                    <h4 class="card-title">
                        <p><?php echo e($house->title); ?></p>
                    </h4>
                    <h5><?php echo e($house->price); ?>€</h5>
                    <p class="card-text"><?php echo e($house->description); ?></p>
                </div>
                <div class="card-footer">
                    <small class="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
                </div>
            </div>
            <?php var_dump($house); ?>
           <a href="<?php echo e(action('HousesController@edit', $house->id)); ?>" class="btn btn-warning">Edit</a>
           <a href="<?php echo e(url('/houses/edit')); ?>/<?php echo e($house->id); ?>" class="btn btn-warning">Modifier</a>
            <form action="<?php echo e(action('HousesController@destroy', $house->id)); ?>" method="post">
            <?php echo e(csrf_field()); ?>

            <input name="_method" type="hidden" value="DELETE">
            <button class="btn btn-danger" type="submit">Delete</button>
            </form>
        </div>
       
        <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
        
    </div>   
</div>
<?php echo $__env->make('layouts.app', array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>