import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';

dotenv.config()

const app = express();
app.use(cors());
app.use(express.json({ limit: "50mb" }));

app.get('/', (req, res) => {
    res.status(200).json('Hello from DALL E');
})

app.listen(8080, () => {
    console.log('Server is running on port 8080');
})