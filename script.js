const numArr = [2, 5, 73, 5, 55, 21, 6, 78]
console.log(`Вид нашего массива: [${numArr}]`)
// Задание №1
const resultSum = numArr.reduce((a, b) => a + b)
console.log(`Сумма наших объектов в массиве: [${resultSum}]`)

// Задание №2
const findMinNum = Math.min(...numArr)
console.log(`Наименьшее число в нашем объекте: [${findMinNum}]`)

// Задание №3
const findMaxNum = Math.max(...numArr)
console.log(`Наибольшее число в нашем объекте: [${findMaxNum}]`)

// Задание №4
// const value = 5;
// const index = value.indexOf(numArr , value)
// console.log(index)

// Задание №5
function removeDubl(numArr) {
  const uniquenumArr = []
  for (let i = 0; i < numArr.length; i++) {
    if (uniquenumArr.indexOf(numArr[i]) === -1) {
      uniquenumArr.push(numArr[i]);
    }
  }
  return uniquenumArr
}

// Задание №6
function sortAsc(numArr) {
  return numArr.sort((a, b) => a - b)
}
console.log(sortAsc(numArr))

// Задание №7 
function sortDesc(numArr) {
  return numArr.sort((a, b) => b - a)
}
console.log(sortDesc)

// Задание №8
function findAverage(numArr) {
  const sum = numArr.reduce((acc, curr) => acc + curr, 0)
  return sum / numArr.length
}
console.log(findAverage(numArr))

// Задание №9
function checkCondition(newArr, condition) {
  return newArr.every(condition);
}
console.log(checkCondition(numArr, condition))

// Задание №10
const stringArr = numArr.map((num) => "" + num);
console.log(stringArr)