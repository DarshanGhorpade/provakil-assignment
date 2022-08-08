const moment = require("moment");

function calculate_subscription(expiry_date, months_to_buy, monthly_cost) {
  if (months_to_buy >= 1 && months_to_buy <= 11) {
    var date = expiry_date.split("/");
    var year = parseInt(date[2]);
    var month = parseInt(date[1]);
    var day = parseInt(date[0]);
    var d = moment([year, month - 1, day]);
    if (day < 10) {
      var new_expiry_date = moment([year, month + months_to_buy - 1, 1]);
      var days = new_expiry_date.diff(d, "days") - 1;
      var cost = (days * (monthly_cost / 30)).toFixed(2);
    } else {
      var new_expiry_date = moment([year, month + months_to_buy - 1, 15]);
      var days = new_expiry_date.diff(d, "days");
      var cost = (days * (monthly_cost / 30)).toFixed(2);
    }
    var result = new_expiry_date.format("DD/MM/YYYY");
    console.log("(", '"', result, '"', ",", cost, ")");
  }
}

calculate_subscription("19/06/2022", 1, 1000);
calculate_subscription("3/06/2022", 3, 400);
