class Poligono {
 constructor(alto, ancho){
   this.alto = alto;
   this.ancho = ancho;
 }
}

// clasenombrada
var Poligono = class Poligono {
 constructor(alto, ancho){
   this.alto = alto;
   this.ancho = ancho;
 }
};

//clase anónima
var Poligono = class {
 constructor(alto, ancho){
   this.alto = alto;
   this.ancho = ancho;
 }
};

class Poligono {
 constructor(height, width){
   this.height = height;
   this.width = width;
 }

 get area(){
   return this.calcArea();
 }

 calcArea(){
   return this.height * this.width;
 }
}

const cuadrado = new Poligono(10,10);

console.log(cuadrado.area);
