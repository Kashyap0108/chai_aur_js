// destructuring objects 
const course = {
    coureName : "js in hindi",
    price: 999,
    courseInstructor : "hitesh",
}
// course.courseInstructor

const {courseInstructor : instructor} = course
console.log(instructor)
// curly braces used for destructuring 

// API 
// JSON structure
// {
//     "name": "hitesh",
//     "courseName":"jsinhindi",
//     "price":"free"
// }