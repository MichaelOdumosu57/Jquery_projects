
//this version can pretty print horizontally and provide custom spacing
    //capabilities : core pretty print concept in horizontal spacing

    
    //planned work : detection of objects
    //             : full object pretty print
    

    
    
    // far in the future
    //             : pretty pattern regristration
    //             : pretty print fine tuning
    //              : detection of outer objects that do not belong in pretty print
    //              : amimatable detection, if not proper steps would be made to enable it without interfering in front end design
    
    // properties
    
    //objects -- contains all the obejcts desired to be pretty printed, in the order of input, we could build customization but that is a waste of time and space, if michael is not an object this can be the only argumen
    // spacing -- amount of space between each object in pretty print, this is needed as row creation of how many objects are in the row depends on it, if you don't place one its default is 20
    

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
            if(michael.objects === undefined){
                michael.objects = michael;
                
            }
            if(michael.spacing === undefined){
                michael.spacing = 20;
            }
            else{
                $("body").after("<div class = 'pretty'></div>")
                $(".pretty").css("width",michael.spacing)
                michael.spacing = numberParse($(".pretty").css("width"))
                $(".pretty").remove()
            }
}
            //////////////////////////////////////////////////////////////
            //  if user wants a quick pretty print they can just put in only what they want pretty printed
            //////////////////////////////////////////////////////////////
            
            // setting and arraging objects
{

                
            var space = michael.spacing;
            var pretty_print_start = {"x":0,"y":0};
            var pretty_print = $.map(michael.objects,function (pretty_object,index) {
                
                $(pretty_object).css({
                    "position":"relative",
                    "left":pretty_print_start["x"]
                })
                console.log($(pretty_object).css("left"), pretty_print_start["x"] ,space)
                pretty_print_start["x"] += numberParse($(pretty_object).css("width")) + space
                return $(pretty_object)
            })
            
}
            //////////////////////////////////////////////////////////////
            //var pretty_print holds the desired object to be pretty printed, only needed to help programmers understanding of plugin
            //  however when I use map, i try to do everything in map because it is better than function looping saves times space and hopefully I can remove the variable
            // however variables are good if others read your code
            // var pretty_print_start is going to be the basis of the positioning of the objects, it is an object the first number being the x and the second the y
            // var space desired space between objects
            // all objects must be have a position:relative attribute to be position properly inside the object
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
    
