// WEB COLORS START

// Event Listener on Go Button
document.getElementById("go-btn").addEventListener("click", goBtnClicked);

// Process Go Button Click
function goBtnClicked() {
  // Get Menu Selection
  let selection = document.getElementById("menu-select").value;

  // Process Menu Selection
  if (selection === "display-all") {
    displayAll();
  } else if (selection === "starts-with") {
    displayStartLetter();
  } else if (selection === "includes") {
    displayIncludes();
  } else if (selection === "search") {
    searchForColor();
  }
}

// MENU FUNCTIONS
// Display All Colors
function displayAll() {
  console.log("Display All Colors");
}

// Display all Colors with prompted Starting Letter
function displayStartLetter() {
  console.log("Colors that Start With...");
}

// Display all colors that include provided substring
function displayIncludes() {
  console.log("Colors that Include...");
}

// Search for a provided color
function searchForColor() {
  console.log("Search for a Color...");
}
