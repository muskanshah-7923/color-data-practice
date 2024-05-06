// WEB COLORS START

// HTML Variable for Output
let outputEl = document.getElementById("output");

// Load Color Data
let colorData = await readJSON("data/color-data.json");
console.log(colorData); // Verify Color Data

// Event Listener on Go Button
document.getElementById("go-btn").addEventListener("click", goBtnClicked);

// Process Go Button Click
function goBtnClicked() {
  // Get Menu Selection
  let selection = document.getElementById("menu-select").value;

  // Process Menu Selection
  if (selection === "all-colors") {
    allColors();
  } else if (selection === "bright-colors") {
    brightColors();
  } else if (selection === "red-pink-families") {
    redPinkFamilies();
  } else if (selection === "family-search") {
    familySearch();
  } else if (selection === "start-letter-search") {
    startLetterSearch();
  }
}

// MENU FUNCTIONS
function allColors() {
  // Display Name and Family of All Colors

  for (let i = 0; i < colorData.length; i++) {
    outputEl.innerHTML += `<br> ${colorData[i].name} + ${colorData[i].family}`;
  }
}

function brightColors() {
  for (let i = 0; i < colorData.length; i++) {
    if (colorData[i].brightness >= 200) {
      outputEl.innerHTML += `<br> ${colorData[i].name} + ${colorData[i].brightness}`;
    }
  }
}
function redPinkFamilies() {
  // Count Colors in Red/Pink Families
  for (let i = 0; i < colorData.length; i++) {
    if (colorData[i].family === "Red") {
      outputEl.innerHTML += `<br> ${colorData[i].name} + ${colorData[i].family}`;
    } else if (colorData[i].family === "Pink") {
      outputEl.innerHTML += `<br> ${colorData[i].name} + ${colorData[i].family}`;
    }
  }
}

function familySearch() {
  // Display Name and Family of all Colors that Match a User Provided Family Name. Also Output a Count of Colors Found.
  outputEl.innerHTML = "<h3>Family Search</h3>";
}

function startLetterSearch() {
  // Display Name of all Colors that Match a User Provided Starting Letter. Also Output a Count of Colors Found.
  outputEl.innerHTML = "<h3>Start Letter Search</h3>";
}
