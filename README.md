# Sprint Challenge: Express and Node.js - Projects & Actions

This challenge allows you to practice the concepts and techniques learned over the past Sprint and apply them in a concrete project. This Sprint explored Building RESTful Web APIs with Express and Node.js, Server-side Routing, Express Middleware & Deployment and Good Practices. In your challenge for this Sprint, you will demonstrate proficiency by creating an Web API using Node.js and Express.

## Instructions

**Read these instructions carefully. Understand exactly what is expected _before_ starting this Sprint Challenge.**

This is an individual assessment. All work must be your own. Your challenge score is a measure of your ability to work independently using the material covered through this sprint. You need to demonstrate proficiency in the concepts and objectives introduced and practiced in preceding days.

You are not allowed to collaborate during the Sprint Challenge. However, you are encouraged to follow the twenty-minute rule and seek support from your PM and Instructor in your cohort help channel on Slack. Your work reflects your proficiency Building RESTful APIs with Node.js and Express; and your command of the concepts and techniques taught during the Express and Node.js, Server-side Routing, Express Middleware & Deployment and Good Practices modules.

You have three hours to complete this challenge. Plan your time accordingly.

## Commits

Commit your code regularly and meaningfully. This helps both you (in case you ever need to return to old code for any number of reasons and your project manager).

## Description

In this challenge, create a web API around the following resources: `Projects` and `Actions`.

## Self-Study/Essay Questions

Demonstrate your understanding of this Sprint's concepts by answering the following free-form questions. Edit this document to include your answers after each question. Make sure to leave a blank line above and below your answer so it is clear and easy to read by your project manager.

- [ ] Mention two parts of Express that you learned about this week.

 Two parts of express that I learned about were:
 Express Router: part of the functionality of the Express framework that allows for modularity
 by separating out the routes and their desired functionality into separate components, in order to
 keep codebases from getting too long/difficult to read.
 Ports: One of the interesting things I learned was that you can actually set your port variable to
 a default port of your choosing, and use the logical or operator with process.env.port to allow Node/Express apps to use the default port of the machine (environment) that they're running on/in.

- [ ] Describe Middleware?
 Middleware, which is effectively built-in or newly written code that extends the functionality
 of a framework or library, from within the confines or context of the library, so that more
 complex actions can be taken by the app, or even by the user.

- [ ] Describe a Resource?
 A resource is effectively and data, data objects, or combination of the two that can be interacted with
 and subsequently manipulated via CRUD operations using Express and middleware.

- [ ] What can the API return to help clients know if a request was successful?
 The API can return a status code 200-202, if request was Ok, an object was created, or a request was accepted. In addition to this, the API can return a JSON object containing a message to let the user know the result of their request, if they're not familiar with HTTP status codes.
- [ ] How can we partition our application into sub-applications?
 You can break an application into sub applications, by using Express's built in router to modularize your end points, and use module.exports to section off your middleware, in addition to perhaps having your resources (database files) broken out into files according to the middleware and routers that will utilize it.


## Project Setup

- [ ] **Fork** and **Clone** this repository.
- [ ] **CD into the folder** where you cloned the repository.
- [ ] **Read** the following information about your database and schema.

## Database Persistence Helpers

So that you have a thorough understanding of what the limitations of your Database and Data Models are, please read the following before implemnting the Minimum Viable Product:

The `/data/helpers` folder includes helper files that you can use to manage the persistence of _project_ and _action_ data. These files are `projectModel.js` and `actionModel.js`. Both files publish the following api, which you can use to store, modify and retrieve each resource:

- `get()`: calling get returns an array of all the resources contained in the database. If you pass an `id` to this method it will return the resource with that id if one is found.
- `insert()`: calling insert passing it a resource object will add it to the database and return the newly created resource.
- `update()`: accepts two arguments, the first is the `id` of the resource to update, and the second is an object with the `changes` to apply. It returns the updated resource. If a resource with the provided `id` is not found, the method returns `null`.
- `remove()`: the remove method accepts an `id` as it's first parameter and, upon successfully deleting the resource from the database, returns the number of records deleted.

The `projectModel.js` helper includes an extra method called `getProjectActions()` that takes a _project id_ as it's only argument and returns a list of all the _actions_ for the _project_.

**All these helper methods return a promise.**
**Use _Postman_ to test the API as you work through the exercises.**

## Minimum Viable Product

- [ ] Take the steps necessary to create a `package.json` to keep a record of all dependencies.
- [ ] Use _yarn_ to add **knex** and **sqlite3** as dependencies to the project. **This is required for database access**.
- [ ] Configure an _npm script_ named _"start"_ that will execute your code using _nodemon_ so that the **server restarts on changes**. Make _nodemon_ be a development time dependency only, it shouldn't be deployed to production.

Design and build the necessary endpoints to:

- [ ] Perform CRUD operations on _projects_ and _actions_.
- [ ] Retrieve the list of actions for a project.

## Database Schemas

The _schemas_ (properties and data type of each property) used to store and retrieve the resources inside the included database (`lambda.sqlite3`) is described below.

## Projects

- `id`: number, no need to provide it when creating projects, the database will generate it.
- `name`: string, up to 128 characters long, required.
- `description`: string, no size limit, required.
- `completed`: boolean to indicate if the project has been completed, not required

## Actions

- `id`: number, no need to provide it when creating posts, the database will automatically generate it.
- `project_id`: number, required, must be the id of an existing project.
- `description`: string, up to 128 characters long, required.
- `notes`: string, no size limit, required. Used to record additional notes or requirements to complete the action.
- `completed`: boolean to indicate if the action has been completed, not required

We have provided test data for all the resources.

Now that we have a way to add, update, remove and retrieve data from the provided database, it's time to work on the API.

## Stretch Goal

- Use `create-react-app` to create an application in a separate folder (outside the API project folder). Name it anything you want.
- From the React application show a list of all _projects_ using the API you built.
- Add functionality to show the details of a project, including its actions, when clicking a project name in the list. Use React Router to navigate to a separate route to show the project details.
- Add styling! Perhaps with [`styled-components`](https://www.styled-components.com/).
