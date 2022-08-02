import React, { useEffect, lazy, Suspense } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { setAuthToken } from "./store/actionCreators";
import { setToken } from "./utils/auth";

import Header from "./components/header";
// import Home from "./pages/home";
// import Login from "./pages/login";

const Home = lazy(() => import("./pages/home"));
const Login = lazy(() => import("./pages/login"));

// import Favorites from "../favorites";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const authToken = setToken();
    dispatch(setAuthToken(authToken));
  }, [dispatch]);

  return (
    <div className="bg-sky-200 flex flex-col min-h-screen text-dark-blue overflow-hidden justify-start ">
      <Header />
      <main>
        <Router>
          <div className="main-body">
            <Suspense fallback={<div className="text-3xl text-center text-dark-blue">Loading...</div>}>
              <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/" element={<Home />} />
                {/* <Route path="/favorites" element={<Favorites />} /> */}
              </Routes>
            </Suspense>
          </div>
        </Router>
      </main>

      {/* <footer className="justify-end text-center text-dark-blue p-2">
        <p>All rights received &copy;2022 Clef</p>
      </footer> */}
    </div>
  );
}

export default App;
