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

If you've enjoyed this article/project, please consider giving it a 🌟 or donate.

- [![Donate](https://img.shields.io/badge/Donate-PayPal-green.svg)](https://www.paypal.me/gattidavid/25)
- [![Star on GitHub](https://img.shields.io/github/stars/davidgatti/theChat.svg?style=social)](https://github.com/davidgatti/theChat/stargazers)
- [![Watch on GitHub](https://img.shields.io/github/watchers/davidgatti/theChat.svg?style=social)](https://github.com/davidgatti/theChat/watchers)

Also check out my [GitHub account](https://github.com/davidgatti), where I have other articles and apps that you might find interesting.

## For Hire 👨‍💻

If you'd like me to help you, I'm available for hire. Contact me at job@gatti.pl.

## Where to follow

You can follow me on social media 🐙😇, at the following locations:

- [GitHub](https://github.com/davidgatti)
- [Twitter](https://twitter.com/dawidgatti)
- [Instagram](https://www.instagram.com/gattidavid/)

## More about me

I don’t only live on GitHub, I try to do many things not to get bored 🙃. To learn more about me, you can visit the following links:

- [Podcasts](http://david.gatti.pl/podcasts)
- [Technical Articles](http://david.gatti.pl/technical_articles)
- [Software Projects](http://david.gatti.pl/software_projects)
- [Hardware Projects](http://david.gatti.pl/hardware_projects)
