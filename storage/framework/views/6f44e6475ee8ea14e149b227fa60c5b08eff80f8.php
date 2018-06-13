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
    <?php $__currentLoopData = $users; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $user): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
    <div class="table-responsive">
        <table class="table">
            <tbody>
                <tr>
                    <td><a href="<?php echo e(action('AdminController@profilUser', $user['id'])); ?>"><?php echo e($user->nom); ?></a></td>
                    <td><?php echo e($user->email); ?>€</td>
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
<div id="avis">
    <h2>Avis : </h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus vitae nulla nemo, ipsa, officiis recusandae praesentium nihil, minus cumque nostrum enim aliquam nam libero earum mollitia eaque. Voluptas, cum esse!</p>
</div>
<div id="proprietes">
    <h2>Proprietes : </h2>
    <div class="container">
        <form class="form-horizontal" method="POST" action="<?php echo e(url('admin/proprietes/store')); ?>">
        <?php echo e(csrf_field()); ?>

            <div class="row">
                <div class="col-md-4 col-md-offset-4">
                    <select id="name" type="text" name="category_id" id="select_category" class="form-control">
                        <option id="" value="defaut" selected="selected" required autofocus>Choisissez votre categorie</option>
                        <?php $__currentLoopData = $categories; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $category): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                            <option value="<?php echo($category->id);?>"><?php echo($category->categorie);?></option>
                        <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                    </select>
                </div>
            </div>
            <div class="block-properties">
                <div class="create_properties row">
                    <div class="col-md-4 col-md-offset-4">   
                        <input type="text" name="propriete[]" placeholder="Ajouter une propriété"  class="form-control"/>    
                    </div>
                    <a href="javascript:void(0);" class="btn btn-primary add_button" title="Ajouter une propriété"  style="border-radius:30px;"><!--<button class="btn btn-primary add_propriete" style="border-radius:30px;">-->+</a>
                </div>
                <div class="row">
                    <div class="text-center" style="margin-top: 5%;">
                        <input type="submit" class="btn btn-success" value="Sauvegarder"/>
                    </div>
                </div>
            </div>
        </form>
        <div class="row">
            <table class="table">
                <thead>
                    <tr>
                        <th>Catégorie : </th>
                        <th>Propriété : </th>
                        <th>Actions : </th>
                    </tr>
                </thead>
            </table>
        <?php $__currentLoopData = $proprietes; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $propriete): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
        <div class="table-responsive">
            <table class="table">
                <tbody>
                    <tr>
                        <td><?php echo e($propriete->category->categorie); ?></td>
                        <td><?php echo e($propriete->propriete); ?></td>
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
<?php $__env->stopSection(); ?>

<?php echo $__env->make('layouts.admin', array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>