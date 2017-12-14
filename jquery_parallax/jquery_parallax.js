//  here parallax is now able to sense when window moves

    //capabilities
    
    //planned work : core parallax functionality
    
    
var its_ok = 0;
//global variables

    jQuery.fn.extend({
        parallax:function(michael){
            //a parallax is hard to explain in the real world but on a screen each parallax item slides regularly on the screen to a certain point, where it is then covered by the next parallax object to a certain point

            var parallax_array = $.map($(this), function(value, index) {
                return [$(value)];
            });
            consoles("parallax_items",[$(this),parallax_array],1);
            consoles("scrollTop",$(window).scrollTop())
            
            function react_on_scroll_offset() {
                
                    if ($(window).scrollTop() >= 66)  {
                        // parallax_array[0].css({"position":"fixed","left":"7.2%","top":"25%"});
                        // parallax_array[0].offset({top:15,left:25})
                        
                        var move = 5;
                        move += $(window).scrollTop()/10000;
                        parallax_array[0].css("top",move.toString() + "em")
                        console.log(parallax_array[0].css("top"))

                    }
    
                    // if ($(window).scrollTop() >= 104)  {
                    //     parallax_array[1].css({"position":"fixed","left":"7.2%","top":"50%"});
                    //     // parallax_array[0].offset({top:15,left:25})
                    // }
                    // if ($(window).scrollTop() >= 159)  {
                    //     parallax_array[2].css({"position":"fixed","left":"7.2%","top":"75%"});
                    //     // parallax_array[0].offset({top:15,left:25})
                    // }
                    // if ($(window).scrollTop() >= 204)  {
                    //     parallax_array[3].css({"position":"fixed","left":"7.2%","top":"95%"});
                    //     // parallax_array[0].offset({top:15,left:25})
                    // }

            }
            
            $(window).scroll(react_on_scroll_offset);

            $(window).on("scroll",function () {
                console.log("jacob");
            })

            
            
            function consoles(action = "none",data = undefined,debug = its_ok) {
                if(debug !== 0){
                    return;
                }
                if(action == "parallax_items"){
                    console.log(data)
                }
                
                if(action == "scrollTop"){
                    console.log(data)
                }
                
                
                
            }
        }
    });