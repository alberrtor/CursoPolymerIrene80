 class Conversion{

   constructor(monedaMex, divisa){
     this.monedaMex = monedaMex;
     this.divisa = divisa;
   }

  get cambioDivisa(){
      return this.Cambio();
    }
   cambio(){
     return this.monedaMex * this.divisa;
   }

   get cambioDivisa2(){
     return this.cambioOtraMoneda();
   }

   CambioOtraMoneda(){
     return this.divisa * this.monedaMex
   }
 }

 const rublo = new Conversion(1, 3.1705);
 const dolar = new Conversion(1, 0.050280);
 const euro  = new Conversion(1, 0.04310);

 console.log('un peso mexicano vale: ' + rublo.cambioDivisa +' rublos');
 console.log('un peso mexicano vale: ' + dolar.CambioDivisa +' dolares');
 console.log('un peso mexicano vale: '  + euro.CambioDivisa +' euros');

 const cambioRublo = new Conversion(0.31556, 1);
 const cambioDolar = new Conversion(19.92139, 1);
 const cambioEuro  = new Conversion(23.188, 1);

 console.log('un rublo vale: ' + cambioRublo.CambioDivisa2 +' pesos');
 console.log('un dolar vale: ' + cambioDolar.CambioDivisa2 +' pesos');
 console.log('un euro vale: ' + cambioEuro.CambioDivisa2 +' pesos');

 const rubloViaje = new Conversion(0.31556, 80000);
 console.log('Los mexicanos que viajaron a Moscu pagaron: ' + rubloViaje.CambioDivisa2 + ' pesos');
