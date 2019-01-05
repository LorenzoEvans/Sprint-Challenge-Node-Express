const express = require("express")
const router = express.Router()
const actionsDB = require("../helpers/actionModel")
const projectDB = require("../helpers/projectModel")
// Confirmed working.
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

// Confirmed working.

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
// Confirmed working.

router.post('/', (req, res) => {
 const prjActn = req.body
 if (prjActn.project_id && prjActn.description && prjActn.notes) {
  actionsDB
   .insert(prjActn)
   .then(() => {
    res
     .json({message: "Added new action to DB."})
   })
   .catch(() => {
    res
     .status(500)
     .json({error: "There was an error adding action to DB."})
   })
 }
 else {
  res
   .status(400)
   .json({message: "Action was not added to to DB."})
 }
})

router.put('/:id', (req, res) => {
 const { id } = req.params
 const newAction = req.body
 if (newAction.description, newAction.notes, newAction.project_id){
    actionsDB
     .update(id, newAction)
     .then(() => {
      res
       .json({action: newAction, message: "Action was properly updated."})
     })
     .catch(() => {
       res
        .status(400)
        .json({message: "There was an error with the request."})
   })
   .catch(() => {
    res
     .status(500)
     .json({error: "There was an error updating action."})
   })
 }
})
// Confirmed working.
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