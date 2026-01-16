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



//object and array destructechring


const product={
    pname :`Dimuthu`,
pnum:20
}

const { pnum,pname } = product;

console.log(pname,pnum);


//spread operator

let arrone=[1,2,3,4,3]
let arrtwo=[4,4,4,4]

console.log([...arrone,23333,...arrtwo]);


//rest operator

function printnum(a,s,d,...f)
{
    console.log(a,s,d,f);
    
}

printnum(1,2,3,4,4,3)



//Map
 const personarray = [
   {
     firstname: "Dimuthu Karunarathna",
     Age: 22,
     village: "Galle",
   },
   {
     firstname: "kalana Karunarathna",
     Age: 20,
     village: "Galle",
   },
   {
     firstname: "Dimuthu Karunarathna",
     Age: 21,
     village: "Galle",
   },
   {
     firstname: "Dimuthu Karunarathna",
     Age: 22,
     village: "Galle",
   },
 ];

const extractname = personarray.map((person,index)=>{
    console.log(index);
    
    return person.firstname
})
console.log(extractname);

const filterperson=personarray.filter((person,index)=> person.Age===21)


console.log(filterperson);


//some and every
const someperson = personarray.some((person, index) => person.Age === 21);
console.log(someperson);

const Everyperson = personarray.every((person) => person.Age === 21);
console.log(Everyperson);

let fullist = "";
const list = document.getElementById("list");

// fakestoreapi එකෙන් products ලබා ගන්නවා
fetch("https://fakestoreapi.com/products")
  .then((res) => {
    // response එක JSON format එකට convert කරලා return කරනවා
    return res.json();
  })
  .then((data) => {
    // data array එක loop කරලා එක් එක් item එකේ title එක add කරනවා
    data.map((item) => {
      fullist = fullist + item.title + "<br>"; // 'data.title' නෙවෙයි 'item.title'
    });

    // list එකට HTML content එක set කරනවා
    list.innerHTML = fullist;
  })
  .catch((error) => {
    // error එකක් උනොත් console එකේ show කරනවා
    console.error("දෝෂයක් සිදු වී ඇත:", error);
  });