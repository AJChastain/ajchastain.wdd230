function getChilled() {
  var temp = parseFloat(document.getElementById("current-temp").innerHTML);
  var ws = parseFloat(document.getElementById("wind_speed").innerHTML);
  // var temp = jsObject.list[0].main.temp;
  //document.getElementById('current-temp').textContent;
  // var ws = jsObject.list[0].wind.speed;
  //= document.getElementById('wind_speed').textContent
  var chill = calcChill(temp, ws);
  document.getElementById("wind_chill").innerHTML = chill;
}

function calcChill(temp, ws) {
  if (temp < 51 && ws > 3) {
    var exp = Math.pow(ws, 0.16);
    var chilled = 35.74 + 0.6215 * temp - 35.75 * exp + 0.4275 * temp * exp;
    chilled = chilled.toFixed(0);
  } else {
    chilled = "(N/A)";
  }
  return chilled;
}
