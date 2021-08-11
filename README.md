# [Express router](https://expressjs.com/en/5x/api.html#router)
---

> A router object is an isolated instance of middleware and routes. You can think of it as a “mini-application,” capable only of performing middleware and routing functions. Every Express application has a built-in app router... The top-level express object has a Router() method that creates a new router object.

Once you’ve created a router object, you can add middleware and HTTP method routes (such as get, put, post, and so on) to it just like an application. For example:
```Javascript
// invoked for any requests passed to this router
router.use(function (req, res, next) {
  // .. some logic here .. like any other middleware
  next()
})

// will handle any request that ends in /events
// depends on where the router is "use()'d"
router.get('/events', function (req, res, next) {
  // ..
})
```
You can then use a router for a particular root URL in this way separating your routes into files or even mini-apps.
```Javascript
// only requests to /calendar/* will be sent to our "router"
app.use('/calendar', router)
```

## express.Router 
> Use the express.Router class to create modular, mountable route handlers. A Router instance is a complete middleware and routing system; for this reason, it is often referred to as a “mini-app”. The following example creates a router as a module, loads a middleware function in it, defines some routes, and mounts the router module on a path in the main app. Create a router file named birds.js in the app directory, with the following content:

```Javascript
const express = require('express')
const router = express.Router()

// middleware that is specific to this router
router.use(function timeLog (req, res, next) {
  console.log('Time: ', Date.now())
  next()
})
// define the home page route
router.get('/', function (req, res) {
  res.send('Birds home page')
})
// define the about route
router.get('/about', function (req, res) {
  res.send('About birds')
})

module.exports = router
```

Then load the router module in the app: 

```Javascript
const birds = require('./birds')
// ...
app.use('/birds', birds)
```

[Source: express.Router documentation](https://expressjs.com/en/5x/api.html#router)