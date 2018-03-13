function prepend(someString) {
  return 'hello ' + someString;
}

function evens(array) {
  let evensArray = [];
  
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      evensArray.push(array[i]);
    }
  }
  
  return evensArray;
}

function search(nameList, searchTerm) {
  let resultsArray = [];

  for (let i = 0; i < nameList.length; i++) {
    let currName = nameList[i].toLowerCase();
    
    let nameContainsSearchTerm = currName.indexOf(searchTerm.toLowerCase()) >= 0;
    if (nameContainsSearchTerm) {
      resultsArray.push(nameList[i]);
    }
  }
  
  return resultsArray;
}

function pascal(row, col) {
  if (row <= 2 || col <= 1 || row === col) {
    return 1;
  }

  return pascal(row - 1, col - 1) + pascal(row - 1, col);
}

class Stereo {
  constructor(brand, bluetooth) {
    this.brand = brand;
    this.bluetooth = bluetooth;
    this.status = 'off';
  }

  pushPowerButton() {
    if (this.status === 'on') {
      this.status = 'off';
    }
    else {
      this.status = 'on';
    }
  }
}

class Vehicle {
  constructor(make, model, color, stereo) {
    this.make = make;
    this.model = model;
    this.color = color;
    this.stereo = stereo || new Stereo('stock', false);
  }

  setColor(color) {
    this.color = color;
  }

  pushStereoPowerButton() {
    this.stereo.pushPowerButton();
  }
}