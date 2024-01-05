import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import PostListProvider from "./store/post-list-store.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <PostListProvider>
      <App />
    </PostListProvider>
  </React.StrictMode>
);
