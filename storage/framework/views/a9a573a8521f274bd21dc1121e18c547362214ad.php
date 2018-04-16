<?php $__env->startSection('content'); ?>
<div class="container list-category">
    <h2>Nos hébergements</h2>
    <div class="row">
        <div class="col-lg-6 col-md-6 mb-4">
            <div class="card h-100">
                <a href="#"><img class="card-img-top" src="http://placehold.it/700x200" alt=""></a>
                <div class="card-body">
                    <h4 class="title card-title">
                        <a href="#"><?php echo e($house->title); ?></a>
                    </h4>
                    <p>Type de bien : Logement</p>
                    <p><i class="fas fa-bed"></i> : 2 lits - <i class="fas fa-users"></i> : pour 2 Personnes</p>
                    <h3 class="price"><?php echo e($house->price); ?>€</h3>
                    <p class="card-text"><?php echo e($house->description); ?></p>
                </div>
                <div class="card-footer">
                    <small class="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
                </div>
            </div>
        </div>
        <div class="col-md-6">
            <div class="calendar">
                <p class="text-center">Calendrier</p>
            </div>
        </div>

        <!-- <form class="form-horizontal" method="post" action="<?php echo e('/houses/'.$house->id); ?>">
            <?php echo e(csrf_field()); ?>

            <?php echo e(method_field("DELETE")); ?>

            <button>Delete Task</button>
        </form> -->
    </div>   
</div>
<?php echo $__env->make('layouts.app', array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>