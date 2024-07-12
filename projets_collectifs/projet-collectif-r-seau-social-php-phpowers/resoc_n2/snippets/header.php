<!doctype html>
<html lang="fr">

<head>
    <meta charset="utf-8">
    <title>ReSoC</title>
    <meta name="author" content="Julien Falconnet">
    <link rel="stylesheet" href="style.css" />
    <link rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
</head>

<body>
    <header>
        <img src="resoc.jpg" alt="Logo de notre réseau social" />
        <nav id="menu">
            <a href="news.php">Actualités</a>
            <a href="wall.php?user_id=5">Mur</a>
            <a href="feed.php?user_id=5">Flux</a>
            <a href="tags.php?tag_id=1">Mots-clés</a>
            <a href="usurpedpost.php">Message</a>
        </nav>
        <nav id="user">
            <a href="#"><span class="material-symbols-outlined">
                    account_circle
                </span></a>
            <ul>
                <li><a href="settings.php?user_id=5">Paramètres</a></li>
                <li><a href="followers.php?user_id=5">Mes suiveurs</a></li>
                <li><a href="subscriptions.php?user_id=5">Mes abonnements</a></li>
            </ul>
        </nav>
    </header>

    <?php
    $mysqli = new mysqli("localhost", "root", "root", "socialnetwork");
    ?>

    <?php session_start(); ?>