//  here core parallax functionality is at play, but it has not been programmed to work universally, a deep understanding of the mathematics of the scoll coordinates to trigger proper functionality needs to be understood in order to upgrade this program

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
                
                    if ($(window).scrollTop() <= 66)  {
                        var move = 0;
                        move += $(window).scrollTop()/10;
                        parallax_array[0].css("top",move.toString() + "em")
                        // console.log(parallax_array[0].css("top"),$(window).scrollTop())
                        

                    }
                    if ($(window).scrollTop() <= 146)  {
                        var move = 0;
                        move -= $(window).scrollTop()/10;
                        parallax_array[1].css("top",move.toString() + "em")
                        console.log(parallax_array[1].css("top"),$(window).scrollTop())

                    }
                    if ($(window).scrollTop() <= 366)  {
                        var move = 0;
                        move -= $(window).scrollTop()/10;
                        parallax_array[2].css("top",move.toString() + "em")
                        // console.log(parallax_array[2].css("top"),$(window).scrollTop())

                    }
                    if ($(window).scrollTop() <= 906)  {
                        var move = 0;
                        move -= $(window).scrollTop()/10;
                        parallax_array[3].css("top",move.toString() + "em")
                        // console.log(parallax_array[2].css("top"),$(window).scrollTop())

                    }


            }
            
            $(window).scroll(react_on_scroll_offset);

            // $(window).on("scroll",function () {
            //     // console.log("jacob");
            // })

            //seems not to need the event action anymore can do it on its own
            
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