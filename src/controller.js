const pool = require("../config/db");
const queries = require("./queries");

// GET All Students
const getStudents = (req, res) => {
  pool.query(queries.getStudents, (error, result) => {
    if (error) throw error;
    res.status(200).json(result.rows);
  });
};

// GET Student By ID
const getStudentByID = (req, res) => {
  const id = parseInt(req.params.id);
  pool.query(queries.getStudentByID, [id], (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
};

// POST a new Student
const addStudent = (req, res) => {
  const { name, age, email, grade } = req.body;
  // check if email exists
  pool.query(queries.checkEmailExists, [email], (error, results) => {
    if (results.rows.length) {
      res.send("Email already exists");
    }
    // Add Student to database
    pool.query(
      queries.addStudent,
      [name, email, age, grade],
      (error, results) => {
        if (error) throw error;
        res.status(201).json({ message: "Student Created Successfully!" });
      }
    );
  });
};

// PUT , Update Name, Email Student
const updateStudentByID = (req, res) => {
  const id = parseInt(req.params.id);
  const { name, email } = req.body;
  // Check If the ID Exist or not
  pool.query(queries.getStudentByID, [id], (error, results) => {
    if (!results.rows.length) {
      res
        .status(404)
        .json({ message: "The Student does not exist in database!" });
    }
    // Update just name, email Student
    pool.query(queries.updateStudent, [name, email, id], (error, results) => {
      if (error) throw error;
      res.status(200).json({ message: "Student Updated Successfully." });
    });
  });
};

// Delete One Student By ID
const removeStudent = (req, res) => {
  const id = parseInt(req.params.id);
  // Check If the ID Exist or not
  pool.query(queries.getStudentByID, [id], (error, results) => {
    if (!results.rows.length) {
      res
        .status(404)
        .json({ message: "The Student does not exist in database!" });
    }
    // Delete Student
    pool.query(queries.removeStudent, [id], (error, results) => {
      if (error) throw error;
      res.status(200).json({ message: "Student removed Successfully." });
    });
  });
};

module.exports = {
  getStudents,
  getStudentByID,
  addStudent,
  updateStudentByID,
  removeStudent,
};
