// var
// let
// const




// primitive types

let searchInput = '' // String

const userName = 'giga' // String

const yearOfBirht = 1994 // Number

let isMerried = false // Boolean

let expanded = true // Boolean

let state = undefined // განუსაზღვრელი მდგომარეობა

let secondState = null // ცარიელი მნიშვნელობა



// refference types

const user = 
{
    id: 5674359873,
    firstName: 'giga',
    lastName: 'khundadze',
    age: 31,
    posts: ['post 1', 'post 2', 'post 3'],
    friends: [8759834753, 983749853, 89573498, 8753498675]
} // Object


const userRequest = {
    login: 'hghfdk@gmail.com',
    password: "fkjhlsdfgkjdfiygdf"
} // Object


const numbers = [1, 2, 3, 4, 5, 6] // მასივი - Array
const strings = [user, expanded, yearOfBirht, userRequest] // მასივი - Array




// = მინიჭება
// + მიმატება
// - გამოკლება
// / გაყოფა
// * გამრავლება

let userAge = 19

const expression = userAge <= 18

console.log(expression);


if (expression) {
    console.log('სრულწლოვანი')
}
else {
    console.log('არასრულწლოვანი')
}







