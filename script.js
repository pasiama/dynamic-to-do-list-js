document.addEventListener('DOMContentLoaded', () => {
      // Select the DOM elements
      const addButton = document.getElementById('add-task-btn');
      const taskInput = document.getElementById('task-input');
      const taskList = document.getElementById('task-list');
  
      // Load tasks from Local Storage when the page loads
      loadTasks();
  
      // Function to add a new task
      function addTask(taskText, save = true) {
          // Check if taskText is not empty
          if (taskText.trim() === '') {
              return;
          }
  
          // Create a new li element
          const li = document.createElement('li');
          li.textContent = taskText;
  
          // Create a remove button
          const removeButton = document.createElement('button');
          removeButton.textContent = 'Remove';
          removeButton.classList.add('remove-btn');
  
          // Define the event for removing the task
          removeButton.onclick = () => {
              // Remove the task from the DOM
              taskList.removeChild(li);
              
              // Remove the task from Local Storage
              removeTaskFromLocalStorage(taskText);
          };
  
          // Append the remove button to the li
          li.appendChild(removeButton);
  
          // Append the li to the task list
          taskList.appendChild(li);
  
          // Clear the input field
          taskInput.value = '';
  
          // Save the task to Local Storage
          if (save) {
              saveTaskToLocalStorage(taskText);
          }
      }
  
      // Function to save task to Local Storage
      function saveTaskToLocalStorage(taskText) {
          const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
          storedTasks.push(taskText);
          localStorage.setItem('tasks', JSON.stringify(storedTasks));
      }
  
      // Function to remove task from Local Storage
      function removeTaskFromLocalStorage(taskText) {
          let storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
          storedTasks = storedTasks.filter(task => task !== taskText);
          localStorage.setItem('tasks', JSON.stringify(storedTasks));
      }
  
      // Function to load tasks from Local Storage
      function loadTasks() {
          const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
          storedTasks.forEach(taskText => addTask(taskText, false)); // 'false' indicates not to save again to Local Storage
      }
  
      // Attach event listener to the Add Task button
      addButton.addEventListener('click', () => {
          const taskText = taskInput.value.trim();
          addTask(taskText);
      });
  
      // Allow task addition by pressing Enter
      taskInput.addEventListener('keypress', (event) => {
          if (event.key === 'Enter') {
              const taskText = taskInput.value.trim();
              addTask(taskText);
          }
      });
  });
  