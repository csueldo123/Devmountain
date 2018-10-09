//there is only function block scoping. and if you use const
if (true){
    y = 13
}

y

for(var i = 0; i < 5; i++){
    var z = 14
}

z

function something() {
    var x = 12
}

x

{
    const cantSeeThis = 100
}
cantSeeThis
