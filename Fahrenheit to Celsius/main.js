//Fahrenheit to Celsius JavaScript

// Event Listener
document.getElementById('submit').addEventListener('click', celsiusConverter);

// Event Function
function celsiusConverter() {

    // Input
    let fahrTemp = Number(document.getElementById('fahrInput').value);

    //Processing
    let celsTemp = (fahrTemp-32)*(5/9);
    let sentence = fahrTemp + '°F is equal to ' + celsTemp + '°C.';

    //Output
    document.getElementById('output-title').innerHTML = 'Output:';
    document.getElementById('output-sentence'). innerHTML = sentence;
}
