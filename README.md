# The Chat

A simple 🗣 system to have some fun with Socket.io

# Where to run

This project was designed to run in a Unix or Linux system. If you use Windows, I'm sorry but I have no idea how to go about making it work on that system. I'm open to any PR to fix this :)

# How to run the project in production

This project is deployed on Heroku, and the `the-chat.html` is pointing to that external server, meaning you can start chatting with your friends right away.

# How to run the project locally

1. you need ot have Redis on your machine to make this work.
1. you need to create a `.env` file, either by hand - check out the `app.json` to find out which variables are needed. Or you can install [env-auto](https://www.npmjs.com/package/env-auto) and use that simple tool to auto generate the `.env` file for you. Some edits might be required.
1. type `npm install` to install all the necessary modules
1. type `npm run` to start the server
1. open the `the-chat.html` file and have fun with your friends

# What to expect

1. The front end is very basic, to let you focus on the solution itself, and not on my bad design taste ;)
1. The chat app requires you to type a name before you can start chatting
1. Some bogus historical data will be shown in the chat app, to make it look like someone was there before you ;)
1. The app will also reorder the conversation history no matter in which order the messages come in.

# How to run the test

1. Start the server in another terminal window.
1. Type `npm test`, and keep your finger cross 🤞.

**WARNING**: some IP and port changes may apply.

# The End

If you enjoyed this project, please consider giving it a 🌟. And check out my [GitHub account](https://github.com/davidgatti), where you'll find additional resources you might find useful or interesting.

## Sponsor 🎊

This project is brought to you by 0x4447 LLC, a software company specializing in building custom solutions on top of AWS. Follow this link to learn more: https://0x4447.com. Alternatively, send an email to [hello@0x4447.email](mailto:hello@0x4447.email?Subject=Hello%20From%20Repo&Body=Hi%2C%0A%0AMy%20name%20is%20NAME%2C%20and%20I%27d%20like%20to%20get%20in%20touch%20with%20someone%20at%200x4447.%0A%0AI%27d%20like%20to%20discuss%20the%20following%20topics%3A%0A%0A-%20LIST_OF_TOPICS_TO_DISCUSS%0A%0ASome%20useful%20information%3A%0A%0A-%20My%20full%20name%20is%3A%20FIRST_NAME%20LAST_NAME%0A-%20My%20time%20zone%20is%3A%20TIME_ZONE%0A-%20My%20working%20hours%20are%20from%3A%20TIME%20till%20TIME%0A-%20My%20company%20name%20is%3A%20COMPANY%20NAME%0A-%20My%20company%20website%20is%3A%20https%3A%2F%2F%0A%0ABest%20regards.).
