class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  showInfo() {
    return `Person name ${this.name} he is ${this.age} old!`;
  }
}

class Car {
  constructor(make, model, yearOfIssue, licensePlate) {
    this.make = make;
    this.model = model;
    this.yearOfIssue = yearOfIssue;
    this.licensePlate = licensePlate;
  }

  addOwner(person) {
    if (person.age > 18) {
      this.person = person;
    } else {
      console.log(
        `${person.name} can't buy car because he is ${person.age} is not 18`
      );
    }
  }

  showInfo() {
    console.log(
      `Car make is ${this.make} model is ${this.model} Year of issue is ${
        this.yearOfIssue
      } License plate is ${this.licensePlate} Owner: ${
        this.person?.showInfo() || "don't have owner"
      }`
    );
  }
}

const owner = new Person("Sergey", 19);
const car = new Car("bmw", "m5", 2010, "ST45221");
owner.showInfo();
car.addOwner(owner);
car.showInfo();

const owner1 = new Person("Igor", 17);
const car1 = new Car("audi", "a4", 2001, "ZF45551");
owner1.showInfo();
car1.addOwner(owner1);
car1.showInfo();
