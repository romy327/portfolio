<nav class="navbar navbar-inverse nopadding">
    <div class="navbar-header">
      <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
    </div>
    <div class="collapse navbar-collapse platinoNav" id="myNavbar">
      <ul class="nav navbar-nav">
        <li <?php if($page=="home") {echo($active);}?>><a href="#" target="_self">HOME</a></li>
        <li <?php if($page=="about") {echo($active);}?>><a href="#" target="_self">ABOUT US</a></li>
        <li <?php if($page=="products") {echo($active);}?>><a href="#" target="_self">PRODUCTS</a></li>
        <li <?php if($page=="downloads") {echo($active);}?>><a href="#" target="_self">DOWNLOADS</a></li>
        <li <?php if($page=="contacts") {echo($active);}?>><a href="#" target="_self">CONTACTS</a></li>
      </ul>
    </div>
</nav>