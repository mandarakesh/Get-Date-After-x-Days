const { addDays, format } = require("date-fns/addDays");
function getDateAfterDays(days) {
  const result = new Date("22-07-2020");
  const endDate = addDays(result, days);

  return endDate.getDate() - (endDate.getMonth() + 1) - endDate.getFullYear();
}
console.log(getDateAfterDays);
module.exports = getDateAfterDays;
