function Dog(name) {
  this.name = name;
}

let germanShepherd = new Dog ("Shakespeare");

Dog.prototype.color = "black";

console.log(Dog.prototype.color); // black
