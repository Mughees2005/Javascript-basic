// object = collection of key value pairs

// Basic Object Syntax
const person = {
    name : "ali",
    age : 25,
    isStudent : true,
    city : "karachi"
}

// Accessing Values
// console.log(person.name)

// console.log(person["city"])
// console.log(person.isStudent)


// Adding/Updating Properties
person.email = "1223@gmail.com"
// console.log(person.email)

// Updating existing property
// person.age = 26;
// console.log(person.age)

// Deleting Properties
delete person.isStudent;
// console.log(person)

// Different Types of Values in Objects
const test_kv = {
    // nested key value
    test_kv1 : {
        name : "xyz",
        age : 21
    },

    // function
    hello : function(name){
        return "Hello ", name
    },
    
    // arrow function
    bye : multiply = (a, b) => {
        return a * b
    }
}

console.log(test_kv.test_kv1.name)
console.log(test_kv.hello("mughees"))
console.log("Multiply:" ,test_kv.bye(4,2))