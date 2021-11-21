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




#   TODO
(SUNDAY)
REFACTOR OUR STATE TO WORK WELL WITH DATABASE
  REFLECT CHANGES IN STATE, IN COMPONENTS

SAVE BUTTON ACTUALLY SENDS TO SERVER AND WRITES TO DB



FIGURE OUT THE GROW-US API
  TO GET VEGETABLE DATA
    INTEGRATE THAT INTO OUR STATE
      SERVE DATA TO FRONT-END

--MAYBE END EARLY TO ==>
  (STUDY TYPESCRIPT)


(LATER)

GARDENS-VEGETABLES JOIN TABLE (MENTOR?)

BUILD VEGETABLE COMPONENTS (MAIN PAGE AND INDIVIDUAL VEGETABLE PAGES)

START TO LOOK INTO OUR GRAPHS/STATS PAGE
  WHAT STATS TO SHOW
    FIND A GRAPH API AND USE IT

IMPLEMENT SEARCH BAR


STYLING



