# product-manager
Full Stack MERN


Let's jump right into creating our full stack MERN project. First, create a new folder called "myNewProject" and cd into it.

mkdir myNewProject
cd myNewProject
copy
OPTIONAL: If you want to create this full stack app in a git repository do the following:

git init                            //adds a .git hidden directory and initializes root folder as a local repo
echo node_modules/ > .gitignore     //creates a .gitignore file in the app's root that will ignore all node_modules
copy
Next, create a new folder called "server" and cd into it.

mkdir server
cd server
copy
Next, via the terminal or the UI, create a new file called server.js.

Mac: touch server.js
Windows (gitbash): touch server.js
Windows: copy nul server.js
copy
Next, create a new project via:

npm init -y
copy
This will create the package.json for our server. We will then need to install our dependencies:

npm install express
npm install mongoose
copy
Then, within the server.js add the following code:

const express = require('express');
const app = express();
const port = 8000;
    
app.listen(port, () => console.log(`Listening on port: ${port}`) );copy
Let's create our modularized project structure by making four more folders within server folder that are called "config", "controllers", "models" and "routes".

This is how we create the project structure for our backend. Now, let's create our React project via create-react-app. Since React is used for the client side code, we can call our project "client". Make sure you are in the root folder level for your project.

cd ..
npx create-react-app client
copy
Now that you have your React project built, you will be running two different servers: your front end React server with live reloading and your Express server.
