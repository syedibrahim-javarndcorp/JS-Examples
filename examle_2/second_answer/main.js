//object creation normal method
let suzuki = {
    model : "swift",
    make : "2021",
    year : "2022",
    price : "3L"
}

console.log(suzuki.make);

//object creation by constructor

function Car(model, make, year, price){
    this.model = model;
    this.make = make;
    this.year = year;
    this.price = price;
}

const swift = new Car("hyundai", "creata", "2021", "5L");