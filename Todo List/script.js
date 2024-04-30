// script.js
document.getElementById('todoForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const title = document.getElementById('taskTitle').value;
    const details = document.getElementById('taskDetails').value;

    if (!title) return;

    const taskId = Date.now().toString(); // Unique ID for each task
    const taskItem = document.createElement('li');
    taskItem.className = 'task-item';
    taskItem.setAttribute('data-id', taskId);

    taskItem.innerHTML = `
        <div class="task-info">
            <strong>${title}</strong> ${details ? '- ' + details : ''}
        </div>
        <div class="task-actions">
            <button onclick="editTask('${taskId}')">Edit</button>
            <button onclick="deleteTask('${taskId}')">Delete</button>
        </div>
    `;

    document.getElementById('taskList').appendChild(taskItem);

    document.getElementById('taskTitle').value = '';
    document.getElementById('taskDetails').value = '';
});

function editTask(id) {
    const taskItem = document.querySelector(`[data-id="${id}"]`);
    const taskInfo = taskItem.querySelector('.task-info').textContent;
    const [title, ...details] = taskInfo.split('-');

    document.getElementById('taskTitle').value = title.trim();
    document.getElementById('taskDetails').value = details.join('-').trim();

    deleteTask(id); // Remove the current item to replace it
}

function deleteTask(id) {
    const taskItem = document.querySelector(`[data-id="${id}"]`);
    if (taskItem) {
        taskItem.remove();
    }
}
