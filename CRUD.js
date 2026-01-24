let users = [
  { id: 1, name: "Ali", age: 22 },
  { id: 2, name: "Ahmed", age: 25 },
  { id: 3, name: "Sara", age: 21 }
];


// create user

function createUser(name, age){
    const newUser = {
        id: users.length + 1,
        name, 
        age
    };
    users.push(newUser);
}

// getUsers
function getUser(){
    return users;
}
console.log(getUser())

// get user by id
function getUserbyId(id){
    return users.find(user => user.id == id);
}
// console.log(getUserbyId(3))

// updateUser (PUT)
// function updateUser(id, updatedUser){
//     const index = users.findindex(user => user.id == id);

//     if()
// }

// patchUser
function patchUser(id, newData){
    const user = users.find(user => user.id == id)

    if (!user){
        console.log("user not found")
    }
    Object.assign(user, newData)  
}
patchUser(3, {age: 20})

// deleteUser
function deleteUser(id){
    users = users.filter(user => user.id == id)
}
deleteUser(1)