
# 🗞️ NewsApp

📱 **Offline News Reader App (React Native + Redux Toolkit + SQLite)**

A lightweight, offline-first news reader app built in **React Native** using **NewsData.io API**, **Redux Toolkit** with **Redux-Saga**, and **SQLite** for local caching.

Get local, national, and global news categorized by topic, read articles offline, bookmark favorites, and switch languages — all within a minimal and clean UI.

![React Native](https://img.shields.io/badge/Framework-React%20Native-blue?logo=react)
![SQLite](https://img.shields.io/badge/DB-SQLite-green?logo=sqlite)
![Redux Toolkit](https://img.shields.io/badge/State-Redux%20Toolkit-red?logo=redux)
![TypeScript](https://img.shields.io/badge/Language-TypeScript-lightgrey?logo=typescript)

---

## 🚀 Features

- 🌍 Top Headlines & Categories (World, India, State, etc.)
- ⚡ Offline Caching via SQLite
- 🔁 Infinite Scroll & Pagination
- 🔍 Keyword-Based Search
- ⭐ Bookmark & Read Later *(Coming soon...)*
- ⚙️ Settings: Language, Theme Toggle & Clear Cache *(Coming soon...)*
- 📡 Network-aware: Offline-first design
- 📦 Clean Modular Architecture

---

## 🛠 Tech Stack

| Layer           | Technologies                                                   |
|------------------|----------------------------------------------------------------|
| Language         | TypeScript                                                     |
| Framework        | React Native                                                   |
| State Management | Redux Toolkit                                                  |
| Side Effects     | Redux-Saga                                                     |
| Local Storage    | SQLite                                                         |
| Networking       | NewsData.io API                                                |
| Navigation       | React Navigation                                               |
| Connectivity     | @react-native-community/netinfo                                |

---

## 📸 Screenshots

<img width="638" alt="Screenshot 2025-06-27 at 7 13 06 PM" src="https://github.com/user-attachments/assets/0833ee87-3c5e-4c42-8491-bc05c9cc7ba8" />
<img width="419" alt="Screenshot 2025-06-27 at 7 13 48 PM" src="https://github.com/user-attachments/assets/d7dd25ca-8389-458b-8d67-1f383f0897e1" />

---

## 📂 Folder Structure

<img width="526" alt="Screenshot 2025-06-27 at 12 57 59 PM" src="https://github.com/user-attachments/assets/a47e257a-4ecc-4c6c-aa00-7934721a9971" />

---

## 📦 Installation & Setup

<img width="500" alt="Screenshot 2025-06-27 at 12 58 45 PM" src="https://github.com/user-attachments/assets/de1d0cd3-fdd8-4ef8-b56f-ff1067a966be" />

---

## 🔑 API Key Configuration

Create a `.env` file at the root of the project:

```env
NEWS_API_KEY=your_newsdata_api_key
```

Use a `.env` loader like `react-native-dotenv` to access your key securely.

---

## 🧠 Architecture Overview

- 🧩 **Redux Toolkit** for scalable state management
- 🔁 **Redux-Saga** for side effects and async operations
- 💾 **SQLite** for persistent offline article storage
- 📡 **Offline-first strategy** using NetInfo
- 🧼 Modular & clean architecture promoting testability and maintainability

---

## 🤝 Contributing

Contributions are welcome! Please open an issue first to discuss your ideas or bug reports.

---

## 📄 License

This project is licensed under the MIT License.

---

## 🙌 Acknowledgements

- [NewsData.io](https://newsdata.io/) for the free News API
- [React Native Community](https://reactnative.dev/)
- Built with ❤️ to demonstrate a scalable, offline-first mobile architecture in React Native



