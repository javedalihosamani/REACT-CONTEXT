import { BrowserRouter, Routes } from "react-router-dom";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <ToastContainer autoClose={4000} position="top-right" />
      <Routes></Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
