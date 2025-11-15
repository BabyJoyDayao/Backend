import * as BookController from "../controllers/BookController.js";
import express from "express";

const BookRoutes = express.Router();

BookRoutes.get('/all',BookController.fetchBooks);
BookRoutes.post('/new',BookController.createBook);
BookRoutes.put('/edit/:bookId',BookController.editBook);
BookRoutes.delete('/delete/:bookId',BookController.deleteBook);

export default BookRoutes;
