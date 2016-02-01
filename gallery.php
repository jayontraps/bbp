<?php 

$page = "Gallery";
include "inc/head.php"
?>

<div class="wrapper">

<?php include "inc/branding.php"; ?>

<div class="main group">


    <nav>
        <ul class="nav catList group">
            
            <li><a href="cat1" class="linkCat1 on">One</a></li>
            <li><a href="cat2" class="linkCat2">Two</a></li>
            <li><a href="cat3" class="linkCat3">Three</a></li>
            <li><a href="cat4" class="linkCat4">Four</a></li>
            <li><a href="cat5" class="linkCat5">Five</a></li>
        </ul>
    </nav>

    <div class="colOne">

        <ul class="galleryList">

               <?php 
                   include "inc/cat1.php"; 
                   include "inc/cat2.php";
                   include "inc/cat3.php";
                   include "inc/cat4.php";
                   include "inc/cat5.php"; 
               ?>

        </ul>



    </div><!-- .colOne -->



    <div class="colTwo">

        <div class="wrap">

            <div class="imgWrap">
                <img src="images/gallery/cat1/TB101.jpg" class="frame cat1" />
            </div>


        </div><!-- .wrap -->

    </div><!-- .colTwo -->



  <div class="infoBox group">
  </div>



</div><!-- ,main -->


<?php include "inc/footer.php"; ?>