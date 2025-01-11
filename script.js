function convertTemp() {
  const tempInput = document.getElementById("tempInput").value;
  const heading = document.querySelector("h2").innerText;

  if (tempInput === "") {
    alert("Please enter a temperature value.");
    return;
  }

  const temp = parseFloat(tempInput);
  let resultText = "";

  if (heading.includes("°C to °F")) {
    const fahrenheit = (temp * 9 / 5) + 32;
    resultText = `${temp}°C = ${fahrenheit.toFixed(2)}°F`;
  } else {

    const celsius = (temp - 32) * 5 / 9;
    resultText = `${temp}°F = ${celsius.toFixed(2)}°C`;
  }

  document.getElementById("result").innerText = resultText;
}

function reset() {
  document.getElementById("tempInput").value = "";
  document.getElementById("result").innerText = "";
}

function change() {
  const heading = document.querySelector("h2");
  const tempInput = document.getElementById("tempInput");

  if (heading.innerText.includes("°C to °F")) {
    heading.innerText = "Conversion of °F to °C";
    tempInput.placeholder = "°F";
  } else {
    heading.innerText = "Conversion of °C to °F";
    tempInput.placeholder = "°C";
  }

  reset();
}
