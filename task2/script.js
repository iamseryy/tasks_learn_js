// Задание 1
// Необходимо создать переменную в которой будет храниться температура в градусах Цельсия,
// преобразовать значение в температуру по фаренгейту.
// Формула перевода градусов Цельсия в градусы Фаренгейта: градусы Фаренгейта = (9 / 5) * градусы Цельсия + 32
// Вывести в консоль температуру в Цельсиях и Фаренгейтах.

console.log("Task1")
const temperatureInCelsius = 20
const temperatureFahrenheit = temperatureInCelsius * (9 / 5) + 32
console.log(`Temperature in Celsius = ${temperatureInCelsius}`)
console.log(`Fahrenheit temperature = ${temperatureFahrenheit}`)


// Задание 2
// Необходимо создать переменную name, записать в эту переменную свое имя.
// Необходимо также создать переменную admin и присвоить этой переменной значение из переменной name.
// Вывести значение переменной admin в консоль.

console.log("Task2")
const name = "Sergei"
const admin = name
console.log(`admin: ${admin}`)