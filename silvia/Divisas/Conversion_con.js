(function() {
  'use strict';

  const dolar = 20.23;
  const euro = 22.54;
  const yen = 12.98;

  class OtrasMonedasaPesos {
    constructor(Dolar,Euro,Yen) {
        this.Dolar =(Dolar * dolar);
        this.Euro = (Euro * euro);
        this.Yen = (Yen * yen);
    }
    getAge() {
        let usd = this.Dolar;
        let euros = this.Euro;
        let yenes = this.Yen;
        return ('Dolares:' + usd + ' ' + 'Euros:' + ' ' + euros + ' ' + 'Yenes:' + ' ' + yenes);
    }
    toString() {
        return ' (' + this.getAge() + ')';
    }
}

let p = new OtrasMonedasaPesos(200,400,1000);
console.log('Resultado: ' + p);

/* ------------------------------------------------------------------------------------------------------------------------------------------------------- */
class TipoCambio_de {
  constructor(Dolar) {
      this.Dolar =(Dolar);
  }
  getAge() {
      let usd = this.Dolar;
      return ('a Dolar:' + ' ' +  (usd / dolar) + ' ' + 'pesos a Euros:' + ' ' +  (usd / euro) + ' ' + 'pesos a Yen:' + ' ' +  (usd / yen) );
  }
  toString() {
      return ' (' + this.getAge() + ')';
  }
}

let r = new TipoCambio_de (1000);
console.log('Resultado dos: ' + r);

  })();
