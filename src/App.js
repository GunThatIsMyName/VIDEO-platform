import { BrowserRouter, Route, Routes } from "react-router-dom";

// Components
import Error from "./components/Error";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import MovieList from "./components/MovieList";
import UserPersonData from "./components/UserPersonData";
import UserRepository from "./components/UserRepository";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user/:id" element={<UserPersonData />}>
          <Route path="/user/:id/repos" element={<UserRepository />} />
        </Route>
        <Route path="/movie/:id" element={<MovieList />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
