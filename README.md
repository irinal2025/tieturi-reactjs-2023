# ReactJS Course Project – Weather, Counter & Persons Manager

This project was created during a ReactJS programming course and combines multiple features into a single app:
- Current weather display
- Multi-day weather forecast
- A simple counter (Redux)
- A people list table (add/remove functionality)

It demonstrates key concepts in React, component reuse, state management with Redux, and integration with an external API (OpenWeatherMap).

---

## 🛠 Getting Started

1. **Install dependencies**:

```bash
npm install
```

2. **Create a .env file in the project root and insert your OpenWeatherMap API key**:

```
REACT_APP_OPENWEATHER_API_KEY=your_api_key_here
```

3. **Start the development server**:

```bash
npm start
```

Then open http://localhost:3000 in your browser to view the app.

---

## 📦 Technologies Used

- 🔸 React
- 🔸 React Router
- 🔸 Redux & Redux Toolkit
- 🔸 React Bootstrap
- 🔸 OpenWeatherMap API

---

## 📁 Project Structure

```
/src/Components/       → Reusable UI components  
/src/Screens/          → Main views (e.g., CurrentWeatherScreen, PersonTable)  
/src/Store.js          → Redux store configuration  
.env                   → Environment variables (e.g., API keys)
```

---

## ⚠️ Notes

- Do not share your `.env` file or API keys publicly.
- The file `apiKey.js` is ignored via `.gitignore` for security reasons.

---

## 📄 License

This project is for learning purposes and does not include an official license.


---

## ⚙️ Additional Notes

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Other useful scripts (e.g., `npm test`, `npm run build`, and `npm run eject`) are also available.  
For more, see the official [Create React App documentation](https://facebook.github.io/create-react-app/).
