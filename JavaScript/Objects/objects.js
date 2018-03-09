let myCar = {make: "Kia", model: "Forte", doors: 4, mileage: 70000, liter: 2.4, color: "charcoal-grey"};

let myGame = {level: 1, difficulty: "easy", weather: "rainy", players: 1, terrain: "mountains", character: "male", weapon: "gun", style: "gangsta", sex: "male", vehicle: "tank", suit: "armor", play: "campaign", track: "european", health: "full", rank: "boss", match: 1, menu: "guide", grenade: 6, speed: "run", turbo: "activate", kill: "headshot", winner: "player 1", movement: "forward", jump: "a", map: "world"};

let chewie = {
    job: "Smugglers Assistant",
    hobby: "Space Chess",
    race: "Wookie",
    language: "Rawr",
    skill: "crossbow",
    act: 23
};

document.getElementById("job").innerHTML = chewie.job;
document.getElementById("hobby").innerHTML = chewie.hobby;
document.getElementById("race").innerHTML = chewie.race;
document.getElementById("language").innerHTML = chewie.language;
document.getElementById("skill").innerHTML = chewie.skill;
document.getElementById("act").innerHTML = chewie.act;

////////////monster///////////

var monster = function(mname) {
    this.name = mname;
    this.health = 80;

    this.jump = function() {
        console.log("monster jumped");
    }
    this.crouch = function() {
        console.log("monster crouched");
    }
};

var fred = new monster("fred");
var bob = new monster("bob");
console.log(fred.name);
fred.jump();


///////reflection////////////

var Reflector = function(obj) {
    this.getProperties = function() {
        var properties = [];
        for (var prop in obj) {
            if (typeof obj[prop] != "function") {
                properties.push(prop);
            }
        }
        return properties;
    };
    this.getAllMethods = function() {
        var methods = [];
        for(var method in obj) {
            if (typeof obj[method] === "function") {
                methods.push(method);
            }
        }
        return methods;
    };
};

var mirror = new Reflector(fred);
console.log(mirror.getProperties());
console.log(mirror.getAllMethods());
















