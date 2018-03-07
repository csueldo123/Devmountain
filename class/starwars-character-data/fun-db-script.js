const massive = require('massive');

massive('postgres://vgfyqcvpxkfzlz:920227f13a6710cefbb625125e75d2f694b5c02eb68323282c63acb62c074476@ec2-54-221-234-62.compute-1.amazonaws.com:5432/d2k5l6n3f4s4n4?ssl=true')
    .then(db => db.init())
    .then(()=> console.log(data) || console.log('Script ran successfully'))
    .catch(err => console.log(err));