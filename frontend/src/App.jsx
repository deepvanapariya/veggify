import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Outlet } from "react-router-dom";
import Header from "./component/header/Header";
import Footer from "./pages/home/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="max-w-screen-2xl">
      <Header />
      <div className="min-h-[calc(100vh-136px)]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default App;
