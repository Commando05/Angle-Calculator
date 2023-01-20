// Variables
const pi = 3.14;
const input = document.getElementById('angle');
const radButton = document.getElementById('radians');
const degButton = document.getElementById('degrees');
const cotOutput = document.getElementById('coterminal');
const cotOutput2 = document.getElementById('coterminal-2');
const supOutput = document.getElementById('supplementary');
const quadOutput = document.getElementById('quadrant');

let radOrDeg = 0;

// Functions
function radians() {
    radOrDeg = 0;
}

function degrees() {
    radOrDeg = 1;
}

function fixInput() {
    let splitAnswer = [];
    let answer = input.value;
    let lowAnswer = answer.toLowerCase();
    splitAnswer = lowAnswer.split(' ');
    return splitAnswer;
}

function toDegrees() {
    let inputArray = [];
    inputArray = fixInput();
    let degArray = [];
    if (inputArray.length > 1) {
        for (let i = 0; i < inputArray.length; i++) {
            if (inputArray[i] != 'pi' && inputArray[i] != '/') {
                degArray[i] = parseFloat(inputArray[i]);
            }
        }
        let degAnswer = degArray[0] * 180 / degArray[1];
        return degAnswer;
    } else {
        let degAnswer = parseFloat(inputArray[0]) * 180 / pi;
        return degAnswer;
    }
}

// Rough toRadians() function
function toRadians(degAngle) {
    let radAnswer = degAngle + ' pi' + ' /' + ' 180';
    return radAnswer;
}

function coterminalAngle(angle) {
    let coAngle = angle + 360;
    let coAngleNeg = angle - 360;
    let coArray = [coAngle, coAngleNeg];
    return coArray;
}

function supplementaryAngle(angle) {
    let supAngle = Math.abs(angle - 180);
    return supAngle;
}

function quadrants(angle) {
    let angleLocation;
    if (angle > 360) {
        angle %= 360;
    }
    if (angle <= 90) {
        angleLocation = 1;
    } else if (angle > 90 && angle <= 180) {
        angleLocation = 2;
    } else if (angle > 180 && angle <= 270) {
        angleLocation = 3;
    } else if (angle > 270 && angle <= 360) {
        angleLocation = 4;
    }
    return angleLocation;
}

function findDegree() {
    let answer = [];
    answer = fixInput();
    let count = 0;
    for (let i = 0; i < answer.length; i++) {
        if (answer[i] == 'degree' || answer[i] == 'degrees') {
            count += 1;
        }
    }
    if (count >= 1) {
        return true;
    } else {
        return false;
    }
}

function rmDegree() {
    let answer = [];
    answer = fixInput();
    let num;
    for (let i = 0; i < answer.length; i++) {
        if (answer[i] != 'degree' && answer[i] != 'degrees') {
            num = parseFloat(answer[i]);
        }
    }
    return num;
}

// Calculate Function (Sort of Acts as Main Function)
function calculate() {
    let isDegree = findDegree();
    let angle;
    if (isDegree == true) {
        angle = rmDegree();
    } else if (isDegree == false) {
        angle = toDegrees();
    }
    let coAnswer = [];
    coAnswer = coterminalAngle(angle);
    let supAnswer = supplementaryAngle(angle);
    let quadLoc = quadrants(angle);
    if (radOrDeg == 0) {
        cotOutput.innerHTML = toRadians(coAnswer[0]) + ' ';
        cotOutput2.innerHTML = toRadians(coAnswer[1]) + ' ';
        supOutput.innerHTML = toRadians(supAnswer) + ' ';
    } else if (radOrDeg == 1) {
        cotOutput.innerHTML = coAnswer[0] + ' degrees ';
        cotOutput2.innerHTML = coAnswer[1] + ' degrees ';
        supOutput.innerHTML = supAnswer + ' degrees ';
    }
    quadOutput.innerHTML = 'Q' + quadLoc;
}