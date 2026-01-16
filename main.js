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

const list = document.querySelector(".list");

// API එකෙන් දත්ත ලබා ගැනීමට async function එකක්
async function fetchlistdata() {
  try {
    // dummyjson API එකට GET request එකක් යවනවා
    const responce = await fetch("https://dummyjson.com/products", {
      method: "GET",
    });

    // response එක JSON format එකට convert කරනවා
    const result = await responce.json();
    console.log(result);

    // result එක සහ products array එක තිබේද කියලා check කරනවා
    if (result && result.products) {
      // products array එක loop කරලා එක් එක් product එක display කරනවා
      result.products.forEach((product) => {
        // නව list item එකක් create කරනවා
        const listItem = document.createElement("div");
        listItem.classList.add("list-item");

        // product details list item එකට add කරනවා
        listItem.innerHTML = `
                    <h3>${product.title}</h3>
                    <p>මිල: $${product.price}</p>
                    <p>${product.description}</p>
                `;

        // list එකට item එක append කරනවා
        list.appendChild(listItem);
      });
    }
  } catch (error) {
    // error එකක් උනොත් console එකේ show කරනවා
    console.log("දත්ත ලබා ගැනීමේ දෝෂයක්:", error);
  }
}

// function එක call කරනවා
fetchlistdata();