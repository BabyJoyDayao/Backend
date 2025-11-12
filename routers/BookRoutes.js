import * as BookController from "../controllers/BookController.js";
import express from "express";

const BookRoutes = express.Router();

BookRoutes.get('/all',BookController.fetchBooks);

export default BookRoutes;
