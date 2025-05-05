export class Car {
    model;
    year;
    constructor(model, year) {
        this.model = model;
        this.year = year;
    }

    toString() {
        return "Model: " + this.model + " and Year: " + this.year;
    }
}
