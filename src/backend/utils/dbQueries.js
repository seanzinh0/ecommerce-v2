import pool from './connectionPool.js'

// async function that gets products from connected DB
async function getProducts() {
    // set connection to db
    const connection = await pool.getConnection();
    // attempt to query for all products
    try {
        const [rows] = await connection.query(`
            SELECT *
            FROM products`);
        return rows;
    // catch any errors when querying for products
    } catch (e) {
        console.error('Error getting products: ', e);
        throw e;
    // release the connection to the pool
    } finally {
        connection.release();
    }
}

export {getProducts}