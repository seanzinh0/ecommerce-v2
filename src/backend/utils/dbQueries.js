import pool from './connectionPool.js'

async function getProducts() {
    const connection = await pool.getConnection();
    try {
        const [rows] = await connection.query(`
            SELECT *
            FROM products`);
        return rows;
    } catch (e) {
        console.error('Error getting products: ', e);
        throw e;
    } finally {
        connection.release();
    }
}

export {getProducts}