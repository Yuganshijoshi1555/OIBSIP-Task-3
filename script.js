function convertTemperature() {
    const temperatureInput = document.getElementById('temperatureInput').value;
    const unitSelect = document.getElementById('unitSelect');
    const selectedUnit = unitSelect.options[unitSelect.selectedIndex].value;
  
    if (temperatureInput === '') {
      alert('Please enter a temperature!');
      return;
    }
  
    if (isNaN(temperatureInput)) {
      alert('Please enter a valid number for temperature!');
      return;
    }
  
    let convertedTemperature;
    let unit;
  
    if (selectedUnit === 'celsius') {
      convertedTemperature = (parseFloat(temperatureInput) * 9 / 5) + 32;
      unit = 'Fahrenheit';
    } else {
      convertedTemperature = (parseFloat(temperatureInput) - 32) * 5 / 9;
      unit = 'Celsius';
    }
  
    document.getElementById('result').innerText = `Converted Temperature: ${convertedTemperature.toFixed(2)} ${unit}`;
  }
  