function formatDate(userDate) {
  // format from M/D/YYYY to YYYYMMDD
  let fecha=new Date(userDate);
  return fecha.getFullYear()+''+(fecha.getMonth()+1).toString().padStart(2, "0")+''+fecha.getDate().toString().padStart(2, "0");
}

console.log(formatDate("12/31/2014"));
