import express from 'express';
import morgan from'morgan'

const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({extennded: false}));

app.get("/", (req, res) => res.json({message: "Welcome 2 my API :p"}));

app.use((err, req, res, next) => {
    res.status(500).json({
        status: "no sé q onda",
        message: err.message,
    });
});

export default app;