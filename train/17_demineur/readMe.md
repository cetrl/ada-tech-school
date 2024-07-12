# Démineur
## 1. Enoncé

Le but de cet exercice, comme son nom l’indique, est de programmer un démineur !

Ici on préfèrera utiliser le python 🐍.

L’étape 3 et 4 sont interchangeables.

*Contraintes:* 

- Langage : Python
- Suivre les étapes
- Une fonctionnalité = une fonction


## current step
## Etape 2 - Cachez cette grille que je ne saurais voir !

Mais imaginez, si la grille était d'abord neutre, et que vous puissiez, les une après les autres, sélectionner les cases (par exemple en renseignant leurs coordonnées en ligne de commande), et les découvrir : soit pleines (ou noires, ou `True`), soit vides (ou blanches, ou `False`) ?

Ce serait tout de même diablement intriguant !

Il vous faut pour cela une logique en boucle :

- La grille est affichée dans un certain état `A`. Au début, cette état est "neutre" : on ne connait pas le contenu des cases.
- Le jeu attend une action, un ordre ; vous l'exécutez (vous renseignez des coordonnées par exemple, ou - si vous vous êtes déjà diversifié dans le graphisme - vous cliquer sur une case, ...).
- Le jeu vous affiche le nouvel état `B` de la grille (l'état `A` plus le résultat de votre action).
- On recommence la boucle avec ce nouvel état `B`.

_exo individuel proposé par Ada Tech School_