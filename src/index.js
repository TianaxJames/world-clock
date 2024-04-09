setInterval(function () {
  let chiangMaiElement = document.querySelector("#chiang-mai");
  let chiangMaiDateElement = chiangMaiElement.querySelector(".date");
  let chiangMaiTimeElement = chiangMaiElement.querySelector(".time");
  let chiangMaiTime = moment().tz("Asia/Bangkok");

  chiangMaiDateElement.innerHTML = chiangMaiTime.format("MMMM Do YYYY");
  chiangMaiTimeElement.innerHTML = chiangMaiTime.format(
    "h:mm:ss:SS [<small>]A[</small>]"
  );
}, 1);

setInterval(function () {
  let cairoElement = document.querySelector("#cairo");
  let cairoDateElement = cairoElement.querySelector(".date");
  let cairoTimeElement = cairoElement.querySelector(".time");
  let cairoTime = moment().tz("Africa/Cairo");

  cairoDateElement.innerHTML = cairoTime.format("MMMM Do YYYY");
  cairoTimeElement.innerHTML = cairoTime.format(
    "h:mm:ss:SS [<small>]A[</small>]"
  );
}, 1);

setInterval(function () {
  let ochoRiosElement = document.querySelector("#ocho-rios");
  let ochoRiosDateElement = ochoRiosElement.querySelector(".date");
  let ochoRiosTimeElement = ochoRiosElement.querySelector(".time");
  let ochoRiosTime = moment().tz("America/Jamaica");

  ochoRiosDateElement.innerHTML = ochoRiosTime.format("MMMM Do YYYY");
  ochoRiosTimeElement.innerHTML = ochoRiosTime.format(
    "h:mm:ss:SS [<small>]A[</small>]"
  );
}, 1);

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `<div class="city">
        <div>
            <h2> ${cityName}</h2>
            <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
        </div>
        <div class="time">${cityTime.format(
          "h:mm:ss:SS "
        )}<small>${cityTime.format("A")}</small>
  </div>`;
}

let citiesSelectElement = document.querySelector("#city");

citiesSelectElement.addEventListener("change", updateCity);
