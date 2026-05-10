// Interface
interface User {
    name: string,
    age?: number //? is used for optional set up
}

type Data = {
    name: string
    dept: string
    age?: number //? is used for optional set up
    clg: string
    isGraduated: boolean
}

const user1: User = {name: "Arshath", age: 22}
const user2: Data = {name: "Arshath", dept:"Information Technology", clg: "salem college", age: 22, isGraduated:true}

console.log(user1)
console.log(user2)


// extends --> interface supports extend
interface Person{
    name: string
}

interface Employee extends Person{
    empId: number
}

const emp: Employee = {
    name: "Arsahth",
    empId: 100
}
console.log("Extends Keyword is used")
console.log(emp)