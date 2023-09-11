var store = document.querySelector(":root");
document.addEventListener("DOMContentLoaded", () =>
  requestAnimationFrame(updateTime)
);

setBG();

function updateTime() {
  document.documentElement.style.setProperty(
    "--timer-day",
    "'" + new Date().toLocaleDateString("de", { weekday: "short" }) + "'"
  );
  document.documentElement.style.setProperty(
    "--timer-hours",
    "'" + moment().format("HH") + "'"
  );
  document.documentElement.style.setProperty(
    "--timer-minutes",
    "'" + moment().format("mm") + "'"
  );
  // document.documentElement.style.setProperty('--hass-temp-indoor', "'" + "bbbb" + "'");

  requestAnimationFrame(updateTime);
}

function setBG() {
  var h = new Date().getHours();
  var ds = h > 6 && h < 20;
  if (ds) {
    // store.style.setProperty('--clock-bg', '#ffffff9a');
    // store.style.setProperty('--font-color', '#0000009a');
    // document.documentElement.classList.add("day");
    // document.documentElement.classList.remove("night");
    document.body.background =
      "https://source.unsplash.com/featured/1920x1200/?travel";
    console.log("STYLE: DAY");
  } else {
    // store.style.setProperty('--clock-bg', '#0000009a');
    // store.style.setProperty('--font-color', '#ffffffe2');
    // document.documentElement.classList.add("night");
    // document.documentElement.classList.remove("day");
    // document.body.background = "https://source.unsplash.com/random/1920x1200/?night,darkness";
    document.body.background =
      "https://source.unsplash.com/collection/91668484/1920x1200/";
    console.log("STYLE: NIGHT");
  }
}

setInterval(function () {
  setBG();
}, 600000);
