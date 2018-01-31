function callAsync(callback){
     setTimeout(callback, 5000);
};

console.log("start");

callAsync( ()=>{
    console.log("yay!")
});
