#  Starsoft E-commerce

Projeto de e-commerce desenvolvido com **Next.js (App Router)**, utilizando **Supabase** como backend e **Redux Toolkit** para gerenciamento do carrinho de compras.

---

## Link para o projeto no ar:

https://starsoft-nwqu.vercel.app/

## 🚀 Tecnologias

- Next.js (App Router)
- React
- TypeScript
- Supabase
- Redux Toolkit
- Framer Motion
- Tailwind CSS
- React Icons

---

## ✨ Funcionalidades

- Listagem de produtos
- Modal com detalhes do produto
- Carrinho de compras com controle de quantidade
- Animações de UI
- Integração com Supabase via API

---

## como rodar localmente

###  **1. Clonar o Repositório**
```bash
git clone https://github.com/arthur-Gsilva/starsoft.git
cd hous-e
```

###  **2. Configurar o Banco**
Tabela `product`:

```sql
CREATE TABLE product (
	id INT PRIMARY KEY,
	name varchar(40) NOT NULL,
	price INT NOT NULL,
	image varchar(50),
	description varchar(100)
);
```

###  **3. Instalar dependências**

```bash
npm install
```

### **4. Configurar as Variáveis de Ambiente**
#### Crie um arquivo .env em cada pasta (server e client) e adicione as seguintes variáveis:

📦 .env do Backend (server/.env)
```bash
NEXT_PUBLIC_SUPABASE_URL=https://seu-projeto.supabase.co
SUPABASE_SERVICE_ROLE_KEY=sua_service_role_key
```

###  **5. Rodar o projeto**

```bash
npm run dev
```
