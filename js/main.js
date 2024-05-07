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
  let redCount = 0;
  let pinkCount = 0;
  for (let i = 0; i < colorData.length; i++) {
    if (colorData[i].family === "Red") {
      redCount++;
      outputEl.innerHTML += `<br> ${colorData[i].name} + ${colorData[i].family}`;
    } else if (colorData[i].family === "Pink") {
      pinkCount++;
      outputEl.innerHTML += `<br> ${colorData[i].name} + ${colorData[i].family}`;
    }
  }
outputEl.innerHTML += `<br>There are ${redCount} red and ${pinkCount} pink colors.`;
}


function familySearch() {
  // Prompt the user for a color family
  let userFamilyName = prompt("Enter a color family:");
  let count = 0;
  for (let i = 0; i < colorData.length; i++) {
    if (colorData[i].family === userFamilyName) {
      outputEl.innerHTML += `<br>${colorData[i].name} - ${colorData[i].family}`;
      count++;
    }
  }
  outputEl.innerHTML += `<br>Number of colors found in the ${userFamilyName} family: ${count}`;
}

function startLetterSearch() {
  // Display Name of all Colors that Match a User Provided Starting Letter. Also Output a Count of Colors Found.
  outputEl.innerHTML = "<h3>Start Letter Search</h3>";
}
