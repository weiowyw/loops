


// 1.
// const length = prompt('Введите длину массива');
//
// const arr = [];
// for (let i = 0; i < length; i++) {
//     const number = prompt(`Введите ${i + 1} элемент массива`)
//     arr[i] = +number;
// }
//
// const avg = (array) => {
//     let sum = 0;
//     for (let i = 0; i < array.length; i++) {
//         sum += array[i];
//     }
//     return sum / array.length;
// };
//
// if(arr.length === 0) console.log(0);
// else console.log(avg(arr));
//

// 2.
// const arr = ["I", "would", "love", "to", "learn"];
//
// for(let i = 0; i < arr.length; i++){
//     arr[i] = `${i+1}: ${ arr[i]}`;
// }
//
// console.log(arr);


// 3.
// const arr = [27, -6, -8, 20, 5, -3, -40, 60, 17, -9, 18];
// const editedArr = [];
// let positiveNumAmount = 0;
// let negativeSum = 0;
// if(arr.length === 0){
//     console.log(editedArr);
// }else {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > 0) positiveNumAmount++;
//         else if (arr[i] < 0) negativeSum = negativeSum + arr[i];
//     }
// }
// console.log(`${positiveNumAmount}, ${negativeSum}`);


// 4.
// const str = 'I love this world so much';
//
// const splitIntoNewArray = (string) => string.split(' ');
//
// console.log(splitIntoNewArray(str));