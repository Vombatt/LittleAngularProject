## Краткое описание

Создать приложение Список

1 Модуль авторизации (Локальная авторизация данные хранятся на клиентской машине);
1.1 Страница авторизации;
1.2 После успешной авторизации переадресовывать на домашнюю страницу;
1.3 Реализовать защиту от доступа к странице авторизации авторизованного пользователя с переходам на домашнюю страницу;
2 Модуль таблица;
2.1 Доступ на эту страницу только у авторизованных пользователей;
2.1 Страница просмотра таблицы - фильтр по колонкам, сортировка колонок; таблица, пагинация;
2.2 Страница создания/редактирования/просмотра - По умолчанию открывается режим просмотра, Реализовать возможность редактирования по ролям если есть права на редактирование показывать элемент управления п нажатию на который форма перейдет в режим редактирования;
2.3* Обработать сценарий когда пользователь перешел в режим редактирования и поменял данные - при попытке уйти с этого урла выдавать уведомление также обработать кнопку обновления страницы и попытку закрыть вкладку;
2.4* Реализовать стратегии autoclose, autosave, prompt. Стратегия это действие которое нужно выполнять после попытки закрыть редактор автосэйв - данные сохраняюсь без запросов,  автокэнсл данные не сохраняются и форма сразу закрывается, промпт выводится сообщение с выбором сохранить , очистить, отменить ;
2.5* Возможно настроить порядок колонок;
2.6* Возможность скрывать и показывать колонки - должна оставаться хотя бы одна;
2.7* Показывать колонки в таблице  и поля на просмотре/редактировании/создания по данным из набора прав доступа;

Пункты со звездочкой - необязательные, бонусные


# LittleAngularProject

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.8.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
