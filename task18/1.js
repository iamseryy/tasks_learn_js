"use strict";

/*
###Задание 1
Необходимо создать класс Library. Конструктор класса, должен принимать начальный 
список книг (массив) в качестве аргумента. Убедитесь, что предоставленный массив 
не содержит дубликатов; в противном случае необходимо выбросить ошибку.
1. Класс должен содержать приватное свойство #books, которое должно хранить 
книги, переданные при создании объекта.
2. Реализуйте геттер-функцию allBooks, которая возвращает текущий список книг.
3. Реализуйте метод addBook(title), который позволяет добавлять книгу в список. 
Если книга с таким названием уже существует в списке, выбросьте ошибку с 
соответствующим сообщением.
4. Реализуйте метод removeBook(title), который позволит удалять книгу из списка 
по названию. Если книги с таким названием нет в списке, выбросьте ошибку с 
соответствующим сообщением.
5. Реализуйте метод hasBook(title), который будет проверять наличие книги в 
библиотеке и возвращать true или false в зависимости от того, есть ли такая 
книга в списке или нет.
*/

class NotUniqueError extends Error {
    constructor(message) {
        super(message);
        this.name = this.constructor.name;
    }
}

class NoSuchElementException extends Error {
    constructor(message) {
        super(message);
        this.name = this.constructor.name;
    }
}

class Library {
    #books = []

    constructor(books) {
        if (books.length !== (new Set(books)).size) throw new NotUniqueError('Books are not unique')
        this.#books = books
    }

    get allBooks() {
        return this.#books
    }

    addBook(title) {
        if (this.hasBook(title)) throw new NotUniqueError('There is already such a book')
        this.#books.push(title)
    }

    removeBook(title) {
        if (!this.hasBook(title)) throw new NoSuchElementException('There are no such books')
        this.#books.splice(this.#books.indexOf(title), 1)
    }

    hasBook (title) {
        return this.#books.includes(title)
    }
}