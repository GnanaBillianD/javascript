function my_strict_function(){
    'use strict';
    function inner() { 
    console.log('me too.');
    } return ('i am in strict mode.'+ inner());     
}