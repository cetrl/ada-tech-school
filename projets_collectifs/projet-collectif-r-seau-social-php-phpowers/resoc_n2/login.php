<?php include 'snippets/header.php' ?>

        <div id="wrapper" >

            <aside>
                <h2>Présentation</h2>
                <p>Bienvenue sur notre réseau social.</p>
            </aside>
            <main>
                <article>
                    <h2>Connexion</h2>
                    <?php
                    $enCoursDeTraitement = isset($_POST['email']);
                    if ($enCoursDeTraitement)
                    {
                        $emailAVerifier = $_POST['email'];
                        $passwdAVerifier = $_POST['motpasse'];  

                        $mysqli = new mysqli("localhost", "root", "root", "socialnetwork");

                        $emailAVerifier = $mysqli->real_escape_string($emailAVerifier);
                        $passwdAVerifier = $mysqli->real_escape_string($passwdAVerifier);

                        $passwdAVerifier = md5($passwdAVerifier);

                        $lInstructionSql = "SELECT * "
                                . "FROM users "
                                . "WHERE "
                                . "email LIKE '" . $emailAVerifier . "'"
                                ;
                        $res = $mysqli->query($lInstructionSql);
                        $user = $res->fetch_assoc();
                        if ( ! $user OR $user["password"] != $passwdAVerifier)
                        {
                            echo "La connexion a échouée. ";
                            
                        } else
                        {
                            echo "Bonjour " . $user['alias'] . ", j'espère que ça va ! :)";
                            $_SESSION['connected_id']=$user['id'];
                        }
                    }
                    ?>                     
                    <form action="login.php" method="post">
                        <input type='hidden'name='???' value='achanger'>
                        <dl>
                            <dt><label for='email'>E-Mail</label></dt>
                            <dd><input type='email'name='email'></dd>
                            <dt><label for='motpasse'>Mot de passe</label></dt>
                            <dd><input type='password'name='motpasse'></dd>
                        </dl>
                        <input type='submit'>
                    </form>
                    <p>
                        Pas de compte?
                        <a href='registration.php'>Inscrivez-vous.</a>
                    </p>

                </article>
            </main>
        </div>
    </body>
</html>
