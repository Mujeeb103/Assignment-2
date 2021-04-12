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

function setCursor() {
    const div = document.querySelector('#note')
    div.focus()
}

function saveNote() {
    const div = document.querySelector('#note')
    const title = div.firstChild.textContent
    const body = convertDivsToString()
    notesArray.push(createNote(title, body))
    cleanUp()
}