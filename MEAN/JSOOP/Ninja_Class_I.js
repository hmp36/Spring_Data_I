function Ninja(Name){

this.name = name; 
this.health =100;
const speed =3;
const strength =3;
this.sayName = function () { 
    console.log("My ninja name is" + this.name);
}
this.showStats = function () {
    console.log("Name:" + this.name+"Health:" +this.health + " Speed: "+ speed+ "Strength:" + strength); 
}
this.drinkSake() = function () {
    this.health += 10
}
this.getStrength = function () {
    return strength;
    }
}
Ninja.prototype.punch = function (ninja2) {
    if (ninja2.constructor != Ninja) {
        console.log("sorry")
        return
    }
    ninja2.health -= 5;
    console.log(`${this.name} punched ${ninja2.name} and did 5 damage!`)
}
Ninja.prototype.kick = function (ninja2) {
    if (ninja2.constructor != Ninja) {
        console.log("sorry")
        return
    }
    let strength = this.getStrength();
    ninja2.health -= (strength * 15);
    console.log(`${this.name} kick ${ninja2.name} and did ${15 * strength} damage!`)
}

const ninja1 = new Ninja("Domino");
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();
ninja1.showStats();

const blueNinja = new Ninja ("Goemon")
const redNinja = new Ninja("Bill Gates");
redNinja.punch(blueNinja);
blueNinja.showStats();
redNinja.kick(blueNinja);
blueNinja.showStats();
