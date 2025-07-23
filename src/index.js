import App from "./App";
import {createRoot} from "react-dom/client";
import './styles.css';
import { Provider } from "react-redux";
import store from "./Store";



const root = createRoot(document.getElementById("root"));
root.render(
    <Provider store={store}>
        <App/>
    </Provider>
);