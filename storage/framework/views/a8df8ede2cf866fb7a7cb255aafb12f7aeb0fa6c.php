<?php $__env->startSection('content'); ?>
<div class="container-fluid banner">
    <div class="intro-body">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <h1 class="title title-intro">Trouvez les meilleurs locations insolites en Europe !</h1>
                    <div class="col-lg-6 col-lg-offset-3 col-md-6 col-md-offset-3 col-sm-9 col-sm-offset-1">
                        <div class="input-group">
                            <input type="text" class="form-control" placeholder="Saisir une ville">
                            <span class="input-group-btn">
                                <button class="btn btn-searchbar" type="button">Rechercher</button>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="container list-category">
    <h2>Nos hébergements</h2>
    <div class="row">
      <?php $__currentLoopData = $houses; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $house): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
        <div class="col-lg-4 col-md-6 col-sm-6 col-xs-12">
            <div class="card h-100">
                <a href="<?php echo e(action('HousesController@show', $house['id'])); ?>"><img class="img-responsive" src="<?php echo e(asset('img/houses/'.$house->photo)); ?>"></a>
                <div class="card-body">
                    <h3 class="title card-title">
                        <a href="<?php echo e(action('HousesController@show', $house['id'])); ?>"><?php echo e($house->title); ?></a>
                    </h3>
                    <p>Type de bien : Logement</p>
                    <p><i class="fas fa-bed"></i> : 2 lits - <i class="fas fa-users"></i> : pour 2 Personnes</p>
                    <h3 class="price"><?php echo e($house->price); ?>€</h3>
                    <p class="card-text"><?php echo e($house->description); ?></p>
                </div>
                <div class="note card-footer">
                    <medium class="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</medium>
                    <a class="btn btn-success btn_reserve" href="<?php echo e(action('HousesController@show', $house['id'])); ?>">Réserver</a>
                </div>
            </div>
        </div>   
        <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
    </div>
</div>
<div class="newsletter-block">
    <div class="row">
        <div class="col-lg-12">
            <h3 class="title">Abonnez-vous à notre newsletter afin d'être au courant des dernières nouveautés</h3>
            <div class="col-lg-6 col-lg-offset-3">
                <div class="input-group">
                    <input type="text" class="form-control" placeholder="Saisir une ville">
                    <span class="input-group-btn">
                        <button class="btn btn-default btn-searchbar" type="button">Rechercher</button>
                    </span>
                </div>
            </div>
        </div>
    </div>
</div>
<?php $__env->stopSection(); ?>

<?php echo $__env->make('layouts.app', array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>