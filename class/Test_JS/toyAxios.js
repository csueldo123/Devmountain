/**
 * PART 1
 * Write a function called getInfo that takes in a number 1 - 50 and will console.log the name associated with that number from the starwars API
 * BASE URL: https://swapi.co/api/
 * Example:
 *
 *  getInfo(1) should console.log "Luke Skywalker"
 *
 *
 * PART 2
 * Example:
 *
 *  getInfo(1) should console.log "Luke Skywalker Tatooine"
 *
 * Hint: read the object returned from the api in part 1
 *
 */

 import axios from 'axios';

 function getInfo(num){
    axios.get(`https://swapi.co/api/people/${ num }`)
        .then((res)=>{
            console.log(res.data.name);

            return axios.get(res.data.homeworld)
        })
        .then((res)=>{
            console.log(res.data.name)
        })
        .catch((err)=>{
            console.log(err);
        })
 }

 getInfo(1);