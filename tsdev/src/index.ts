import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import { Queue } from "./Queue";


dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000; 
const bodyParser = require('body-parser');
let queue = new Queue; 
let value = "";

 app.use(bodyParser.json());

app.get("/", (req: Request, res: Response) => {

    res.send(`Es sind momentan ${queue.length()} Elemente in der Queue`);
  });

app.post("/enqueue", (req: Request, res: Response) => {

    var req1 = req.query;
    res.send(queue.enqueue(req1.value));
    res.send(`Elemenet der Queue hinzugefügt`);
    res.status(200).json(queue);
})

app.get("/peek", (req: Request, res: Response) => {
    res.send(`The first Element in the Queue is ${queue.peek()}`);
})
  
  app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
  });
