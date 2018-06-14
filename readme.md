### Voici la documentation pour faire fonctionner le site internet : 

# Les logiciels dont vous aller avoir besoins : 
1. Xampp -> https://www.apachefriends.org/fr/index.html
2. Sublime text pour afficher le code -> https://www.sublimetext.com/

# Pour la base de donnée : 
    Importer les tables via le fichier .sql dans phpmyadmin : maBase.sql

# Lancer le site internet : 
1. composer update
2. php artisan serve
3. Aller sur le lien : http://localhost:8000/

# Installer les tests fonctionnels : 
    php artisan dusk:install

# Lancer les tests fonctionnels : 
    php artisan dusk

# Lancer les tests unitaires : 
    ./vendor/bin/phpunit

