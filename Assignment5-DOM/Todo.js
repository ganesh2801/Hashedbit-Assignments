function submitfn(event) {
    event.preventDefault();
    const taskInput = document.querySelector('.todo-input');
    const taskName = taskInput.value.trim();

    if (taskName !== '') {
        const listItem = document.createElement('li');
        listItem.classList.add('todo-item');
        listItem.innerHTML = `
            <span>${taskName}</span>
            <button class="complete-btn">Complete</button>
            <button class="trash-btn">Delete</button>
        `;
        const todoList = document.querySelector('.todo-list');
        todoList.appendChild(listItem);
        taskInput.value = '';
    }
}
function completeTask(event) {
    const listItem = event.target.closest('li');
    const taskName = listItem.querySelector('span');
    taskName.style.textDecoration = taskName.style.textDecoration === 'line-through' ? 'none' : 'line-through';
}
function deleteTask(event) {
    const listItem = event.target.closest('li');
    listItem.remove();
}
document.addEventListener('click', function(event) {
    if (event.target.classList.contains('complete-btn')) {
        completeTask(event);
    } else if (event.target.classList.contains('trash-btn')) {
        deleteTask(event);
    }
});
