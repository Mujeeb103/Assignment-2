const notesArray = []

function defineNoteWritingSection() {
    html = `
    <div id="note-area">
    <div id="note" contenteditable="true"></div>
    <button onclick="saveNote()">save</button>
    <button onclick="cleanUp()">cancel</button>
    </div>
    ` 
    return html
}

function createContentWritingArea() {
    const div = document.querySelector('#content')
    div.insertAdjacentHTML('beforeend', defineNoteWritingSection())
    setCursor()
}