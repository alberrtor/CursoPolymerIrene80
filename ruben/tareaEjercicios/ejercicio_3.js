
function formatDate(userDate) {
  // format from M/D/YYYY to YYYYMMDD
  let fecha=new Date(userDate);
  return fecha.getFullYear()+''+(fecha.getMonth()+1)+''+fecha.getDate();
}

console.log(formatDate("09/18/2014"));
