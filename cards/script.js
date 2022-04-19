var doc= document.querySelector("body");
// doc.innerHTML = "";
// const getData = (resource,callback) =>{
//     const request = new XMLHttpRequest();
//     request.addEventListener('readystatechange',()=>{
//         if(request.readyState===4 && request.status === 200)
//         {
//             callback(request.status,JSON.parse(request.responseText));
//         }else if(request.readyState === 4){
//             callback(request.status, undefined);
//         }
//     });
//     request.open('GET',resource);
//     request.send();
// };
// """This same thing can be done with promises"""

const getTodo = (resource) => {
    return new Promise((resolve,reject) => {
    const request = new XMLHttpRequest();
    request.addEventListener('readystatechange',()=>{
        if(request.readyState===4 && request.status === 200)
        {
            resolve(JSON.parse(request.responseText));
        }else if(request.readyState === 4){
            reject("Could not fetch, exited with "+request.status);
        }
    });
    request.open('GET',resource);
    request.send();
});
}
console.log("HEY! 1");
console.log("HEY! 2");

// getTodo("todos/firstt.json").then(data=>{
//     console.log(data);
//     }).catch(err=>{
//         console.log(err);
//     });

const get = async () =>{
    const response = await fetch('todo/first.json');
    if(response.status!=200) 
    throw new Error("exited with status "+response.status)
    const data = await response.json();
    return data;
}

get()
    .then(data=>console.log(data))
    .catch(err=>console.log("Fetch failed,",err.message))

// getTodo("todos/firstt.json").then(data=>{
//     console.log(data);
//     return getTodo("todos/second.json");
//     }).then(data=>{
//         console.log(data);
//         return getTodo("todos/third.json");
//     }).then(data=>{
//         console.log(data);
//     }).catch(err=>{
//         console.log(err);
//     });
// getData("todos/first.json",(err,data)=>{
//     console.log(err,data)
//     getData("todos/second.json",(err,data)=>{
//         console.log(err,data)
//         getData("todos/third.json",(err,data)=>{                   //This is nesting
//             console.log(err,data)
//         });
//     });
// });

console.log("HEY! 3");
console.log("HEY! 4");
console.log("HEY! 5"); 