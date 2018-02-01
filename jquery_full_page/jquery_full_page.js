// in this version the selected object changes to the size of the body
    //capabilities: outer body resizing
    //            : script awareness of position css attribute limiting its ablilty to change itself


    
    //planned work : main object background fades out into white, later this can be turned into an option
    //             : main object moving to cover visible page
    

    
    //far in the future: inner object resizing
    //                 : main object resizing


var call = 0;
var call_amounts = [];
    jQuery.fn.extend({
        full_page:function(michael){
            // this function is a special animation, where it spreads the object to the width of the page and by default makes all the child elements disappear, follow instructions or are edited in their display or content

            //init settings
{
            if($(this).css("position") == "static"){
                $(this).css({
                    "position":"relative"
                });
            }
}
            //////////////////////////////////////////////////////////////
            // if the selction position is static, we're going to change it to relative
            //////////////////////////////////////////////////////////////



            //setting up event function
{
            var full_page_selector = $($(this).selector);
            full_page_selector.click(function (){

                $(this).animate({
                    "height":$("body").css("height"),
                    "width":$("body").css("width")
                })
                console.log("hit")
            })
}
            //////////////////////////////////////////////////////////////
            // var full_page_selector contains the string use to select what this is referring to
            //////////////////////////////////////////////////////////////
        }
        
        
    });
    


