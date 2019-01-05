const express = require("express")
const router = express.Router()
const actionsDB = require("../helpers/actionModel")
const projectDB = require("../helpers/projectModel")

router.get('/', (req, res) => {
 actionsDB
  .get()
  .then(actions => {
   res
    .json(actions)
  })
  .catch(() => {
   res
    .status(500)
    .json({error: "Error fetching actions from database."})
  })
})
router.get('/:id', (req, res) => {
 const { id } = req.params
 actionsDB
  .get(id)
  .then(action => {
   res
    .json(action)
  })
  .catch(() => {
   res
    .status(500)
    .json({error: "There was an error fetching action from database."})
  })
})
router.post('/', (req, res) => {
 const { project_id } = req.params
 const { description, notes, completed} = req.body
 if (description, notes, completed, project_id){
  projectDB
   .get(project_id)
   .then(() => {
    actionsDB
     .insert({description, notes, completed})
     .then(() => {
      res
       .json({message: "Action was added to project"})
     })
     .catch(() => {
      res
       .json({message: "There was an error adding project."})
     })
   })
   .catch(() => {
    res
     .json({error: "Error with posting actions."})
   })
 }
})
router.put('/:id', (req, res) => {
 const { project_id } = req.params
 const { description, notes, completed} = req.body
 if (description, notes, completed, project_id){
  
 }
})
router.delete('/:id', (req, res) => {
 const { id } = req.params
 actionsDB
  .remove(id)
  .then(() => {
   res
    .json({message: "Action was removed from the database successfully."})
  })
  .catch(() => {
   res
    .status(500)
    .json({error: "There was an error removing action from database."})
  })
})

module.exports = router