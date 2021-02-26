const calculateTemp = () => {
  const numberTemp = document.getElementById("temp").value;
  const tempSelected = document.getElementById("temp_diff");
  const valueTemp = temp_diff.options[tempSelected.selectedIndex].value;

  const celcius2Fahrenheit = (cel) => {
    let fah = Math.round((cel * 9/5) + 32);
    return fah;
  };

  const Fahrenheit2celcius = (fehr) => {
    let cel = Math.round(((fehr - 32) * 5/9);
    return cel;
  };

  let result;

  if (valueTemp == "cel") {
    result = celcius2Fahrenheit(numberTemp);
    document.getElementById(
      "resultContainer"
    ).innerHTML = ` = ${result} Celcius`;
  } else {
    result = Fahrenheit2celcius(numberTemp);
    document.getElementById(
      "resultContainer"
    ).innerHTML = ` = ${result} Fahrenheit`;
  }
};
