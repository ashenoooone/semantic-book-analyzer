# 📚 Semantic Book Analyzer

Semantic Book Analyzer — это веб-сервис для извлечения ключевых слов из введения книги по дискретной математике в формате PDF.

## 🚀 Особенности

- **Загрузка книг:** Пользователь может загрузить книгу по дискретной математике в формате PDF.
- **Извлечение ключевых слов:** Сервис на Python ищет введение в книге и извлекает ключевые слова, предоставляя пользователю важные темы.
- **История запросов:** Пользователи могут просматривать историю своих запросов, отслеживая ранее обработанные книги.

## 💻 Технологии

- **Фронтенд:** Разработан с использованием React.js, Webpack, FSD подхода, Redux Toolkit (RTK) и TypeScript.
- **Бэкенд:** Построен на FastAPI с использованием FastAPI Users для реализации системы авторизации и регистрации. Используется SQLAlchemy для работы с базой данных, Pydantic для валидации данных, Pymorphy3 и Spacy для обработки текста.

## 🛠️ Установка

1. Клонируйте репозиторий:

```bash
git clone https://github.com/ashenoooone/semantic-book-analyzer.git
cd semantic-book-analyzer
# Установка backend зависимостей
cd backend
pip install -r requirements.txt

# Установка frontend зависимостей
cd ../frontend
npm install
# Запуск backend сервера
cd ../backend
python3 main.py

# Запуск frontend приложения
cd ../frontend
npm run dev
```

## 🌐 Запуск приложения
После выполнения этих шагов вы сможете открыть веб-сервис в вашем браузере по адресу http://localhost:3000/.

## 🤝 Вклад
Если у вас есть предложения по улучшению проекта, пожалуйста, создайте issue или отправьте pull request.
