# Task Manager App

## Description

This is a simple task manager application built with React.js. It allows users to add, edit, and delete tasks, as well as mark them as complete. The app also includes a progress bar that shows the user how many tasks have been completed.

## Features

- Add, edit, and delete tasks
- Mark tasks as complete
- Progress bar that shows the user how many tasks have been completed
- Local storage support, so that tasks are saved even after the page is refreshed

## Getting Started

To get started, clone the repository to your local machine and install the dependencies:

```
git clone https://github.com/your-username/task-manager-app
cd task-manager-app
npm install
```

Then, start the development server:

```
npm run dev
```

The app will be available at `http://localhost:3000`.

## Usage

To add a new task, simply type in the task name and click the "+" button. To edit a task, click on the task name and then click the "Edit" button. To delete a task, click on the "Delete" button. To mark a task as complete, click on the checkbox next to the task name.

## Functionality

The app uses React's state management system to keep track of the tasks. The `tasks` state variable is an array of task objects. Each task object has a `name` property, a `done` property (which indicates whether the task is complete), and an `id` property (which is used to uniquely identify the task).

The app also uses local storage to save the tasks. This means that the tasks will be saved even after the page is refreshed.

## Conclusion

This is a simple but powerful task manager app that can help you keep track of your tasks and stay organized. It's easy to use and it has all the features you need to manage your tasks effectively.
