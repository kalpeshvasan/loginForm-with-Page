import { Routes, Route } from "react-router-dom";
import LoginForm from "./components/loginForm";
import Home from "./page/home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
