//Spreading
//spreading an object, copies all of the keys into something else. makes it all available.
// function changeName({ ...newObj}){
//     newObj.name = 'something else'

//     return newObj;
// }
function changeName([ ...array ]){
    array[0] = 'something else'

    return array;
}

const people = [ { name : 'Carlos' }, { name: 'Josh' } ];

const [ person ] = people

const newPerson = changeName( people );
//for obj spread down below
// const newPerson = changeName( person );

person

newPerson

