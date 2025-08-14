// 🔥 SECTION 1: Mastering functions in real life

//🧠 Why functions matter

// Functions are the building bock of every app feature

// In a note-takinng app: 

// . You use a function to save a note
// . Another to search through a note
// . Another to talk to GPT

// 🔷 Declaring functions

function saveNote(content) {
    console.log("Saved" + content);
}

saveNote("JavaScript is awesome"); // think of this as a save button

// 🔷 Arrow functions (modern, clean)

const saveNote = (content) => {
    console.log("Saved" + content);
};

saveNote("JavaScript is awesome"); // We prefer this syntax in modern apps (like React and Next.js).


