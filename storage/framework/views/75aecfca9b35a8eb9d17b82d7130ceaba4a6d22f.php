<?php $__env->startSection('content'); ?>
<div class="admin-user-profil">
    <div class="container-fluid">
        <div class="col-md-12">
            <div class="col-md-2"></div>
            <div class="col-md-3">
                <div class="panel panel-default">
                <?php $__currentLoopData = $users; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $user): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                    <div class="panel-heading">Profil de <?php echo e($user->nom); ?> <?php echo e($user->prenom); ?></div>
                    <div class="panel-body">       
                        <div class="row">                                      
                            <div class="form-group">
                                <label for="name" class="col-md-2 control-label">Nom:</label>
                                <div class="col-md-2">
                                    <?php echo e($user->nom); ?>

                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="form-group">
                                <label for="name" class="col-md-2 control-label">Prénom</label>
                                <div class="col-md-2">
                                    <?php echo e($user->prenom); ?>

                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="form-group">
                                <label for="name" class="col-md-2 control-label">Email</label>
                                <div class="col-md-2">
                                    <?php echo e($user->email); ?>

                                </div>
                            </div>
                        </div>
                    </div>
                    <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                </div>
            </div>

            <div class="col-md-7">
                <div class="panel panel-default">
                <?php $__currentLoopData = $houses; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $house): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                    <div class="panel-heading">Hébergement de <?php echo e($house->user->nom); ?> <?php echo e($house->user->prenom); ?></div>
                    <div class="panel-body">
                    
                        <div class="row">
                            <div class="col-lg-4 col-md-4 mb-4 thumbnail">
                                <div class="card h-100">
                                    <img class="img-responsive img_house" src="<?php echo e(asset('img/houses/'.$house->photo)); ?>">
                                    <div>
                                        <h4 class="title card-title">
                                            <a href="#"><?php echo e($house->title); ?></a>
                                        </h4>
                                        <p>Type de bien : Logement</p>
                                        <p><i class="fas fa-bed"></i> : 2 lits - <i class="fas fa-users"></i> : pour 2 Personnes</p>
                                        <h3 class="price"><?php echo e($house->price); ?>€</h3>
                                        <p class="card-text"><?php echo(substr($house->description, 0, 40));?></p>
                                        <?php if($house->statut == "En attente de validation"): ?>
                                            <p>Statut: <span style="color:red;"><?php echo($house->statut);?></span></p>
                                        <?php else: ?>
                                            <p>Statut: <span style="color:green;"><?php echo($house->statut);?></span></p>
                                        <?php endif; ?>
                                        <div class="row">
                                            <div class="form-group">
                                                <div class="col-md-12 text-center">
                                                    <a href="<?php echo e(route('admin.editHouse', $house['id'])); ?>" class="btn btn-primary">Modifier</a>
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
            </div>
        </div>
    </div>
</div>
<?php echo $__env->make('layouts.admin', array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>