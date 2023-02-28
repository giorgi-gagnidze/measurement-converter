let inche = 1 * 2.54;
let cm = 1 / 2.54;

// Converter for cm. to in. and vice versa

function convertCmIn() {
  let value = document.getElementById("value1").value;
  let cmToIn = value / inche;
  let inToCm = value * inche;
  let measure1 = document.getElementById("measur1").value;
  let measure2 = document.getElementById("measur2").value;
  let result1 = document.getElementById("value2");
  let result2 = document.getElementById("value1");
  if (measure1 === "cm" && measure2 === "in") {
    result1.value = cmToIn;
    console.log(true);
  } else if (measure1 === "in" && measure2 === "cm") {
    result1.value = inToCm;
    console.log(false);
  }
}

function convertInCm() {
  let value = document.getElementById("value2").value;
  let cmToIn = value * inche;
  let inToCm = value / inche;
  let measure1 = document.getElementById("measur1").value;
  let measure2 = document.getElementById("measur2").value;
  let result1 = document.getElementById("value2");
  let result2 = document.getElementById("value1");
  if (measure1 === "cm" && measure2 === "in") {
    result2.value = cmToIn;
  } else if (measure1 === "in" && measure2 === "cm") {
    result2.value = inToCm;
  }
}

// Change select values automaticaly

let select1 = document.getElementById("measur1");
let select2 = document.getElementById("measur2");

function change1() {
  if (select1.value === "cm") {
    select2.value = "in";
  } else if (select1.value === "in") {
    select2.value = "cm";
  }
}

function change2() {
  if (select2.value === "cm") {
    select1.value = "in";
  } else if (select2.value === "in") {
    select1.value = "cm";
  }
}

// Convert automatically, when page loads

window.addEventListener("load", function () {
  convertCmIn();
});
