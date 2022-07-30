import logo from "../assets/clef-logo.png";

const Header = () => {
  return (
    <header className="flex p-5 justify-between align-center border-b-2 border-b-black">
      <div className="flex gap-5">
        <img src={logo} alt="logo" className="rounded-xl w-10" />
        <h1 className="text-black text-3xl font-bold">Clef</h1>
      </div>
      <nav>
        <ul className="flex align-baseline gap-10 justify-center">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">About</a>
          </li>
          <li>
            <a href="/">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
