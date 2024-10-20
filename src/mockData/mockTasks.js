// src/mockData/mockTasks.js

export const mockTasks = [
  {
    id: '1',
    title: 'Create a Simple Webpage',
    description: 'Create a webpage with a heading, a paragraph, and a styled button.',
    objective: 'The webpage should display a heading, a paragraph of text, and a clickable button with custom styles.',
    htmlCode: `
<h1>Welcome to My Webpage</h1>
<p>This is a paragraph. Replace this text with your own content.</p>
<button id="myButton">Click me!</button>
    `,
    cssCode: `
body {
  font-family: Arial, sans-serif;
  line-height: 1.6;
  margin: 0;
  padding: 20px;
  background-color: #f4f4f4;
}

h1 {
  color: #333;
}

button {
  background-color: #4CAF50;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
}
    `,
    jsCode: '// Add your JavaScript code here',
    hints: [
      "Use the <h1> tag for the main heading",
      "Style the button using CSS to make it stand out",
      "Consider adding a hover effect to the button using CSS"
    ],
    htmlElements: ['h1', 'p', 'button'],
    cssElements: ['font-family', 'line-height', 'margin', 'padding', 'background-color', 'color', 'text-align', 'display'],
    jsElements: []
  },
  {
    id: '2',
    title: 'Interactive Button',
    description: 'Create a button that changes color when clicked.',
    objective: 'The webpage should have a button that changes its background color each time it is clicked.',
    htmlCode: `
<h1>Color Changing Button</h1>
<button id="colorButton">Change My Color!</button>
    `,
    cssCode: `
body {
  font-family: Arial, sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;
  background-color: #f0f0f0;
}

#colorButton {
  font-size: 18px;
  padding: 10px 20px;
  cursor: pointer;
}
    `,
    jsCode: `
// Add your JavaScript code here to change the button color when clicked
    `,
    hints: [
      "Use document.getElementById() to select the button in JavaScript",
      "Add an event listener for the 'click' event on the button",
      "Generate a random color or cycle through an array of colors in your click handler",
      "Use element.style.backgroundColor to change the button's color"
    ],
    htmlElements: ['h1', 'button'],
    cssElements: ['display', 'justify-content', 'align-items', 'height', 'margin', 'background-color', 'font-size', 'padding', 'cursor'],
    jsElements: ['getElementById', 'addEventListener', 'style.backgroundColor']
  },
  {
    id: '3',
    title: 'Simple To-Do List',
    description: 'Create a basic to-do list where users can add and remove items.',
    objective: 'The webpage should display an input field to add new tasks, a button to add them to the list, and the ability to remove tasks by clicking on them.',
    htmlCode: `
<h1>My To-Do List</h1>
<input type="text" id="taskInput" placeholder="Enter a new task">
<button id="addTask">Add Task</button>
<ul id="taskList"></ul>
    `,
    cssCode: `
body {
  font-family: Arial, sans-serif;
  max-width: 500px;
  margin: 0 auto;
  padding: 20px;
}

#taskInput {
  width: 70%;
  padding: 10px;
}

#addTask {
  padding: 10px;
  background-color: #4CAF50;
  color: white;
  border: none;
  cursor: pointer;
}

#taskList {
  list-style-type: none;
  padding: 0;
}

#taskList li {
  cursor: pointer;
  padding: 10px;
  background-color: #f1f1f1;
  margin-top: 5px;
}
    `,
    jsCode: `
// Add your JavaScript code here to handle adding and removing tasks
    `,
    hints: [
      "Use document.getElementById() to get references to the input, button, and list elements",
      "Add an event listener for the 'click' event on the add button",
      "Create new <li> elements for each task and append them to the taskList",
      "Add click event listeners to each task item to remove them when clicked",
      "Remember to clear the input field after adding a task"
    ],
    htmlElements: ['h1', 'input', 'button', 'ul', 'li'],
    cssElements: ['font-family', 'max-width', 'margin', 'padding', 'width', 'background-color', 'color', 'border', 'cursor', 'list-style-type'],
    jsElements: ['getElementById', 'addEventListener', 'createElement', 'appendChild', 'removeChild']
  }
];