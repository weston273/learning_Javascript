//const createNote = content => {
// return something like: "Note saved: JavaScript is awesome"
//};


const createNote = content => {
    return "✔ Note saved: " + content;
};

console.log(createNote("JavaScript is awesome"));

// mini lecture

// In an AI-powered note-taking app like the one you're building:
// createNote() would be used when a user clicks "Save"
//It would store the note, give feedback like "✔ Note saved: ...", and might even trigger a sync with a server or AI analysis
//This is the exact same logic you'd later put behind:

<button onclick="createNote('My note content')">Save</button>
