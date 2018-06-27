function registerHandlers() {
  var as = document.getElementsByTagName('a');
  console.log(as);
  for (var i = 0; i < as.length; i++) {

    console.log(i);

    as[i].onclick = (
      function(i){
        return function() {
          alert(i);
          return false;
        }
      }(i)
    )
  }
}
