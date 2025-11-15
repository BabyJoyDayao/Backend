import * as StudentController from  '../controllers/StudentController.js';
import express from "express";

const studentRoutes = express.Router();

studentRoutes.get('/all', StudentController.fetchStudents);
studentRoutes.get('/new', StudentController.createStudent);
studentRoutes.get('/edit/:studentId', StudentController.editStudent);
studentRoutes.get('/delete/:studentId', StudentController.deleteStudent);


export default studentRoutes;