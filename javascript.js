
let tasks = [];
let id = 1;
// Function to add a task
function addTask(description) {
  const task = {
    id: id++, 
    description: description,
    completed: false
  };
  
  tasks.push(task);  
  console.log(`Task added: "${task.description}"`); 
}

// Function to view the tasks
function viewTasks() {
  if (tasks.length === 0) {
    console.log("No tasks .");
   
  }
  
  console.log("Tasks:");
  for (let i = 0; i < tasks.length; i++) {
    const task = tasks[i];  
    console.log(`${task.id}. ${task.description} - ${task.completed ? "[Completed]" : "[Not Completed]"}`);
  }
}

// Function to toggle task status
function toggleStatusOfTask(id) {
  const task = tasks.find(t => t.id === id);
  
  if (task) {
    task.completed = !task.completed;  
    
    if (task.completed) {
      console.log(`The task "${task.description}" is now marked as completed.`);
    } else {
      console.log(`The task "${task.description}" is now marked as uncompleted.`);
    }
  } else {
    console.log("Task not found.");
  }
}

// Function to update a task description 
function updateDescription(id, newDescription) {
  const task = tasks.find(t => t.id === id);
  
  if (task) {
    task.description = newDescription;  
    console.log(`Task ${id} updated to "${newDescription}"`);
  } else {
    console.log("Task not found.");
  }
}

// Function to delete a task 
function removeTask(id) {
  const index = tasks.findIndex(t => t.id === id);
  
  if (index !== -1) {  
    const taskDescription = tasks[index].description; 
    tasks.splice(index, 1); 
    console.log(`Task "${taskDescription}" is deleted.`);
  } else {
    console.log("Task not found.");
  }
}

// Function to display the menu
function viewMenu() {
  console.log("\nTask Manager Menu:");
  console.log("1. Add Task");
  console.log("2. View Tasks");
  console.log("3. Toggle Task Completion");
  console.log("4. Edit Task");
  console.log("5. Delete Task");
  console.log("6. Exit");
}

// Main function to run the task manager
function taskManager() {
  let exit = false;
  
  while (!exit) {
    viewMenu();
    const choice = prompt("Enter your choice (1-6): ");
    
    switch (choice) {
      case '1': // Add Task
        const description = prompt("Enter task description: ");
        addTask(description);
        break;
        
      case '2': // View Tasks
        viewTasks();
        break;
        
      case '3': // Toggle Task Completion
        const toggleId = parseInt(prompt("Enter task ID to toggle completion: "), 10);
        toggleStatusOfTask(toggleId);
        break;
        
      case '4': // Edit Task
        const updateId = parseInt(prompt("Enter task ID to update: "), 10);
        const newDescription = prompt("Enter new task description: ");
        updateDescription(updateId, newDescription);
        break;
      
      case '5': // Delete Task
        const deletedId = parseInt(prompt("Enter task ID to delete: "), 10);
        removeTask(deletedId);
        break;
      
      case '6': // Exit
        exit = true;
        console.log("Exiting Task Manager...");
        break;
        
      default:
        console.log("Invalid choice. ");
        break;
    }
  }
}


taskManager(); 
