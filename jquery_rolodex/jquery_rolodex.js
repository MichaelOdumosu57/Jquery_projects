//after much trials and test counter clockwise is fully functional, you function cannot have declared arrays for some reason and the $(this) selector does not select only the items you select but the whole document after that

//global variables and functions
var rolodex_array = []; //to see what items the function is working with
var z_array = []; //this variable sees what is facing to the front
var rolodex_item = 0; //refers to the items in the rolodex
var its_ok = 0; //debugger
var rolodex_set


    
    jQuery.fn.extend({
        rolodex:function(michael,$left,$right){
            //this function takes items and attempts to make a rolodex out of it. A rolodex is an object which behaves like a carousel but instead of left to right all the objects are part of a circle overlapping each other with the current items having the highest z-index and the others overlapping in proper fashion
            
            var rolodex_set = $(this).length; //this variable gives the size of the rolodex to let the function know what it has to do
            var rolodex_array = []; //to see what items the function is working with
            var z_array = []; //this variable sees what is facing to the front
            var rolodex_item = 0; //refers to the items in the rolodex
            var its_ok = 0; //debugger

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
                rolodex_array.push([$(this).eq(rolodex_item), ["object  "  + ( rolodex_prev_item).toString() +"prev is" , prev_offset],["object  " + (rolodex_next_item).toString() +"next is" , next_offset] ]);
                z_array.push([rolodex_item,parseInt($(this).eq(rolodex_item).css("z-index")),$(this).eq(rolodex_item).offset()])
                rolodex_item += 1;
            }
            rolodex_item = 0;
            //this finds out about the positions of every item, it is the control room loop, when the rolodex moves, the rolodex gets updated realtime with this
            //find out why it cant be a function
            //rolodex_item reset to zero for later use
            

            
            function find_face() {
                //this function goes through the information arrays and finds out which items is facing to the front at the given moment but we might not need to know this
            }
            
            $left.click(function () {
                rolodex_array.forEach(function(element){
                    consoles("counterwise",element);
                    element[0].offset({top:element[1][1][0].top,left:element[1][1][0].left})

                    
                    
                });
 
            consoles("none");
            
            while(rolodex_item != rolodex_set){
                var rolodex_prev_item = rolodex_item - 1; //refers to previous item in rolodex
                var rolodex_next_item = rolodex_item + 1; //refers  to previous item in rolodex
                if ( rolodex_prev_item  < 0){
                     rolodex_prev_item = rolodex_set - 1;
                }
                if ( rolodex_next_item  > 7){
                     rolodex_next_item = 0;
                }
                var prev_offset = [rolodex_array[rolodex_prev_item][0].offset(),"z-index "  +rolodex_array[rolodex_prev_item][0].css("z-index")];
                var next_offset = [rolodex_array[rolodex_next_item][0].offset(),"z-index "  + rolodex_array[rolodex_next_item][0].css("z-index")];
                rolodex_array[rolodex_item] = [rolodex_array[rolodex_item][0], ["object  "  + ( rolodex_prev_item).toString() +"prev is" , prev_offset],["object  " + (rolodex_next_item).toString() +"next is" , next_offset] ];
                z_array[rolodex_item] = ([rolodex_item,parseInt(rolodex_array[rolodex_item][0].css("z-index"))])
                rolodex_item += 1;
            }
            
            

            rolodex_item = 0;
                
            });
            
            // console logs
            function consoles(action = "none",data = undefined,debug = its_ok) {
                if(debug !== 0){
                    return;
                }
                if(action == "counterwise"){
                    console.log("counterwise seperate actions");
                    console.log(data)
                    console.log("where items is",data[0].offset());
                    console.log("where items must go",data[1][1][0]);
                    // console.log("i cant call this loop normally",execute)
                }
                else {
                    console.log("michael element\n",michael);
                    console.log("clockwise control element\n",$left);
                    console.log("counter-clockwise control element\n",$right);
                    console.log("holding element",$(".rolodex"));
                    console.log( "rolodex_set",rolodex_set);
                    console.log( "rolodex_array \n" ,rolodex_array);
                    console.log( "z_array \n" ,z_array);
                    console.log("rolodex_item \n" , rolodex_item);
                    console.log("prev_rolodex_item \n" , rolodex_prev_item);
                    console.log("next_rolodex_item \n" , rolodex_next_item);
                    
                }
            }
            //cant use console as function call

            consoles();

            
            
            
            if (michael == "none"){
                return;
            }
            
        }
    });
    
// (function( $ ) {
//     $.fn.rolodex = function (michael,$left,$right) {
//             var rolodex_set = $(this).length; //this variable gives the size of the rolodex to let the function know what it has to do
//             var rolodex_array = []; //to see what items the function is working with
//             var z_array = []; //this variable sees what is facing to the front
//             var rolodex_item = 0; //refers to the items in the rolodex
//             var its_ok = 0; //debugger

            

//             while(rolodex_item != rolodex_set){
//                 var rolodex_prev_item = rolodex_item - 1; //refers to previous item in rolodex
//                 var rolodex_next_item = rolodex_item + 1; //refers  to previous item in rolodex
//                 if ( rolodex_prev_item  < 0){
//                      rolodex_prev_item = $(this).length -1;
//                 }
//                 if ( rolodex_next_item  > 7){
//                      rolodex_next_item = 0;
//                 }
//                 var prev_offset = [$(this).eq(rolodex_prev_item).offset(),"z-index "  +$(this).eq(rolodex_prev_item).css("z-index")];
//                 var next_offset = [$(this).eq(rolodex_next_item).offset(),"z-index "  + $(this).eq(rolodex_next_item).css("z-index")];
//                 rolodex_array.push([$(this).eq(rolodex_item), ["object  "  + ( rolodex_prev_item).toString() +"prev is" , prev_offset],["object  " + (rolodex_next_item).toString() +"next is" , next_offset] ]);
//                 z_array.push([rolodex_item,parseInt($(this).eq(rolodex_item).css("z-index"))])
//                 rolodex_item += 1;
//             }
//             //this finds out about the positions of every item, it is the control room loop, when the rolodex moves, the rolodex gets updated realtime with this
            
            
//             $left.click(function () {
//                 rolodex_array.forEach(function(element){
//                     consoles("counterwise",element);
//                     element[0].offset({top:element[1][1][0].top,left:element[1][1][0].left})
                    
                    
//                 });
//             });
//             //counterclock function
            
            
//             function consoles(action,data = undefined,debug = its_ok) {
//                 if(debug != 0){
//                     return;
//                 }
//                 if(action == "counterwise"){
//                     console.log("counterwise seperate actions");
//                     console.log(data)
//                     console.log("where items is",data[0].offset());
//                     console.log("where items must go",data[1][1][0]);
//                 }
//                 else {
//                     console.log("michael element\n",michael);
//                     console.log("clockwise control element\n",$left);
//                     console.log("counter-clockwise control element\n",$right);
//                     console.log("holding element",$(".rolodex"));
//                     console.log( "rolodex_set",rolodex_set);
//                     console.log( "rolodex_array \n" ,rolodex_array);
//                     console.log( "z_array \n" ,z_array);
//                     console.log("rolodex_item \n" , rolodex_item);
//                 }
//             }
//             //cant use console as function call

//             consoles("none");

            
            
            
//             if (michael == "none"){
//                 return;
//             }
                        

//     };
    

// }(jQuery));

