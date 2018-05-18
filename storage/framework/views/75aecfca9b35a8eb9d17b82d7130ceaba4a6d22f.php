<?php $__currentLoopData = $user; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $profile): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
    <p>Nom <?php echo e($profile->nom); ?></p>
    <p>Prenom <?php echo e($profile->prenom); ?></p>
    <p>Email <?php echo e($profile->email); ?></p>
<?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>