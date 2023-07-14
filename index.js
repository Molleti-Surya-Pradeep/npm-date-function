let new_date = require("date-fns/addDays");

function days(day) {
  new_date = new_date(new Date(2020, 7, 22), day);
  return `${new_date.getDate()}-${
    new_date.getMonth() + 1
  }-${new_date.getFullYear()}`;
}
module.exports = days;
