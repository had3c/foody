import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./style/index.css";
import "./style/reset/reset.css";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";

import { ProfileProvider } from './context/ProfileContext.jsx';   // edit


import "./i18n.js";
import { Provider } from "react-redux";
import store from "./redux/store.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AuthProvider>
      <Provider store={store}>
      <ProfileProvider>  
          <App />
        </ProfileProvider>
      </Provider>
    </AuthProvider>
  </BrowserRouter>
);