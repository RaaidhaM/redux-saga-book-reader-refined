# Redux-saga Refined
This is a refined solution of the basic implementation https://www.google.com/


# project-structure
 
 src->app->actions->userActions 
 Contains JavaScript objects that describe the actions performed within the app. Each action may include a payload, which is typically the response or data associated with the action.

 src->app->api
 Contains all the API request functions used throughout the application. These functions handle communication with external services.

 src->app->components
 Holds the presentational components, which focus solely on rendering the UI based on the data received via props.

 src->app->containers
 Contains the container components, which connect the presentational components to the Redux store and manage state-driven logic.

 src->app->reducers
 Defines the reducers responsible for handling the dispatched actions and updating the application's state accordingly.

 src->app->sagas
 Contains the sagas (generator functions) that handle side effects and manage the flow of actions.

 src->app->selectors
 Includes functions that retrieve specific pieces of data from the Redux store in an efficient and reusable way.

 src->app->entities
 Contains a set of constants used across the application.

 src->app->storage
 Configures and creates the Redux store, linking it to Redux-Saga middleware for handling side effects.

 src->app.js
 Adds the containers to render the UI.

 src->index.js
 This is the main component of the application, responsible for rendering the UI. 


# Run the application 
 To start the application in development mode, run "npm run start". Once the app is compiled, open http://localhost:3000 in your browser to view the application.