// GET → data lena
// POST → data bhejna
// PUT/PATCH → update
// DELETE → delete
// Modern JS way: fetch()

// Basic API call in JavaScript (GET)
// fetch("link")
//     .then(response => response.json())
//     .then(data => {
//         console.log(data);
//     })
//     .catch(error => {
//         console.log("error");
//     });


// Same code with async / await
// async function getUser() {
//     const response = await fetch("link");
//     const data = await response.json();
//     console.log(data);
// }
// getUser();

let users = [
  { id: 1, name: "Ali", age: 22 },
  { id: 2, name: "Ahmed", age: 25 },
  { id: 3, name: "Sara", age: 21 }
];

// GET
function getUser(){
    return users;
}
// console.log(getUser())

// GET single user (by id)
function getUserbyId(id){
    return users.find(user => user.id == id);
}
// console.log(getUserbyId(3))


// POST
// function addUser(newUser){
//     users.push(newUser);
//     return users;
// }

// addUser({id:4, name: "Mughees", age: 20});
// console.log(users)

function addUser(name, age){
    const newUser = {
        id : users.length + 1,
        name,
        age
    };
    users.push(newUser);
}
addUser("Mughees", 20)
// console.log(users)


// Put -> full update (overwrite)
// PUT me agar field miss hui → data lost
function updateUser(id, updatedUser){
    const index = users.findIndex(user => user.id == id);

    if (index == -1){
        console.log("User not found");
    }
    users[index] = {id, ...updatedUser}
}

updateUser(2, {name: "Ahmed Ali", age: 26})
// console.log(users)


// PATCH → partial update
function patchUser(id, newData){
    const user = users.find(user => user.id == id);

    if(!user){
        return "User not found";
    }

    Object.assign(user, newData);
}
patchUser(1, {age: 23})
// console.log(users)


// DELETE
function deleteUser(id){
    users = users.filter(user => user.id !== id);
}
deleteUser(1)
console.log(users)