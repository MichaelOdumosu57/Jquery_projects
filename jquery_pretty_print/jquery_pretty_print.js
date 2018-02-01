
//vertical and horizionatal positioning achieved
    //capabilities : core pretty print concept in horizontal spacing
    //             : vertical reposition proper alginment
    //              :indentation, or pretty_print usuable space object
    //              :recognintion of overstepping horizontal bounds
    //             : full object pretty print conept

    
    //planned work
    //             : horizontal and vertical alignment
    

    
    
    // far in the future
    //             : pretty pattern regristration
    //             : pretty print fine tuning
    //              : detection of outer objects that do not belong in pretty print
    //              : amimatable detection, if not proper steps would be made to enable it without interfering in front end design
    //              : return error if obejcts cant be pretty printed inside
    
    
    // properties
    
    //objects -- contains all the obejcts desired to be pretty printed, in the order of input, we could build customization but that is a waste of time and space, if michael is not an object this can be the only argumen
    // x_spacing -- amount of horizontal space between each object in pretty print, this is needed as row creation of how many objects are in the row depends on it, if you don't place one its default is 20
    // y_spacing -- amount of vertical space between each object in pretty print, this is needed as row creation of how many objects are in the row depends on it, if you don't place one its default is 10
    // leftover -- decides how much leftover there will be for the last item in the row and the end width of the container object
    // indent -- decides initial space for row starting, now it 4% because all containers are different
    

var call = 0;
    jQuery.fn.extend({
        pretty_print:function(michael){
            // jquery does not have a pretty print function, this concept function will take objects inside and obejct and fill a space accoriding to rows and columns, plenty of development required for full functionality
            
            //detecting object to pretty print in and selected inner object for pretty printing
{
            console.log($(this))
            console.log(michael)
}
            //////////////////////////////////////////////////////////////
            
            //initialization
            
{
                //helper function
            {
                function numberParse(dimension){
                    dimension = parseFloat(dimension.split("p")[0])
                    return dimension;
                }
                //this function takes a dimension and cuts it off and returns the number for use

            }
                //////////////////////////////////////////////////////////////
                //this function takes a dimension and cuts it off and returns the number for use
                //////////////////////////////////////////////////////////////
                
            var pretty_container_width = numberParse($(this).css("width"));
            var pretty_container_height = numberParse($(this).css("height"));
            $("body").after("<div class = 'pretty'></div>")
            if(michael.objects === undefined){
                michael.objects = michael;
                
            }
            if(michael.x_spacing === undefined){
                michael.x_spacing = 20;
            }
            else{
                $(".pretty").css("width",michael.x_spacing)
                michael.x_spacing = numberParse($(".pretty").css("width"))
            }
            if(michael.y_spacing === undefined){
                michael.y_spacing = 10;
            }
            else{
                $(".pretty").css("width",michael.y_spacing)
                michael.y_spacing = numberParse($(".pretty").css("width"))
            }
            if(michael.leftover === undefined){
                michael.leftover = 50;
            }
            else{
                $(".pretty").css("width",michael.leftover)
                michael.leftover = numberParse($(".pretty").css("width"))
            }
            if(michael.indent !== undefined){
                michael.indent = .04 * pretty_container_width;
            }
            else{
                $(".pretty").css("width",michael.indent)
                michael.indent = numberParse($(".pretty").css("width"))
            }
            $(".pretty").remove()
}
            //////////////////////////////////////////////////////////////
            //  if user wants a quick pretty print they can just put in only what they want pretty printed
            // any thing with var pretty_container contains information about the the container objects will be pretty printed in
            //////////////////////////////////////////////////////////////
            
            // setting and arraging objects
{
            
            var x_space = michael.x_spacing;
            var y_space = michael.y_spacing;
            var pretty_print_height;
            var pretty_print_start = {"x":michael.indent,"y":0};
            var pretty_caught = 0;
            var pretty_leftover = michael.leftover
            var pretty_print = $.map(michael.objects,function (pretty_object,index) {
                
                pretty_print_height = numberParse($(pretty_object).css("height"));
                if( pretty_print_start["x"] > pretty_container_width - pretty_leftover){
                    console.log("Greater than!!")
                    pretty_print_start["x"] = michael.indent;
                    pretty_caught += 1;
                }
                $(pretty_object).css({
                    "position":"relative",
                    "left":pretty_print_start["x"],
                    "top":pretty_print_start["y"] - (pretty_print_height * index) + ((pretty_print_height + y_space)* pretty_caught )
                })
                console.log($(pretty_object).css("left"), pretty_print_start["x"] ,x_space, pretty_container_width - pretty_leftover)
                // console.log($(pretty_object).css("top"), pretty_print_start["y"] ,pretty_print_height)
                pretty_print_start["x"] += numberParse($(pretty_object).css("width")) + x_space
                return $(pretty_object)
            })
            
}
            //////////////////////////////////////////////////////////////
            //var pretty_print holds the desired object to be pretty printed, only needed to help programmers understanding of plugin
            //  however when I use map, i try to do everything in map because it is better than function looping saves times space and hopefully I can remove the variable
            // however variables are good if others read your code
            // var pretty_print_start is going to be the basis of the positioning of the objects, it is an object the first number being the x and the second the y
            // var x_space desired horizontal space between objects
            // var y_space desired vertical space between objects
            // all objects must be have a position:relative attribute to be position properly inside the object
            // var pretty_print_height will contain the height of each object, in the future this variable will contain the height of the object with max height
            // var pretty_caught is the stablizier, it removes the bug of printing on same row by adding the height of the pretty_object back to the y axis
            //////////////////////////////////////////////////////////////
        }
        
        
    });
    
var addFnCounter = function(target){
    var swap = target;
    var count = 0;
    return function(){
        swap.apply(null);
        count++;
        console.log("func has been called " + count + " times");
        console.log("\n");
    };
};

addFnCounter($().pretty_print);
    
