setTimeout(()=>{
    console.log("Merhaba");
},5000)

setInterval(()=>{
    console.log("Ben her saniye çalışacağım")
},1000);

const sayHi = (cb) =>{
    cb();
}
sayHi(()=>{
    console.log("Hello");
});


import fetch from "node-fetch";
fetch("https://jsonplaceholder.typicode.com/users")
.then((data) =>data.json())
.then((users) => {
    console.log("Users yüklendi ",users);
    fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then((data) => data.json())
    .then((post) => console.log("Post yüklendi", post));
});

async function getData(){
    const users = await (await fetch("https://jsonplaceholder.typicode.com/users")).json();
    const post1 = await (await fetch("https://jsonplaceholder.typicode.com/posts/1")).json();

    console.log(users);
    console.log(post1);
    
}

getData();


import axios from "axios";
(async ()=>{
    const users = await (await fetch("https://jsonplaceholder.typicode.com/users")).json();
    const post1 = await (await fetch("https://jsonplaceholder.typicode.com/posts/1")).json();

    console.log(users);
    console.log(post1);
  
})();

(async ()=>{
    const {data:users} = await (await axios("https://jsonplaceholder.typicode.com/users"));
    const post1 = await (await axios("https://jsonplaceholder.typicode.com/posts/1"));

    console.log(users);
    // console.log(post1);
  
})();

const getComments = (number) =>{
    return new Promise((resolve,reject)=>{
        // console.log("comments");
        if(number ===1){
            resolve({text:"Selam"});
        }
       reject("Bir problem oluştu");
    });
}

getComments(2)
.then((data)=>console.log(data))
.catch((e)=>console.log(e));


const getUsers = (number) =>{
    return new Promise(async (resolve,reject)=>{
        // console.log("Users");
        const {data} = await axios("https://jsonplaceholder.typicode.com/users");
        resolve(data);
        // reject("Bir sorun oluştu");
    });
}



const getPosts = (post_id) => {
    return new Promise(async (resolve,reject) =>{
        const {data} = await axios("https://jsonplaceholder.typicode.com/posts/"+post_id);
        resolve(data);
        // reject("Bir sorun daha oluştu");
    });
}

getUsers(2)
    .then((data)=>console.log(data))
    .catch((e)=>console.log(e));

getPosts(1)
    .then((data)=>console.log(data))
    .catch((e)=>console.log(e))

(async ()=>{
    try{
        const users =  await getUsers();
        const posts =  await getPosts(1);
        console.log(users);
        console.log(posts);
    }catch(e){
        console.log(e);
    }
    

})();

Promise.all([getUsers(), getPosts(1)])
.then(console.log)
.catch(console.log);