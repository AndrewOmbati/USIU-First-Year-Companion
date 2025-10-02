// 1. Personalized Greeting - On page load with USIU context
const studentName = prompt("Karibu to USIU! What's your first name?");
alert("Karibu, " + studentName + "! Ready to plan your campus costs?");
console.log("Student entered name:", studentName);
document.getElementById("greeting").textContent = "Hello, " + studentName + " 👋";

// 2. Estimator function with USIU-specific context and personalization
function runEstimator() {
  const days = Number(prompt("How many days per week do you come to USIU campus from Thika Road area? (e.g., 3)"));
  const costPerTrip = Number(prompt("Average matatu/bus cost per trip to USIU in KSh? (e.g., 150 from Thika Road)"));
  const snacksPerDay = Number(prompt("How many campus snacks per day? (samosas, mandazi, etc.) (e.g., 2)"));
  const snackPrice = Number(prompt("Average price per campus snack in KSh? (e.g., 50 for samosa)"));
  
  const transportWeekly = days * costPerTrip * 2; // to & from USIU
  const snacksWeekly = days * snacksPerDay * snackPrice;
  const totalWeekly = transportWeekly + snacksWeekly;
  const save10 = totalWeekly * 0.10;
  const totalWithSavings = totalWeekly - save10;

  console.log({ days, costPerTrip, snacksPerDay, snackPrice, 
               transportWeekly, snacksWeekly, totalWeekly, totalWithSavings });

  // Personalized summary with USIU context and concrete behavior change tip
  const summary = `
Weekly Transport (Thika Rd-USIU): KSh ${transportWeekly}
Weekly Campus Snacks:             KSh ${snacksWeekly}
----------------------------------------
Weekly Total:                     KSh ${totalWeekly}
If you cut 10%:                   KSh ${Math.round(totalWithSavings)}

 Money-Saving Tip: Try carpooling with classmates 2 days per week 
   or reduce snack runs by bringing lunch from home!
   
Generated for: ${studentName}'s USIU Student Account
Campus Cost Plan - Orientation Week 2025
  `;

  document.getElementById("summary").innerText = summary;
  alert("Your USIU cost plan is ready! Check the summary below. All calculations logged to console.");
}

// 3. Theme Toggle with USIU branding context
function toggleTheme() {
  const current = document.body.style.backgroundColor;
  if (current === "white" || current === "") {
    // Night mode with USIU-inspired dark theme
    document.body.style.backgroundColor = "#1a1a2e";
    document.body.style.color = "#eee";
    console.log("Theme: Switched to USIU Night Mode for late study sessions");
  } else {
    // Day mode
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
    console.log("Theme: Switched to USIU Day Mode for regular campus hours");
  }
}

// 4. Reset Function - Clears summary back to default (Extension feature)
function resetCalculator() {
  const defaultText = `Click "Calculate My Weekly Costs" to see your personalized USIU budget plan...`;
  document.getElementById("summary").innerText = defaultText;
  console.log("Calculator reset by " + studentName + " - summary cleared to default state");
  alert("Calculator reset! Ready for new cost calculations.");
}

// Wire up event listeners
document.getElementById("run").addEventListener("click", runEstimator);
document.getElementById("theme").addEventListener("click", toggleTheme);
document.getElementById("reset").addEventListener("click", resetCalculator);
