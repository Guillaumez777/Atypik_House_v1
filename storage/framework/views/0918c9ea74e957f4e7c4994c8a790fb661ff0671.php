<?php $__env->startSection('content'); ?>
<div class="container-fluid banner">
    <div class="intro-body">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="input-group">
                        <span class="input-group-btn">
                            <form class="form-horizontal" method="get" action="<?php echo e(url('search')); ?>" enctype="multipart/form-data">
                                <div class="row">
                                    <div class="col-lg-12">
                                        <h1 class="title title-intro">Trouvez les meilleurs locations insolites en Europe !</h1>
                                        <div class="col-lg-6 col-lg-offset-3 col-md-6 col-md-offset-3 col-sm-9 col-sm-offset-1">
                                            <div class="form-group button2">
                                                <?php echo $__env->make('search',['url'=>'search','link'=>'search'], array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
                            <!--
                            <?php echo Form::open(['method'=>'GET','url'=>'QueryController@search','class'=>'form','role'=>'search']); ?>

                            <?php echo Form::text('search', null,
                                                array('required',
                                                        'class'=>'form-control ',
                                                        'placeholder'=>'Saisir une ville ...')); ?>

                            <?php echo Form::submit('Rechercher',
                                                        array('class'=>'btn btn-searchbar')); ?>

                            <?php echo Form::close(); ?>-->
<div class="container list-category">
    <h2>A propos</h2>
    <div class="row">
        <div class="container">
            <p>Eurodev Agency, agence web de développement, d’entretien et de mise à jours de sites et d’applications web, est une startup fondée par quatre collaborateurs issus de la même formation de chef de projet option « développement web ».</p>
            <p>Soucieux du détail et de la qualité, nous avons décidé de nous unir pour apporter notre soutien, nos connaissances et nos compétences aux entreprises désireuses d’améliorer leur visibilité sur le web pour augmenter leur chiffre d’affaires annuel. </p>
        </div>
    </div>
</div>
<?php $__env->stopSection(); ?>

<?php echo $__env->make('layouts.app', array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>