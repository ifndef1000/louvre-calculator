function calculateArea() {
    let flowrate = document.getElementById('flowrate').value;
    let velocity = document.getElementById('velocity').value;
    let freeArea = document.getElementById('freearea').value / 100;

    let area = (flowrate / velocity) / freeArea; // in square meters
    let side = Math.sqrt(area); // Square root to get a rough dimension

    document.getElementById('height').value = side * 1000; // Convert m to mm
    document.getElementById('width').value = side * 1000; // Convert m to mm
}

function adjustWidth() {
    let height = document.getElementById('height').value / 1000; // Convert mm to m
    let area = height * (document.getElementById('width').value / 1000);
    document.getElementById('width').value = (area / height) * 1000;
}

function adjustHeight() {
    let width = document.getElementById('width').value / 1000; // Convert mm to m
    let area = width * (document.getElementById('height').value / 1000);
    document.getElementById('height').value = (area / width) * 1000;
}
