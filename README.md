# PixiSlots

Тестовое задание PixiSlots. 

Используется версия ангура 10, PixiJS подключается в package.json.
Игра вынесена в отдельный модуль, который импортируется в app.module.
В будущем, если игр станет много - для загрузки можно использовать lazy loading.
Сама логика игры лежит в файле slots.ts. Этот файл скопирован с примера на сайте pixijs,
а затем отредактирован в соответствии с требованиями. Кнопка "Играть" заменена на стандартную html button.
Файл slots.component.ts включает только логику отображения игры и запуска новой игры при нажатии кнопки.
Это игра responsive. Максимальная ширина экрана 800px. Если экран меньше - игра будет уменьшена, чтобы помещаться на экран.
Для этого используется объект window. Так как в будущем может использоваться платформы,
на которых нет глобального объекта window, логика получения этого объекта помещена в отдельный сервис. 
Таким образом можно будет экспортировать специфический объект для каждой платформы.