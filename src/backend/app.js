import express from 'express'
import path from 'path'
import {getProducts} from './utils/dbQueries.js'
const app = express();

const distPath = path.join(__dirname, '../dist')
app.use(express.static(distPath))

app.get('/api/products', (req, res) => {
    getProducts().then(result => {
        res.send(result)
    })
})

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})