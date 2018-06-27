(function() {
  'use strict';

  const dolar = 20.23;
  const euro = 22.54;
  const yen = 12.98;

  const navbarButton = document.querySelectorAll('.navbar__button-mobile');

  for(const element of navbarButton) {
    element.addEventListener('click', () => {
      let TCfinal = new TipoCambio_de_pesos_a(200,400,1000);
      console.log(TCfinal);
      let TCfinalPaM = new TipoCambio_de(200);
      /*let TCfinalPaM = new TipoCambio_de(200,200,200);*/
      console.log(TCfinalPaM);
    })
  }

  class TipoCambio_de_pesos_a {
    constructor(Dolar,Euro,Yen) {
        this.Dolar = (Dolar * dolar);
        this.Euro = (Euro * euro);
        this.Yen = (Yen * yen);
    }
}

class TipoCambio_de {
  constructor(pesos) {
    this.pesos= ('a Dolar:' + ' ' +  (pesos / dolar) + ' ' + 'pesos a Euros:' + ' ' +  (pesos / euro) + ' ' + 'pesos a Yen:' + ' ' +  (pesos / yen) );
  }
}
/*
class TipoCambio_de {
  constructor(pesos_a_dolar,pesos_a_Euros,pesos_a_Yen) {
    this.pesos_a_dolar = (':' + ' ' +  (pesos_a_dolar / dolar));
    this.pesos_a_Euros = (':' + ' ' +  (pesos_a_Euros / euro));
    this.pesos_a_Yen = (':' + ' ' + (pesos_a_Yen / yen));
  }
}*/
  })();
