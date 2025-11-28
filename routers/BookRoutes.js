import * as BookController from "../controllers/BookController.js";
import express from "express";
import authHandler from "../middleware/authHandler.js";


const bookRoutes = express.Router();


bookRoutes.get('/all',authHandler,BookController.fetchBooks);
bookRoutes.post('/new',authHandler, BookController.createBook);
bookRoutes.put('/edit/:bookId',authHandler, BookController.editBook);
bookRoutes.delete('/delete/:bookId',authHandler, BookController.deleteBook);

export default bookRoutes;


