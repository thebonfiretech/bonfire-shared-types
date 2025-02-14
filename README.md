


# Bonfire Shared Types

Projeto destinado a compartilhar tipagens entre o backend e o frontend, evitando conflitos de dados e garantindo a consistência entre os sistemas.


### Ferramentas usadas
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)
![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)

## Instalação

### Clonando o Repositório

Clone o repositório:
```bash
git clone https://github.com/thebonfiretech/bonfire-shared-types.git
```

Entre no diretório do projeto:
```bash
cd bonfire-shared-types
```

### Instalando as Dependências

Instale as dependências:
```bash
npm install
```



## Build

Compile o projeto para gerar a pasta `dist` (que conterá os arquivos JavaScript e as declarações de tipo):
```bash
npm run build
```

> **Observação:** Caso a pasta `dist` não esteja versionada no repositório, verifique se o script `prepare` está configurado para compilar automaticamente após a instalação.



## Estrutura do Projeto

- **dist**  
  Pasta com os arquivos compilados (JavaScript e arquivos de declaração `.d.ts`).

- **src**  
  Diretório contendo o código-fonte.
  - **types**
    - `type.ts` – Arquivo único onde estão centralizadas todas as tipagens compartilhadas.
  - `index.ts` – Arquivo de exportação central, que reexporta os tipos definidos em `src/types/type.ts`.

- **.gitignore**  
  Arquivo de configuração para ignorar dependências e a pasta de build (`dist`).



## Como Usar no Seu Projeto

Para utilizar as tipagens compartilhadas em outros projetos (backend e/ou frontend), você pode adicioná-lo como dependência diretamente do GitHub.

### Adicionando a Dependência

No `package.json` do seu projeto, adicione:

```json
"dependencies": {
  "bonfire-shared-types": "git+https://github.com/thebonfiretech/bonfire-shared-types.git"
}
```

Após instalar a dependência (via `npm install` ou `yarn install`), importe os tipos em seus arquivos TypeScript:

```ts
// Importa a interface do pacote bonfire-shared-types
import { UserModelType } from "bonfire-shared-types";

// Exemplo simplificado de mockup de usuário:
const mockUser: UserModelType = {
  _id: "67ab5230d8ee4a70ec6b8901",
  id: "admin",
  name: "joao vitor dutra",
  role: "admin",
  status: "loggedIn",
  keys: {
    slots: 1,
    specialSlots: 0,
    favoriteSlots: 3,
  },
  coins: 0,
  badges: [],
  spaces: [
    {
      entryAt: new Date("2025-02-11T20:15:03.179Z"),
      role: "67abafc71dc2f1cc28922456",
      name: "escola teste",
      id: "67abafc71dc2f1cc28922455",
    },
  ],
  classes: [],
};
```

## Autores

- [@odutradev](https://github.com/odutradev)

