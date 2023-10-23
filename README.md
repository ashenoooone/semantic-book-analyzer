# webpack-react-typescript-scss-fsd

## Генератор слоев

В проекте создана возможность автоматической генерации слоев по архитектуре FSD.

1. Поддерживается 4 вида слоев: pages, widgets, features, entities
2. Генерируется model, types, slice, ui, api и все необходимые для начала работы файлы
3. Автоматическая генерация содержимого файлов, публичного api

Для вызова генератора слоев надо ввести команду

`npm run generate:slice {pages|entities|widgets|features} {название_слайса}`
