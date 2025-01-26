import express from 'express'
import path from 'path'
import {getProducts} from './utils/dbQueries.js'
import { fileURLToPath } from 'url';
import { dirname } from 'path';
const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const distPath = path.join(__dirname, '../dist/index.html')
app.use(express.static(distPath))

app.get('/api/products', (req, res) => {
    getProducts().then(result => {
        res.send(result)
    })
})

app.get('*', (req, res) => {
    res.sendFile(path.join(distPath));
})

const port = process.env.PORT;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})