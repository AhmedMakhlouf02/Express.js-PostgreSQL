const getStudents = "SELECT * FROM students";
const getStudentByID = "SELECT * FROM students WHERE id = $1";
const checkEmailExists = "SELECT * FROM students s WHERE s.email = $1";
const addStudent ="INSERT INTO students (name,email,age,grade) VALUES ($1, $2, $3, $4)";
const updateStudent = "UPDATE students SET name = $1 ,email = $2 WHERE id = $3";
const removeStudent = "DELETE FROM students WHERE id = $1";


module.exports = {
    getStudents,
    getStudentByID,
    checkEmailExists,
    addStudent,
    updateStudent,
    removeStudent,
}