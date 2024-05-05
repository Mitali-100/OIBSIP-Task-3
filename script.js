function convertTemperature() {
    var temperature = parseFloat(document.getElementById('temperature').value);
    var unit = document.getElementById('unit').value;
    var result;

    if (unit === 'celsius') {
        result = {
            'fahrenheit': (temperature * 9/5) + 32,
            'kelvin': temperature + 273.15
        };
    } else if (unit === 'fahrenheit') {
        result = {
            'celsius': (temperature - 32) * 5/9,
            'kelvin': (temperature - 32) * 5/9 + 273.15
        };
    } else if (unit === 'kelvin') {
        result = {
            'celsius': temperature - 273.15,
            'fahrenheit': (temperature - 273.15) * 9/5 + 32
        };
    }

    document.getElementById('result').innerHTML = formatResult(result);
}

function formatResult(result) {
    var formattedResult = '';
    for (var key in result) {
        formattedResult += key.charAt(0).toUpperCase() + key.slice(1) + ': ' + result[key].toFixed(2) + '&deg; ';
    }
    return formattedResult;
}
