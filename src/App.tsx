import React from "react";
import Header from "./components/header";

function App() {
  return (
    <div className="bg-blue-300 flex flex-col min-h-screen ">
      <Header />
      <main></main>
      {/* <footer className="justify-self-end text-center text-white p-2">
        <p>All rights received &copy;2022 Clef</p>
      </footer> */}
    </div>
  );
}

export default App;
