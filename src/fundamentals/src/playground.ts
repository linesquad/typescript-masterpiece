// public class Car {
//   String make;
//   String model;
//   int make;
// }
// public class myCar {
//   String make;
//   String model;
//   int make;
// }
// public class CarChecker {
//   // takes a `Car` argument, returns a `String`
//   public static String checkCar(Car car) {  }
// }
// // Car myCar = new Car();
// // TYPE CHECKING
// // -------------
// // Is `myCar` type-equivalent to
// //     what `checkCar` wants as an argument?
// CarChecker.checkCar(myCar);

// class Car {
//   make: string;
//   model: string;
//   year: number;
//   isElectric: boolean;
// }

// class Truck {
//   make: string;
//   model: string;
//   year: number;
//   towingCapacity: number;
// }

// const vehicle = {
//   make: "Honda",
//   model: "Accord",
//   year: 2017,
// };

// function printCar(car: { make: string; model: string; year: number }) {
//   console.log(`${car.make} ${car.model} (${car.year})`);
// }

// if (vehicle instanceof Car) {
// }

// printCar(new Car()); // Fine
// printCar(new Truck()); // Fine
// printCar(vehicle); // Fine

type Evens = 2 | 4 | 6 | 8;

type OneFive = 1 | 2 | 3 | 4 | 5;

let tillFiveEven = null as Evens & OneFive;

tillFiveEven = 5;
