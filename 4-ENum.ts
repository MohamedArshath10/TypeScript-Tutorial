enum Status{
    applied = "Pending", // Can Store specific values
    inProgress = "In Progress",
    done = 1
}

let trackStatus1: Status = Status.applied
let trackStatus2: Status = Status.inProgress
let trackStatus3: Status = Status.done
console.log(trackStatus1)
console.log(trackStatus2)
console.log(trackStatus3)