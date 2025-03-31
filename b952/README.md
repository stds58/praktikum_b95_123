# Praktikum B9.5.2

## Сборка Docker-образа 
```bash
docker build -t stds58/praktikum_b952 .
```
## Запуск контейнера локально 
```bash
docker run -d -p 8080:80 stds58/praktikum_b952
```
## Авторизация в Докерхабе
```bash
docker login
```
## Публикация в Докерхабе
```bash
docker push stds58/praktikum_b952
```
## Ссылка на Докерхаб
```bash
https://hub.docker.com/repository/docker/stds58/praktikum_b952/general
```
