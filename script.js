// Wait until the DOM content is fully loaded
document.addEventListener('DOMContentLoaded', () => {
      // Select the DOM elements
      const addButton = document.getElementById('add-task-btn');
      const taskInput = document.getElementById('task-input');
      const taskList = document.getElementById('task-list');
  
      // Function to add a new task
      function addTask() {
          // Retrieve and trim the value from the task input field
          const taskText = taskInput.value.trim();
  
          // Check if the task text is not empty
          if (taskText === "") {
              alert("Please enter a task.");
              return; // Exit the function if no task is entered
          }
  
          // Create a new <li> element
          const li = document.createElement('li');
          li.textContent = taskText;
  
          // Create a new remove button
          const removeButton = document.createElement('button');
          removeButton.textContent = "Remove";
          removeButton.className = 'remove-btn';
  
          // Attach an onclick event to the remove button
          removeButton.onclick = function () {
              taskList.removeChild(li); // Remove the <li> element from the list
          };
  
          // Append the remove button to the <li> element
          li.appendChild(removeButton);
  
          // Append the <li> element to the task list
          taskList.appendChild(li);
  
          // Clear the task input field
          taskInput.value = '';
      }
  
      // Attach an event listener to the add task button
      addButton.addEventListener('click', addTask);
  
      // Allow adding tasks by pressing the "Enter" key
      taskInput.addEventListener('keypress', function (event) {
          if (event.key === 'Enter') {
              addTask(); // Call addTask when "Enter" key is pressed
          }
      });
  
      // Optionally, add the addTask function call here if needed for initial state
  });
  