// function callAsync(callback){
//      setTimeout(callback, 5000);
// };

// console.log("start");

// callAsync( ()=>{
//     console.log("yay!")
// });
const axios = require('axios');

axios.get('https://swapi.co/api/people/2')
    .then( (res) => {
        console.log(res)
    } )