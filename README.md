# Green Garden

Green Garden is a personal gardening app designed to make home gardening easier and more fun. It's main features include interactive live graphs hooked into a custom built API and automatic text message notifications to remind you to water your plants.

### The Dev Team

- [Donnie Walsh](https://github.com/WigglyDonnie)

- [Nikolaj Johansen](https://github.com/nikolajjuuel)

- [Edmund Yu](https://github.com/Nolelle)

---

## Screenshots

### Home Page

!["Home Page"](https://github.com/Nolelle/green-garden/blob/update-readme/docs/home%20page.png?raw=true)

### My Garden

!["My Garden"](https://github.com/Nolelle/green-garden/blob/update-readme/docs/dashboard.png?raw=true)

---

## Backend Setup

1. Change directories to back-end-express
2. Create an .env following the .env.example
3. Sign up for a Twillio account and place your Twillio Account SID and Token in .env file.

---

## Getting Started

1.Install all frontend dependencies while in the main frontend directory.

```bash
   npm install
```

2.Install all backend dependencies while in the main backend directory.

```bash
   npm install
```

3.Reset the database.

```bash
  npm run db:reset
```

4.Run the server for the frontend and backend.

```bash
   npm start
```

5.Lastly visit the website on your localhost.

```
   http://localhost:3000/
```

---

## Dependencies

### Front End

- emotion/react: ^11.6.0
- emotion/styled: ^11.6.0
- fortawesome/fontawesome-svg-core: \* ^1.2.36
- fortawesome/free-solid-svg-icons: \* ^5.15.4
- fortawesome/react-fontawesome: ^0.1.\* 16
- mui/icons-material: ^5.2.0
- mui/lab: ^5.0.0-alpha.55
- mui/material: ^5.1.1
- testing-library/jest-dom: ^5.15.0
- testing-library/react: ^11.2.7
- testing-library/user-event: ^12.8.3
- axios: ^0.24.0
- chart.js: ^3.6.0
- classnames: ^2.3.1
- date-fns: ^2.26.0
- node-sass: ^6.0.1
- react: ^17.0.2
- react-chartjs-2: ^4.0.0
- react-dom: ^17.0.2
- react-router-dom: ^6.0.2
- react-scripts: 4.0.3
- sass: ^1.43.4
- sweetalert: ^2.1.2
- web-vitals: ^1.1.2

## Back-End

- axios: ^0.24.0
- cookie-parser: ^1.4.6
- cors: ^2.8.5
- cron: ^1.8.2
- dotenv: ^10.0.0
- express: ^4.17.1
- moment-timezone: ^0.5.34
- morgan: ^1.10.0
- nodemon: ^2.0.15
- pg: ^8.7.1
- pg-native: ^3.0.0
- twilio: ^3.71.2
