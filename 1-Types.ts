// Need to declare with the type of the value
// Primitive DataTypes
let user: string = "Arshath"
let rollNo: number = 26
let isActive: Boolean = true
let emptyNull: null = null
let undef: undefined =undefined 


// Logging every types
console.log(user)
console.log(rollNo)
console.log(isActive)
console.log(emptyNull)
console.log(undef)

// Non Primitive DataTypes
let arr1: number[] = [1,2,3,4,5]
let arr2: string[] = ["Apple", "Banana"]
// Tuples
let arr3: [number, string] = [22, "Arshath"]

console.log(arr1)
console.log(arr2)
console.log(arr3)

// Special Types 
// any  --> it removes the typecheck
let value: any 

value = "hello"
value = 23
console.log(value)

// unknown --> We need to check the type before the operations
let input: unknown = "hey"

if(typeof input === "string"){
    console.log( input.toUpperCase())
}

// void --> It is used in Function and doesnot return value
function add(num1: number, num2: number):void {
    console.log(num1 + num2)
}
add(1,2)