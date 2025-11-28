import express from "express";
import 'dotenv/config.js';
import studentRoutes from "./routers/StudentRoutes.js";
import bookRoutes from "./routers/BookRoutes.js";
import userRoutes from "./routers/UserRoutes.js";
import cors from "cors";


const app = express();



const corsOptions ={
    origin: process.env.ORIGIN
}

app.use(express.json());
app.use(cors(corsOptions));

app.use((req, res, next) =>{
    console.log(req.path, req.method);
    next();
});

app.use('/book', bookRoutes);
app.use('/student', studentRoutes);
app.use('/user', userRoutes);

app.use((req, res) =>{
    res.status(404).json({error: "Route not found"});

});

const port = 2004;

try{
    app.listen(process.env.PORT || 3000 , ()=>{
        console.log(`Listening to port ${process.env.PORT || 3000}...`)
})

}catch(e){
    console.log(e);
}



