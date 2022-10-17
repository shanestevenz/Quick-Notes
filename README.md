# Final Project

Shane Stevens (smstevens@wpi.edu), Reagan Brunelle (rmbrunelle2@wpi.edu), Siddhartha Pradhan (sppradhan@wpi.edu)
Website link (Quick Notes): https://quick-notes.glitch.me/

We created a sticky notes web app, taking inspiration from Microsoft's Sticky notes (https://apps.microsoft.com/store/detail/microsoft-sticky-notes/9NBLGGH4QGHW). Users are given the ability to create virtual sticky notes and organize them with the choice of 5 colors. These notes features a title and content section that users dynamically add,modify, and delete. Users can also create multiple boards aid in organizaing their sticky notes. Each sticky note is saved to its board for feature use. Users have the option of creating a username and passowrd or through authenticating with their github account

## Additional Instructions
The Login and Register page are straight foreward. After registering, the user is redirected to login screen. There are 2 test accounts ready (user: "user1", pass: "test123") and (user: "user2", pass: "test123")

## Technologies used:
### Frontend
- React: To create an interactive UI
- Tailwind: For styling and ease of development
- snowpack: Build tool to create static pages from src
- postcss: Automate tailwind builds (creates the css file to use in production/development)
### Backend
- node: To create server
- express: To create server and for using middlewares, and ease of development for server
- passport (including passport-github2): To authenticate and register users and to implement OAuth for github
- express-session: To manage sessions for logged in users (users are still logged in after refreshing)
- mongoDB: To manage any app data (Users, notes)
- mongoose: To create schemas for Users and notes in MongoDB, and used to connect to MongoDB
- dotenv: To load .env variables

## Challenges

## Responsibilities
#### Siddhartha Pradhan
- Implemented backend logic (setting up endpoints, mongoDB, mongoose etc). Completed setup that is required for OAuth.
- Created Login and register page for frontend
- Integrated the frontend with backend
5. What each group member was responsible for designing / developing.
6. A link to your project video.

Think of 1,3, and 4 in particular in a similar vein to the design / tech achievements for A1—A4… make a case for why what you did was challenging and why your implementation deserves a grade of 100%.

## FAQs

- **Can I use XYZ framework?** You can use any web-based frameworks or tools available, but for your server programming you need to use Node.js. Your client-side scripting language should be either JavaScript or TypeScript.
