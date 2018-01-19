// in this version repeated calls to adv clone brings the proper amount of clones to the page except when its one or two then its gets buggey
    //capabilities:core cloning functionality
    //            : cloning as many items as needed
    //            : returns a length of all the clones
    //            : responds if user input is greater than 2 or 0 for single function calls, and multiple              function calls
    //            : return an array of all the desired clones

    
    //planned work : work on multiple calls for one and two
    

    
    
    // far in the future
    //             : customization for each clone
    //             : seperation of clones into certain groups and returning an array of the groups
    //             : cloning of more than one selector and returning an array of everything
    


    jQuery.fn.extend({
        adv_clone:function(michael){
            //jquery's cloning function does not work as intended, it thinks a call to more clones, is a call to the same cloned object, when it finally figures things out it is not smart enough to know not to clone the selected list. This method returns an array of how many times you wanted the object to be cloned, for further variation as you please
            
                //determining argument type
                if(typeof(michael) == "number"){
                    var count  = michael;
                    
                    // michael += 1;
                    
                }
                
                
                ////////////////////////////////////////////////////////////////
                //becuase we will be removing the first item
                ////////////////////////////////////////////////////////////////
            
                //if its zero should we throw an error or delete the selection
                var $clone_count = michael -4;
                if($clone_count == -4 ){
                    $(this).remove()
                }
                
                ////////////////////////////////////////////////////////////////
                
                
            
                //replication init
                var clone_selector = this.selector + ":last";
                var $clone = $(clone_selector).clone();
                if($clone_count > -3 ){
                    $(clone_selector).after($clone);
                    console.log("made a clone with $clone ",$(this.selector).length)
                }
                //to delete the additional clone, the first clone
                
                    var first_selector = this.selector + ":first";
                    $(first_selector).addClass("delete");
                    $(".delete").hide()
                
                ////////////////////////////////////////////////////////////////////
                
                ///////////////////////////////////////////////////////////////////
                var $clone_clone  =  $clone.clone();
                var $last_clone = $(clone_selector  );
                
                if($clone_count > -2){
                    $last_clone.after($clone_clone);
                    console.log("made a clone with $clone_clone",$(this.selector).length)
                    
                }
                $clone_count += 1;   //becuase additional calls are making x-1 calls, beucase one is already present
                while($clone_count >= 0){
                    $last_clone.after($last_clone.clone());
                    console.log("made a clone with $last_clone",$(this.selector).length)
                    $clone_count -= 1;
                }
                    
                    
                
                

                
                return $.map($(this.selector + (":not(.delete)")),function(value,index){
                   return $(value)
                });
                    
                ////////////////////////////////////////////////////////////////
                // for future michael will turn into an object determine if michael is an object or the numbers count
                // last clone represents last cloned item
                ////////////////////////////////////////////////////////////////
        }
    });