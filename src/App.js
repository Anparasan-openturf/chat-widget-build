import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import routes from "./routes";
import ChatWidget from "./components/ChatWiget";

function App() {
  const location = useLocation();
  console.log(location.pathname.includes("chat"), "loc-path");
  return (
    <>
      {!location.pathname.includes("chat") && <ChatWidget />}
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
