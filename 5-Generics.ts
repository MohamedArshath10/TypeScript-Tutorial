// Generics are used to write flexible code works with any type
function identity<T>(value: T): T{
    return value
}
console.log(identity("Hello"))  //The "Hello" is passed as the value and type is string
console.log(identity(1)) //The 1 is passed as the value and type is number

interface ApiResponse<T> {
    data: T,
    status: number,
    error?: string
}

const userResponse: ApiResponse<{ id: number, name: string}> = {
    data: {id: 2, name: "Arshath"},
    status: 200
}

console.log(userResponse)