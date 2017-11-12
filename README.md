# guarani
Teste prático

### Pré requisitos
Você irá precisar instalar o node.js
[http://nodejs.org/](http://nodejs.org/).

### Clone guarani
Clone o repositório usando [git][git]:
```
git clone https://github.com/jucesarsilva/guarani.git
cd guarani
```
### Instalando as dependências
```
npm install
```
### Rodar a aplicação
```
npm start
```
Ou
```
npm install
gulp server
```
disponível: `http://localhost:8000/index.html`.
### Rodar testes unitários
```
npm test
```
### Rodar testes e2e (Protractor + Selenium)
Você precisará de 2 terminais para rodar os testes automatizados
1º terminal - Rodar para inicializar a aplicação
```
npm  start
```
2º terminal - Rodar para inicializar a aplicação
```
npm run protractor
```
