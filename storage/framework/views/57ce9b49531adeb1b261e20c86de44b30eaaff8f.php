<?php $__env->startSection('content'); ?>
<div id="hebergement">
    <h2>Hebergements : </h2>
    <div class="row">
        <table class="table">
            <thead>
                <tr>
                    <th>Titre : </th>
                    <th>Prix : </th>
                    <th>Actions : </th>
                </tr>
            </thead>
        </table>
    <?php $__currentLoopData = $houses; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $house): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
    <div class="table-responsive">
        <table class="table">
            <tbody>
                <tr>
                    <td><a href="<?php echo e(action('HousesController@show', $house['id'])); ?>"><?php echo e($house->title); ?></a></td>
                    <td><?php echo e($house->price); ?>€</td>
                    <td>
                        <a href="#" class="btn btn-warning">Modifier</a>
                        <a href="#" class="btn btn-danger">Supprimer</a>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
    <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
    </div>
</div>
<div id="reservation">
    <h2>Reservations : </h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus vitae nulla nemo, ipsa, officiis recusandae praesentium nihil, minus cumque nostrum enim aliquam nam libero earum mollitia eaque. Voluptas, cum esse!</p>
</div>
<div id="utilisateur">
    <h2>Utilisateurs : </h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus vitae nulla nemo, ipsa, officiis recusandae praesentium nihil, minus cumque nostrum enim aliquam nam libero earum mollitia eaque. Voluptas, cum esse!</p>
</div>
<div id="avis">
    <h2>Avis : </h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus vitae nulla nemo, ipsa, officiis recusandae praesentium nihil, minus cumque nostrum enim aliquam nam libero earum mollitia eaque. Voluptas, cum esse!</p>
</div>
<?php $__env->stopSection(); ?>

<?php echo $__env->make('layouts.admin', array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>