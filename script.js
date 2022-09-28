let inputtedSphere = document.getElementById("sphere-input");
let inputtedCylinder = document.getElementById("cylinder-input");
let inputtedAxis = document.getElementById("axis-input");
let convertButton = document.getElementById("convert-btn");
let convertedSphereOutput = document.getElementById("converted-sphere-output");
let convertedCylinderOutput = document.getElementById("converted-cylinder-output");
let convertedAxisOutput = document.getElementById("converted-axis-output");

//sphere - cylinder. Axis + or minus 90
let calculateSphereConversion = () => {
    let convertedSphere = inputtedSphere.value - inputtedCylinder.value;

    if (convertedSphere > 0) {
        convertedSphereOutput.innerText = "+" + convertedSphere.toFixed(2);
    }
    else {
        convertedSphereOutput.innerText = convertedSphere.toFixed(2);
    }
}

let calculateAxisConversion = () => {
    if (inputtedAxis.value <= 90) {
        convertedAxisOutput.innerText = "@ " + ( Number(inputtedAxis.value) + 90 ) + "\u00B0";
    }
    else 
    {
        convertedAxisOutput.innerText = "@ " + ( Number(inputtedAxis.value) - 90 ) + "\u00B0";
    }
}

let calculateCylinderConversion = () => {
    if (inputtedCylinder.value > 0) {
        convertedCylinderOutput.innerText = "+" + Number(inputtedCylinder.value).toFixed(2);
    }
    else 
    {
        convertedCylinderOutput.innerText = Number(inputtedCylinder.value).toFixed(2);
    }
}

let convert = () => {
    calculateSphereConversion();
    calculateAxisConversion();
    calculateCylinderConversion()
    //cinputtedCylinder.value;
    //inputtedAxis.value;
}

convertButton.addEventListener('click', () => {
    convert();
})
