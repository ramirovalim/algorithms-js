// Function to load scripts dynamically
function loadScript(src) {
  const script = document.createElement("script");
  script.src = src;
  script.type = "module"; // Use "module" if the script is an ES module
  document.body.appendChild(script);

  // Log success
  console.log(`Script ${src} has been added.`);
}

// Add flex-col style to scriptButtons div
document.getElementById("scriptButtons").style.display = "flex";
document.getElementById("scriptButtons").style.flexDirection = "column";
document.getElementById("scriptButtons").style.alignItems = "center";
document.getElementById("scriptButtons").style.gap = "1rem";

// Bind buttons to load specific scripts
document.getElementById("totalMeals").addEventListener("click", () => {
  loadScript("./scripts/totalMeals.js");
});
document.getElementById("twoSum").addEventListener("click", () => {
  loadScript("./scripts/twoSum.js");
});
document.getElementById("validParentheses").addEventListener("click", () => {
  loadScript("./scripts/validParentheses.js");
});
