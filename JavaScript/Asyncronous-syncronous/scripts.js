console.log("hello world");


let thingService = new ThingService();

thingService.getPeopleList().then(function(peopleList){
    document.write(peopleList);
})


thingService.sometimesFail().then(function(data){
    console.log(data);
}, function(noData) {
    console.log(noData);
    }
)