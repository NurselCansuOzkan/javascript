/*
push
map
find
filter
some
every
includes
*/
const users = [
    {
        name:"Nursel",
        age:30
    }, 
    {
        name:"Osman",
        age:29
    },
    {
        name:"Tarçın",
        age:3
    }
];

//push
users.push("Maya");
console.log(users);


//map
//eskiden
for (let index = 0; index < users.length; index++) {
   console.log(users[index])
    
}


users.map((item)=>{
    console.log(item.name)
});

//find
const findIt = users.find((item) => item.name ==="Nursel" && item.age > 20);
console.log(findIt)

//filter
const filtered = users.filter((item)=>item.name === "Nursel");
const filteredOther = users.filter(({name,age})=>name === "Nursel" && age>29);
console.log(filtered);

//some
const some = users.some((item)=> item.age === 11 );
console.log(some);

//every
const every = users.every((item)=> item.age >2);
console.log(every);

//includes
const meyveler = ["kiraz", "kayısı", "ayva"];

const isIncluded = meyveler.includes("ayva");
console.log(isIncluded);