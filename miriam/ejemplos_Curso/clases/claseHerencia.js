class Rectangle {

constructor(lenght, width){
  this.lenght = lenght;
  this.width = width;
}

getArea(){
  return this.lenght*this.width
}
}

class Square extends Rectangle {
 constructor(lenght){
   super(lenght,lenght);
 }
}

var square = new Square(3);

console.log(square.getArea());
console.log(square instanceof Rectangle);
