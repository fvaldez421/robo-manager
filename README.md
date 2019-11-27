
# Welcome to Robo Manager

This is a client side dashboard application for managing a fleet of robots.

The application allows users to add, update, and delete robots; as well as view the current condition and position of existing robots.

### To Run locally:

Clone this repo down locally by cd'ing into your preferred directory, then entering git clone <link>

Once the project is cloned down, you cd into the project directory (`cd robo-manager`), enter `yarn install`, and then `yarn start`.

The project should start up locally and upen a tab on your preferred browser automatically.

### Tech:

This application is based on a `create-react-app` template (a bare bones react app with little to no overhead). 
The application is running a "Redux Sagas" flavored implementation of Redux-Thunk (see improvements).


### Improvements:
If planning to scale to enterprise level, maybe build a generator library or convert to Redux Sagas
