## Getting Started

(you need to setup your own .env file see example)
- Install all dependencies (using the `npm install` command).
- Create local database 
  - `psql -d final_project`
  - CREATE ROLE labber WITH LOGIN password 'labber';
  - CREATE DATABASE midterm OWNER labber;
- Run the development web server using the `npm run local` command.
- Login page is only for display, press the login button to be logged in as user 1
- To view project visit `http://localhost:8080/login`