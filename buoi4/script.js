function changeText() {
    const textElement = document.getElementById('greeting');
    textElement.textContent = "Chào mừng bạn đến với bài tập DOM!";
}
function ChangeBoxColor() {
    const boxElement = document.getElementById('box');
    boxElement.style.backgroundColor = 'orange';
}
function AddTask() {
    const inputElement = document.getElementById('todoInput');
    const taskText = inputElement.value.trim();
    if (taskText === "") {
        alert("Vui lòng nhập công việc!");
        return;
    }
    
    const todoList = document.getElementById('todoList');
    const newTask = document.createElement('li');
    newTask.innerHTML = `<span>${taskText}</span> <button onclick="removeTodo(this)">Xóa</button>`;
    todoList.appendChild(newTask);
    
    inputElement.value = "";
}
function removeTodo(buttonElement){
    const taskItem = buttonElement.parentElement;
    taskItem.remove();  
}W
function changeImage(){
    const imageElement = document.getElementById('myImage');
    imageElement.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9SRRmhH4X5N2e4QalcoxVbzYsD44C-sQv-w&s";
}
function toggleHighlight(){
    const textElement = document.getElementById('toggleClassText');
    textElement.classList.toggle('highlight');
}