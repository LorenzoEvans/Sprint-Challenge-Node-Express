const express = require("express")
const router = express.Router()
const projectsDB = require("../helpers/projectModel")
// Confirmed working.
router.get('/', (req, res) => {
 projectsDB
  .get()
  .then((projects) => {
   res
    .json(projects)
  })
  .catch(() => {
   res
    .status(500)
    .json({error: "Error fetching projects from database."})
  })
})
// Confirmed working.
router.get('/:id', (req, res) => {
 const { id } = req.params
 projectsDB
  .get(id)
  .then(project => {
   res
    .json(project)
  })
  .catch(() => {
   res
    .status(500)
    .json({error: "Error fetching project from database."})
  })
})
// Confirmed working.
router.post('/', (req, res) => {
 const { name, description, completed } = req.body
  if (name, description, completed) {
   projectsDB
    .insert({name, description, completed})
    .then(({name, description, completed}) => {
     res
      .status(200)
      .json({name, description, completed})
    })
  }
  else {
   res
    .status(500)
    .json({error: "Error adding project to database."})
  }
})
//Confirmed working.
router.put('/:id', (req, res) => {
 const { id } = req.params
 const {name, description, completed} = req.body
 if (name, description, completed && id) {
  projectsDB
   .update(id, req.body)
   .then(() => {
    res
     .json({message: "Project has been updated with new data."})
   })
 }
 else {
  res
   .catch(() => {
    res
     .status(500)
     .json({error: "There was an error updating projects."})
   })
 }

})
// Confirmed working.
router.delete('/:id', (req, res) => {
 const { id } = req.params
 projectsDB
  .remove(id)
  .then(() => {
   res
    .json({message: "Project was removed from database."})
  })
  .catch(() => {
   res
    .status(500)
    .json({error: "There was an error removing project from database."})
  })

})

module.exports = router 