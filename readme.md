Welcome to Jobz4Kidz (a play off of Carz4Kidz), a fake job board created to practice React, Express, PostgreSQL and building a full-stack application. 

The goal of this project was to work on getting all parts of the stack to work together, buidling out multiple API's, resulting in a fully functional application. The goal was less to create an aesthetically pleasing website. 
------------------------------------------------------------
Technologies: 
Frontend: React
Backend and Database: Node, Express, and PostgreSQL
------------------------------------------------------------
Frontend Routes: 
/companies
List all companies
/companies/apple
View details of this company
/jobs
List all jobs
/login
Login/signup form
/profile
Edit profile page
------------------------------------------------------------
The Backend 
Backend Routes returning JSON: 
GET /companies
To allow for the following query string parameters:
Search, min_employees, max_employees.

POST /companies
To create a new company and return the newly created company.

GET /companies/[handle]
To find a single company by its id.

PATCH /companies/[handle]
To update an existing company.

DELETE /companies/[handle]
To remove an existing company.

POST /jobs
To create a new job.

GET /jobs
To allow for the following query string parameters: 
search, min_salary, min_equity

GET /jobs/[id]
To get info on a specific job by id.

PATCH /jobs/[id]
To update a job by id. 

DELETE /jobs/[id]
To delete a job. 

POST /users
To create a new user.

GET /users
To get user limited information on a user. 

GET /users/[username]
To get all information on a user, exluding their password. 

PATCH /users/[username]
To update an existing user. 

DELETE /users/[username]
To remove an existing user. 

POST /login
To authenticate a user and return a JSON Web Token which contains a payload with username and if the user is an admin.

POST /users
To create a new user and return a JWT which includes the username and whether or not the user is an admin.
