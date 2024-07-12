<?php
            while ($followers = $lesInformations->fetch_assoc()) {
                // echo "<pre>" . print_r($followers, 1) . "</pre>";
            ?>
                <article>
                    <img src="user.jpg" alt="blason" />
                    <h3><?php echo $followers['alias'] ?></h3>
                    <p><?php echo $followers['id'] ?></p>
                </article>

            <?php  }

            ?>