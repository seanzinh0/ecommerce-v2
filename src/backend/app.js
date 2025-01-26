import express from 'express'
import path from 'path'
import {getProducts, filterHoodies, filterPants, filterShirts, filterJackets, filterShoes, filterAccessories} from './utils/dbQueries.js'
const app = express();

const distPath = path.join(__dirname, '../dist')
app.use(express.static(distPath))

app.get('/api/products', (req, res) => {
    getProducts().then(result => {
        res.send(result)
    })
})

app.get('/api/products/hoodies', (req, res) => {
    filterHoodies().then(result => {
        res.send(result)
    })
})

app.get('/api/products/pants', (req, res) => {
    filterPants().then(result => {
        res.send(result)
    })
})

app.get('/api/products/shirts', (req, res) => {
    filterShirts().then(result => {
        res.send(result)
    })
})

app.get('/api/products/jackets', (req, res) => {
    filterJackets().then(result => {
        res.send(result)
    })
})

app.get('/api/products/shoes', (req, res) => {
    filterShoes().then(result => {
        res.send(result)
    })
})

app.get('/api/products/accessories', (req, res) => {
    filterAccessories().then(result => {
        res.send(result)
    })
})


const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})