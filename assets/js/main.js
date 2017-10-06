$(".post_options").click(function(){
    $(this).toggleClass("active");
    
});
$(document).ready(function(){
    $(".box-tools button").click(function(){
        var choice=$(this).data("widget");
        switch(choice){
            case "collapse":$(".direct-chat .box-body ,.direct-chat .box-footer ,.direct-chat .sort-by").slideToggle();
                            break;
            case "chat-pane-toggle":$(".direct-chat").toggleClass("direct-chat-contacts-open");
                                    break;
            case "remove":$(".direct-chat").hide();
                          break;
        }
    });
    manageWidth();
});

$("header .recent-chat-list").css("height",$(window).height()*0.67+"px");
$(".allMessages").css("height",$(window).height()-40+"px");
$(".allMessages .recent-chat-container,.allMessages .recent-chat-container").css("height",$(window).height()-90+"px");

$(".allMessages .current-chat .direct-chat-messages").css("height",$(window).height()-150+"px");
$(window).on("resize",manageWidth);
$(".toggleHome").click(function(){
    $(".nav_bar").toggleClass("translatey100");
})

function manageWidth(){
    if($(window).width()<=992)
    {$(".nav_bar").addClass("translatey100");}
    else{
        $(".nav_bar").removeClass("translatey100");
    }
}