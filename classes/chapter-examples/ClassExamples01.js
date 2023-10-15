//Try adding new properties inside constructor.
class Astronaut {
    constructor(name, nickname, age, mass){
      this.name = name;
      this.nickname = nickname
      this.age = age;
      this.mass = mass;
    }
}

let fox = new Astronaut('Fox', 7, 12);

console.log(fox);
console.log(fox.age, fox.color);

fox.age = 9;
fox.color = 'red';
fox.nickname = 'Duckie';

console.log(fox);
console.log(fox.age, fox.color);

//Try modifying or adding properties below.