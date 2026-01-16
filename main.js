function getname()
{
    return 'my name is Dimuthu'
}
let a=true
let b=false
console.log(a || getname());

//Ternery operator

let isbin=true

function getage(age)
{
    return `my age is ${age} old.`
}

function getcity(city)
{
return ` iam from ${city}`
}

if(isbin)
{
    console.log(getage(22));
    
}
else{
    console.log(getcity("Galle"));
    
}

//this is ternery operator.it can get output using one line

isbin ? console.log(getage(22)) : console.log(getcity("Galle"));