import express from "express";
 
// Create an Express app
const app = express();


// Middleware
app.use(express.json());


const port = 3000;



app.get("/PatPat", async(request, response) => {
    response.status(200).json({ Message: "Hello Im Baby Joy!" });
//200 is okay, 404 is galing sa status

});



// Routes
try {
    app.listen(port, () => {
        console.log('listening on port 3000...');
    });
}catch (e) {
    console.log(e);
}


