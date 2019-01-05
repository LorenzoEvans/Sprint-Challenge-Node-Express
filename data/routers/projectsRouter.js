const express = require("express")
const router = express.Router()
const projectsDB = require("../helpers/projectModel")

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
router.post('/', (req, res) => {
 const { name, description, completed } = req.params
  if (name, description, completed) {
   projectsDB
    .insert({name, description, completed})
    .then(({name, description, completed}) => {
     res
      .status(400)
      .json({name, description, completed})
    })
  }
  else {
   res
    .status(500)
    .json({error: "Error adding project to database."})
  }
})
router.put('/:id', (req, res) => {

})
router.delete('/:id', (req, res) => {
 const { id } = req.params
 projectsDB
  .remove(id)
  .then(project => {
   res
    .json(project)
  })
  .catch(() => {
   res
    .status(500)
    .json({error: "There was an error removing project from database."})
  })

})

module.exports = router 