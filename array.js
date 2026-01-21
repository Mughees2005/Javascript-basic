const fruits = ["apple", "banana", "mango"]
//                 0       1         2          

// Accessing Array Elements
console.log(fruits[1])
console.log("Length of array:", fruits.length)
// Access last element dynamically
console.log("Last element of array", fruits[fruits.length - 1])

// Modifying Arrays
fruits[1] = "peach"
console.log(fruits[1])

// Add element at end
fruits.push(3)
// Remove last element
fruits.pop()
// Add element at beginning
fruits.unshift("apple")
// Remove first element
fruits.shift()
console.log(fruits)
fruits.push("123", "456", "789")
// Add/remove at specific position
// .splice (jo nikalna wo jahan, aur jahan tak nikalna wo yahan)         
fruits.splice(1,2)
fruits.splice(1, 0, "orange")

console.log(fruits)
