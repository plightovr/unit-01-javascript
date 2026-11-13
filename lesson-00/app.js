let msg = "external"

"use strict";

const _DATE = new Date(2026, 10, 25);

function checkScreen() {
  if (window.innerWidth < 600) {
    document.getElementById("screenMsg").textContent = "Small screen: turn your device sideways";
  } else {
    document.getElementById("screenMsg").textContent = "Window width: " + window.innerWidth + "px";
  }
}

function startApp() {
  checkScreen();
}