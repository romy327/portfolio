<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
    <title>PlatinoArt</title>
    <?php include("styles.php"); $page="home";/*Include for styles*/?>
  </head>
  <body>
      
<div class="container-fluid">
  <div class="row" style="height:1300px">
      <div class="col-lg-10 col-md-10 col-sm-12 col-xs-12 col-lg-offset-1 col-md-offset-1">
          <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 nopadding header">
           <?php include("navMenu.php");/*Include for header*/?>
          </div>
          <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 nopadding">
              <div id="myCarousel" class="carousel slide" data-ride="carousel">
              <!-- Indicators -->
<!--
              <ol class="carousel-indicators">
                <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                <li data-target="#myCarousel" data-slide-to="1"></li>
              </ol>
-->

              <!-- Wrapper for slides -->
              <div class="carousel-inner" role="listbox">
                <div class="item active">
                  <img src="images/banners/01.jpg" alt="" width="100%"/>
                </div>

                <div class="item">
                  <img src="images/banners/02.jpg" alt="" width="100%"/>
                </div>
              </div><!-- Wrapper for slides -->
            </div><!-- myCarousel -->
          </div>
      </div>
  </div>
</div><!--container ends-->
      
      
    <?php include("scripts.php");/*Include for scripts*/?>
  </body>
</html>