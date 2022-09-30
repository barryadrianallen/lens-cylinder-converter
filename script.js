let inputtedSphere = document.getElementById("sphere-input");
let inputtedCylinder = document.getElementById("cylinder-input");
let inputtedAxis = document.getElementById("axis-input");
let convertButton = document.getElementById("convert-btn");
let resetButton = document.getElementById("reset-btn");
let convertedSphereOutput = document.getElementById("converted-sphere-output");
let convertedCylinderOutput = document.getElementById("converted-cylinder-output");
let convertedAxisOutput = document.getElementById("converted-axis-output");


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
    let cylinderInput = inputtedCylinder.value;
    if (inputtedCylinder.value > 0) {
        convertedCylinderOutput.innerText = "-" + Number(cylinderInput).toFixed(2);
    }
    else 
    {
        convertedCylinderOutput.innerText = "+" + Number(inputtedCylinder.value.substring(1)).toFixed(2);
    }
}

let convert = () => {
    calculateSphereConversion();
    calculateAxisConversion();
    calculateCylinderConversion()
}

let resetApp = () => {
    inputtedSphere.value = "";
    inputtedCylinder.value = "";
    inputtedAxis.value = "";
    convertedSphereOutput.innerText = "0.00";
    convertedCylinderOutput.innerText = "0.00";
    convertedAxisOutput.innerText = "0.00";
}

convertButton.addEventListener('click', () => {
    convert();
});

resetButton.addEventListener('click', () => {
    resetApp();
})
