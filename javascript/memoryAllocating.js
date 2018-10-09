// The for loop runs and i changes value to 5. so it console logs 5 
for(var i = 0; i < 5; i++){
    setTimeout(function(){
        console.log(i)
    }, 1)
}
//if you use let then let saves the variable in memory so it doesnt send back the same variable
for(let i = 0; i < 5; i++){
    setTimeout(function(){
        console.log(i)
    }, 1)
}

//create a closure and it would save a loop in one variable. but now we use lets. 
for(var i = 0; i < 5; i++){
    (function IFFY(value){

        setTimeout(function(){
            console.log(value)
        }, 1);
    }(i) )
}