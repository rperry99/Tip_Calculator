//Script.js
//Hide Tip amount on load
document.getElementById("totalTip").style.display = "none";
document.getElementById("each").style.display = "none";

// Clicking the button calles the fucntion
document.getElementById("calculate").onclick = function() {calculateTip();};

//Functions
function calculateTip(){
  //Store the data from the inputs
  var billAmount = document.getElementById("billAmount").value;
  var serviceQuality = document.getElementById("serviceQuality").value;
  var totalPeople = document.getElementById("totalPeople").value;

  //Validation of proper input
  if(billAmount === "" || serviceQuality == 0){
    return window.alert("Please enter some values to get this baby up and running!");
  }

  //Check if number of people was entered properly
  if(totalPeople === "" || totalPeople <= 1){
    totalPeople = 1;

    document.getElementById("each").style.display = "none";
  }else{
    document.getElementById("each").style.display = "block";
  }

  //Do the math
  var total = (billAmount * serviceQuality) / totalPeople;
  total = Math.round(total * 100) / 100;
  total = total.toFixed(2);

  //Display the Tip
  document.getElementById("totalTip").style.display = "block";
  document.getElementById("tip").innerHTML = total;
}
