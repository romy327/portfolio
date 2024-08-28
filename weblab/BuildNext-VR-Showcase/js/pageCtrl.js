jQuery(document).ready(function(){
    var titleText = $("title").text();
    var activePage = $("li.colorlib-active").text();
    $("title").text(titleText+" - "+activePage);
    
    
    var winHt = $(window).height();
    
    $(".goToTop").on("click", function(){
        $('html,body').animate({ scrollTop: 0 }, 'slow');
        });
    
    $( window ).scroll(function() {
        var posTop = $(window).scrollTop();
        if(posTop>=winHt){
            $(".goToTop").addClass("show");
            }
        else{
             $(".goToTop").removeClass("show");
        }
        });
    
    $(window).resize(function(){
         $( window ).scroll(function() {
            var posTop = $(window).scrollTop();
            if(posTop>=winHt){
                $(".goToTop").addClass("show");
                }
            else{
                 $(".goToTop").removeClass("show");
            }
            });
        
        });

    
});