<h1>Bienvenue <?php echo e($prenom); ?></h1>
<p>Cliquez sur le lien afin de valider <a href="<?php echo e(url('/users/confirmation'.$email_token)); ?>">votre compte</a></p>
<p>Une fois votre compte validée, connectez-vous sur <a href="<?php echo e(url('/login')); ?>">Atypikhouse</a></p>
<p>Notre équipe vous remercie.</p>