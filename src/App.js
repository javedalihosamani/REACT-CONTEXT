import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import { ToastContainer } from "react-toastify";
import Home from "./components/home/Home";
import Users from "./components/users/Users";
import Pnf from "./components/pnf/Pnf";
import Posts from "./components/posts/Posts";
import Comments from "./components/comments/Comments";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <ToastContainer autoClose={4000} position="top-right" />
      <Routes>
        <Route path={`/`} element={<Home />} />
        <Route path={`/users`} element={<Users />} />
        <Route path={`/posts`} element={<Posts />} />
        <Route path={`/comments`} element={<Comments />} />
        <Route path={`/*`} element={<Pnf />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
