//this function achieves choice options strung down to one event handler to avoid repetition
    //capabilities:full carousel functionality
    //            :dual options

    
    //planned work : putting more than one item into carousel
    

    //argument properites
    //  left, the item that controls the left moving functionality,must be a string that jquery can select the element with
    //  right, the item that controls the right moving functionality,must be a string that jquery can select the element with
    //  rate, rate at which the carousel moves

    

var call = 0;
var call_amounts = [];
    jQuery.fn.extend({
        carousel:function(michael){
            // bootstrap has a carousel function but you need the bootstrap.js file to use it which can cause problems, this takes a selector of supposed associated objects for the carousel  along with left and right event control selectors to have the carousel animation
            
            //argument check and initization
            if (michael.rate === undefined){
                michael.rate = 500;
            }
            var refresh = 1;
            $(michael.left).addClass("carousel_option")
            $(michael.right).addClass("carousel_option")
            ///////////////////////////////////////////////////////////////////////////////////
            // making the moving algorithm much simpler and concise
            ///////////////////////////////////////////////////////////////////////////////////
            
            
            
            
            //the posiitioning process
{
            var carousel_item_width;
            var carousel_item_left;
            var carousel_item_height;
            var carousel_item_top;
            var carousel_item_top_position;
            var carousel_spacing;
            var carousel_item_max_left;
            
            
            var carousel_list = $.map($(this), function(value, index) {
                
                carousel_item_width = numberParse($(value).css("width"));
                carousel_item_left = numberParse($(value).css("left"));
                carousel_item_height = numberParse($(value).css("height"));
                carousel_spacing = browser_window.outerWidth - carousel_item_left;
                carousel_item_left_position = $(value).offset().left
                
                
                $(value).css({
                    "left":carousel_spacing * index,
                    "top" : -(carousel_item_height * index),
                    "margin-bottom":0
                    }).addClass("carousel_item");
                        
                 carousel_item_top = numberParse($(value).css("top"));
                
                return [[$(value),carousel_item_left_position,carousel_item_top]];

            });
            
            carousel_item_max_left = numberParse($($(this).selector + ":last").css("left"));
            console.log(carousel_list,browser_window.outerWidth,carousel_item_max_left)
}
            ///////////////////////////////////////////////////////////////////////////////////
            // the carousel_item_width might be different make a seperate one for each
            // carousel_spacing takes the width of the item and the page to make sure in the carousel the next item is off of the page
            //use browser_window.outerWidth because body width changes with movement on the page and all that
            // make the margin-bottom equal to zero so carousel looks correct
            // carousel_item_max_left is for repositioning to bring the next to the front when called to the right
            ///////////////////////////////////////////////////////////////////////////////////
            
            //the moving process
{
            var carousel_selected;
            $(".carousel_option").click(function(event){
                $(this).addClass("carousel_choice");
                $(this).hide();
                carousel_selected = $(event.target);
                $(".carousel_choice").trigger("option_click");
                $(this).removeClass("carousel_choice");
                $(this).show(3 *michael.rate );
                
                
                

            })

            
            $("body").append("<e class = 'carousel_choice'></e> ");
            
            var info;
            
            $(".carousel_choice").on("option_click",function() {
                
    {
        {
            //helper function
            var carousel_operators = {
                '+=': function(a, b) {
                    return a + b;
                },
                '-=': function(a, b) {
                    return a - b;
                }
                
            };

        }
        
        {
        //helper function
        var carousel_repositioner = {
                '-=': function() {
                    
                    return carousel_item_next_position.forEach(function(position,index){
                    if(position < 0 ){
                        carousel_list[index][0].animate({
                            "left":Math.max.apply(null, carousel_item_prev_position)
                            
                        },refresh)
                        
                    }
                })
                },
                '+=': function() {
                    return carousel_item_next_position.forEach(function(position,index){
                    if(position > Math.max.apply(null, carousel_item_prev_position) ){
                        carousel_list[index][0].animate({
                            "left":0
                            
                        },michael.rate)
                        
                    }
                })
                }
                
            };

        }
                //finding out who got clicked
                if(carousel_selected["0"] == $(michael.left)["0"]){
                    console.log("LEFT");
                    info = "-=";
                }
                if(carousel_selected["0"] == $(michael.right)["0"]){
                    console.log("RIGHT");
                    info = "+=";
                }
                
                

    }
                var carousel_item_next_position = []
                var carousel_item_prev_position = []

                carousel_list.forEach(function(value){
                    if (info == "+="){
                        
                       if(numberParse(value[0].css("left")) >= carousel_item_max_left ){
                           console.log("hit")
                           value[0].stop().animate({
                               left:0 - browser_window.outerWidth.toString()
                           },refresh);
                       }
                    }
                    
                });

                carousel_list.forEach(function(value){
                    
    
                   value[0].animate({
                       left:info + browser_window.outerWidth.toString()
                   },michael.rate);
                   carousel_item_prev_position.push(numberParse(value[0].css("left")));
                   
                   carousel_item_next_position.push(carousel_operators[info](numberParse(value[0].css("left")),browser_window.outerWidth));
    
    
                   
                   
                });
                
                console.log("carousel_item_prev_position");
                console.log(carousel_item_prev_position);
                console.log("carousel_item_next_position");
                console.log(carousel_item_next_position);
                
                carousel_repositioner[info]();
            
            });

            
            
            
}
            
            ///////////////////////////////////////////////////////////////////////////////////
            //  needed to add a div with the carousel choice class becuase, if its never on the page, jquery will ignore it
            // carousel_selected is to let the function extenison know which was clicked and what to do based on that conclusion
            ///////////////////////////////////////////////////////////////////////////////////

        }
        
        
    });
    


