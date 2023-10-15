// Use terminal commands to see what happens when we call Astronaut but do not pass in 3 arguments.

// Next, set default values for 1 or more of the parameters in constructor.

class Astronaut {
    constructor(name, age = 120, mass = 69){
      this.name = name;
      this.age = age;
      this.mass = mass;
    }
}

let tortoise = new Astronaut('Speedy', 120, 47, 'bonus word');

console.log(tortoise.name, tortoise.age, tortoise.mass);

console.log(tortoise)

// What happens if we call Astronaut and pass in MORE than 3 arguments? TRY IT!