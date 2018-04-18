//Circumference of circle
function caculateCircumference() {
    let radius = parseInt(document.getElementById('text-radius').value);
    let answer = "Circumference is " + (radius * 2 * Math.PI);

    if (radius > 0) {
        document.getElementById("output").innerHTML = answer;
        // document.write("Circumference is " + (radius * 2 * Math.PI));
    } else {
        document.getElementById("output").innerHTML = answer;
        // document.write("Number should be greater than 0.");
    }
}

//Gravity
let gravityOfPlanet = {
    sun: 274.0,
    jupiter: 24.92,
    neptune: 11.15,
    saturn: 10.44,
    earth: 9.798,
    uranus: 8.87,
    venus: 8.87,
    mars: 3.71,
    mercury: 3.7,
    moon: 1.62,
    pluto: 0.58,
}

function getMassInput() {
    let inputValue = document.getElementById("get-mass").value;
    let changeToNumber = parseInt(inputValue);

    return changeToNumber;
}

function calcWeightResults(mass, planetGravity) {
    let newtons = mass * planetGravity;
    let pounds = newtons / 4.44;

    return pounds;
}

function outputWeightResult (weight, planetName) {
    let planetElementId = 'weight-on-' + planetName;
    let planetWeightElement = document.getElementById(planetElementId);
    planetWeightElement.innerHTML = weight + 'lbs';
}

function weightCalcs() {
    let mass = getMassInput();

    let lbsOnSun = calcWeightResults(mass, gravityOfPlanet.sun);
    outputWeightResult(lbsOnSun, "sun");

    let lbsOnJupiter = calcWeightResults(mass, gravityOfPlanet.jupiter);
    outputWeightResult(lbsOnJupiter, "jupiter");

    let lbsOnNeptune = calcWeightResults(mass, gravityOfPlanet.neptune);
    outputWeightResult(lbsOnNeptune, "neptune");

    let lbsOnSaturn = calcWeightResults(mass, gravityOfPlanet.saturn);
    outputWeightResult(lbsOnSaturn, "saturn");

    let lbsOnEarth = calcWeightResults(mass, gravityOfPlanet.earth);
    outputWeightResult(lbsOnEarth, "earth");

    let lbsOnUranus = calcWeightResults(mass, gravityOfPlanet.uranus);
    outputWeightResult(lbsOnUranus, "uranus");

    let lbsOnVenus = calcWeightResults(mass, gravityOfPlanet.venus);
    outputWeightResult(lbsOnVenus, "venus");

    let lbsOnMars = calcWeightResults(mass, gravityOfPlanet.mars);
    outputWeightResult(lbsOnMars, "mars");

    let lbsOnMercury = calcWeightResults(mass, gravityOfPlanet.mercury);
    outputWeightResult(lbsOnMercury, "mercury");

    let lbsOnMoon = calcWeightResults(mass, gravityOfPlanet.moon);
    outputWeightResult(lbsOnMoon, "moon");

    let lbsOnPluto = calcWeightResults(mass, gravityOfPlanet.pluto);
    outputWeightResult(lbsOnPluto, "pluto");
}