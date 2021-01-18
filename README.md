# Teste Técnico - Dev Frontend - SAS

Documentação do Frontend desenvolvido..

## Stack / Bibliotecas utilizadas

- React (https://github.com/facebook/react)
- Styled Components (https://github.com/styled-components/styled-components)
- Reflexbox (https://rebassjs.org/reflexbox/)

## Versões suportadas

- Node.js v12.16.2+ (https://nodejs.org/en/)
- Yarn v1.22.5+ (https://classic.yarnpkg.com/en/docs/install/#debian-stable)
- Google Chrome v80+ (https://www.google.com/intl/pt-BR/chrome/)
- Chromium based (Brave, MS Edge) v44+ (https://www.chromium.org/developers/version-numbers)
- Smartphone com display até 320x568

*Testado nas versões acima*

## Desenvolvimento

**Instalar dependências do projeto**

```
  yarn install
```

**Executar o projeto**

Por padrão irá executar na porta **3000**

```
  yarn start
```

## Build

Apagar arquivos gerados para produção `build`

```
yarn clean
```

Gerar arquivos para produção `build`

```
yarn build
```

## Done
- Tela inicial com lista das categorias [x]
- Tela de questão [x]
- Lógica de dificuldade [x]
- Botão de resposta com animação equivalente a do protótipo [x]
- Hook de controle do contexto do Quiz [x]

## Todo
- Refatorar lógica de dificuldade das perguntas []
- Ao atingir 10 questões respondidas, salvar no local storage []
- Limitar para o usuário poder responder apenas uma vez cada categoria []
- Tela com os resultados da categoria selecionada []
- Modal com resultado imediato se o usuário acertou ou errou a pergunta []
- Persistir dados enviados a Context API para o local storage []
- Testes unitários e UI []
