// Objects store data in key value pairs

//example: 

const user = {
    name: "John",
    age: 21,
    email: "john@gmail.com",
    isVerified: true
};

//You can get values by keys

console.log(user.name);
console.log(user.age);
console.log(user.email);
console.log(user.isVerified);

//Why Objects?
// . They let you group related data
// . Essential for React props and state.

// Task 1 // simple objects and printing some values

const book = {
    title: "JavaScript Mastery",
    author: "GPT",
    pages: 250,
};

console.log(`reading: ${book.title} by ${book.author}`)

// Task 2 // Array of objects(Super Common!)

const books = [
     { title: "JS Mastery", author: "GPT" },
    { title: "React Basics", author: "OpenAI" },
    { title: "Web Dev", author: "You" }
]

//Print all book titles

books.forEach(book => console.log(book.title))

// Why this matters?

    // React often works with arrays of objects for lists(e.g displaying a list of notes,posts, users).
    