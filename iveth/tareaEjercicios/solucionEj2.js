function formatDate(userDate) {
  let fecha = userDate.split("/");

  let anio = fecha[2];
  let meses = pad(fecha[1], 2);
  let dia = pad(fecha[0], 2);

  return anio + meses + dia;

}

function pad(str, max) {
	str = str.toString();
	return str.length < max ? pad("0" + str, max) : str;
}

console.log(formatDate("12/31/2014"));
