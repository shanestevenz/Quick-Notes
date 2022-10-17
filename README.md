# Final Project

Shane Stevens (smstevens@wpi.edu), Reagan Brunelle (rmbrunelle2@wpi.edu), Siddhartha Pradhan (sppradhan@wpi.edu)
Website link (Quick Notes): https://quick-notes.glitch.me/

We created a sticky notes web app, taking inspiration from Microsoft's Sticky notes (https://apps.microsoft.com/store/detail/microsoft-sticky-notes/9NBLGGH4QGHW). Users are given the ability to create virtual sticky notes and organize them with the choice of 5 colors. These notes features a title and content section that users dynamically add,modify, and delete. Users can also create multiple boards aiding in the organization of their sticky notes. Each sticky note is saved to its board for feature use. Users have the option of creating a username and password or through authenticating with their github account.

## Additional Instructions
The Login and Register page are straight foreward. After registering, the user is redirected to login screen. There are 2 test accounts ready (user: "user1", pass: "test123") and (user: "user2", pass: "test123")

## Technologies used
### Frontend
- React: To create an interactive UI
- Tailwind: For styling and ease of development
- snowpack: Build tool to create static pages from src
- postcss: Automate tailwind builds (creates the css file to use in production/development)
### Backend
- node: To create server
- express: To create server and for using middlewares, and ease of development for server
- passport (including passport-github2): To authenticate and register users and to implement OAuth for github, used custom middleware/strategy for local login
- express-session: To manage sessions for logged in users (users are still logged in after refreshing)
- mongoDB: To manage any app data (Users, notes)
- mongoose: To create schemas for Users and notes in MongoDB, and used to connect to MongoDB
- dotenv: To load .env variables

## Challenges

3. An outline of the technologies you used and how you used them.
## Challenges
- We faced a lot of dificulty with setting up the initial project using React and Snowpack. We likely spent around 3 hours fixing all the configs and routes before we could even really start on the project. We ended up using create-snowpack-app which eased are troubles a little.
- We also experienced diffucilty when implementing the Login page with cookies. We ended up changing the rendering from being client side to server in order to help fix some of the issues we had routing and saving the cookies.
- The side bar was also surprising challenging. We intially used a react-burger-menu to have a slidng out sidebar but we ended up abandoning this because it was a css nightmare.
- Dynamically sizing the notes were also somewhat of a challenge. We ended up making the note a flexbox  and using a react TextareaAutosize component to help autosize the note when they got too long

## Responsibilities
 ### Reagan Brunelle
 - UI Design
 - Frontend React development: Sidebar and boards
 - Lots of frontend troublshooting
 - Certified CSS gurus
 ### Shane Stevens
 - UI Design and Mock ups
 - Frontend React development: Notes and Add notes
 - Lots of backend troubleshooting
 - Certified CSS gurus

#### Siddhartha Pradhan
- Implemented backend logic (setting up endpoints, mongoDB, mongoose etc). Completed setup that is required for OAuth.
- Created Login and register page for frontend
- Integrated the frontend with backend


 ## Project Video
 - LINK HERE
## Responsibilities


## Video link

