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

async function filterHoodies()  {
    const connection = await pool.getConnection();
    try {
        const [rows] = await connection.query(`
            SELECT *
            FROM products
            WHERE category="hoodies"`);
        return rows;
    } catch (e) {
        console.error('Error getting products: ', e);
        throw e;
    } finally {
        connection.release();
    }
}

async function filterPants()  {
    const connection = await pool.getConnection();
    try {
        const [rows] = await connection.query(`
            SELECT *
            FROM products
            WHERE category="pants"`);
        return rows;
    } catch (e) {
        console.error('Error getting products: ', e);
        throw e;
    } finally {
        connection.release();
    }
}

async function filterShirts()  {
    const connection = await pool.getConnection();
    try {
        const [rows] = await connection.query(`
            SELECT *
            FROM products
            WHERE category="shirts"`);
        return rows;
    } catch (e) {
        console.error('Error getting products: ', e);
        throw e;
    } finally {
        connection.release();
    }
}

async function filterJackets()  {
    const connection = await pool.getConnection();
    try {
        const [rows] = await connection.query(`
            SELECT *
            FROM products
            WHERE category="jackets"`);
        return rows;
    } catch (e) {
        console.error('Error getting products: ', e);
        throw e;
    } finally {
        connection.release();
    }
}

async function filterShoes()  {
    const connection = await pool.getConnection();
    try {
        const [rows] = await connection.query(`
            SELECT *
            FROM products
            WHERE category="shoes"`);
        return rows;
    } catch (e) {
        console.error('Error getting products: ', e);
        throw e;
    } finally {
        connection.release();
    }
}

async function filterAccessories()  {
    const connection = await pool.getConnection();
    try {
        const [rows] = await connection.query(`
            SELECT *
            FROM products
            WHERE category="accessories"`);
        return rows;
    } catch (e) {
        console.error('Error getting products: ', e);
        throw e;
    } finally {
        connection.release();
    }
}

export {getProducts, filterHoodies, filterPants, filterShirts, filterJackets, filterShoes, filterAccessories}
