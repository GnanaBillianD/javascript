class Rectangle {
    constructor(height, width) {
      this.name = 'Rectangle';
      this.height = height;
      this.width = width;
    }
    sayName() {
      console.log('Hi, I am a ', this.name + '.');
    }
    get area() {
      return this.height * this.width;
    }
    set area(value) {
      this._area = value;
    }
  }
  
  class Square extends Rectangle {
    constructor(c,d) {
    //   this.height; // ReferenceError, super needs to be called first
  
      // Here, it calls the parent class's constructor with lengths
      // provided for the Rectangle's width and height
      super(c,d);
  
      // Note: In derived classes, super() must be called before you
      // can use 'this'. Leaving this out will cause a reference error.
      this.name = 'Square';
    }
  }
  
  let a = new Rectangle(12,3);
  console.log(a);
  let b = new Square(98,45)
  console.log(b)