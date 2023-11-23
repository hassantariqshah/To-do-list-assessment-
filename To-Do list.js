const taskinput = document.getElementById("task-input")
const addbtn = document.getElementById("add-btn")
const tasklist = document.getElementById("task-list")



//EventListeners

addbtn.addEventListener('click', () => {
    if(taskinput.value !== ""){
        const taskText = taskinput.value;
        const listItem = document.createElement("li");
        listItem.innerHTML = `
                                ${taskText}
                                <button class="delete-btn">Delete</button>
                                `;
                                             
        tasklist.appendChild(listItem);
        taskinput.value = "";                        
    }
});


tasklist.addEventListener('click', (event) => {
    if(event.target.classList.contains("delete-btn")) {
        const listitem = event.target.parentElement;
        tasklist.removeChild(listitem);
    }
})

