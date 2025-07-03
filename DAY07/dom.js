// ================================
// 1. DOM SELECTORS
// ================================
const heading = document.querySelector('h1');
const textElement = document.getElementById('text');
const allListItems = document.querySelectorAll('li');
const toggleBtn = document.getElementById('btn');
const addBtn = document.getElementById('add-btn');
const input = document.getElementById('input');
const taskList = document.getElementById('list');

// ================================
// 2. DOM MANIPULATORS
// ================================

// heading.textContent = 'Hello, World!';
// textElement.style.color = 'blue';
// textElement.innerHTML = 'This is a <strong>bold</strong> statement.';

// ================================
// 3. EVENTS
// ================================

// Toggle dark/light mode on button click
toggleBtn.addEventListener('click', function () {
    const body = document.body;

    if (body.style.backgroundColor === 'black') {
        body.style.backgroundColor = 'white';
        body.style.color = 'black';
        toggleBtn.textContent = 'Switch to Dark Mode';
    } else {
        body.style.backgroundColor = 'black';
        body.style.color = 'white';
        toggleBtn.textContent = 'Switch to Light Mode';
    }
});

// Change button background color on hover
toggleBtn.addEventListener('mouseover', function () {
    toggleBtn.style.backgroundColor = 'lightgray';
});

// ================================
// 4. EVENT OBJECT HANDLING
// ================================

toggleBtn.addEventListener('dblclick', function (event) {
    console.log('Double click event:', event);
    toggleBtn.textContent = `Mouse at (${event.clientX}, ${event.clientY})`;
});
toggleBtn.addEventListener('contextmenu', function (event) {
    event.preventDefault(); // Prevent the default context menu from appearing
    console.log('Right click event:', event);
    toggleBtn.textContent = 'Right-clicked!';
});

// ================================
// 5. TO-DO LIST DEMO PROJECT
// ================================

addBtn.addEventListener('click', function () {
    const taskCount = taskList.children.length;

    if (taskCount >= 10) {
        alert('You can only add up to 10 tasks.');
        return;
    }

    const taskText = input.value.trim();
    if (taskText === '') {
        alert('Please enter a task.');
        return;
    }

    // Create new task <li>
    const li = document.createElement('li');
    li.className = 'task-item';
    li.style.listStyleType = 'none';
    li.textContent = taskText;

    // Create delete button
    const clearBtn = document.createElement('button');
    clearBtn.className = 'delete-btn';
    clearBtn.textContent = 'Delete';

    // Add delete functionality
    clearBtn.addEventListener('click', function () {
        li.remove();
    });

    // Append delete button to list item, then list item to the list
    li.appendChild(clearBtn);
    taskList.appendChild(li);

    // Clear input
    input.value = '';
});
