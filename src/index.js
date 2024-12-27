import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { pdfjs } from "react-pdf";
import "./assets/styles/index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { config } from "./assets/config";
import ThemedSuspense from "./components/ThemedSuspense";
import { GlobalStateProvider } from "./components/ChatWiget/ContextState";
import { SeparateStateProvider } from "./pages/ChatWiget/ContextState";
import ChatWidget from "./components/ChatWiget";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(

          <GlobalStateProvider>
            <ChatWidget />
          </GlobalStateProvider>
    
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
