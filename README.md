# The Chat

A simple 🗣 system to have some fun with Socket.io

# Where to run

This project was designed to run in a Unix or Linux system. If you use Windows, I'm sorry but I have no idea how to go about making it work on that system. I'm open to any PR to fix this :)

# How to run the project

1. you need ot have Redis on your machine to make this work.
1. you need to create a `.env` file, either by hand - check out the `app.json` to find out which variables are needed. Or you can install [env-auto](https://www.npmjs.com/package/env-auto) and use that simple tool to auto generate the `.env` file for you. Some edits might be required.
1. type `npm install` to install all the necessary modules
1. type `npm run` to start the server
1. open the `index.html` file and have fun with your friends

# What to expect

1. The front end is very basic, to let you focus on the solution itself, and not on my bad design taste ;)
1. The chat app requires you to type a name before you can start chatting
1. Some bogus historical data will be shown in the chat app, to make it look like someone was there before you ;)
1. The app will also reorder the conversation history no matter in which order the messages come in.

# How to run the test

https://stackoverflow.com/questions/15509231/unit-testing-node-js-and-websockets-socket-io
http://liamkaufman.com/blog/2012/01/28/testing-socketio-with-mocha-should-and-socketio-client/

# What I didn't get from the instructions

One thing perplexed me is the two microservice situation, so I decided to consider REDIS as the 2nd microservice :D

# The end

I hope that you enjoyed playing with the chat app, and don't hesitate to check some other projects that I did by following this URL: https://github.com/davidgatti 😊

David.