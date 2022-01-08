class Flight
{
    //constructor (Id, Flight_no, Arrival_place, Departure_place, Arrival_date, Departure_date, plane_id)
    constructor (Flight_no, Arrival_place, Departure_place, Arrival_date, Departure_date, plane_id)
    {
        //this.Id = Id;
        this.Flight_no = Flight_no;
        this.Arrival_place = Arrival_place;
        this.Departure_place = Departure_place;
        this.Arrival_date = Arrival_date;
        this.Departure_date = Departure_date;
        this.plane_id = plane_id;
    }
}

module.exports = Flight;