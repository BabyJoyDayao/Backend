import * as BookController from "../controllers/BookController.js";
import express from "express";
import authHandler from "../middleware/authHandler.js";


const BookRoutes = express.Router();

bookRouter.use(authHandler);

BookRoutes.get('/all',BookController.fetchBooks);
BookRoutes.post('/new',BookController.createBook);
BookRoutes.put('/edit/:bookId',BookController.editBook);
BookRoutes.delete('/delete/:bookId',BookController.deleteBook);

export default BookRoutes;
