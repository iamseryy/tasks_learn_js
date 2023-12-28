// Задание 1
// Необходимо с помощью цикла for вывести следующие 11 строк в консоль:
//     0 – это ноль
// 1 – нечетное число
// 2 – четное число
// 3 – нечетное число
// …
// 10 – четное число
for(let i = 0; i <= 10; i++) {
    if(i == 0) {
        console.log(`${i} - это ноль`)
        continue
    };

    i % 2 == 0 ? console.log(`${i} - четное число`) : console.log(`${i} - нечетное число`);
}

// Задание 2
// Дан массив [1, 2, 3, 4, 5, 6, 7]
// Сделайте из этого массива следующий [1, 2, 3, 6, 7]
const numbersTask2 = [1, 2, 3, 4, 5, 6, 7];
const resultTask2 = numbersTask2.slice(0, 3).concat(numbersTask2.slice(5, 7));
console.log(resultTask2);

// Задание 3
// Используя Math.random() вам необходимо генерировать цифры от 0 до 9, и создать массив состоящий из 5 таких элементов
// 1. Рассчитать сумму элементов этого массива
// 2. Найти минимальное число
// 3. Найти есть ли в этом массиве число 3
const numbersTask3 = Array.from({length: 5}, () => Math.floor(Math.random() * 10));
console.log(`Сумма элементов массива [${numbersTask3}] = ${numbersTask3.reduce((sum, num) => sum + num, 0)}`);
console.log(`Минимальное число массива [${numbersTask3}] = ${Math.min(...numbersTask3)}`);
console.log(`Число 3 в массиве [${numbersTask3}] ${numbersTask3.includes(3) ? "" : "не "}присутствует`);

// Задание 4
// Необходимо вывести горку в консоль (используя цикл for), как показано на рисунке, только у вашей горки должно быть 20 рядов, а не 5:
// x
// xx
// xxx
// xxxx
// xxxxx
for(let i = 1; i < 21; i++){
    console.log("x".repeat(i))
};
