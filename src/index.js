setInterval(function () {
  let pragueElement = document.querySelector("#prague");
  let pragueDateElement = pragueElement.querySelector(".date");
  let pragueTimeElement = pragueElement.querySelector(".time");
  let pragueTime = moment().tz("Europe/Prague");

  pragueDateElement.innerHTML = pragueTime.format("MMMM Do YYYY");
  pragueTimeElement.innerHTML = pragueTime.format(
    "h:mm:ss:SSS [<small>]A[</small>]"
  );
}, 1);

setInterval(function () {
  let cairoElement = document.querySelector("#cairo");
  let cairoDateElement = cairoElement.querySelector(".date");
  let cairoTimeElement = cairoElement.querySelector(".time");
  let cairoTime = moment().tz("Africa/Cairo");

  cairoDateElement.innerHTML = cairoTime.format("MMMM Do YYYY");
  cairoTimeElement.innerHTML = cairoTime.format(
    "h:mm:ss:SSS [<small>]A[</small>]"
  );
}, 1);

setInterval(function () {
  let ochoRiosElement = document.querySelector("#ocho-rios");
  let ochoRiosDateElement = ochoRiosElement.querySelector(".date");
  let ochoRiosTimeElement = ochoRiosElement.querySelector(".time");
  let ochoRiosTime = moment().tz("America/Jamaica");

  ochoRiosDateElement.innerHTML = ochoRiosTime.format("MMMM Do YYYY");
  ochoRiosTimeElement.innerHTML = ochoRiosTime.format(
    "h:mm:ss:SSS [<small>]A[</small>]"
  );
}, 1);
