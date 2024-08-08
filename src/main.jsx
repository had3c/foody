import ReactDOM from "react-dom/client";
import "./style/index.css";
import "./style/reset/reset.css";
import { RouterProvider } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { router } from "./routes/routes.jsx";
import { ProfileProvider } from "./context/ProfileContext.jsx"; 
import "./i18n.js";
import { Provider } from "react-redux";
import store from "./redux/store.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <Provider store={store}>
      <ProfileProvider>
        <RouterProvider router={router} />
      </ProfileProvider>
    </Provider>
  </AuthProvider>
);
