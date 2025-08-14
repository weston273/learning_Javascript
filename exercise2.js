    // multi-Note Saver

    // 1. create an emoty array called notes
    // 2. Write a function addNote(note) that:
    // . Pushes note to the array
    // . Logs "✔ Note Saved " with the note
    // 3. Add 3 notes: "JS is powerful", "GPT can generate quizzes", "Notes can be read aloud"
    // 4. Print all notes nicely

const notes = []

const addNote = (note) => {
    notes.push(note)
    console.log(`✔ Note saved: ${note}`)
}

addNote("JS is powerful");
addNote("GPT can generate quizzes")
addNote("Notes can be read aloud")

console.log("\n📃 All Saved notes: ");
notes.forEach((note, index) =>{
    console.log(`${index + 1}. ${note}`);
})