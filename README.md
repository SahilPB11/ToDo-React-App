## REACT + VITE


 # To-Do App - Keeping Track of Your Tasks

## Overview
This modern and sleek to-do app provides a user-friendly interface for managing your tasks and staying organized. The app features a variety of functionalities to help you stay on top of your tasks, including the ability to add, edit, delete, and mark tasks as completed. The app also provides visual feedback to indicate the completion status of tasks, making it easy to see what tasks still need to be done.

## Architecture Overview

The app is built using React and is designed to be highly responsive and accessible on a variety of devices, including smartphones, tablets, and desktop computers. 

The main components of the app are as follows:

- **Input Bar:** Allows users to add new tasks to the list.
- **Task List:** Displays the list of tasks, with each task represented as a separate item.
- **Task Item:** Represents an individual task and provides options for editing, deleting, and marking the task as completed.

These components interact to enable the following functionalities:

- **Adding a Task:**
  - User enters the task name in the input bar.
  - Clicks the "Add" button to save the task.
  - The new task is added to the task list.

- **Editing a Task:**
  - User clicks the "Edit" button on the corresponding task item.
  - The task name becomes editable.
  - User modifies the task name and clicks "Save" to confirm the changes.
  - The updated task name is saved.

- **Deleting a Task:**
  - User clicks the "Delete" button on the corresponding task item.
  - The task item is removed from the task list.

- **Marking a Task as Completed:**
  - User clicks the checkbox on the corresponding task item.
  - The task item is marked as completed and visually distinguished from incomplete tasks.

## Getting Started

To use this app, follow these simple steps:

1. Clone or download the repository.
2. Install the required dependencies by running `npm install`.
3. Start the development server by running `npm run dev`.
4. Open your browser and navigate to `http://localhost:5173/` to access the app.

## Contributing

Pull requests are welcome. Before submitting a pull request, please make sure to follow the coding conventions and test your changes.

## License

This project is licensed under the MIT License. 
