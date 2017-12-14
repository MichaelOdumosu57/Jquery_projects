//  all parallax items are able to stick to the screen when they reach they offset position, their window scroll top position seems to be related to their css "top" attribute, and when you subtract their window scroll offset from the number of that attribute that seems to be the true position of the parallax item

    //capabilities:core parallax functionality
    //            : paralllax items stick to the screen once they get to the offset points
    //            : functionality applied to multiple parallax items
    
    //planned work :
    //             : universial understanding and appliacation of the parallax
    //             : smoothening of the parallax animation
    
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
            consoles("distance",[parallax_array[1].offset().top - $(".parallax:first > div > h1").offset().top ,$(".parallax:first > div > h1").css("height")])
            
            function react_on_scroll_offset() {
                
                    // if ($(window).scrollTop() >= 1044)  {
                    //     console.log("got hit")
                    //     return;
                    // }
                    //this is the end reach of the parallax
                    
                        var move = 0;
                        move += $(window).scrollTop()/15;
                        parallax_array[0].css("top",move.toString() + "em")
                        consoles("coordinates",parallax_array,0);
                        console.log( $(window).scrollTop())
                        //the first must not be limited in order for the parallax to work accordingly
                    if ($(window).scrollTop() >= 338)  {
                        var move = 0;
                        move += ($(window).scrollTop()-338)/15;
                        parallax_array[1].css("top",move.toString() + "em")
                        consoles("coordinates",parallax_array,0);

                    }
                    
                    if ($(window).scrollTop() >= 671)  {
                        var move = 0;
                        move += ($(window).scrollTop()-671)/15;
                        parallax_array[2].css("top",move.toString() + "em")
                        consoles("coordinates",parallax_array,0);

                    }
                    
                    if ($(window).scrollTop() >= 996)  {
                        var move = 0;
                        move += ($(window).scrollTop()-996)/15;
                        parallax_array[3].css("top",move.toString() + "em")
                        consoles("coordinates",parallax_array,0);

                    }
                    // if ($(window).scrollTop() >= 166)  {
                    //     parallax_array[1].css("top",($(window).scrollTop()/10).toString() + "em")
                    // }
                    // if ($(window).scrollTop() <= 366)  {
                    //     var move = 0;
                    //     move -= $(window).scrollTop()/10;
                    //     parallax_array[2].css("top",move.toString() + "em")
                    //     // console.log(parallax_array[2].css("top"),$(window).scrollTop())

                    // }
                    // if ($(window).scrollTop() >= 366)  {
                    //     parallax_array[2].css("top",($(window).scrollTop()/10).toString() + "em")
                    // }
                    // if ($(window).scrollTop() <= 906)  {
                    //     var move = 0;
                    //     move -= $(window).scrollTop()/10;
                    //     parallax_array[3].css("top",move.toString() + "em")
                    //     // console.log(parallax_array[2].css("top"),$(window).scrollTop())

                    // }
                    // if ($(window).scrollTop() >= 906)  {
                    //     parallax_array[3].css("top",($(window).scrollTop()/10).toString() + "em")
                    // }

                wait(50)
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
                
                if(action == "distance"){
                    console.log(data)
                }
                
                if(action == "coordinates"){
                    data.forEach(function (selection,i) {
                        console.log(i,selection.css("top"))
                    })
                }
                
                
            }
        }
    });
    
    
                function wait(ms){
               var start = new Date().getTime();
               var end = start;
               while(end < start + ms) {
                 end = new Date().getTime();
              }
            }
