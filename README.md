# Mark1

Primeiro prototipo para uso pessoal feito com python e django.

[![Build Status](https://travis-ci.org/sandrofolk/mark1.svg?branch=master)](https://travis-ci.org/sandrofolk/mark1)
[![Code Health](https://landscape.io/github/sandrofolk/mark1/master/landscape.svg?style=flat)](https://landscape.io/github/sandrofolk/mark1/master)
[![Coverage Status](https://coveralls.io/repos/github/sandrofolk/mark1/badge.svg?branch=master)](https://coveralls.io/github/sandrofolk/mark1?branch=master)

## Como desenvolver?

1. Clone o repositório.
2. Crie um virtualenv com Python 3.5
3. Ative o virtualenv.
4. Instale as dependências.
5. Configure a instância com o .env
6. Execute os testes.

```console
git clone git@github.com:sandrofolk/mark1.git
cd mark1
python -m venv .venv
source .venv/bin/activate
pip install -r requirements-dev.txt
cp contrib/env-sample .env
python manage.py test
```


## Como desenvolver o app em ionic2?

1. Instalar Cordova.
2. Instalar Ionic CLI.
3. Iniciar o servidor.

```console
npm install -g cordova
npm install -g ionic
cd mark1App
ionic serve -l
```


## Como fazer o deploy?

1. Crie uma instância no heroku.
2. Envie as configurações para o heroku.
3. Defina uma SECRET_KEY segura para a instância.
4. Defina DEBUG=False
5. Configure o serviço de email.
6. Envie o código para o heroku.
7. Aplicar as migrações.
8. Criar o superuser.

```console
heroku create mark1
heroku config:push
heroku config:set SECRET_KEY=`python contrib/secret_gen.py`
heroku config:set DEBUG=False
# configurar o email
git push heroku master --force
heroku run python manage.py migrate
heroku run python manage.py createsuperuser
```