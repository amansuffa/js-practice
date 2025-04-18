// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Hamza"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Ameer",
            lastname: "Hamza"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }
// const obj3 = Object.assign(obj1, obj2, obj4) // target or source leta ha ase b thk h or is   me as a target obj 1 ko hi le ga
// const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3 = {...obj1, ...obj2, ...obj4} // spread operator
// console.log(obj3);


const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

// console.log(users[1].email);

// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


// ##################### Object de-structure & JSON ################################


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// console.log(course.courseInstructor);


const {courseInstructor} = course
const {courseInstructor: instructor} = course

// console.log(courseInstructor);
console.log(instructor);




// In React ##########
// const navbar = ({company})=>{

// }
 
// navbar(company="hamza")


// JSON #################
// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]