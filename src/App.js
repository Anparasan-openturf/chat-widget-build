import { Navigate, Route, Routes } from "react-router-dom";
import routes from "./routes";
import ChatWidget from "./components/ChatWiget";

function App() {
  return (
    <>
      <ChatWidget />
      <Routes>
        {routes.map((route) => (
          <Route key={route.path} path={route.path} element={route.component} />
        ))}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
}

export default App;
