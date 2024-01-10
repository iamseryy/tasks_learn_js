// Задание 1
//Дан объект numbers. Необходимо в консоль вывести все значения больше или равные 3.
// const numbers = {
//     keyin1: 1,
//     keyin2: 2,
//     keyin3: 3,
//     keyin4: 4,
//     keyin5: 5,
//     keyin6: 6,
//     keyin7: 7,
// }
console.log("Task1");
const numbers = {
    keyin1: 1,
    keyin2: 2,
    keyin3: 3,
    keyin4: 4,
    keyin5: 5,
    keyin6: 6,
    keyin7: 7,
};
console.log(Object.values(numbers).filter(it => it >= 3));

// Задание 2
// Необходимо из объекта, который лежит в константе post вывести значения, к которым приписан комментарий, в консоль.
// const post = {
//     author: "John", // вывести этот текст
//     postId: 23,
//     comments: [
//         {
//             userId: 10,
//             userName: "Alex",
//             text: "lorem ipsum",
//             rating: {
//                 likes: 10,
//                 dislikes: 2, // вывести это число
//             },
//         },
//         {
//             userId: 5, // вывести это число
//             userName: "Jane",
//             text: "lorem ipsum 2", // вывести этот текст
//             rating: {
//                 likes: 3,
//                 dislikes: 1,
//             },
//         },
//     ],
// };
console.log("Task2");
const post = {
    author: "John", // вывести этот текст
    postId: 23,
    comments: [
        {
            userId: 10,
            userName: "Alex",
            text: "lorem ipsum",
            rating: {
                likes: 10,
                dislikes: 2, // вывести это число
            },
        },
        {
            userId: 5, // вывести это число
            userName: "Jane",
            text: "lorem ipsum 2", // вывести этот текст
            rating: {
                likes: 3,
                dislikes: 1,
            },
        },
    ],
};
console.log(post.author);
console.log(Object.entries(post.comments[0].rating)[1][1]);
console.log(Object.entries(post.comments[1])[0][1]);
console.log(Object.entries(post.comments[1])[2][1]);

// Задание 3
// Дан массив products, необходимо цену каждого продукта уменьшить на 15% используя метод forEach.
// const products = [
//     {
//         id: 3,
//         price: 200,
//     },
//     {
//         id: 4,
//         price: 900,
//     },
//     {
//         id: 1,
//         price: 1000,
//     },
// ];
console.log("Task3");
const productsTask3 = [
    {
        id: 3,
        price: 200,
    },
    {
        id: 4,
        price: 900,
    },
    {
        id: 1,
        price: 1000,
    },
];
productsTask3.forEach(it => it.price *= .85);
console.log(productsTask3);

// Задание 4
// 1. Необходимо вывести в консоль массив продуктов в котором есть хоть одна фотография используя метод filter.
//     Исходные данные - массив products.
// 2. Необходимо отсортировать массив products используя метод sort по цене, начиная с самой маленькой,
//     заканчивая самой большой ценой, после чего вывести отсортированный массив в консоль.
// const products = [
//     {
//         id: 3,
//         price: 127,
//         photos: [
//             "1.jpg",
//             "2.jpg",
//         ],
//     },
//     {
//         id: 5,
//         price: 499,
//         photos: [],
//     },
//     {
//         id: 10,
//         price: 26,
//         photos: [
//             "3.jpg",
//         ],
//     },
//     {
//         id: 8,
//         price: 78,
//     },
// ];
console.log("Task4");
const productsTask4 = [
    {
        id: 3,
        price: 127,
        photos: [
            "1.jpg",
            "2.jpg",
        ],
    },
    {
        id: 5,
        price: 499,
        photos: [],
    },
    {
        id: 10,
        price: 26,
        photos: [
            "3.jpg",
        ],
    },
    {
        id: 8,
        price: 78,
    },
];
console.log(productsTask4.filter(it => Object(it.photos).length > 0));
console.log(productsTask4.sort((it1, it2) => it1.price - it2.price));

// Задание 5
// Дано 2 массива
//
// const en = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
// const ru = ["понедельник", "вторник", "среда", "четверг", "пятница", "суббота", "воскресенье"];
//
// Вам необходимо объединить 2 этих массива, чтобы значения первого массива были ключами, а значения второго массива — значениями.
console.log("Task5");
const en = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
const ru = ["понедельник", "вторник", "среда", "четверг", "пятница", "суббота", "воскресенье"];
let week = {};
for (let i = 0; i < en.length; i++) {
    week[en[i]] = ru[i]
};
console.log(week);