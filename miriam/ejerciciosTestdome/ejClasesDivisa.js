class Conversion{
  constructor(factorC,divisa){
    this.factorC=factorC;
    this.divisa=divisa;
  }

  convierteaPesos(montoMonEx){
    return (montoMonEx/this.factorC).toFixed(2);
  }

  convierteDesdePesos(montoPesos){
    return (montoPesos*this.factorC).toFixed(2);
  }

  getDivisa(){
    return this.divisa;
  }
}

// const c=new Conversion(1/20,'USD');
// const pesos=200;
// const montoDivisa=5;
// console.log(montoDivisa +' '+c.getDivisa()+' => '+c.convierteaPesos(montoDivisa)+' MXN');
// console.log(pesos +' MXN => '+c.convierteDesdePesos(pesos)+' '+c.getDivisa());
//
//
// const c=new Conversion(1/23.17,'EUR');
// const pesos=200;
// const montoDivisa=5;
// console.log(montoDivisa +' '+c.getDivisa()+' => '+c.convierteaPesos(montoDivisa)+' MXN');
// console.log(pesos +' MXN => '+c.convierteDesdePesos(pesos)+' '+c.getDivisa());
//

const c=new Conversion(1/0.31369,'RUB');
const pesos=200;
const montoDivisa=80000;
console.log(montoDivisa +' '+c.getDivisa()+' => '+c.convierteaPesos(montoDivisa)+' MXN');
console.log(pesos +' MXN => '+c.convierteDesdePesos(pesos)+' '+c.getDivisa());
