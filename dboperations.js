var config = require('./dbconfig');
const sql = require('mssql');

async function getFlights ()
{
    try
    {
        let pool = await sql.connect(config);
        let products = await pool.request().query('SELECT * FROM Flights');
        return products.recordsets;
    }
    catch (error)
    {
        console.log(error);
    }
}

async function getFlightsbyId (orderId)
{
    try
    {
        let pool = await sql.connect(config);
        let products = await pool.request().query(`SELECT * FROM Flights WHERE Id = ${orderId}`);
        return products.recordsets;
    }
    catch (error)
    {
        console.log(error);
    }
}

module.exports = 
{
    getFlights : getFlights,
    getFlightsbyId : getFlightsbyId
}