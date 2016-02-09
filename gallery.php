<?php 

$page = "Gallery";
include "inc/head.php"
?>

<div class="wrapper">

<?php include "inc/branding.php"; ?>

<div class="main group">


  <nav>
      <ul class="category-nav">            
          <li><a href="cat1" class="category-nav--link linkCat1 on">One</a></li>
          <li><a href="cat2" class="category-nav--link linkCat2">Two</a></li>
          <li><a href="cat3" class="category-nav--link linkCat3">Three</a></li>
          <li><a href="cat4" class="category-nav--link linkCat4">Four</a></li>
          <li><a href="cat5" class="category-nav--link linkCat5">Five</a></li>
      </ul>
  </nav>
  

  <div class="col-1">

      <ul class="gallery-list">

       <?php 
           include "inc/cat1.php"; 
           include "inc/cat2.php";
           include "inc/cat3.php";
           include "inc/cat4.php";
           include "inc/cat5.php"; 
       ?>

      </ul>

  </div>



  <div class="col-2">

      <div class="image-outer-wrap" id="js_img_wrapper">

          <div class="imgWrap">
              <img src="images/gallery/cat1/TB101.jpg" id="js_frame" class="cat1 frame" />
          </div>

      </div>

  </div>


  
  <div class="infoBox"></div>


</div>


<?php include "inc/footer.php"; ?>