# full_stack_react
Project developed to learn how to build and deploy web apps 
https://protected-hollows-99036.herokuapp.com/

### Stack
- [draw.io](https://github.com/jgraph/drawio): view/edit the diagrams
- [Express server](https://expressjs.com/), [MongoDB](https://github.com/mongodb) and [PassportJS](http://www.passportjs.org/): user sign up via Google OAuth
- [Stripe](https://github.com/stripe/stripe-js) and [MongoDB](https://github.com/mongodb): user pay for email
- [React](https://github.com/topics/react) and [Redux](https://github.com/topics/redux): user create new campaign
- [React](https://github.com/topics/react), [Redux](https://github.com/topics/redux) and [Redux Form](https://github.com/redux-form/redux-form): user addition to email list to send survey to
- [Heroku](https://github.com/heroku): handle deployment
  - To start Heroku: 
  ```
  heroku login
  heroku create
  git remote add heroku https://git.heroku.com/<name_of_app_generated>.git
  git push heroku master
  heroku open --app <name_of_app_generated>
  ```
- [Google Cloud Platform](https://console.cloud.google.com/): authentication


### Run
  ```
  git clone 
  cd full_stack_react/server
  nvm install 14.15.5
  npm install --save nodemon
  npm install --save mongoose
  npm install --save cookie-session
  node index.js
  ```
  ```
  cd client
  npm start
  ```
# You are running Node 8.8.1.