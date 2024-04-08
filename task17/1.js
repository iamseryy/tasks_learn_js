"use strict";

/*
###Задание 1
Создайте обычный объект "Музыкальная коллекция", который можно итерировать. 
Каждая итерация должна возвращать следующий альбом из коллекции. Коллекция 
альбомов - это массив внутри нашего объекта (создать несколько альбомов самому).
Каждый альбом имеет следующую структуру:
{
  title: "Название альбома",
  artist: "Исполнитель",
  year: "Год выпуска"
}
Используйте цикл for...of для перебора альбомов в музыкальной коллекции и 
вывода их в консоль в формате:
"Название альбома - Исполнитель (Год выпуска)"
*/

const albums = [
    { title: "title1", artist: "artist1", year: 2015 },
    { title: "title2", artist: "artist2", year: 2016 },
    { title: "title3", artist: "artist3", year: 2017 },
]

const collections = {
    albums,
    *[Symbol.iterator]() {
        for (const album of this.albums) {
            yield album
        }
    },
}


for (const album of collections) {
    console.log(`${album.title} - ${album.artist}  (${album.year})`)
}