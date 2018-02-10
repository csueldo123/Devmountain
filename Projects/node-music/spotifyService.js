// https://api.spotify.com/v1/search?
//q= + &type=artist
const axios = require('axios');

function getArtist(artist){
    return axios
        .get(`https://api.spotify.com/v1/search?q=${artist}&type=artist`,  {
            headers: {
                "Accept": "application/json",
                "Authorization" : "Bearer "
            }
        })
        .then((res)=> {
            console.log(res.data)
            return res.data;
        })
        .catch(err =>{
            console.error(err);
            throw err;
        })
}

module.exports = {
    getArtist
}