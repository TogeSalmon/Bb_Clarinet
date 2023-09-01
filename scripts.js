document.addEventListener("DOMContentLoaded", function () {
    const notes = ['C', 'D', 'E', 'F', 'G', 'A'];
    const notesContainer = document.getElementById('notes-container');
    const template = document.getElementById('note-template').content;

    notes.forEach(note => {
        const node = document.importNode(template, true);
        node.querySelector('h2').textContent = note;
        node.querySelector('.fingering').src = `${note}.jpg`;
        notesContainer.appendChild(node);
    });
});
function playSound(note) {
    var audio = new Audio(`${note}.mp3`);
    audio.play();

}