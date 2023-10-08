# Tacnique Assignment

Brief project description goes here.

### deployed project URL: https://tacnique-yevh.onrender.com
### deployed postman collection URL: https://documenter.getpostman.com/view/24607223/2s9YJgTzwR
### collection API:https://api.postman.com/collections/24607223-2d004ccb-2d0f-499e-961e-68851f1cbc09?access_key=PMAT-01HC7DFF904344DRCDVA2MFGZE
### video demonstration URL:https://drive.google.com/drive/folders/1vXWXGElnPokTpJvlm3bVmwer-RT7rNMC?usp=sharing


# API Documentation

This is the documentation for the "inerview" API, which provides endpoints for user registration, user login, and managing tasks. You can run the server locally by cloning the [GitHub repository](https://github.com/eraltafs/Tacnique) and following the instructions in the README file.

## Table of Contents

- [Getting Started](#getting-started)
  - [Cloning the Repository](#cloning-the-repository)
  - [Installing Dependencies](#installing-dependencies)
- [Running the Application](#running-the-application)
- [Authentication](#authentication)
  - [User Registration](#user-registration)
  - [User Login](#user-login)
- [Tasks](#tasks)
  - [Create a Task](#create-a-task)
  - [Get All Tasks](#get-all-tasks)
  - [Get a Task](#get-a-task)
  - [Update a Task](#update-a-task)
  - [Delete a Task](#delete-a-task)

## Getting Started

Follow these steps to set up and run the project on your local machine.

### Cloning the Repository

To get started, you need to clone this repository to your local machine. Open your terminal and run the following command:

```bash
git clone https://github.com/eraltafs/Tacnique.git
```

## Installing Dependencies

After cloning the repository, navigate to the project directory in your terminal and install the necessary dependencies using npm. Run the following command:

```bash
npm install
```

This command will download and install all the required packages and dependencies for the project based on the `package.json` file.

## Running the Application

To run the application, you can use [nodemon](https://www.npmjs.com/package/nodemon) to automatically restart the server whenever you make changes to the code. If you don't have `nodemon` installed globally, you can install it using `npm`:

```bash
npm install -g nodemon
```

Once `nodemon` is installed, Now you can start the application using the following command:

```bash
nodemon index.js
```

or modify the `package.json` add start script here as bellow

```json
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "nodemon index.js"
  },
```

Start the application using the following command:

```bash
npm start
```

## Authentication

### User Registration

**Endpoint:** `/user/register`

**Method:** `POST`

**Description:** Register a new user.

**Request Body:**

```json
{
  "name": "John Doe",
  "email": "johndoe@example.com",
  "password": "password123"
}
```

**Response:**

```json
{
  "msg": "User created successfully"
}
```

### User Login

**Endpoint:** `/user/login`

**Method:** `POST`

**Description:** Authenticate a user and issue a JWT token.

**Request Body:**

```json
{
  "email": "johndoe@example.com",
  "password": "password123"
}
```

**Response:**

```json
{
  "msg": "Login success",
  "token": "<your_jwt_token>"
}
```

## Tasks

### Create a Task

**Endpoint:** `/task`

**Method:** `POST`

**Description:** Create a new task.

**Request Body:**

```json
{
  "title": "Task",
  "description": "This is task"
}
```

**Response:**

```json
{
  "msg": "Task added successfully",
  "task": {
    "_id": "<task_id>",
    "title": "Task 1",
    "description": "This is task 1",
    "creation_date": "2023-10-08T12:00:00.000Z",
    "user_id": "<user_id>",
    "status": "pending"
  }
}
```

### Get All Tasks

**Endpoint:** `/task`

**Method:** `GET`

**Description:** Get all tasks associated with the authenticated user.

**Response:**
**Response:**

```json
[
  {
    "_id": "<task_id_1>",
    "title": "Task",
    "description": "This is task",
    "creation_date": "2023-10-08T12:00:00.000Z",
    "user_id": "<user_id>",
    "status": "pending"
  },
  {
    "_id": "<task_id_2>",
    "title": "Another Task",
    "description": "Another Task",
    "creation_date": "2023-10-08T13:00:00.000Z",
    "user_id": "<user_id>",
    "status": "completed"
  }
]
```

### Get a Task

**Endpoint:** `/task/:id`

**Method:** `GET`

**Description:** Get a specific task by its ID.

**Request URL Parameters:**

- `id` (string, required): The ID of the task to update.

**id (string, required):** The ID of the task to retrieve.
**Response:**

```json
{
  "_id": "<task_id>",
  "title": "Task 1",
  "description": "This is task 1",
  "creation_date": "2023-10-08T12:00:00.000Z",
  "user_id": "<user_id>",
  "status": "pending"
}
```

### Update a Task

**Endpoint:** `/task/:id`

**Method:** `PUT`

**Description:** Update a specific task by its ID.

**Request URL Parameters:**

- `id` (string, required): The ID of the task to update.

**Request Body:**

```json
{
  "title": "Updated Task 1",
  "description": "This is the updated task 1"
}
```

**Response:**

```json
{
  "msg": "Task updated successfully"
}
```

### Delete a Task

**Endpoint:** `/task/:id`

**Method:** `DELETE`

**Description:** Delete a specific task by its ID.

**Request URL Parameters:**

- `id` (string, required): The ID of the task to update.

**Response:**

```json
{
  "msg": "Task Deleted successfully"
}
```
