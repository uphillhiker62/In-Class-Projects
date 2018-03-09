var Character = function(mname) {
    this.name = "frankie";
    this.health = 75;

    this.jump = function() {
        console.log("Monster Jumped");
        $(".character").css("bottom", "150px");
    }
    this.crouch = function() {
        console.log("Monster Crouched");
    }
    this.punch = function(){
        console.log("Monster Punched");
    }
};

var Franken = new Character();

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

var mirror = new Reflector(Franken);
var marray = mirror.getAllMethods();
console.log(marray);

for(var i = 0; i < marray.length; i++){
    // document.getElementById("buttonbox").innerHTML += "<a class='mybtn'>"+ marray[i] +"</a>";
    $(".buttonbox").append("<a href='javascript: Franken." + marray[i] +"()' class='mybtn'>"+ marray[i] +"</a>");

}