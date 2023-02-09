# Telegram Bot Scaffold

This is my scaffold for building Telegram Bots

# Features

- Uses __Yarn PnP__ instead of node_modules. [Read more about this](https://yarnpkg.com/features/pnp);
- ESLint built-in for keeping your code quality;
- Jest built-in for cover your code with tests;
- Automatic code restarting on changes in _src_ folder (nodemon);
- Graceful rrror handling in request handlers;
- Final State Machine (uses Redis);
- MongoDB implemented. Easy to remove from project if you don't need it;
- Can select updates method (webhook on long polling) in src/config.js

# How to

All code sources located in _src_ folder. All built code will be placed in _dist_ folder (with type definitions)

__Get Started__: Clone this repo, copy _src/config.example.ts_ to _src/config.ts_, fill it as you want and run `yarn` in
your terminal and write your code in _src_ folder\
__Run in development__: Run `yarn dev`\
__Build (compile typescript)__: Run `yarn build`\
__Run in production__: Build project and run `yarn start`\
__Run tests (jest)__: Run `yarn test`\
__Run lints (eslint)__: Run `yarn lint`
