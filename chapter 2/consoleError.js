let fuel=99;
function launch_Rocket(){
    function warning_msg(){
        console.error("not enough fuel");
    }
    if(fuel>=80){
        console.log("look like everything's ok");
    }else 
    warning_msg();
}
launch_Rocket();