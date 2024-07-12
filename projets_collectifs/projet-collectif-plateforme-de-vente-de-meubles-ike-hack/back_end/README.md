# Création de l'environnement virtuel:

_py -3 -m venv .venv_

_.venv/scripts/activate_

_python -m pip install --upgrade pip_

# Installation des frameworks:
_pip install -r requirements.txt_

## Création d'un requirements.txt contenant les différents framework : 
asgiref==3.8.1
Django==5.0.6
djangorestframework==3.15.2
sqlparse==0.5.0
tzdata==2024.1

# Installation mysql:
_pip install mysqlclient_

# Intégration BDD dans Djangorest et connexion entre les deux:

_python manage.py migrate_  **/rajoute la gestion d'authentification dans la BDD mysql

# Run
!! se placer au même endroit que manage.py pour executer les cmd
_python manage.py runserver_  **/ relance le serveur virtuel

login (superuser)
username: root
email: root@root.com
passwd: root

# notes passation
## architecture dans models.py
-> pour les image, "blob" pas ouf
-> binary field permet de récupérer images dans la BDD
-> checker si y'a des formats d'img qui passent pas

## bdd django
-> toutes les tables en + de furnitures et types permettent de gérer la connexion et authentification
-> tips éloise : fait automatiquement un find all (récupère toute les infos), faut être super précis.e dans les requêtes

## serializer.py
-> pour une bonne gestion des hyperliens (à creuser)

## views.py
-> là où on fait les requêtes, sûrement ici qu'on gère les endpoints (à creuser o6)

## ps
-> y'a un fichier qui permet de ramener des JSON au front (todo: trouver lequel)
-> commandes pip équivalent à npm sur js


# suivi install hidouen
/back_end/ikehack
sudo python3 manage.py migrate
-> no module named "tutorial"

when this error
-> pip install -r requirements.txt --break-system-packages
-> cannot uninstal sqlparse

-> ajout de mysql-connector-python== .....

-> sudo apt remove python3-sqlparse

-> nouvelle attempt du pip install

-> migrate, socket again