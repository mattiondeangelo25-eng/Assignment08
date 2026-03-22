console.log("script.js connected!");

let buttons = document.querySelectorAll("#mood-buttons button");

buttons.forEach(function(button){
  button.addEventListener("click", function() {
    // Remove the selected class from all button 
    buttons.forEach(function(btn) {
      btn.classList.remove("selected"); 
    });
    // Add the selected class to only the one that is clicked
    button.classList.add("selected");
    
    // Code from previous step
    let emoji = button.textContent; 
    let output = document.getElementById("output-message"); 
    output.textContent = `You're feeling ${emoji} today!`;
    // Similar to writing "You're feeeling " + emoji + " today!" 
    
  })
})