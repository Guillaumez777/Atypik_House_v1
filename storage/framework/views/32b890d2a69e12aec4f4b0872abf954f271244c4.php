<?php $__env->startSection('title', 'Détail de l"annonce'); ?>
<?php $__env->startSection('link'); ?>
<link href="<?php echo e(asset('css/jquery-ui.min.css')); ?>" rel="stylesheet">
<?php $__env->startSection('content'); ?>
<div class="container list-category">
    <div class="panel panel-default">
        <div class="panel-heading">Détails de l'annonce</div>
        <div class="panel-body">
            <div class="row">
                <div class="col-lg-6 col-md-6 mb-4">
                    <div class="card h-100">
                        <img class="img-responsive img_house" src="<?php echo e(asset('img/houses/'.$house->photo)); ?>" alt="Hébergement insolite - <?php echo e($house->title); ?>"/>
                        <div class="card-show">
                            <h4 class="title card-title">
                                <a href="#"><?php echo e($house->title); ?></a>
                            </h4>
                            <h3 class="price"><?php echo e($house->price); ?>€</h3>
                            <p>Type de bien : <?php echo e($house->category->category); ?></p>
                            <?php $__currentLoopData = $house->valuecatproprietes; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $valuecatpropriete): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                                <?php if($valuecatpropriete->value == 0): ?>
                                <?php else: ?>
                                    <p><?php echo e($valuecatpropriete->propriete->propriete); ?>: <?php echo e($valuecatpropriete->value); ?></p> 
                                <?php endif; ?>                                 
                            <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                            <p><?php echo e($house->description); ?></p>
                            <p>Annulation gratuite !</p>
                            <p> Pays: <?php echo e($house->pays); ?></p>
                            <p> Ville: <?php echo e($house->ville); ?></p>
                            <p> Adresse: <?php echo e($house->adresse); ?></p>
                            <p> Téléphone de l'annonceur : <?php echo e($house->telephone); ?></p>
                        </div>
                    </div>
                </div>
                
                <div class="col-md-6">
                    <div class="calendar panel panel-default">
                        <h4 class="text-center panel-heading">Réserver vos dates : </h4>
                        <form class="form-horizontal" method="POST" action="<?php echo e(url('reservations')); ?>" enctype="multipart/form-data">
                            <?php echo e(csrf_field()); ?>

                            <div class="form-group">
                                <input type="hidden" name="house_id" value="<?php echo e($house->id); ?>">
                                <?php echo Form::label('from', 'Départ : ', array('class' => 'formLabel')); ?>

                                <?php echo Form::text('start_date', Form::old('from'), array( 
                                    'class' => 'form-control',
                                    'id' => 'from',
                                )); ?> 
                                <?php echo Form::label('to', 'Arrivée : ', array('class' => 'formLabel')); ?> 
                                <?php echo Form::text('end_date', Form::old('to'), array( 
                                    'class' => 'form-control',
                                    'id' => 'to',
                                )); ?>

                            </div>
                            <h3 class="price_reservation">Prix du séjour : <?php echo e($house->price); ?>€</h3>
                            <?php if(Auth::check()): ?>
                                <?php echo Form::submit('Réserver', array('class' => 'btn btn-success btn_reserve')); ?>

                                <?php if($errors->any()): ?>
                                    <div class="alert alert-danger">Vous devez remplir tout les champs</div>
                                <?php endif; ?>
                            <?php else: ?>
                                <a href= "<?php echo e(route('login')); ?>" class="btn btn-success btn_reserve btn-color">Réserver</a>
                            <?php endif; ?> 
                        </form>   
                    </div>
                </div> 
            </div>
            <?php $__currentLoopData = $house->comments; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $comment): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                <div class="panel panel-default" style="margin: 0; border-radius: 0;">
                    <div class="panel-body">
                        <div class="col-sm-9">
                            <?php echo e($comment->comment); ?>

                        </div>
                        <div class="col-sm-3 text-right">
                            <?php if($comment->user_id != "0"): ?>
                                <small>Posté par <?php echo e($comment->user->prenom); ?> <?php echo e($comment->user->nom); ?></small><br/>
                                <?php if($comment->note != "0"): ?>
                                    <small>Note: <?php echo e($comment->note); ?>/5</small>
                                <?php endif; ?>
                            <?php else: ?>
                                <small>Posté par <?php echo e($comment->admin->name); ?></small><br/>
                                <?php if($comment->note != "0"): ?>
                                    <small>Note: <?php echo e($comment->note); ?>/5</small> 
                                <?php endif; ?>
                            <?php endif; ?>
                        </div>
                    </div>
                </div>
            <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?> 
            <?php if(Auth::check()): ?>
                <?php if($client_reserved->count() > 0 OR $house->user_id == Auth::user()->id): ?>
                <div class="panel panel-default" style="margin: 0; border-radius: 0;">
                    <div class="panel-body">
                        <form action="<?php echo e(url('/comments')); ?>" method="POST" style="display: flex;">
                            <?php echo e(csrf_field()); ?>

                            <input type="hidden" name="house_id" value="<?php echo e($house->id); ?>">
                            <input type="hidden" name="user_id" value="<?php echo e(Auth::user()->id); ?>">
                            <input type="hidden" name="admin_id" value="0">
                            <input type="text" name="comment" placeholder="Saisir un commentaire" class="form-control" id="input_comment" style="border-radius: 0;">
                            <div class="rating">
                                <input type="radio" id="star5" name="note" value="5" /><label for="star5" title="Meh">5 stars</label>
                                <input type="radio" id="star4" name="note" value="4" /><label for="star4" title="Kinda bad">4 stars</label>
                                <input type="radio" id="star3" name="note" value="3" /><label for="star3" title="Kinda bad">3 stars</label>
                                <input type="radio" id="star2" name="note" value="2" /><label for="star2" title="Sucks big tim">2 stars</label>
                                <input type="radio" id="star1" name="note" value="1" /><label for="star1" title="Sucks big time">1 star</label>
                            </div>
                            <input type="submit" value="Envoyer" class="btn btn-primary btn-color" style="border-radius: 0;">
                        </form>
                        <?php if(count($errors) > 0): ?>
                            <div class="alert alert-danger">
                                <a href="#" class="close" data-dismiss="alert">&times;</a>
                                <ul>
                                    <?php $__currentLoopData = $errors->all(); $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $error): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                                        <?php echo e($error); ?>

                                    <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                                </ul>
                            </div>
                        <?php endif; ?>
                        <?php if(Session::has('success')): ?>
                            <div class="alert alert-success">
                                <a href="#" class="close" data-dismiss="alert">&times;</a>
                                <?php echo e(Session::get('success')); ?>

                            </div>
                        <?php endif; ?>
                    </div>
                </div>
                <?php endif; ?>
            <?php endif; ?>
        </div>
    </div>
</div>
<?php $__env->startSection('script'); ?>
<script src="<?php echo e(asset('js/jquery.js')); ?>"></script>
<script src="<?php echo e(asset('js/jquery-ui.min.js')); ?>"></script>
<script src="<?php echo e(asset('js/calendar.js')); ?>"></script>
<?php $__env->stopSection(); ?>
<?php echo $__env->make('layouts.app', array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>