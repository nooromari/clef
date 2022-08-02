import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Home from "./pages/home";
// import Home from "./pages/home";
import Login from "./pages/login";
// import Search from "./pages/search";


// import Favorites from "../favorites";
// import Feed from "../feed";
// import Library from "../library";
// import Player from "../player";
// import Trending from "../trending";
// import "./home.css";

function App() {
  return (
    <div className="bg-sky-200 flex flex-col min-h-screen text-dark-blue ">
      <Header />
      <main>
        <Router>
          <div className="main-body">
            {/* <Sidebar /> */}
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/" element={<Home />} />
              {/* <Route path="/feed" element={<Feed />} />
              <Route path="/trending" element={<Trending />} />
              <Route path="/player" element={<Player />} />
              <Route path="/favorites" element={<Favorites />} /> */}
            </Routes>
          </div>
        </Router>
      </main>

      {/* <footer className="justify-self-end text-center text-dark-blue p-2">
        <p>All rights received &copy;2022 Clef</p>
      </footer> */}
    </div>
  );
}

export default App;
