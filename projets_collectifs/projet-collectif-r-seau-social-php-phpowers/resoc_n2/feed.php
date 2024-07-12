<?php include 'snippets/header.php'?>

    <div id="wrapper">
        <?php
        $userId = intval($_GET['user_id']);
        ?>

        <aside>
            <?php
            /**
             * Etape 3: récupérer le nom de l'utilisateur
             */
            $laQuestionEnSql = "SELECT * FROM `users` WHERE id= '$userId' ";
            $lesInformations = $mysqli->query($laQuestionEnSql);
            $user = $lesInformations->fetch_assoc();
            ?>
            <img src="user.jpg" alt="Portrait de l'utilisatrice" />
            <section>
                <h3>Présentation</h3>
                <p>Sur cette page vous trouverez tous les message des utilisatrices auxquel est abonnée l'utilisatrice <?php echo $user["alias"] ?>
                </p>
            </section>
        </aside>
        <main>
            <?php
            /**
             * Etape 3: récupérer tous les messages des abonnements
             */
            $laQuestionEnSql = "
                    SELECT posts.content,
                    posts.created,
                    users.id as user_id,
                    users.alias as author_name,
                    count(likes.id) as like_number,
                    GROUP_CONCAT(DISTINCT tags.label) AS taglist
                    FROM followers
                    JOIN users ON users.id=followers.followed_user_id
                    JOIN posts ON posts.user_id=users.id
                    LEFT JOIN posts_tags ON posts.id = posts_tags.post_id
                    LEFT JOIN tags       ON posts_tags.tag_id  = tags.id
                    LEFT JOIN likes      ON likes.post_id  = posts.id
                    WHERE followers.following_user_id='$userId'
                    GROUP BY posts.id
                    ORDER BY posts.created DESC
                    ";
            $lesInformations = $mysqli->query($laQuestionEnSql);
            if (!$lesInformations) {
                echo ("Échec de la requete : " . $mysqli->error);
            } ?>

            <!--
            Etape 4: @todo Parcourir les messsages et remplir correctement le HTML avec les bonnes valeurs php
            A vous de retrouver comment faire la boucle while de parcours...
              -->

             <?php include 'snippets/posts.php'?>

        </main>
    </div>
</body>

</html>