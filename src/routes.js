const express = require("express");
const router = express.Router({ mergeParams: true });
const controller = require('./controller')

router.get('/', controller.getStudents);
router.post("/", controller.addStudent);
router.get("/:id", controller.getStudentByID);
router.put("/:id", controller.updateStudentByID);
router.delete("/:id", controller.removeStudent);


module.exports = router;