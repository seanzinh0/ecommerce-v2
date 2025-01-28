// import express and path
import express from 'express'
import path from 'path'

// import get products from utils
import {getProducts} from './utils/dbQueries.js'

// import functions for file url and directory paths
import { fileURLToPath } from 'url';
import { dirname } from 'path';

// new express app
const app = express();

// get current file name and directory path
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// path for dist folder that navigates out of current file
const distPath = path.join(__dirname, '..', '..', 'dist')

// serve dist folder
app.use(express.static(distPath))

// routes for navigating pages
app.get('/', (req, res) => {
    res.sendFile(path.join(distPath, 'index.html'))
})

// route that gets products
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