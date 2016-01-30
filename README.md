This is a basic demonstration of react. The purpose of this demo is to show how react works with reflux and how 
reflux communicates with a server. A test server based on express is included in this repo. The server is listening 
on port 6060. I have also included http-server in the node modules to simulate a live session.
To test this out run npm install, npm start to compile, http-server -p "any port you wish", node 
src/react/testServer/server.js.

Try registering to "Get free e-book". If the submission is successfull you should get a "Thank you!" message and the 
subscriber should be pushed to the server.

This demo is based on my react-seed repo. See description below for more info.

This is a simple react skeleton.
It uses the following npm packages:
1. Browserify
2. Watchify
3. Babel
4. Babelify
5. Babel preset react
6. Bable preset es2015

I have included some basic test data to test that everything is working. In src/react/components you will find two 
files List.jsx and ListItem.jsx. These are the test files. You can delete them after making sure that the skeleton 
works. In src/react you have the main entry point App.jsx file. You should customize it according to your needs. Also
the main index.html file in public should also be customized. 

All you have to do to start is run npm install and then npm start.
Npm start will start watchify in your terminal and compile from App.jsx to main.js in public/js.