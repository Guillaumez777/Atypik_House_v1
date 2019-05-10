<?php $__env->startSection('content'); ?>
<div id="categories">
    <h2>Messages : </h2>
    <?php if($success = Session::get('success')): ?>
        <div class="alert alert-success">
            <?php echo e($success); ?>

        </div>
    <?php endif; ?>
    <?php if($danger = Session::get('danger')): ?>
        <div class="alert alert-danger">
            <?php echo e($danger); ?>

        </div>
    <?php endif; ?>
    <?php $__currentLoopData = $posts; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $post): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
    <div class="table-responsive">
        <table class="table">
            <tbody>
                <tr>
                    <td><a href="<?php echo e(action('AdminController@showposts', $post['id'])); ?>"><?php echo e($post->name); ?></a></td>
                    <td>
                        <a href="<?php echo e(action('AdminController@showposts', $post['id'])); ?>" class="btn btn-warning"> Voir</a>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
    <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
</div>
<?php $__env->stopSection(); ?>
<?php echo $__env->make('layouts.admin', array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>