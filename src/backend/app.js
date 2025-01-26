import express from 'express'
import path from 'path'
import {getProducts} from './utils/dbQueries.js'
import { fileURLToPath } from 'url';
import { dirname } from 'path';
const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const distPath = path.join(__dirname, '..', '..', 'dist')
app.use(express.static(distPath))

app.get('/', (req, res) => {
    res.sendFile(path.join(distPath, 'index.html'))
})

app.get('/api/products', (req, res) => {
    getProducts().then(result => {
        res.send(result)
    })
})

app.get('/products', (req, res) => {
    res.sendFile(path.join(distPath, 'index.html'));
})

app.get('/contact', (req, res) => {
    res.sendFile(path.join(distPath, 'index.html'));
})

const port = process.env.PORT;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})