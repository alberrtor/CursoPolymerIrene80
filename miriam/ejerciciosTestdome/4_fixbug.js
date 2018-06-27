function registerHandlers() {
  let as = document.getElementsByTagName('a');

  for (let i = 0; i<as.length; i++) {
      as[i].onclick = (() => {
              alert(i);
              return false;
          });
  }
}

registerHandlers();
