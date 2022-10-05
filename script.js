let App = {
    inputtedSphere: document.getElementById("sphere-input"),
    inputtedCylinder: document.getElementById("cylinder-input"),
    inputtedAxis: document.getElementById("axis-input"),
    convertButton: document.getElementById("convert-btn"),
    resetButton: document.getElementById("reset-btn"),
    convertedSphereOutput: document.getElementById("converted-sphere-output"),
    convertedCylinderOutput: document.getElementById("converted-cylinder-output"),
    convertedAxisOutput: document.getElementById("converted-axis-output"),
    errorMessageDisplay: document.getElementById("error-message"),
    validation: "bad"
}

let hideErrorMessage = () => {
    App.errorMessageDisplay.classList.add("hide");
}

let showErrorMessage = () => {
    App.errorMessageDisplay.classList.remove("hide");
}

let resetInputs = () => {
    App.inputtedSphere.value = "";
    App.inputtedCylinder.value = "";
    App.inputtedAxis.value = "";
}

let resetOutputs = () => {
    App.convertedSphereOutput.innerText = "0.00";
    App.convertedCylinderOutput.innerText = "0.00";
    App.convertedAxisOutput.innerText = "0.00";
}

let resetApp = () => {
    resetInputs();
    resetOutputs();
    App.validation = "bad";
}

let validateInput = (_sphere, _cylinder, _axis) => {

    if ( isNaN(_sphere.value) || 
         isNaN(_cylinder.value) || 
         isNaN(_axis.value) ) 
    {
        App.errorMessageDisplay.innerText = "Input must be a number";
        showErrorMessage();
        App.validation = "bad"
    } 
    else if (_sphere.value === "" || 
             _cylinder.value === "" || 
             _axis.value === "")
    {
        App.errorMessageDisplay.innerText = "Please enter prescription";
        showErrorMessage();
        App.validation = "bad";
    }
    else 
    {
       hideErrorMessage();
       App.validation = "good";
       App.inputtedSphere.value = (Math.round(App.inputtedSphere.value * 4) / 4).toFixed(2);
       App.inputtedCylinder.value = (Math.round(App.inputtedCylinder.value * 4) / 4).toFixed(2);
    }
}

let calculateSphereConversion = () => {

    if (App.validation === "good") {

        let convertedSphere = Number(App.inputtedSphere.value) + Number(App.inputtedCylinder.value);

        if (convertedSphere > 0) {
            App.convertedSphereOutput.innerText = "+" + convertedSphere.toFixed(2);
        }
        else {
            App.convertedSphereOutput.innerText = convertedSphere.toFixed(2);
        }
    }
    else {
        resetOutputs();
    }

}

let calculateAxisConversion = () => {

    if (App.validation === "good") {

        if (App.inputtedAxis.value <= 90) {
            App.convertedAxisOutput.innerText = "@ " + ( Number(App.inputtedAxis.value) + 90 ) + "\u00B0";
        }
        else 
        {
            App.convertedAxisOutput.innerText = "@ " + ( Number(App.inputtedAxis.value) - 90 ) + "\u00B0";
        }
    }
    else {
        resetOutputs();
    }
}

let calculateCylinderConversion = () => {

    if (App.validation === "good") {

        if (App.inputtedCylinder.value > 0) {
            App.convertedCylinderOutput.innerText = "-" + Number(App.inputtedCylinder.value).toFixed(2);
        }
        else 
        {
            App.convertedCylinderOutput.innerText = "+" + Number(App.inputtedCylinder.value.substring(1)).toFixed(2);
        }
    }
    else {
        resetOutputs();
    }
}

let convert = () => {
    validateInput(App.inputtedSphere, App.inputtedCylinder, App.inputtedAxis);
    calculateSphereConversion();
    calculateCylinderConversion();
    calculateAxisConversion()
}

App.convertButton.addEventListener('click', () => {
    convert();
});

App.resetButton.addEventListener('click', () => {
    resetApp();
    hideErrorMessage();
})

resetApp();
hideErrorMessage();