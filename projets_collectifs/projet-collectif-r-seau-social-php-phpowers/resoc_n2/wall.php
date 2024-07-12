<?php include 'snippets/header.php' ?>
<div id="wrapper">
    
    <?php
        $userId = intval($_GET['user_id']); 
        $connectedId = $_SESSION['connected_id'];
        echo $connectedId, ',', $userId;
    ?>
    <!-- $_SESSION['connected_id']=$user['id']; -->
    
    
    <aside>
        <?php
            /**
             * Etape 3: récupérer le nom de l'utilisateur
             */
            $laQuestionEnSql = "SELECT * FROM users WHERE id= '$userId' ";
            $lesInformations = $mysqli->query($laQuestionEnSql);
            $user = $lesInformations->fetch_assoc();
            // echo "<pre>" . print_r($user, 1) . "</pre>";
            ?>
            <img src="user.jpg" alt="Portrait de l'utilisatrice" />
            <section>
                <h3>Présentation</h3>
                <p>Sur cette page vous trouverez tous les message de l'utilisatrice : <?php echo $user['alias'] ?>
            </p>
        </section>
    </aside>
    <main>
        <article>
            <h2>Poster un message</h2>
            <?php
               /**
                * BD
                */
                
                $mysqli = new mysqli("localhost", "root", "root", "socialnetwork");
                /**
             * Récupération de la liste des auteurs
             */
            $listAuteurs = [];
            $laQuestionEnSql = "SELECT * FROM users";
            $lesInformations = $mysqli->query($laQuestionEnSql);
            while ($user = $lesInformations->fetch_assoc()) {
                $listAuteurs[$user['id']] = $user['alias'];
            }
        
        
            /**
             * TRAITEMENT DU FORMULAIRE
             */
            // Etape 1 : vérifier si on est en train d'afficher ou de traiter le formulaire
            // si on recoit un champs email rempli il y a une chance que ce soit un traitement
            $enCoursDeTraitement = isset($_POST['auteur']);
            if ($enCoursDeTraitement) {
                // Etape 2: récupérer ce qu'il y a dans le formulaire @todo: c'est là que votre travaille se situe
                // observez le résultat de cette ligne de débug (vous l'effacerez ensuite)
                // et complétez le code ci dessous en remplaçant les ???
            
                $authorId = $_POST['auteur'];
                $postContent = $_POST['message'];
        
        
                //Etape 3 : Petite sécurité
                $authorId = intval($mysqli->real_escape_string($authorId));
                $postContent = $mysqli->real_escape_string($postContent);
                //Etape 4 : construction de la requete
                $permalink = 'post-' . uniqid(); // Generate a unique permalink
                $lInstructionSql = "INSERT INTO posts "
                    . "(id, user_id, content, created, permalink, post_id) "
                    . "VALUES (NULL, "
             
       . $authorId . ", "
                    . "'" . $postContent . "', "
                    . "NOW(), "
                    . "'" . $permalink . "', "
                    . "NULL);";
        
                // Etape 5 : execution
                $ok = $mysqli->query($lInstructionSql);
                if (!$ok) {
                    echo "Impossible d'ajouter le message: " . $mysqli->error;
                } else {
                    echo "Message posté en tant que :" . $listAuteurs[$authorId];
                }
            }

//afficher le formulaire que si on est sur notre page
            //  if ($connectedId === $userId){
            //      echo ('
            //      <form action="usurpedpost.php" method="post">
            //      <input type="hidden" name="???" value="achanger">
            //      <dl>
            //          <dt><label for="auteur">Auteur</label></dt>
            //          <dd><select name="auteur">
                            
            //              </select></dd>
            //          <dt><label for="message">Message</label></dt>
            //          <dd><textarea name="message"></textarea></dd>
            //      </dl>
            //      <input type="submit">
            //  </form>
            //      ');
            //  }

            // ?>

        </article>
        <?php
        /**_SESSION['connected_id']
         * Etape 3: récupérer tous les messages de l'utilisatrice
             */
            $laQuestionEnSql = "
                    SELECT posts.content, posts.created, users.alias as author_name,
                    users.id as user_id,
                    COUNT(likes.id) as like_number, GROUP_CONCAT(DISTINCT tags.label) AS taglist 
                    FROM posts
                    JOIN users ON  users.id=posts.user_id
                    LEFT JOIN posts_tags ON posts.id = posts_tags.post_id  
                    LEFT JOIN tags       ON posts_tags.tag_id  = tags.id 
                    LEFT JOIN likes      ON likes.post_id  = posts.id 
                    WHERE posts.user_id='$userId' 
                    GROUP BY posts.id
                    ORDER BY posts.created DESC  
                    ";

            if (isset($_SESSION["user_id"])) {
                if ($_SESSION['connected_id'] == 'true') {
                    session_reset();
                }
            }

            $lesInformations = $mysqli->query($laQuestionEnSql);
            if (!$lesInformations) {
                echo ("Échec de la 
                requete : " . $mysqli->error);
            }

            ?>

        <?php include 'snippets/posts.php' ?>
        </main>
    </div>
</body>

</html>