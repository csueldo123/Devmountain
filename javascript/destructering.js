// Destructering [] {}
// Spreading [] {}
// Block Scoping
// Let Memory Allocation

// START THIS FILE WITH QUOKKA

// Destructering -----!
// --- Destructering [ ]
const array = [ 1, 2, 3, 4, 5, 6 ];

const [ a, b, ...something ] = array;

a

b

something

array

function destructure( [ a ] ){
    a
}

destructure( array )
// ---

// --- Destructering { }
const obj = {
    name: 'Carlos',
    age: '24',
    location: {
        addresses: [1, 2, 3, 4]
    }
}

const { name, age } = obj;

name

age

//you can assign an alias
const { name: myName, age: myAge } = obj;

myName

myAge

//you can assign a new key value so its null if it doesnt exist
const { eyeColor = null } = obj;

eyeColor

//destructering levels in obj
const { location: { addresses } } = obj;

addresses

const { location: { addresses: [ ,,address ] } } = obj;

address

// using functions
function x( obj ){
    obj
}

x( obj )

//destructuring
function y( { name = null } ){
    name
}

y( obj )

function z( { location: { addresses: [ first ] } } ){
    first
}

z( obj )