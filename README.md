# shlokafinder
Project Title:
 Shloka Finder – Full-Stack Web Application

1.The Shloka finder is a full-stack web application that allows users to:
browse and explore Shlokas from the Bhagavad Gita.
2. Search for specific Shlokas using a dynamic search bar.
3. View translations and meanings of the Shlokas.
4.Store  Shlokas in MongoDB Compass for local database usage.



Technologies Used:
 1. Frontend:
React.js → For building the user interface and creating reusable components.
Tailwind CSS → For consistent styling and responsive design.
Styled-components → For component-level styling.
React Router → For client-side routing between pages.
React-icons → For adding icons to the UI.

2. Backend:
Node.js → To run the backend server.
Express.js → To create the RESTful API.
MongoDB Compass → Cloud-based NoSQL database to store sample Shlokas.
Mongoose → To define MongoDB schemas and interact with the database.
Dotenv → To manage environment variables.
CORS → To allow frontend-backend communication.

External API:
RapidAPI (Bhagavad Gita API) 

3. Software Installation and URLs
To run this project, you need to install the following software:

 1. Node.js
Required to run the backend server and execute the project scripts.

Download URL:[ Node.js](https://nodejs.org/en/download)

 2. MongoDB Atlas:
Cloud-based NoSQL database to store sample Shlokas.
Sign up and create a free cluster:
URL: MongoDB Atlas
or
Install MongoDB Compass 
URL:https://www.mongodb.com/products/tools/compass

5. Git and GitHub (Optional for Version Control)

Install Backend Dependencies
Install the necessary Node.js backend packages:
npm install express mongoose dotenv cors

 3. Install Frontend Dependencies
Install React.js and Tailwind CSS dependencies:
 
 4. Environment Variables
Create a .env file in the backend folder and add the following variables:

 5. Running the Server
Start the backend server:

node server.js
6. Running the Frontend
Start the React frontend:

7. How to Run the Project
Start the Backend:


 Features of the Project
Home Page: Displays the Bhagavad Gita banner and navigation links.
Chapters Page: Displays cards for each chapter with descriptions.
Verse Page: Displays individual verses with translation.
Search Functionality:
Dynamic search bar to filter Shlokas by text or author.
MongoDB Integration:
Stores sample Shlokas in MongoDB Atlas for proof of local database usage.


 Folder Structure

/backend  
 ├── models          → Mongoose schema  
 ├── routes          → REST API routes  
 ├── server.js       → Main server file  
 ├── insertData.js   → Script for inserting Shlokas  
 ├── .env            → Environment variables  
/frontend  
 ├── components      → React components  
 ├── pages           → Individual pages (Home, Chapters, About, etc.)  
 ├── App.js          → Main component  
 ├── index.js        → React entry point  
 ├── package.json    → Frontend dependencies  

