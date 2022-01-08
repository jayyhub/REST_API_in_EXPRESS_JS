var config = require('./dbconfig');
const sql = require('mssql');
const Flight = require('./flight');

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

async function addFlight (flight)
{
    try
    {
        //console.log("Hello" + flight.Departure_place);
        
        let pool = await sql.connect(config);
        let newProduct = await pool.request()
        .query(`INSERT INTO Flights (Flight_no, Arrival_place, Departure_place, Arrival_date, Departure_date, plane_id)
                VALUES ('${flight.Flight_no}', '${flight.Arrival_place}', '${flight.Departure_place}', '${flight.Arrival_date}', 
                        '${flight.Departure_date}', '${flight.plane_id}')`);

        return newProduct.recordsets;
    }
    catch (error)
    {
        //console.log(error);
        return error;
    }
}


module.exports = 
{
    getFlights : getFlights,
    getFlightsbyId : getFlightsbyId,
    addFlight : addFlight
}