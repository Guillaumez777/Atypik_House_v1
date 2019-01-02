<div class="container">
    <div class="row">
        <div class="col-md-12">
            <div class="panel panel-default">
                <div class="panel-heading">Créer un hébergement</div>
                <?php echo Breadcrumbs::render('page1'); ?>

                <div class="panel-body">
                    <form class="form-horizontal" method="POST" action="<?php echo e(route('house.postcreate_step1')); ?>" enctype="multipart/form-data">
                        <?php echo e(csrf_field()); ?>

                        
                        <p>1. Où se situe votre bien?</p>
                        <div class="form-group<?php echo e($errors->has('ville') ? ' has-error' : ''); ?>">
                            <label for="name" class="col-md-4 control-label">Ville</label>
                            <div class="col-md-6">
                                <input id="name" type="text" class="form-control" name="ville" onkeyup="this.value=this.value.toUpperCase()" placeholder="Saisir la ville" autofocus value="<?php echo e(old('ville')); ?>">
                                <?php if($errors->has('ville')): ?>
                                    <span class="help-block">
                                        <strong><?php echo e($errors->first('ville')); ?></strong>
                                    </span>
                                <?php endif; ?>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <input id="name" type="hidden" class="form-control" name="user_id" required autofocus value="<?php echo e(Auth::user()->id); ?>">
                        </div>
                        <div class="form-group">
                            <div class="col-md-6 col-md-offset-4">
                                <button type="submit" class="btn btn-primary">
                                    Continuer
                                </button>
                            </div>
                        </div>
                    </form>                  
                </div>
            </div>
        </div>
    </div>
</div>
<script src="<?php echo e(asset('js/jquery.js')); ?>"></script>
<script src="<?php echo e(asset('js/create_house.js')); ?>"></script>
<!--<script src="<?php echo e(asset('js/proprietes.js')); ?>"></script>-->


<?php echo $__env->make('layouts.app', array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>