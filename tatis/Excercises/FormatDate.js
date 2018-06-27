function formatDate(userDate) {
  // format from M/D/YYYY to YYYYMMDD

  var d  = new Date(userDate);

  console.log(d);

  var yyyy = d.getFullYear().toString();
  var mm = (d.getMonth() + 101).toString().slice(-2);
  var dd = (d.getDate() + 100).toString().slice(-2);

  return yyyy + mm + dd;


}

console.log(formatDate("12/31/2014"));
