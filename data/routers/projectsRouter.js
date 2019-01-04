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

})
router.post('/', (req, res) => {

})
router.put('/:id', (req, res) => {

})
router.delete('/:id', (req, res) => {

})

module.exports = router 