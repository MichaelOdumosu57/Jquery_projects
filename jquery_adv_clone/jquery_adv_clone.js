
// in this version debuggers can be turn on or off
// strange in certain instance when you call the function with only brackets inside of it it can remove a clone for you
    //capabilities:core cloning functionality
    //            : cloning as many items as needed
    //            : returns a length of all the clones
    //            : responds for single, multiple and mixed calls of any length
    //            : return an array of all the desired clones
    //            : seperation of clones into certain groups


    //planned work
    //            :abilitty to remove a certain amount of clones




    // far in the future
    //             : customization for each clone
    //             : cloning of more than one selector and returning an array of everything

    // properties
    // remove, specfices an amount of clones you would like to be removed the extension removes all clones when the items = 0 or are not specified --for creater, test the remove property make sure it moves in all cases
    // debug, set to false on default, turns on the debugger to help you code

var call = 0;
    jQuery.fn.extend({
        hey:function(){
            return
        }
    })
    jQuery.fn.extend({
        adv_clone:function(michael){
            //jquery's cloning function does not work as intended, it thinks a call to more clones, is a call to the same cloned object, when it finally figures things out it is not smart enough to know not to clone the selected list. This method returns an array of how many times you wanted the object to be cloned, for further variation as you please

                //writitng down function call amount
                call ++;
                //////////////////////////////////////////////////////////////


                // debugger
                if(michael.debug == undefined){
                    michael.debug = false
                }
                //////////////////////////////////////////////////////////////
                //
                //////////////////////////////////////////////////////////////


                //determining argument type
                var $clone_count
                if(typeof(michael) == "number"){
                    var count  = michael;
                    $clone_count = michael -4;



                }

                else if(typeof(michael) == "object"){
                    if(michael.remove != undefined){
                        michael.items = 1;
                    }
                    var count = parseInt(michael.items)
                    $clone_count = parseInt(michael.items) -4;
                    michael.debug ? console.log(count) : ""

                }

                ////////////////////////////////////////////////////////////////
                //becuase we will be removing the first item
                //if item is an object, then the developer wants identification among the clones
                // the michael variable can be of different types so all initalizating working with michael must be done here
                ////////////////////////////////////////////////////////////////

                //if its zero should we throw an error or delete the selection

                if($clone_count == -4 ){
                    $(this).remove()
                }

                ////////////////////////////////////////////////////////////////




                //replication init
                var clone_selector = this.selector + ":last";
                var $clone = $(clone_selector).clone();
                if($clone_count > -3 || count == 1 ){
                    $(clone_selector).after($clone);
                    michael.debug ?console.log("made a clone with $clone ",$(this.selector).length) : ""
                }

                var $clone_clone  =  $clone.clone();
                var $last_clone = $(clone_selector  );

                if($clone_count > -2 || count == 2 ){
                    $last_clone.after($clone_clone);
                    michael.debug ? console.log("made a clone with $clone_clone",$(this.selector).length) : ""

                }
                $clone_count += 1;   //becuase additional calls are making x-1 calls, beucase one is already present
                while($clone_count >= 0){
                    $last_clone.after($last_clone.clone());
                    michael.debug ? console.log("made a clone with $last_clone",$(this.selector).length) : ""
                    $clone_count -= 1;
                }

                // determining UI type
                {


                    var clone_UI = {};
                    var widget_UI_selector = $(this).selector;
                    michael.debug ? console.log(widget_UI_selector) : ""
                    if(typeof(michael.UI) == "object"){

                        michael.UI.forEach(function(UI,index){
                            michael.debug ? console.log("hit") : ""
                            // michael.UIC = UI;
                            clone_UI[UI] = UI;
                            $(widget_UI_selector)[Object.keys(clone_UI)[index]]()

                        })



                    }

                    else if(typeof(michael.UI) == "undefined"){

                    }


                    else{
                        michael.debug ? console.log(typeof(michael.UI)) : ""
                        $(this.selector)[michael.UI]()
                    }



                }
                ////////////////////////////////////////////////////////////////
                // var clone_UI is an object, since jquery only went if the method name was coming from an object that is what i did
                // var widget_UI_selector held the scope for the the clone objects becuase the scope for this was not going to survive in the forEach function, so it had to be external so jquery can know to whom to apply the UI methods
                ///////////////////////////////////////////////////////////////



                if(call == 1 ){
                    $(this.selector + ":first").remove()
                    michael.debug ? console.log(call) : ""
                    call = 0;
                }

                    // removing  clones
                    {
                        if(michael.remove != undefined){
                            var if_dynamics = michael.remove
                            var orig_total =$(this).length
                             michael.debug ? console.log("what you working with",$(this).length - michael.remove,michael.remove) : ""

                             while(michael.remove != 0 ){
                                 michael.debug ? console.log("removed it",orig_total,if_dynamics,$(this).length) : ""
                                 $(this).eq($(this).length -1).remove()
                                 michael.remove -= 1;
                             }



                        }
                    }


                    ///////////////////////////////////////////////////////////////
                    // sometimes you want to remove a certain amount of clones, for simplicity this
                    // section is dedicated to doing just that. later individualization will be considered
                    // we need a check to see if it was removed properly
                    // var if_dynamics is to help the algorithm know if dynamics wasnt at play manifest in the rest of the plugin
                    // var orig_total, help the alogrithm know how clones to properly take out
                    ///////////////////////////////////////////////////////////////

                return $.map($(this.selector + (":not(.delete)")),function(value,index){
                    if(michael.specifiers != undefined){
                        michael.specifiers.forEach(function(spec,selec) {
                            spec.forEach(function (val,ind) {
                                if(ind != 0){
                                    if(index == val -1){
                                        $(value).addClass(spec[0]);
                                    }
                                }
                            });

                        });

                    }

                    return $(value);



                });

                ////////////////////////////////////////////////////////////////
                // if the specifier propery is used the plugin will add classes based on the given indexes not a range which we will work on later
                // this method uses plenty of energy, find something that does less
                // last clone represents last cloned item
                // for two copies you must equal call is two becuase it needs to refer to the clone clone as the second clone, its recusive, as there is a new last, thats why the first clone can clone
                // same for one jquery is simply cloning the last copy of each so the first copy is okay
                ////////////////////////////////////////////////////////////////


        }


    });

var addFnCounter = function(target){
    var swap = target;
    var count = 0;
    return function(){
        swap.apply(null);
        count++;
        michael.debug ? console.log("func has been called " + count + " times") : ""
        michael.debug ? console.log("\n") : ""
    };
};

addFnCounter($().adv_clone);
