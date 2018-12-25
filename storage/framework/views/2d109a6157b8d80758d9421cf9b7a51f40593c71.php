<?php $__env->startSection('content'); ?>

<div class="container">
    <div class="row">
        <div class="col-md-10 col-md-offset-1">
            <div class="panel panel-default">
                <div class="panel-heading">Modifier</div>
                <?php $__currentLoopData = $houses; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $house): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                <div class="panel-body">
                    <?php if($success = Session::get('success')): ?>
                        <div class="alert alert-info">
                            <?php echo e($success); ?>

                        </div>
                    <?php endif; ?>
                    <form class="form-horizontal" method="POST" action="<?php echo e(route('user.updateHouse', $house->id)); ?>" enctype="multipart/form-data">                      
                        <?php echo e(csrf_field()); ?>

                        <div class="form-group">
                            <label for="name" class="col-md-4 control-label">Titre</label>

                            <div class="col-md-6">
                                <input id="name" type="text" class="form-control" name="title" maxlength="47"required autofocus value="<?php echo e($house->title); ?>">
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="name" class="col-md-4 control-label">Categorie</label>
                            <div class="col-md-6">
                                <select id="select_category" type="text" name="category_id" class="form-control">
                                    <option id="" value="<?php echo e($house->category->id); ?>" selected="selected" required autofocus><?php echo e($house->category->category); ?></option>
                                    <?php $__currentLoopData = $categories; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $category): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                                        <option value="<?php echo($category->id);?>"><?php echo($category->category);?></option>
                                    <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                                </select>
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="name" class="col-md-4 control-label">Ville</label>
                            <div class="col-md-6">
                                <input type="text" class="form-control" name="ville" required autofocus value="<?php echo e($house->ville); ?>">
                            </div>
                        </div>   
                        

                        <div class="form-group">
                            <label for="name" class="col-md-4 control-label">Prix</label>

                            <div class="col-md-6">
                                <input id="name" type="text" class="form-control" name="price" autofocus value="<?php echo e($house->price); ?>">
                            </div>
                        </div>

                        <div class="form-group">
                            <label for="name" class="col-md-4 control-label">Photo</label>
                            
                            <div class="col-md-6">
                                <img class="img-responsive img_house" src="<?php echo e(asset('img/houses/'.$house->photo)); ?>">
                            </div>
                        </div>
                        
                        <div class="form-group">
                            <label class="col-md-4"></label>
                            <div class="col-md-6">
                            <input id="name" type="file" class="form-control" name="photo" autofocus value="<?php echo e($house->photo); ?>">
                            </div>
                        </div>

                        <?php $__currentLoopData = $house->proprietes; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $proprietes): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                            <div class="form-group">
                                <label for="name" class="col-md-4 control-label"><?php echo e($proprietes->propriete); ?></label>
                                <input type="hidden" class="form-control" name="propriete_id[]" autofocus value="<?php echo e($proprietes->id); ?>">
                                <?php $__currentLoopData = $proprietes->valuecatproprietes; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $valuepropriete): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                                    <div class="col-md-6">
                                        <input type="text" class="form-control" name="propriete[]" autofocus value="<?php echo e($valuepropriete->value); ?>">
                                    </div>
                                <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                                <?php if($proprietes->valuecatproprietes->isEmpty()): ?>
                                    <div class="col-md-6">
                                        <input type="text" class="form-control" name="propriete[]" autofocus value="">
                                    </div> 
                                <?php endif; ?>
                                
                            </div>
                        <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                        <div class="form-group">
                            <label for="description" class="col-md-4 control-label">Description</label>

                            <div class="col-md-6">
                                <textarea class="form-control" name="description" rows="5"><?php echo e($house->description); ?></textarea>
                            </div>
                        </div>
                        <!--<div class="col-md-6">
                            <input id="name" type="hidden" class="form-control" name="idUser" autofocus value="<?php echo e(Auth::user()->id); ?>">
                        </div>-->

<?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                        <div class="form-group">
                            <div class="col-md-6 col-md-offset-4">
                                <button type="submit" class="btn btn-primary">
                                    Enregistrer
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
<?php $__env->stopSection(); ?>

<?php echo $__env->make('layouts.app', array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>