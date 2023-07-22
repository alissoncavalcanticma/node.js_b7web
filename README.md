# Projeto Sequelize NodeJs_TypeScript
Projeto do curso de NodeJs da B7Web

=================================================
### ANOTATIONS

- Usando 
    - NodeJs:
        `npm init`
    - Config TypeScript:
        `"tsc --init" `
        - Configuration:
            - `target: es6`
            - `rootDir: ./src`
            - `outDir ./dist`
            - `moduleResolution: node16`

- Modules/etc
    - express
        `npm install express` 
    - ts-node
        `npm install -g ts-node`
    - typescript
        `npm install -g typescript`
    - Nodemon
        `npm install -g nodemon` 
        - Expressão package.json:
          `"start-server": "nodemon -e ts,json mustache src/server.ts"`
    - path (Para Usar caminho absoluto na pasta pública)
        `npm install path` 
    - dotenv (Para usar variáveis de ambiente)
        `npm install dotenv`
- Dependências de Desenvolvimento:
  - Types:
    - @types/express
        `npm install --save-dev @types/express` 
    - @types/node
        `npm install --save-dev @types/node`
    - @types/mustache-express
        `npm install --save-dev @types/mustache-express` 

- Run Project:
    *`npm run start-server`*

<!--
- To Deploy in Heroku:
    - "engines" in package.json:
        `"engines": { "node": "16.x" }`
    - Install CopyFiles dependecy:
        `npm install --save-dev copyfiles` 
    - Create a script's in package.json in section "scripts":
        `"start": "node dist/server.js,"`
        `"postinstall": "tsc && copyfiles -u 1 src/**/*.mustache dist/"`
        > *Transcribe from TypeScript to JS, creating the "dist/" folder with a "views" folder and copy the mustache files.*
    - Create "Procfile" in root:
        `web: npm start`
    - Run the "postinstall" and "start" script's:
        `npm run postinstall`
        `npm run start` 
-->
============================================
### [BD] Sequelize

 - npm install -D @types/sequelize
 - npm install mysql2
 - npm install pg pg-hstore



