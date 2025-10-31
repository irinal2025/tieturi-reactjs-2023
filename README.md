# ReactJS Course Project – Weather, Counter & Persons Manager

This is a multi-feature React application built during a ReactJS programming course. The app demonstrates key concepts in React development, such as component reuse, state management with Redux Toolkit, and integration with an external API (OpenWeatherMap).

## ✨ Features

- Current weather display (with OpenWeatherMap API)
- Multi-day weather forecast
- Simple counter using Redux
- Persons table with add/remove functionality

---

## 🛠 Getting Started

1. **Install dependencies**:
Run in the project root:

```bash
npm install
```

2. **Set up environment variables**:
Create a .env file in the project root and add your OpenWeatherMap API key:

```
REACT_APP_OPENWEATHER_API_KEY=your_api_key_here
```

3. **Start the development server**:

```bash
npm start
```

Then open http://localhost:3000 in your browser to view the app.
ℹ️ This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


---

## 📁 Project Structure

```
/src/Components/       → Reusable UI components
/src/Features/         → Redux logic (counter, persons, weather)  
/src/Screens/          → View components (e.g., WeatherScreen, PersonScreen)  
/src/Store.js          → Redux store configuration
/public/               → Static files
.env                   → Environment variables (e.g., API keys)
```

---

## 📦 Technologies Used

- 🔸 React
- 🔸 React Router DOM
- 🔸 Redux & Redux Toolkit
- 🔸 React Bootstrap
- 🔸 Axios
- 🔸 OpenWeatherMap API

---

## ⚠️ Notes

- Do not commit or share your `.env` file or API keys publicly.
- The file `apiKey.js` is ignored via `.gitignore` for security reasons.

---

## 📄 License

This project is for learning purposes and does not include an official license.

---

## 🤝 Contributing

This project was created for learning purposes as part of a ReactJS programming course.  
External contributions are not accepted. However, feel free to explore the code for educational use or inspiration.

---

## ⚙️ Additional Notes

Other useful scripts are available in this project:

- `npm test` - Runs tests in watch mode.
- `npm run build` - Builds the app for production.
- `npm run eject` - Ejects Create React App config (not reversible).

For full details, see the official [Create React App documentation](https://facebook.github.io/create-react-app/).

