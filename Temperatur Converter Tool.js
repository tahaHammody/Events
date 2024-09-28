const temperatureInput = document.getElementById('temperature');
const toCelsiusButton = document.getElementById('toCelsius');
const toFahrenheitButton = document.getElementById('toFahrenheit');
const output = document.getElementById('output');

function convertToCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}

function convertToFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32;
}

toCelsiusButton.addEventListener('click', function() {
  const temperatureValue = parseFloat(temperatureInput.value);

  if (!isNaN(temperatureValue)) {
    const celsius = convertToCelsius(temperatureValue).toFixed(2);
    output.textContent = `${temperatureValue}°F is equal to ${celsius}°C`;
  } else {
    output.textContent = 'Please enter a valid temperature';
  }
});

toFahrenheitButton.addEventListener('click', function() {
  const temperatureValue = parseFloat(temperatureInput.value);

  if (!isNaN(temperatureValue)) {
    const fahrenheit = convertToFahrenheit(temperatureValue).toFixed(2);
    output.textContent = `${temperatureValue}°C is equal to ${fahrenheit}°F`;
  } else {
    output.textContent = 'Please enter a valid temperature';
  }
});
