# 🧭 SS360 ERP 2.0

**SS360 ERP 2.0** is a modern, business-specific ERP solution built for **Siva Sai Tea Enterprises**.  
Designed with scalability and clarity in mind, this system manages the full tea supply chain — from supplier sourcing and inventory tracking to blending, sales, and analytics.

![Vite + React](https://img.shields.io/badge/Vite-%5E4.0-blueviolet?style=flat-square&logo=vite&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-%5E18.0-green?style=flat-square&logo=node.js&logoColor=white)
![MongoDB](https://img.shields.io/badge/Database-MongoDB-green?style=flat-square&logo=mongodb)
![License](https://img.shields.io/github/license/madhavsmg/ss360-erp-2.0)

---

## 📆 Tech Stack

| Frontend     | Backend           | Database | Tools & Infra          |
| ------------ | ----------------- | -------- | ---------------------- |
| React + Vite | Node.js + Express | MongoDB  | GitHub, VSCode, Git    |
| React Router | REST APIs         | Mongoose | GitHub Actions (CI/CD) |
| Context API  | JWT (future)      |          | dotenv, ESLint         |

---

## 🧩 Features

- ✅ **Customer Management** – Add/update customers with type & delivery preferences
- ✅ **Inventory Tracking** – Raw & blended tea with grades and batch-wise cost
- ✅ **Blending Engine** – Combine tea types into custom blends with profit visibility
- ✅ **Sales Module** – Handle direct/retail sales and track real-time stock
- ✅ **Profit Calculator** – Manual blend cost calculator with selling price tracker
- ✅ **Modular Architecture** – Clean, scalable folder structure with React components

---

## 🗃️ Directory Structure

```
ss360-erp-2.0/
├── public/
├── src/
│   ├── assets/           # Images and brand media
│   ├── components/       # Reusable UI (buttons, tables, cards)
│   ├── modules/          # POS, Inventory, Blending, Sales
│   ├── services/         # API handlers (axios)
│   ├── context/          # Global app state
│   ├── App.jsx
│   └── main.jsx
├── .gitignore
├── package.json
├── vite.config.js
└── README.md
```

---

## 🚀 Getting Started

### 1. Clone the Repo

```bash
git clone https://github.com/madhavsmg/ss360-erp-2.0.git
cd ss360-erp-2.0
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run the App (Dev Mode)

```bash
npm run dev
```

---

## 🛡️ .env Setup

Create a `.env` file in the root (this is ignored by git):

```env
VITE_API_BASE_URL=http://localhost:5000/api
```

---

## 📊 Future Roadmap

- [ ] Admin authentication & login
- [ ] Role-based access control (Sales / Inventory / Manager)
- [ ] Analytics Dashboard
- [ ] MongoDB Atlas Cloud Sync
- [ ] Dockerized deployment
- [ ] Full CI/CD integration with GitHub Actions

---

## 🙏 Credits

Developed with ❤️ by [Madhav Kumar](https://github.com/madhavsmg)  
For Siva Sai Tea Enterprises — established 1996

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).
