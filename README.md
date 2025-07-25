This is the front end for teh coffe payer app.  Install all dependencies by running "npm install".  To run the application, run "npm run dev".  The way the coffee application works is as follows:

Users create accounts so they have a user id.  The user id is returned and saved in session storage (need to clear application storage if you want a clean loggin).  After a user has logged in they can create a session or join a session.  When a user creates a session, a session id is returned and displayed to the user,  Other users can then join the session by clicking the join session and entering the session id.  When a user joins a session they can then enter their order amount and select a method for determinning who pays.  Once all users have voted, results are determined for who is paying and the total amount.

I was not able to impoment thorough testing due to time limitations, but it should all be tested.  
