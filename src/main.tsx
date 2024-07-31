import "./styles/global.css";
import "./styles/reset.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Box } from "./components";
import Layout from "./layout";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter basename="/mpv">
      <Layout>
        <Routes>
          <Route path="/" element={<App />} />
          <Route
            path="*"
            element={
              <Box width="100vw" height="100vh">
                No page associated with this url
              </Box>
            }
          />
        </Routes>
      </Layout>
    </BrowserRouter>
  </React.StrictMode>
);
