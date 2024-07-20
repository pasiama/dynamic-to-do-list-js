document.addEventListener('DOMContentLoaded', () => {
      // Select the DOM elements
      const addButton = document.getElementById('add-task-btn');
      const taskInput = document.getElementById('task-input');
      const taskList = document.getElementById('task-list');
  
      // Function to add a new task
      function addTask() {
          // Get and trim the input value
          const taskText = taskInput.value.trim();
  
          // Check if the taskText is empty
          if (taskText === '') {
              alert('Please enter a task.');
              return;
          }
  
          // Create a new li element
          const li = document.createElement('li');
          li.textContent = taskText;
  
          // Create a remove button
          const removeButton = document.createElement('button');
          removeButton.textContent = 'Remove';
          removeButton.classList.add('remove-btn'); // Use classList.add to add the class
  
          // Define the event for removing the task
          removeButton.onclick = () => {
              taskList.removeChild(li);
          };
  
          // Append the remove button to the li
          li.appendChild(removeButton);
  
          // Append the li to the task list
          taskList.appendChild(li);
  
          // Clear the input field
          taskInput.value = '';
      }
  
      // Attach event listener to the Add Task button
      addButton.addEventListener('click', addTask);
  
      // Allow task addition by pressing Enter
      taskInput.addEventListener('keypress', (event) => {
          if (event.key === 'Enter') {
              addTask();
          }
      });
  });
  