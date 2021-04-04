
function fnRateSelection() {
  var rateSelected = document.getElementById("rate").value;
  document.getElementById("rateuse").innerHTML =
    " " + ratechoose + "%";
}


function future(years) {
  var date = new Date();
  var y = date.getFullYear() + parseInt(years);
  return y;
}


function result(data) {
  document.getElementById("text1").innerHTML = "If you deposit ";
  document.getElementById("data1").innerHTML = data[0] + ",";
  document.getElementById("text2").innerHTML = "at an interest rate of  ";
  document.getElementById("data2").innerHTML = data[1] + "%.";
  document.getElementById("text3").innerHTML = "You will receive an amount of ";
  document.getElementById("data3").innerHTML = data[2] + ",";
  document.getElementById("text4").innerHTML = "in the year ";
  document.getElementById("data4").innerHTML = data[3];
}

function compute() {
  principal = document.getElementById("principal").value;
  if (principal <= 0) {
    alert("Enter a positive number");
    document.getElementById("principal").focus();
  } else {
    rate = document.getElementById("rate").value;
    years = document.getElementById("years-select").value;
    interest = (principal * rate * years) / 100;

    var year = future(years);

    var data = [principal, rate, interest, year];
    result(data);
  }
}
