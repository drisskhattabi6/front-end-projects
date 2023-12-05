const addBtn = document.querySelector("#btn1");
const notesList = document.querySelector("#notes");

var notesNumber = 0

const headerColor = ["rgb(182, 7, 182)", "rgb(213, 219, 35)", "#047C51","#F62915", "#F4770B", "#0640A7"]
var colorIndex = 0

// this function for verifie if all older notes are saves
function isAllSave() {
    let n = 0;
    let notes = document.querySelectorAll(".note");

    if (notes.length == 0) return 0

    for (let i = 0 ; i < notes.length ; i++)
        if (notes[i].dataset.save == 0) 
            n++

    return n;
} 

// add new note function.

addBtn.addEventListener("click", function () {
    let n = isAllSave()
    if( n !== 0 ) {
        alert("you must save all older notes to create a new note")
        return
    }

    let note = `<div class="header" style="background-color:${headerColor[colorIndex]}">
                    <h2>Note ${++notesNumber}</h2>
                    <div>
                        <button class="btn"><i class="fa-solid fa-floppy-disk save" title="save/edit"></i></button>
                        <button class="btn"><i class="fa-solid fa-trash delete" title="delete"></i></button>
                    </div>
                </div>
                <div class="text">
                    <textarea placeholder="write your note..."></textarea>
                </div>`;

    colorIndex++;
    if (colorIndex == headerColor.length) colorIndex = 0

    let noteDiv = document.createElement("div");
    noteDiv.className = "note";
    noteDiv.innerHTML = note;
    noteDiv.setAttribute('data-save','0')

    // delete and save/edit function.

    const saveBtn = noteDiv.querySelector(".save");
    const delBtn = noteDiv.querySelector(".delete");
    const textarea = noteDiv.querySelector("textarea");

    saveBtn.addEventListener("click", function () {
        if (saveBtn.classList.contains("save")) {
            if(textarea.value != "") {
                //textarea.innerHTML = marked(textarea.value); 
                textarea.disabled = true;
                noteDiv.setAttribute('data-save','1')
                saveBtn.classList.remove("save");
                saveBtn.classList.add("edit");
                saveBtn.classList.remove("fa-floppy-disk");
                saveBtn.classList.add("fa-edit");
                return;
            } else {
                alert("you must type in note to save it.");
            }
        }
    
        if (saveBtn.classList.contains("edit")) {
            textarea.disabled = false;
            saveBtn.classList.remove("edit");
            saveBtn.classList.add("save");
            saveBtn.classList.remove("fa-edit");
            saveBtn.classList.add("fa-floppy-disk");
            return;
        }
    });

    delBtn.addEventListener("click", function () { 
        noteDiv.classList.add("delete-note")
        setTimeout(()=>{
            noteDiv.remove() 
        }, 500)
    });

    notesList.appendChild(noteDiv);
});
