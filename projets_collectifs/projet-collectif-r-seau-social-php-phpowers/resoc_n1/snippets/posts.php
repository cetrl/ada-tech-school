<?php
while ($post = $lesInformations->fetch_assoc()) {

// echo "<pre>" . print_r($post, 1) . "</pre>";
?>
<article>
    <h3>
        <time datetime='2020-02-01 11:12:13'><?php echo $post['created'] ?></time>
    </h3>
    <address><?php echo $post['author_name'] ?></address>
    <div>
        <p><?php echo $post['content'] ?></p>
    </div>
    <footer>
        <small>♥ <?php echo $post['like_number'] ?></small>

        <!-- mettre à jour lien du tag -->
        <a href="">#<?php echo $post['taglist'] ?></a>
    </footer>
</article>
<?php } ?>
