var Car = /** @class */ (function () {
    function Car(model, door, isElectric) {
        this.model = model;
        this.door = door;
        this.isElectric = isElectric;
    }
    Car.prototype.displayMake = function () {
        console.log("This car is ".concat(this.model));
    };
    return Car;
}());
var BMW = new Car('BMI8', 4, true);
BMW.displayMake();
