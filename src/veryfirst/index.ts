// /**
//  * Create a promise that resolves after some time
//  * @param n number of milliseconds before promise resolves
//  */

// function timeout(n: number) {
//   return new Promise((res) => setTimeout(res, n));
// }

// /**
//  * Add three numbers
//  * @param a first number
//  * @param b second
//  */
// export async function addNumbers(a: number, b: number) {
//   await timeout(500);
//   return a + b;
// }

// // this exists es2022
// class Foo {
//   static #bar = 3;
//   static getValue() {
//     return Foo.#bar;
//   }
// }

// //== Run the program ==//
// // it exists es 2017
// (async () => {
//   console.log(await addNumbers(Foo.getValue(), 4));
// })();
