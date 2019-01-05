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
// router.post('/', (req, res) => {
//  const prjActn = req.body
//  if (prjActn.description && prjActn.notes && prjActn.project_id) { 
//   actionsDB
//    .insert(prjActn)
//    .then(project_id => {
//     actionsDB
//      .insert(project_id.id)
//      .then(newPrjActn => {
//       res
//        .json(newPrjActn)
//      }).catch(() => {
//     res
//      .status(500)
//      .json({error: "There was an error adding project to DB."})
//    })
//    })
//    .catch(() => {
//     res
//      .status(500)
//      .json({error: "There was an error adding project to DB."}) 
//   })
//  }  
// })
 // }
 // if (description, notes, completed){
 //  actionsDB
 //   .geit(project_id)
 //   .then(() => {
 //    actionsDB
 //     .insert({description, notes, completed})
 //     .then(() => {
 //      res
 //       .json({message: "Action was added to project"})
 //     })
 //     .catch(() => {
 //      res
 //       .json({message: "There was an error adding project."})
 //     })
 //   })
 //   .catch(() => {
 //    res
 //     .json({error: "Error with posting actions."})
 //   })
 // }
// Confirmed unfinished.
router.put('/:id', (req, res) => {
 const { project_id } = req.params
 const { description, notes, completed} = req.body
 if (description, notes, completed, project_id){
  projectDB
   .get(project_id)
   .then(() => {
    actionsDB
     .update({description, notes, completed})
     .then(() => {
      res
       .json({message: "Action was properly updated."})
     })
     .catch(() => {
       res
        .status(400)
        .json({message: "There was an error with the request."})
     })
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