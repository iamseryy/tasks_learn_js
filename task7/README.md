## Task7. Работа с DOM

### Обязательное задание.

Выполнить все задачи в теге script. Комментарии, в которых написаны задачи, не стирать, код с решением задачи пишем под комментарием.

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>task7</title>
</head>
<body>
    <p class="dropdown">Привет :)</p>
    <div class="dropdown">
        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Dropdown button
        </button>
        <div class="menu dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a class="dropdown-item" href="#">Action</a>
            <a class="dropdown-item" href="#">Another action</a>
            <a class="dropdown-item" href="#">Something else here</a>
        </div>
    </div>
    <script>
        // 1. Ко всем элементам, имеющим класс "dropdown-item" добавить еще один класс "super-dropdown",
        // необходимо использовать методы forEach и querySelectorAll и свойство classList у элементов.
        document.querySelectorAll('.dropdown-item').forEach(element => element.classList.add('super-dropdown'))

        // 2. У элемента с классом btn необходимо убрать класс "btn-secondary", если он присутствует у этого элемента,
        // либо добавить, если такого класса у элемента не было.
        document.querySelectorAll('.btn').forEach(element => element.classList.contains('btn-secondary') ?
            element.classList.remove('btn-secondary')
            : element.classList.add('btn-secondary'))

        // 3. Необходимо удалить класс "dropdown-menu" у элемента, у которого присутствует класс "menu".
        document.querySelectorAll('.dropdown-menu').forEach(element => {
            if (element.classList.contains('menu')) element.classList.remove('dropdown-menu')
        })

        // 4. Используя метод insertAdjacentHTML добавьте после div'a с классом "dropdown" следующую разметку:
        //     `<a href="#">link</a>`
        document.querySelectorAll('div.dropdown')
            .forEach(element => element.insertAdjacentHTML('afterbegin', '<a href="#">link</a>'))

        // 5. У элемента с id "dropdownMenuButton" замените id на "superDropdown".
        document.querySelector('#dropdownMenuButton').id = 'superDropdown'

        // 6. Добавьте атрибут data-dd со значением 3 элементу у которого существует атрибут "aria-labelledby"
        // равный "dropdownMenuButton" используя dataset.
        document.querySelectorAll('[aria-labelledby="dropdownMenuButton"]').forEach(element => element.dataset.dd = '3')

        // 7. Удалите атрибут type у элемента с классом "dropdown-toggle".
        document.querySelectorAll('.dropdown-toggle').forEach(element => {
            element.removeAttribute('type')
        })
    </script>
</body>
</html>
```