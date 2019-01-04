const express = require("express")
const router = express.Router()
const actionsDB = require("../helpers/actionModel")

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
 // const { }

})
router.put('/:id', (req, res) => {

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