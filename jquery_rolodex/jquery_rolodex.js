    
    
    jQuery.fn.extend({
        rolodex:function(michael,$left,$right){
            //this function takes items and attempts to make a rolodex out of it. A rolodex is an object which behaves like a carousel but instead of left to right all the objects are part of a circle overlapping each other with the current items having the highest z-index and the others overlapping in proper fashion
            
            var rolodex_set = $(this).length; //this variable gives the size of the rolodex to let the function know what it has to do
            var rolodex_array = []; //to see what items the function is working with
            var rolodex_item = 0; //refers to the items in the rolodex

            
            while(rolodex_item != rolodex_set){
                var rolodex_prev_item = rolodex_item - 1; //refers to previous item in rolodex
                var rolodex_next_item = rolodex_item + 1; //refers  to previous item in rolodex
                if ( rolodex_prev_item  < 0){
                     rolodex_prev_item = $(this).length -1;
                }
                if ( rolodex_next_item  > 7){
                     rolodex_next_item = 0;
                }
                var prev_offset = [$(this).eq(rolodex_prev_item).offset(),"z-index "  +$(this).eq(rolodex_prev_item).css("z-index")];
                var next_offset = [$(this).eq(rolodex_next_item).offset(),"z-index "  + $(this).eq(rolodex_next_item).css("z-index")];
                rolodex_array.push([$(this).eq(rolodex_item).clone(), ["object  "  + ( rolodex_prev_item).toString() +"prev is" , prev_offset],["object  " + (rolodex_next_item).toString() +"next is" , next_offset] ]);
                rolodex_item += 1;
            }
            //this finds out about the positions of every item, it is the control room loop, when the rolodex moves, the rolodex gets updated realtime with this
            
            
            
            $left.click(function () {
                
            });
            
            // console logs
            function consoles(action) {
                console.log("michael element\n",michael);
                console.log("clockwise control element\n",$left);
                console.log("counter-clockwise control element\n",$right);
                console.log("holding element",$(".rolodex"));
                console.log( "rolodex_set",rolodex_set);
                console.log( "rolodex_array \n" ,rolodex_array);
                console.log("rolodex_item \n" , rolodex_item);
            }
            //cant use console as function call

            consoles("none");

            
            
            
            if (michael == "none"){
                return;
            }
            
        }
    });