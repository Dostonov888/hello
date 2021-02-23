class First {
    constructor(name) {
        this.name = name;
    }
    hello() {
        console.log(`Привет я ${this.name} родителя!`);
    }
}
class Second extends First {
    hi() {
        super.hello();
        console.log(`А я наследуемый ${this.name}!`);
    }
}
let second = new Second('метод');

second.hi();