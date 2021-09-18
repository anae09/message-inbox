# Simple Message Inbox
Message Inbox created using Angular &amp; NodeJS &amp; MongoDB.

## Required Libraries
Frontend: <br/>
Angular Material: ng add @angular/material / https://material.angular.io/guide/getting-started <br/>
Backend: <br/>
express: https://expressjs.com/en/starter/installing.html <br/>
cors: https://www.npmjs.com/package/cors <br/>
bodyParser: https://www.npmjs.com/package/body-parser <br/>
mongoose: https://www.npmjs.com/package/mongoose <br/>

## Run Application

Create database "inbox" and collections "messages", "threads" and "users". Import JSON objects from db folder.
To run application open 2 terminals.
In one terminal:
```
cd backend
tsc
npm run serve
```

In other terminal:
```
cd frontend/app
ng serve --open
```
<br>
Use test data to login:<br>
username: john_lennon<br>
password: 123B.
