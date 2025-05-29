Project Name: Simple To-Do List (Console-Based)
📄 Description:
This is a beginner-friendly To-Do List web application that runs in the browser console. The project allows users to add, list, and delete tasks using prompt inputs. It’s a great exercise for understanding basic JavaScript, DOM integration, and browser interactivity without needing a server or database.

📁 Project Structure:
graphql
Copy
Edit
📦 ToDo List Project
├── Todoindex.html     # Main HTML file linking script and style
├── todocss.css        # Basic CSS styling
├── todos.js           # JavaScript file handling core logic
├── index.html         # Bootstrap sample page (not connected to To-Do logic)
⚙️ Features:
Add new tasks (new)

List all tasks (list)

Delete specific task by index (delete)

Exit the application (quit or q)

🖥️ How to Use:
Open Todoindex.html in a browser.

Check the console (F12) for prompt interactions.

Type one of the following commands:

new → Add a new task.

list → View all tasks.

delete → Remove a task by its index.

quit or q → Exit the program.

💡 Example Usage:
bash
Copy
Edit
What would you like to do?
> list
0: Eat
1: Code
2: Dance
3: Exercise

> new
Okay, what is the new task?
> Study
Study added to the list

> delete
Enter index to delete
> 2
Ok, deleted Dance

> quit
Okay, Quit the App
🧠 Learnings:
JavaScript loops, conditionals, and arrays

prompt() and console.log() for browser interactivity

File structure separation (HTML, CSS, JS)

