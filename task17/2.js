"use strict";

/*
###Задание 2
Вы управляете рестораном, в котором работают разные повара, специализирующиеся 
на определенных блюдах. Клиенты приходят и делают заказы на разные блюда.
Необходимо реализовать функцию newOrder. Создавать вспомогательные функции, 
коллекции, не запрещается. Старайтесь использовать коллекции Map/Set, где это 
актуально. Представленный ниже код должен работать.

Повара и их специализации:
Олег - специализация: Пицца.
Андрей - специализация: Суши.
Анна - специализация: Десерты.

Блюда, которые могут заказать посетители:
Пицца "Маргарита"
Пицца "Пепперони"
Пицца "Три сыра"
Суши "Филадельфия"
Суши "Калифорния"
Суши "Чизмаки"
Суши "Сеякемаки"
Десерт Тирамису
Десерт Чизкейк
*/

const chefsDishes = new Map()
chefsDishes
    .set('Пицца', 'Олег')
    .set('Суши', 'Андрей')
    .set('Десерт', 'Анна')

const dishes = new Map()
dishes
    .set('Маргарита', 'Пицца')
    .set('Пепперони', 'Пицца')
    .set('Три сыра', 'Пицца')
    .set('Филадельфия', 'Суши')
    .set('Калифорния', 'Суши')
    .set('Чизмаки', 'Суши')
    .set('Сеякемаки', 'Суши')
    .set('Тирамису', 'Десерт')
    .set('Чизкейк', 'Десерт')

const orders = new Map()


// Посетитель ресторана.
class Client {
  constructor(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
  }
}


// Вам необходимо реализовать класс, который управляет заказами и поварами.
class Manager {
    newOrder(client, ...newOrderPositions) {
      newOrderPositions.forEach(newPosition => {
        let clientOrderPositions = orders.get(client)
        if(!clientOrderPositions) clientOrderPositions = new Map()

        if(!dishes.has(newPosition.name)) {
          throw new Error(`${newPosition.type} "${newPosition.name}" - такого блюда не существует.`)
        }

        let quantity = 0
        if (clientOrderPositions)  quantity = clientOrderPositions.get(newPosition.name)
        clientOrderPositions.set(newPosition.name, quantity ? quantity + newPosition.quantity : newPosition.quantity)
        orders.set(client, clientOrderPositions)
      })

      console.log(`Клиент ${client.firstname} заказал:\n`)
      orders.get(client).forEach((value, key) => {
        console.log(`${dishes.get(key)} "${key}" - ${value}; готовит повар ${chefsDishes.get(dishes.get(key))}`)
      })
    }
}

// Можно передать внутрь конструктора что-либо, если необходимо.
const manager = new Manager();

// Вызовы ниже должны работать верно, менять их нельзя, удалять тоже.
manager.newOrder(
  new Client("Иван", "Иванов"), 
  { name: "Маргарита", quantity: 1, type: "Пицца" },
  { name: "Пепперони", quantity: 2, type: "Пицца" },
  { name: "Чизкейк", quantity: 1, type: "Десерт" },
);



// Вывод:
// Клиент Иван заказал: 
// Пицца "Маргарита" - 1; готовит повар Олег
// Пицца "Пепперони" - 2; готовит повар Олег
// Десерт "Чизкейк" - 1; готовит повар Анна

// ---

const clientPavel = new Client("Павел", "Павлов");
manager.newOrder(
  clientPavel, 
  { name: "Филадельфия", quantity: 5, type: "Суши" },
  { name: "Калифорния", quantity: 3, type: "Суши" },
);
// Вывод:
// Клиент Павел заказал: 
// Суши "Филадельфия" - 5; готовит повар Андрей
// Суши "Калифорния" - 3; готовит повар Андрей

manager.newOrder(
  clientPavel, 
  { name: "Калифорния", quantity: 1, type: "Суши" },
  { name: "Тирамису", quantity: 2, type: "Десерт" },
);
// Вывод:
// Клиент Павел заказал: 
// Суши "Филадельфия" - 5; готовит повар Андрей
// Суши "Калифорния" - 4; готовит повар Андрей
// Десерт "Тирамису" - 2; готовит повар Анна


manager.newOrder(
  clientPavel, 
  { name: "Филадельфия", quantity: 1, type: "Суши" },
  { name: "Трубочка с вареной сгущенкой", quantity: 1, type: "Десерт" },
);
// Ничего не должно быть добавлено, должна быть выброшена ошибка:
// Десерт "Трубочка с вареной сгущенкой" - такого блюда не существует.