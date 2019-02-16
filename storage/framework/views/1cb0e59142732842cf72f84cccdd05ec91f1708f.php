<?php $__env->startSection('content'); ?>
<div class="container list-category">
        <h2 id="hebergements">Nos hébergements</h2>
        <div class="row">
        <?php $__currentLoopData = $houses; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $house): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
            <?php if($house->statut == "Validé"): ?>
                <div class="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                        
                    <div class="card h-100">
                            
                        <a href="<?php echo e(action('UsersController@showHouse', $house['id'])); ?>"><img class="img-responsive" src="<?php echo e(asset('img/houses/'.$house->photo)); ?>"></a>
    
                        <div class="card-body">
                            <h3 class="card-title"><a href="<?php echo e(action('UsersController@showHouse', $house->id)); ?>"><?php echo e($house->title); ?> - </a></h3>
                            <h3 class="card-title"> <?php echo e($house->ville); ?> </h3>
                        </div>
                        
                        <p class="price"> <?php echo e($house->price); ?>€ / nuit</p>
                        
                        
                    </div>
                </div>
            <?php endif; ?>  
        <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
        </div>
    </div> 
</div>
<?php echo $__env->make('layouts.app', array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>