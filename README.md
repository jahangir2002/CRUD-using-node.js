
# Pollatech Company Task: Web Developer Backend

## Assignment Overview

Welcome to the second assignment for Pollatech Company! This project involves creating a RESTful API for performing CRUD (Create, Read, Update, Delete) operations on an employee database. You will use Node.js, Express.js, MySQL, and Postman for this task. The goal is to build a robust backend application that connects to a relational database and allows manipulation of employee data.

## Tech Stack

- Node.js: A JavaScript runtime built on Chrome's V8 JavaScript engine.

- Express.js: A fast, unopinionated, minimalist web framework for Node.js.

- MySQL: A popular relational database management system.

- Postman: A collaboration platform for API development.
## Employee Table Structure

- eId (Number): Employee ID (Primary Key)

- name (String): Employee Name

- age (Number): Employee Age

- department (String): Employee Department
## Project Setup

To get started with the project, follow these steps:

1. Clone the repository

```bash
git clone https://github.com/your-username/employee-api.git

```
2. Install dependencies

```bash
cd employee-api
npm install

```

3. Run the project

```bash
node server.js

```

## Database Setup

1. Create a MySQL database

```bash
CREATE DATABASE test_db;

```

2. Create the employee table

```bash
CREATE TABLE employees (
    eId INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255),
    age INT,
    department VARCHAR(255)
);

```
## API Endpoints

- Create Employee: POST http://localhost:3000/employee

- Read All Employees: GET http://localhost:3000/employees

- Read Single Employee : GET http://localhost:3000/employee/3

- Update Employee: PUT http://localhost:3000/employee/1

Go to the Body tab, select raw, and set the format to JSON.

Enter the new employee data in JSON format. For example:
```
{
  "name": "Jane Smith",
  "age": 28,
  "department": "Finance"
}

 ```

- Delete Employee: DELETE http://localhost:3000/employee/1

