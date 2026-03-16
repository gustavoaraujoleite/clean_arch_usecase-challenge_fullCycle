## Testes da entidade Product

Este projeto já está configurado com **TypeScript**, **Jest** e **Sequelize (SQLite em memória)**.  
Os casos de uso da entidade `Product` (Create, Find, List, Update) possuem **testes de unidade** e **testes de integração**.

### 1. Pré-requisitos

- Node.js instalado (versão compatível com o projeto)
- Dependências instaladas:

```bash
npm install
```

### 2. Estrutura dos testes de Product

Os testes da entidade `Product` estão organizados em:

- **Use cases**: `src/usecase/product`
  - Create
    - `create.product.usecase.ts`
    - `create.product.dto.ts`
    - `create.product.unit.spec.ts`
    - `create.product.integration.spec.ts`
  - Find
    - `find.product.usecase.ts`
    - `find.product.dto.ts`
    - `find.product.unit.spec.ts`
    - `find.product.integration.spec.ts`
  - List
    - `list.product.usecase.ts`
    - `list.product.dto.ts`
    - `list.product.unit.spec.ts`
    - `list.product.integration.spec.ts`
  - Update
    - `update.product.usecase.ts`
    - `update.product.dto.ts`
    - `update.product.unit.spec.ts`
    - `update.product.integration.spec.ts`

### 3. Rodando **todos** os testes de Product

Na raiz do projeto (`fc-clean-architecture`), execute:

```bash
npm test -- src/usecase/product
```

Esse comando:
- Roda o TypeScript (`tsc --noEmit`) para checagem de tipos.
- Executa apenas os testes relacionados aos use cases de `Product`.

### 4. Rodando testes de forma **granular**

Você também pode executar testes de um use case específico.

#### 4.1. CreateProduct

```bash
# Unidade
npm test -- src/usecase/product/create/create.product.unit.spec.ts

# Integração
npm test -- src/usecase/product/create/create.product.integration.spec.ts
```

#### 4.2. FindProduct

```bash
# Unidade
npm test -- src/usecase/product/find/find.product.unit.spec.ts

# Integração
npm test -- src/usecase/product/find/find.product.integration.spec.ts
```

#### 4.3. ListProduct

```bash
# Unidade
npm test -- src/usecase/product/list/list.product.unit.spec.ts

# Integração
npm test -- src/usecase/product/list/list.product.integration.spec.ts
```

#### 4.4. UpdateProduct

```bash
# Unidade
npm test -- src/usecase/product/update/update.product.unit.spec.ts

# Integração
npm test -- src/usecase/product/update/update.product.integration.spec.ts
```

### 5. Rodando testes diretamente com Jest (opcional)

Se preferir executar apenas o Jest (sem rodar o `tsc` antes), você pode usar:

```bash
npx jest src/usecase/product
```

Ou para um arquivo específico, por exemplo:

```bash
npx jest src/usecase/product/update/update.product.integration.spec.ts
```

### 6. Modo watch (opcional)

Para rodar os testes de Product em modo **watch** (reexecutando ao salvar arquivos):

```bash
npx jest src/usecase/product --watch
```

Ou apenas um arquivo:

```bash
npx jest src/usecase/product/create/create.product.unit.spec.ts --watch
```

