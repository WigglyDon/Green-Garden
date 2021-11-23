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

# TODO

## Notifications

- [x] REFACTOR OUR STATE TO WORK WELL WITH DATABASE
- [x] REFLECT CHANGES IN STATE, IN COMPONENTS
- [x]SAVE BUTTON ACTUALLY SENDS TO SERVER AND WRITES TO DB
  -fix cron job from sending more then one text for the specified time,
  -add support days integer array sql data type
  -add support in cron job to allow multiple notifciations in notficiations table (not just notifications)

## Gardens

## Vegetables

FIGURE OUT THE GROW-US API
TO GET VEGETABLE DATA
INTEGRATE THAT INTO OUR STATE
SERVE DATA TO FRONT-END
BUILD VEGETABLE COMPONENTS (MAIN PAGE AND INDIVIDUAL VEGETABLE PAGES)

## COMPONENTS

MAKE A LIST OF ALL COMPONENTS

## SQL

How to update/track GARDENS-VEGETABLES JOIN TABLE (MENTOR?)

WHAT STATS TO SHOW
FIND A GRAPH API AND USE IT

IMPLEMENT SEARCH BAR

STYLING

# Goals for Tonight/Tommorow

### Donnie

-VegetableCardList
-SearchBar

### Nikolaj

--Dashboard
--Gardens
--Vegetables

### Ed

--Nav Bar
--Scheduler
