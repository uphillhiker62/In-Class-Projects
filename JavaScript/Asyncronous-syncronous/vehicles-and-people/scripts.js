

let vehicleService = new VehicleService();
let peopleService = new PeopleService();

var peoplePromise = peopleService.getPeopleList();
var carPromise = vahicleService.getCarList();
var truckPromise = vehicleService.getTruckList();


Promise.all([vehicleService, peopleService]).then(function(values) {
    let people = values[0];
    let vehicle = values[1];
    let model = values[2];
    let make = values[3];

})
