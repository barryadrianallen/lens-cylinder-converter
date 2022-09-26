let inputtedSphere = document.getElementById("sphere-input");
let inputtedCylinder = document.getElementById("cylinder-input");
let inputtedAxis = document.getElementById("axis-input");
let convertButton = document.getElementById("convert");
let convertedSphere = document.getElementById("converted-sphere");
let convertedCylinder = document.getElementById("converted-cylinder");
let convertedAxis = document.getElementById("converted-axis");

let convert = () => {
    convertedSphere.innerText = inputtedSphere.value;
    convertedCylinder.innerText = inputtedCylinder.value;
    convertedAxis.innerText = inputtedAxis.value;
}

convertButton.addEventListener('click', () => {
    convert();
})
