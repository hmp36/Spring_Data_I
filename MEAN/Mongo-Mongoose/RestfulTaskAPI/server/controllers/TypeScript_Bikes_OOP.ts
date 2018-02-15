class Bike {
    price: number;
    max_speed: number;
    miles: number;
    constructor(price, max_speed, miles) {
        this.price = price;
        this.max_speed = max_speed;
        this.miles = miles;
    }
    displayInfo() any {
    console.log("shows max sp. & miles:" + this.max_speed + this.miles)
    return this;
}
    ride(): any {
        this.miles = this.miles + 10;
        console.log("Riding: " + this.miles);
        return this;
}
    reverse(): any {
        this.miles -= 5;
        console.log("Reverse: " + this.miles);
        return this;
}    
}
var bike1 = new bike(1500, 100, 25000);
var bike2 = new bike(1500, 100, 25000);
var bike3 = new bike(1500, 100, 25000);


bike1.ride().reverse().displayInfo();